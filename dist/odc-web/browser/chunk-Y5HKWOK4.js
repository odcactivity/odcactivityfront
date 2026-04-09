import {
  Router
} from "./chunk-M24KWC6L.js";
import {
  BehaviorSubject,
  HttpClient,
  Inject,
  Injectable,
  PLATFORM_ID,
  catchError,
  environment,
  map,
  of,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-FZBB7M2N.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/core/utils/app-roles.ts
function canonicalizeAppRoles(roles) {
  const roleArray = Array.isArray(roles) ? roles : typeof roles === "string" ? [roles] : [];
  const normalized = roleArray.map((r) => {
    let x = String(r).trim().toUpperCase().replace(/\s+/g, "_");
    if (x.startsWith("ROLE_")) {
      x = x.slice(5);
    }
    return x;
  }).filter(Boolean);
  const set = new Set(normalized);
  if (set.has("ADMIN") && !set.has("SUPERADMIN")) {
    set.add("SUPERADMIN");
  }
  if (set.has("SUPERADMIN") && !set.has("ADMIN")) {
    set.add("ADMIN");
  }
  return [...set];
}
function rolesFromJwtPayload(payload) {
  if (!payload) {
    return [];
  }
  const r = payload["role"];
  if (r != null) {
    if (typeof r === "object" && r !== null && !Array.isArray(r)) {
      const o = r;
      if (typeof o["nom"] === "string") {
        return canonicalizeAppRoles([o["nom"]]);
      }
    }
    if (Array.isArray(r)) {
      return canonicalizeAppRoles(r);
    }
    return canonicalizeAppRoles([String(r)]);
  }
  const auth = payload["authorities"];
  if (Array.isArray(auth)) {
    const names = auth.map((a) => {
      if (typeof a === "string") {
        return a.replace(/^ROLE_/i, "");
      }
      if (a && typeof a === "object" && "authority" in a) {
        return String(a.authority || "").replace(/^ROLE_/i, "");
      }
      return String(a);
    });
    return canonicalizeAppRoles(names);
  }
  return [];
}

// node_modules/jwt-decode/build/esm/index.js
var InvalidTokenError = class extends Error {
};
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
    let code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = "0" + code;
    }
    return "%" + code;
  }));
}
function base64UrlDecode(str) {
  let output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
}
function jwtDecode(token, options) {
  if (typeof token !== "string") {
    throw new InvalidTokenError("Invalid token specified: must be a string");
  }
  options || (options = {});
  const pos = options.header === true ? 0 : 1;
  const part = token.split(".")[pos];
  if (typeof part !== "string") {
    throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
  }
  let decoded;
  try {
    decoded = base64UrlDecode(part);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
  }
  try {
    return JSON.parse(decoded);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
  }
}

// src/app/core/service/auth.service.ts
var AuthService = class _AuthService {
  constructor(http, router, platformId) {
    this.http = http;
    this.router = router;
    this.platformId = platformId;
    this.BASE_URL = environment.apiUrl;
    this.currentUserSubject = new BehaviorSubject(this.getCurrentUserFromStorage());
    this.currentUser = this.currentUserSubject.asObservable();
  }
  getDecodedToken(token) {
    return jwtDecode(token);
  }
  // public get currentUserValue(): User & { roles: string[] } {
  //   return this.currentUserSubject.value;
  // }
  get currentUserValue() {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : {};
  }
  getCurrentUserFromStorage() {
    if (this.isBrowser()) {
      const storedUserString = localStorage.getItem("currentUser");
      const rolesString = localStorage.getItem("roles");
      try {
        const utilisateur = storedUserString ? JSON.parse(storedUserString) : null;
        let roles = [];
        if (rolesString) {
          try {
            roles = JSON.parse(rolesString);
          } catch {
            roles = [];
          }
        }
        if ((!roles || roles.length === 0) && utilisateur?.roles?.length) {
          roles = utilisateur.roles;
        }
        roles = canonicalizeAppRoles(roles);
        const bearer = utilisateur ? utilisateur.bearer : void 0;
        if (!roles.length && bearer) {
          try {
            const payload = JSON.parse(atob(bearer.split(".")[1]));
            roles = rolesFromJwtPayload(payload);
          } catch {
          }
        }
        return utilisateur ? __spreadProps(__spreadValues({}, utilisateur), {
          roles,
          nom: utilisateur.nom,
          prenom: utilisateur.prenom
        }) : {};
      } catch (error) {
        console.error("Erreur lors de la r\xE9cup\xE9ration de l'utilisateur depuis localStorage", error);
      }
    }
    return {};
  }
  login(username, password) {
    return this.http.post(`${this.BASE_URL}/auth/login`, { username, password }).pipe(map((response) => {
      if (response && response.token) {
        const decoded = this.decodeJwt(response.token);
        if (!decoded) {
          return response;
        }
        localStorage.setItem("bearerid", String(decoded.id));
        const user = {
          id: decoded.id,
          prenom: decoded.prenom,
          nom: decoded.nom,
          email: decoded.sub
        };
        const roles = rolesFromJwtPayload(decoded);
        const currentUserWithRoles = __spreadProps(__spreadValues({}, user), { bearer: response.token, roles });
        localStorage.setItem("currentUser", JSON.stringify(currentUserWithRoles));
        localStorage.setItem("roles", JSON.stringify(roles));
        this.currentUserSubject.next(currentUserWithRoles);
      }
      return response;
    }), catchError(this.handleError));
  }
  decodeJwt(token) {
    try {
      const payload = token.split(".")[1];
      const decodedPayload = atob(payload);
      return JSON.parse(decodedPayload);
    } catch (error) {
      console.error("Erreur lors du d\xE9codage du JWT", error);
      return null;
    }
  }
  getUserRoles() {
    return this.currentUserValue.roles || [];
  }
  isBrowser() {
    return typeof window !== "undefined";
  }
  handleError(error) {
    let errorMessage = "An unknown error occurred!";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}
Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  error(message) {
    return throwError(message);
  }
  isTokenExpired(token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const expirationDate = payload.exp * 1e3;
      return Date.now() > expirationDate;
    } catch (error) {
      return true;
    }
  }
  /**
   * Déconnecte l'utilisateur
   */
  logout() {
    if (this.isBrowser()) {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("roles");
    }
    this.currentUserSubject.next({});
    return of({ success: true });
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router), \u0275\u0275inject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Router }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();

export {
  canonicalizeAppRoles,
  rolesFromJwtPayload,
  AuthService
};
//# sourceMappingURL=chunk-Y5HKWOK4.js.map
