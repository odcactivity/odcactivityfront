import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-FZBB7M2N.js";

// src/environments/environment.development.ts
var environment = {
  production: false,
  //uploadUrl: 'http://localhost:8089',
  //apiUrl: 'http://localhost:8089',
  apiUrl: "http://activiteodc-env.eba-qpcww8sx.us-east-1.elasticbeanstalk.com",
  uploadUrl: "http://activiteodc-env.eba-qpcww8sx.us-east-1.elasticbeanstalk.com"
};

// src/app/core/service/supportactivity.service.ts
var SupportactivityService = class _SupportactivityService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.apiUrl;
  }
  download(id) {
    return this.http.get(`${this.baseUrl}/api/supports/doawload/${id}`, {
      responseType: "blob",
      observe: "response"
    });
  }
  downloadCourrierFile(id) {
    return this.http.get(`${this.baseUrl}/api/courriers/${id}/ouvrir`, {
      responseType: "blob",
      observe: "response"
    });
  }
  imputerCourrier(id, body) {
    return this.http.put(`${this.baseUrl}/api/courriers/${id}/imputer`, body);
  }
  static {
    this.\u0275fac = function SupportactivityService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SupportactivityService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SupportactivityService, factory: _SupportactivityService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupportactivityService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  SupportactivityService
};
//# sourceMappingURL=chunk-JRCUF3LI.js.map
