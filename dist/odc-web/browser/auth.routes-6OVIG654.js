import {
  FeatherComponent,
  FeatherModule,
  MatSnackBar
} from "./chunk-JR6TUT3E.js";
import {
  Page404Component
} from "./chunk-KC5UHK32.js";
import "./chunk-MDA6RONO.js";
import {
  AuthService
} from "./chunk-Y5HKWOK4.js";
import {
  require_sweetalert2_all
} from "./chunk-Z35HYVNV.js";
import {
  GlobalService
} from "./chunk-MSIIP23R.js";
import {
  Router,
  RouterLink
} from "./chunk-M24KWC6L.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  ReactiveFormsModule,
  RequiredValidator,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate
} from "./chunk-E4RPKPFV.js";
import "./chunk-OFRCR7EK.js";
import {
  ChangeDetectorRef,
  Component,
  Inject,
  NgIf,
  PLATFORM_ID,
  isPlatformBrowser,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-FZBB7M2N.js";
import {
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/authentication/signin/signin.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function SigninComponent_ng_container_17_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 28);
    \u0275\u0275text(1, "L'email est requis.");
    \u0275\u0275elementEnd();
  }
}
function SigninComponent_ng_container_17_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 28);
    \u0275\u0275text(1, "Format d'email invalide.");
    \u0275\u0275elementEnd();
  }
}
function SigninComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SigninComponent_ng_container_17_small_1_Template, 2, 0, "small", 27)(2, SigninComponent_ng_container_17_small_2_Template, 2, 0, "small", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.loginForm.get("username")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.loginForm.get("username")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["email"]);
  }
}
function SigninComponent_ng_container_26_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 28);
    \u0275\u0275text(1, "Le mot de passe est requis.");
    \u0275\u0275elementEnd();
  }
}
function SigninComponent_ng_container_26_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 28);
    \u0275\u0275text(1, "Minimum 6 caract\xE8res.");
    \u0275\u0275elementEnd();
  }
}
function SigninComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SigninComponent_ng_container_26_small_1_Template, 2, 0, "small", 27)(2, SigninComponent_ng_container_26_small_2_Template, 2, 0, "small", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.loginForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.loginForm.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
  }
}
function SigninComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var SigninComponent = class _SigninComponent {
  constructor(formBuilder, router, authService, globaleService, platformId, cdRef, toast) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.authService = authService;
    this.globaleService = globaleService;
    this.platformId = platformId;
    this.cdRef = cdRef;
    this.toast = toast;
    this.submitted = false;
    this.isConnected = false;
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.error = "";
    this.hide = true;
    this.showPassword = false;
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      remember: [""]
    });
  }
  // Getter pour accéder facilement aux contrôles du formulaire
  get f() {
    return this.loginForm.controls;
  }
  showError(message) {
    import_sweetalert2.default.fire({
      icon: "error",
      title: '<span class="text-orange-500">Erreur</span>',
      html: `<p class="text-orange-500">${message}</p>`,
      confirmButtonText: "R\xE9essayer",
      customClass: {
        confirmButton: "btn btn-warning"
        // Couleur
      }
    });
  }
  resetForm() {
    this.loginForm.reset();
    this.submitted = false;
    this.username = "";
    this.password = "";
  }
  login() {
    if (!this.f["username"].value || !this.f["password"].value) {
      this.showError("Nom utilisateur || email et mot de passe sont requis.");
      return;
    }
    this.authService.login(this.f["username"].value, this.f["password"].value).subscribe({
      next: (response) => {
        const token = response?.token;
        if (isPlatformBrowser(this.platformId) && token) {
          const currentUserWithRoles = this.authService.getCurrentUserFromStorage();
          localStorage.setItem("currentUser", JSON.stringify(currentUserWithRoles));
          this.authService.currentUserSubject.next(currentUserWithRoles);
          const roles = currentUserWithRoles.roles;
          if (roles?.includes("DIRECTEUR_FONDATION")) {
            this.router.navigateByUrl("/structure/fondation/courriers").then(() => {
              this.cdRef.detectChanges();
            });
          } else if (roles?.includes("DIRECTEUR_RSE")) {
            this.router.navigateByUrl("/structure/rse/courriers").then(() => {
              this.cdRef.detectChanges();
            });
          } else if (roles?.includes("DIRECTEUR_DCI")) {
            this.router.navigateByUrl("/structure/dci/courriers").then(() => {
              this.cdRef.detectChanges();
            });
          } else if (roles?.includes("SUPERADMIN") || roles?.includes("ADMIN") || roles?.includes("DIRECTEUR") || roles?.includes("DIRECTEUR_ODC")) {
            this.router.navigateByUrl("/dashboard/main").then(() => {
              this.cdRef.detectChanges();
            });
          } else if (roles?.includes("PERSONNEL")) {
            this.router.navigateByUrl("/dashboardActivite").then(() => {
              this.cdRef.detectChanges();
            });
          } else {
            this.router.navigateByUrl("/dashboard/main").then(() => {
              this.cdRef.detectChanges();
            });
          }
          const Toast = import_sweetalert2.default.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3e3,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = import_sweetalert2.default.stopTimer;
              toast.onmouseleave = import_sweetalert2.default.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Bienvenu dans votre espace s\xE9curis\xE9 pour la gestion des activit\xE9s"
          });
        } else {
          this.toast.open("Aucun token re\xE7u dans la r\xE9ponse.", "Erreur", { duration: 4e3 });
        }
        this.resetForm();
      },
      error: (error) => {
        import_sweetalert2.default.fire({
          input: "file",
          icon: "error",
          title: `<span class="text-orange-500">Erreur d'authentification</span>`,
          html: '<p class="text-orange-500">identifiant ou le mot de passe fourni ne concorde pas. Veuillez v\xE9rifier exactitude des informations saisies et r\xE9it\xE9rer votre tentative.</p>',
          confirmButtonText: "R\xE9essayer",
          customClass: {
            confirmButton: "bg-orange-500 text-white hover:bg-orange-600"
          }
        });
        this.resetForm();
      }
    });
  }
  onSubmit() {
    this.login();
  }
  static {
    this.\u0275fac = function SigninComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SigninComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MatSnackBar));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SigninComponent, selectors: [["app-signin"]], decls: 39, vars: 7, consts: [[1, "signin-odl"], [1, "signin-odl__bg"], [1, "signin-odl__card-wrapper"], [1, "signin-odl__card"], [1, "signin-odl__header"], ["src", "assets/images/logo9.png", "alt", "ODC", 1, "signin-odl__logo"], [1, "signin-odl__title"], [1, "signin-odl__subtitle"], [1, "signin-odl__form", 3, "ngSubmit", "formGroup"], [1, "signin-odl__field"], ["for", "email"], [1, "signin-odl__input-wrap"], ["name", "mail", 1, "signin-odl__icon"], ["id", "email", "type", "email", "formControlName", "username", "placeholder", "ex: utilisateur@exemple.com", "autocomplete", "email", 1, "signin-odl__input"], [4, "ngIf"], ["for", "password"], ["name", "lock", 1, "signin-odl__icon"], ["id", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", 1, "signin-odl__input", 3, "type"], ["type", "button", "aria-label", "Afficher mot de passe", 1, "signin-odl__eye", 3, "click"], [3, "name"], [1, "signin-odl__options"], [1, "signin-odl__remember"], ["type", "checkbox", "formControlName", "remember"], ["routerLink", "/authentication/forgot", 1, "signin-odl__forgot"], [1, "signin-odl__alert"], ["type", "submit", 1, "signin-odl__btn", 3, "disabled"], ["name", "log-in"], ["class", "signin-odl__error", 4, "ngIf"], [1, "signin-odl__error"]], template: function SigninComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementStart(6, "h1", 6);
        \u0275\u0275text(7, "Connexion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 7);
        \u0275\u0275text(9, "Connectez-vous pour acc\xE9der \xE0 votre espace");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "form", 8);
        \u0275\u0275listener("ngSubmit", function SigninComponent_Template_form_ngSubmit_10_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(11, "div", 9)(12, "label", 10);
        \u0275\u0275text(13, "Adresse email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 11);
        \u0275\u0275element(15, "i-feather", 12)(16, "input", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, SigninComponent_ng_container_17_Template, 3, 2, "ng-container", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 9)(19, "label", 15);
        \u0275\u0275text(20, "Mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 11);
        \u0275\u0275element(22, "i-feather", 16)(23, "input", 17);
        \u0275\u0275elementStart(24, "button", 18);
        \u0275\u0275listener("click", function SigninComponent_Template_button_click_24_listener() {
          return ctx.showPassword = !ctx.showPassword;
        });
        \u0275\u0275element(25, "i-feather", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(26, SigninComponent_ng_container_26_Template, 3, 2, "ng-container", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 20)(28, "label", 21);
        \u0275\u0275element(29, "input", 22);
        \u0275\u0275elementStart(30, "span");
        \u0275\u0275text(31, "Se souvenir de moi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "a", 23);
        \u0275\u0275text(33, "Mot de passe oubli\xE9 ?");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(34, SigninComponent_Conditional_34_Template, 2, 1, "div", 24);
        \u0275\u0275elementStart(35, "button", 25);
        \u0275\u0275element(36, "i-feather", 26);
        \u0275\u0275elementStart(37, "span");
        \u0275\u0275text(38, "Se connecter");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_4_0;
        \u0275\u0275advance(10);
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.loginForm.get("username")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.loginForm.get("username")) == null ? null : tmp_1_0.invalid));
        \u0275\u0275advance(6);
        \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
        \u0275\u0275advance(2);
        \u0275\u0275property("name", ctx.showPassword ? "eye-off" : "eye");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.invalid));
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.error ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loginForm.invalid);
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      CheckboxControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      FeatherModule,
      FeatherComponent,
      RouterLink,
      NgIf
    ], styles: ['\n\n.signin-odl[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  position: relative;\n  background:\n    linear-gradient(\n      to bottom right,\n      #fff 0%,\n      rgba(255, 121, 0, 0.06) 50%,\n      rgba(255, 121, 0, 0.08) 100%);\n}\n.signin-odl__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n.signin-odl__bg[_ngcontent-%COMP%]::before, \n.signin-odl__bg[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 320px;\n  height: 320px;\n  border-radius: 50%;\n  background: rgba(255, 121, 0, 0.08);\n  filter: blur(60px);\n}\n.signin-odl__bg[_ngcontent-%COMP%]::before {\n  top: -120px;\n  right: -120px;\n}\n.signin-odl__bg[_ngcontent-%COMP%]::after {\n  bottom: -120px;\n  left: -120px;\n}\n.signin-odl__card-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  position: relative;\n  z-index: 1;\n}\n.signin-odl__card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: var(--odl-radius, 12px);\n  border: 1px solid var(--odl-border, #E5E5E5);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);\n  padding: 2rem;\n}\n.signin-odl__header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.signin-odl__logo[_ngcontent-%COMP%] {\n  height: 120px;\n  width: auto;\n  max-width: 100%;\n  object-fit: contain;\n  margin-bottom: 0.75rem;\n}\n.signin-odl__brand[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #000;\n  background: #000;\n  color: #fff;\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 6px;\n  margin-bottom: 1rem;\n}\n.signin-odl__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #000;\n  margin: 0 0 0.25rem 0;\n}\n.signin-odl__subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--odl-muted, #525252);\n  margin: 0;\n}\n.signin-odl__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.signin-odl__field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #000;\n  margin-bottom: 0.5rem;\n}\n.signin-odl__input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.signin-odl__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  width: 20px;\n  height: 20px;\n  color: var(--odl-muted, #525252);\n  pointer-events: none;\n}\n.signin-odl__input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  padding: 0 12px 0 40px;\n  border: 1px solid var(--odl-input, #E5E5E5);\n  border-radius: 8px;\n  font-size: 0.9375rem;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.signin-odl__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--odl-primary, #FF7900);\n  box-shadow: 0 0 0 2px rgba(255, 121, 0, 0.2);\n}\n.signin-odl__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--odl-muted, #525252);\n}\n.signin-odl__input-wrap[_ngcontent-%COMP%]   .signin-odl__eye[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  padding: 4px;\n  cursor: pointer;\n  color: var(--odl-muted, #525252);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.signin-odl__input-wrap[_ngcontent-%COMP%]   .signin-odl__eye[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n.signin-odl__input-wrap[_ngcontent-%COMP%]   .signin-odl__eye[_ngcontent-%COMP%]   i-feather[_ngcontent-%COMP%], \n.signin-odl__input-wrap[_ngcontent-%COMP%]   .signin-odl__eye[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.signin-odl__error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8125rem;\n  color: #dc3545;\n  margin-top: 0.25rem;\n}\n.signin-odl__options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.signin-odl__remember[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: var(--odl-foreground, #000);\n  cursor: pointer;\n}\n.signin-odl__remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--odl-primary, #FF7900);\n}\n.signin-odl__forgot[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--odl-primary, #FF7900);\n  text-decoration: none;\n}\n.signin-odl__forgot[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.signin-odl__alert[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #dc3545;\n  background: rgba(220, 53, 69, 0.08);\n  border: 1px solid rgba(220, 53, 69, 0.2);\n  padding: 0.75rem;\n  border-radius: 8px;\n}\n.signin-odl__btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  background: var(--odl-primary, #FF7900);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, opacity 0.2s;\n  box-shadow: 0 2px 8px rgba(255, 121, 0, 0.3);\n}\n.signin-odl__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e56d00;\n}\n.signin-odl__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.signin-odl__btn[_ngcontent-%COMP%]   i-feather[_ngcontent-%COMP%], \n.signin-odl__btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=signin.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SigninComponent, [{
    type: Component,
    args: [{ selector: "app-signin", imports: [
      FormsModule,
      ReactiveFormsModule,
      FeatherModule,
      RouterLink,
      NgIf
    ], template: `<main class="signin-odl">\r
  <div class="signin-odl__bg"></div>\r
  <div class="signin-odl__card-wrapper">\r
    <div class="signin-odl__card">\r
      <div class="signin-odl__header">\r
        <img src="assets/images/logo9.png" alt="ODC" class="signin-odl__logo">\r
        <h1 class="signin-odl__title">Connexion</h1>\r
        <p class="signin-odl__subtitle">Connectez-vous pour acc\xE9der \xE0 votre espace</p>\r
      </div>\r
      <form class="signin-odl__form" [formGroup]="loginForm" (ngSubmit)="onSubmit()">\r
        <div class="signin-odl__field">\r
          <label for="email">Adresse email</label>\r
          <div class="signin-odl__input-wrap">\r
            <i-feather name="mail" class="signin-odl__icon"></i-feather>\r
            <input id="email" type="email" class="signin-odl__input" formControlName="username"\r
                   placeholder="ex: utilisateur@exemple.com" autocomplete="email">\r
          </div>\r
          <ng-container *ngIf="loginForm.get('username')?.touched && loginForm.get('username')?.invalid">\r
            <small class="signin-odl__error" *ngIf="loginForm.get('username')?.errors?.['required']">L'email est requis.</small>\r
            <small class="signin-odl__error" *ngIf="loginForm.get('username')?.errors?.['email']">Format d'email invalide.</small>\r
          </ng-container>\r
        </div>\r
        <div class="signin-odl__field">\r
          <label for="password">Mot de passe</label>\r
          <div class="signin-odl__input-wrap">\r
            <i-feather name="lock" class="signin-odl__icon"></i-feather>\r
            <input id="password" [type]="showPassword ? 'text' : 'password'" class="signin-odl__input" formControlName="password"\r
                   placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" autocomplete="current-password">\r
            <button type="button" class="signin-odl__eye" (click)="showPassword = !showPassword" aria-label="Afficher mot de passe">\r
              <i-feather [name]="showPassword ? 'eye-off' : 'eye'"></i-feather>\r
            </button>\r
          </div>\r
          <ng-container *ngIf="loginForm.get('password')?.touched && loginForm.get('password')?.invalid">\r
            <small class="signin-odl__error" *ngIf="loginForm.get('password')?.errors?.['required']">Le mot de passe est requis.</small>\r
            <small class="signin-odl__error" *ngIf="loginForm.get('password')?.errors?.['minlength']">Minimum 6 caract\xE8res.</small>\r
          </ng-container>\r
        </div>\r
        <div class="signin-odl__options">\r
          <label class="signin-odl__remember">\r
            <input type="checkbox" formControlName="remember">\r
            <span>Se souvenir de moi</span>\r
          </label>\r
          <a routerLink="/authentication/forgot" class="signin-odl__forgot">Mot de passe oubli\xE9 ?</a>\r
        </div>\r
        @if (error) {\r
          <div class="signin-odl__alert">{{ error }}</div>\r
        }\r
        <button type="submit" class="signin-odl__btn" [disabled]="loginForm.invalid">\r
          <i-feather name="log-in"></i-feather>\r
          <span>Se connecter</span>\r
        </button>\r
      </form>\r
    </div>\r
  </div>\r
</main>\r
\r
`, styles: ['/* src/app/authentication/signin/signin.component.scss */\n.signin-odl {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  position: relative;\n  background:\n    linear-gradient(\n      to bottom right,\n      #fff 0%,\n      rgba(255, 121, 0, 0.06) 50%,\n      rgba(255, 121, 0, 0.08) 100%);\n}\n.signin-odl__bg {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n.signin-odl__bg::before,\n.signin-odl__bg::after {\n  content: "";\n  position: absolute;\n  width: 320px;\n  height: 320px;\n  border-radius: 50%;\n  background: rgba(255, 121, 0, 0.08);\n  filter: blur(60px);\n}\n.signin-odl__bg::before {\n  top: -120px;\n  right: -120px;\n}\n.signin-odl__bg::after {\n  bottom: -120px;\n  left: -120px;\n}\n.signin-odl__card-wrapper {\n  width: 100%;\n  max-width: 400px;\n  position: relative;\n  z-index: 1;\n}\n.signin-odl__card {\n  background: #fff;\n  border-radius: var(--odl-radius, 12px);\n  border: 1px solid var(--odl-border, #E5E5E5);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);\n  padding: 2rem;\n}\n.signin-odl__header {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.signin-odl__logo {\n  height: 120px;\n  width: auto;\n  max-width: 100%;\n  object-fit: contain;\n  margin-bottom: 0.75rem;\n}\n.signin-odl__brand {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #000;\n  background: #000;\n  color: #fff;\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 6px;\n  margin-bottom: 1rem;\n}\n.signin-odl__title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #000;\n  margin: 0 0 0.25rem 0;\n}\n.signin-odl__subtitle {\n  font-size: 0.875rem;\n  color: var(--odl-muted, #525252);\n  margin: 0;\n}\n.signin-odl__form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.signin-odl__field label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #000;\n  margin-bottom: 0.5rem;\n}\n.signin-odl__input-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.signin-odl__icon {\n  position: absolute;\n  left: 12px;\n  width: 20px;\n  height: 20px;\n  color: var(--odl-muted, #525252);\n  pointer-events: none;\n}\n.signin-odl__input {\n  width: 100%;\n  height: 44px;\n  padding: 0 12px 0 40px;\n  border: 1px solid var(--odl-input, #E5E5E5);\n  border-radius: 8px;\n  font-size: 0.9375rem;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.signin-odl__input:focus {\n  outline: none;\n  border-color: var(--odl-primary, #FF7900);\n  box-shadow: 0 0 0 2px rgba(255, 121, 0, 0.2);\n}\n.signin-odl__input::placeholder {\n  color: var(--odl-muted, #525252);\n}\n.signin-odl__input-wrap .signin-odl__eye {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  padding: 4px;\n  cursor: pointer;\n  color: var(--odl-muted, #525252);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.signin-odl__input-wrap .signin-odl__eye:hover {\n  color: #000;\n}\n.signin-odl__input-wrap .signin-odl__eye i-feather,\n.signin-odl__input-wrap .signin-odl__eye svg {\n  width: 18px;\n  height: 18px;\n}\n.signin-odl__error {\n  display: block;\n  font-size: 0.8125rem;\n  color: #dc3545;\n  margin-top: 0.25rem;\n}\n.signin-odl__options {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.signin-odl__remember {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: var(--odl-foreground, #000);\n  cursor: pointer;\n}\n.signin-odl__remember input {\n  accent-color: var(--odl-primary, #FF7900);\n}\n.signin-odl__forgot {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--odl-primary, #FF7900);\n  text-decoration: none;\n}\n.signin-odl__forgot:hover {\n  text-decoration: underline;\n}\n.signin-odl__alert {\n  font-size: 0.875rem;\n  color: #dc3545;\n  background: rgba(220, 53, 69, 0.08);\n  border: 1px solid rgba(220, 53, 69, 0.2);\n  padding: 0.75rem;\n  border-radius: 8px;\n}\n.signin-odl__btn {\n  width: 100%;\n  height: 44px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  background: var(--odl-primary, #FF7900);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, opacity 0.2s;\n  box-shadow: 0 2px 8px rgba(255, 121, 0, 0.3);\n}\n.signin-odl__btn:hover:not(:disabled) {\n  background: #e56d00;\n}\n.signin-odl__btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.signin-odl__btn i-feather,\n.signin-odl__btn svg {\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=signin.component.css.map */\n'] }]
  }], () => [{ type: UntypedFormBuilder }, { type: Router }, { type: AuthService }, { type: GlobalService }, { type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: ChangeDetectorRef }, { type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SigninComponent, { className: "SigninComponent", filePath: "src/app/authentication/signin/signin.component.ts", lineNumber: 23 });
})();

// src/app/authentication/signup/signup.component.ts
function SignupComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var SignupComponent = class _SignupComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.submitted = false;
    this.error = "";
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fname: ["", Validators.required],
      lname: ["", Validators.required],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      password: ["", Validators.required],
      termcondition: [false, [Validators.requiredTrue]]
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.error = "";
    if (this.registerForm.invalid) {
      this.error = "Invalid data !";
      return;
    } else {
    }
  }
  static {
    this.\u0275fac = function SignupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignupComponent)(\u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], decls: 81, vars: 3, consts: [[1, "d-flex", "align-items-center", "min-vh-100", "py-3", "py-md-0"], [1, "container", "register-container"], [1, "card", "register-card"], [1, "row", "no-gutters"], [1, "col-md-6"], ["src", "assets/images/register.jpg", "alt", "register", 1, "register-card-img"], [1, "register-body"], [1, "text-center"], [1, "brand-wrapper"], ["src", "assets/images/logo.png", "alt", "logo", 1, "logo"], [1, "logo-name"], [1, "login-form", "mt-4", 3, "ngSubmit", "formGroup"], [1, "row"], [1, "form-group", "position-relative"], [1, "text-danger"], ["name", "user", 1, "login-icons"], ["type", "text", "formControlName", "fname", "placeholder", "First Name", "required", "", 1, "form-control", "psl-5"], ["name", "user-check", 1, "login-icons"], ["type", "text", "formControlName", "lname", "placeholder", "Last Name", "required", "", 1, "form-control", "psl-5"], [1, "col-md-12"], ["name", "mail", 1, "login-icons"], ["type", "email", "formControlName", "email", "placeholder", "Email", "required", "", 1, "form-control", "psl-5"], ["name", "key", 1, "login-icons"], ["type", "password", "formControlName", "password", "placeholder", "Password", "required", "", 1, "form-control", "psl-5"], [1, "form-group"], [1, "form-check"], ["type", "checkbox", "id", "customCheck1", "formControlName", "termcondition", 1, "form-check-input"], ["for", "customCheck1", 1, "form-check-label"], ["href", "javascript:void(0)", 1, "col-blue"], [1, "alert", "alert-danger", "mb-3", "msl-3"], [1, "btn", "btn-primary", "auth-form-btn", 3, "disabled"], [1, "col-lg-12", "mt-4", "text-center"], [1, "list-unstyled", "social-icon", "mb-0", "mt-3"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea-social", "sm-icon"], ["name", "github", 1, "fea-social", "sm-icon"], ["name", "twitter", 1, "fea-social", "sm-icon"], ["name", "gitlab", 1, "fea-social", "sm-icon"], [1, "mx-auto"], [1, "mb-0", "mt-3"], [1, "text-dark", "msr-2"], ["routerLink", "/authentication/signin", 1, "text-dark", "fw-bold"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 6)(8, "div", 7)(9, "div", 8);
        \u0275\u0275element(10, "img", 9);
        \u0275\u0275elementStart(11, "span", 10);
        \u0275\u0275text(12, "Oreva");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "form", 11);
        \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_13_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(14, "div", 12)(15, "div", 4)(16, "div", 13)(17, "label");
        \u0275\u0275text(18, "First name ");
        \u0275\u0275elementStart(19, "span", 14);
        \u0275\u0275text(20, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(21, "i-feather", 15)(22, "input", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 4)(24, "div", 13)(25, "label");
        \u0275\u0275text(26, "Last name ");
        \u0275\u0275elementStart(27, "span", 14);
        \u0275\u0275text(28, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(29, "i-feather", 17)(30, "input", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 19)(32, "div", 13)(33, "label");
        \u0275\u0275text(34, "Your Email ");
        \u0275\u0275elementStart(35, "span", 14);
        \u0275\u0275text(36, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(37, "i-feather", 20)(38, "input", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 19)(40, "div", 13)(41, "label");
        \u0275\u0275text(42, "Password ");
        \u0275\u0275elementStart(43, "span", 14);
        \u0275\u0275text(44, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(45, "i-feather", 22)(46, "input", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 19)(48, "div", 24)(49, "div", 25);
        \u0275\u0275element(50, "input", 26);
        \u0275\u0275elementStart(51, "label", 27);
        \u0275\u0275text(52, " I Accept ");
        \u0275\u0275elementStart(53, "a", 28);
        \u0275\u0275text(54, "Terms And Condition");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(55, SignupComponent_Conditional_55_Template, 2, 1, "div", 29);
        \u0275\u0275elementStart(56, "div", 19)(57, "button", 30);
        \u0275\u0275text(58, "Register");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 31)(60, "h6");
        \u0275\u0275text(61, "Or Signup With");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "ul", 32)(63, "li", 33)(64, "a", 34);
        \u0275\u0275element(65, "i-feather", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "li", 33)(67, "a", 34);
        \u0275\u0275element(68, "i-feather", 36);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "li", 33)(70, "a", 34);
        \u0275\u0275element(71, "i-feather", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "li", 33)(73, "a", 34);
        \u0275\u0275element(74, "i-feather", 38);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(75, "div", 39)(76, "p", 40)(77, "small", 41);
        \u0275\u0275text(78, "Already have an account ?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "a", 42);
        \u0275\u0275text(80, "Sign in");
        \u0275\u0275elementEnd()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("formGroup", ctx.registerForm);
        \u0275\u0275advance(42);
        \u0275\u0275conditional(ctx.error ? 55 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.registerForm.invalid);
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, FeatherModule, FeatherComponent, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignupComponent, [{
    type: Component,
    args: [{ selector: "app-signup", imports: [
      FormsModule,
      ReactiveFormsModule,
      FeatherModule,
      RouterLink
    ], template: '<main class="d-flex align-items-center min-vh-100 py-3 py-md-0">\r\n  <div class="container register-container">\r\n    <div class="card register-card">\r\n      <div class="row no-gutters">\r\n        <div class="col-md-6">\r\n          <img src="assets/images/register.jpg" alt="register" class="register-card-img">\r\n          </div>\r\n          <div class="col-md-6">\r\n            <div class="register-body">\r\n              <div class="text-center">\r\n                <div class="brand-wrapper">\r\n                  <img src="assets/images/logo.png" alt="logo" class="logo"><span class="logo-name">Oreva</span>\r\n                </div>\r\n              </div>\r\n              <form class="login-form mt-4" [formGroup]="registerForm" (ngSubmit)="onSubmit()">\r\n                <div class="row">\r\n                  <div class="col-md-6">\r\n                    <div class="form-group position-relative">\r\n                      <label>First name <span class="text-danger">*</span></label>\r\n                      <i-feather name="user" class="login-icons"></i-feather>\r\n                      <input type="text" class="form-control psl-5" formControlName="fname" placeholder="First Name"\r\n                        required>\r\n                      </div>\r\n                    </div>\r\n                    <div class="col-md-6">\r\n                      <div class="form-group position-relative">\r\n                        <label>Last name <span class="text-danger">*</span></label>\r\n                        <i-feather name="user-check" class="login-icons"></i-feather>\r\n                        <input type="text" class="form-control psl-5" formControlName="lname" placeholder="Last Name"\r\n                          required>\r\n                        </div>\r\n                      </div>\r\n                      <div class="col-md-12">\r\n                        <div class="form-group position-relative">\r\n                          <label>Your Email <span class="text-danger">*</span></label>\r\n                          <i-feather name="mail" class="login-icons"></i-feather>\r\n                          <input type="email" class="form-control psl-5" formControlName="email" placeholder="Email" required>\r\n                          </div>\r\n                        </div>\r\n                        <div class="col-md-12">\r\n                          <div class="form-group position-relative">\r\n                            <label>Password <span class="text-danger">*</span></label>\r\n                            <i-feather name="key" class="login-icons"></i-feather>\r\n                            <input type="password" class="form-control psl-5" formControlName="password" placeholder="Password"\r\n                              required>\r\n                            </div>\r\n                          </div>\r\n                          <div class="col-md-12">\r\n                            <div class="form-group">\r\n                              <div class="form-check">\r\n                                <input class="form-check-input" type="checkbox" id="customCheck1" formControlName="termcondition">\r\n                                  <label class="form-check-label" for="customCheck1">\r\n                                  I Accept <a href="javascript:void(0)" class="col-blue">Terms And Condition</a>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          @if (error) {\r\n                            <div class="alert alert-danger mb-3 msl-3">{{error}}</div>\r\n                          }\r\n                          <div class="col-md-12">\r\n                            <button class="btn btn-primary auth-form-btn" [disabled]="registerForm.invalid">Register</button>\r\n                          </div>\r\n                          <div class="col-lg-12 mt-4 text-center">\r\n                            <h6>Or Signup With</h6>\r\n                            <ul class="list-unstyled social-icon mb-0 mt-3">\r\n                              <li class="list-inline-item"><a href="javascript:void(0)" class="rounded">\r\n                                <i-feather name="facebook" class="fea-social sm-icon"></i-feather>\r\n                              </a></li>\r\n                              <li class="list-inline-item"><a href="javascript:void(0)" class="rounded">\r\n                                <i-feather name="github" class="fea-social sm-icon"></i-feather>\r\n                              </a></li>\r\n                              <li class="list-inline-item"><a href="javascript:void(0)" class="rounded">\r\n                                <i-feather name="twitter" class="fea-social sm-icon"></i-feather>\r\n                              </a></li>\r\n                              <li class="list-inline-item"><a href="javascript:void(0)" class="rounded">\r\n                                <i-feather name="gitlab" class="fea-social sm-icon"></i-feather>\r\n                              </a></li>\r\n                            </ul>\r\n                          </div>\r\n                          <div class="mx-auto">\r\n                            <p class="mb-0 mt-3"><small class="text-dark msr-2">Already have an account ?</small> <a\r\n                          routerLink="/authentication/signin" class="text-dark fw-bold">Sign in</a></p>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </main>\r\n        ' }]
  }], () => [{ type: UntypedFormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/authentication/signup/signup.component.ts", lineNumber: 16 });
})();

// src/app/authentication/page500/page500.component.ts
var Page500Component = class _Page500Component {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function Page500Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Page500Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Page500Component, selectors: [["app-page500"]], decls: 22, vars: 0, consts: [[1, "d-flex", "align-items-center", "min-vh-100", "py-3", "py-md-0"], [1, "container"], [1, "page-error"], [1, "page-inner"], [1, "page-description"], [1, "page-search"], [1, "form-group", "floating-addon", "floating-addon-not-append"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "input-group-append"], [1, "btn", "btn-primary", "btn-lg"], [1, "mt-3"], ["routerLink", "/authentication/signin"]], template: function Page500Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        \u0275\u0275text(5, "500");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275text(7, " Whoopps, something went wrong. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5)(9, "form")(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9);
        \u0275\u0275element(14, "i", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(15, "input", 11);
        \u0275\u0275elementStart(16, "div", 12)(17, "button", 13);
        \u0275\u0275text(18, " Search ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(19, "div", 14)(20, "a", 15);
        \u0275\u0275text(21, "Back to Home");
        \u0275\u0275elementEnd()()()()()()();
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Page500Component, [{
    type: Component,
    args: [{ selector: "app-page500", imports: [FormsModule, RouterLink], template: '<main class="d-flex align-items-center min-vh-100 py-3 py-md-0">\r\n  <div class="container">\r\n    <div class="page-error">\r\n      <div class="page-inner">\r\n        <h1>500</h1>\r\n        <div class="page-description">\r\n          Whoopps, something went wrong.\r\n        </div>\r\n        <div class="page-search">\r\n          <form>\r\n            <div class="form-group floating-addon floating-addon-not-append">\r\n              <div class="input-group">\r\n                <div class="input-group-prepend">\r\n                  <div class="input-group-text">\r\n                    <i class="fas fa-search"></i>\r\n                  </div>\r\n                </div>\r\n                <input type="text" class="form-control" placeholder="Search">\r\n                <div class="input-group-append">\r\n                  <button class="btn btn-primary btn-lg">\r\n                    Search\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <div class="mt-3">\r\n            <a routerLink="/authentication/signin">Back to Home</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Page500Component, { className: "Page500Component", filePath: "src/app/authentication/page500/page500.component.ts", lineNumber: 11 });
})();

// src/app/authentication/forgot/forgot.component.ts
var ForgotComponent = class _ForgotComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function ForgotComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ForgotComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotComponent, selectors: [["app-forgot"]], decls: 20, vars: 0, consts: [[1, "d-flex", "align-items-center", "min-vh-100", "py-3", "py-md-0"], [1, "container"], [1, "row"], [1, "auth-card"], [1, "col-12"], [1, "card", "card-primary"], [1, "card-header"], [1, "card-body"], [1, "text-muted"], ["method", "POST"], [1, "form-group"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "tabindex", "1", "required", "", "autofocus", "", 1, "form-control"], ["type", "submit", "tabindex", "4", 1, "btn", "btn-primary", "btn-lg", "btn-block"]], template: function ForgotComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h4");
        \u0275\u0275text(8, "Forgot Password");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7)(10, "p", 8);
        \u0275\u0275text(11, "We will send a link to reset your password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "form", 9)(13, "div", 10)(14, "label", 11);
        \u0275\u0275text(15, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "input", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 10)(18, "button", 13);
        \u0275\u0275text(19, " Forgot Password ");
        \u0275\u0275elementEnd()()()()()()()()()();
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotComponent, [{
    type: Component,
    args: [{ selector: "app-forgot", imports: [FormsModule], template: '<main class="d-flex align-items-center min-vh-100 py-3 py-md-0">\r\n  <div class="container">\r\n    <div class="row">\r\n      <div class="auth-card">\r\n        <div class="col-12">\r\n          <div class="card card-primary">\r\n            <div class="card-header">\r\n              <h4>Forgot Password</h4>\r\n            </div>\r\n            <div class="card-body">\r\n              <p class="text-muted">We will send a link to reset your password</p>\r\n              <form method="POST">\r\n                <div class="form-group">\r\n                  <label for="email">Email</label>\r\n                  <input id="email" type="email" class="form-control" name="email" tabindex="1" required autofocus>\r\n                </div>\r\n                <div class="form-group">\r\n                  <button type="submit" class="btn btn-primary btn-lg btn-block" tabindex="4">\r\n                    Forgot Password\r\n                  </button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotComponent, { className: "ForgotComponent", filePath: "src/app/authentication/forgot/forgot.component.ts", lineNumber: 10 });
})();

// src/app/authentication/reset/reset.component.ts
var ResetComponent = class _ResetComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function ResetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResetComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetComponent, selectors: [["app-reset"]], decls: 31, vars: 0, consts: [[1, "d-flex", "align-items-center", "min-vh-100", "py-3", "py-md-0"], [1, "container"], [1, "auth-card"], [1, "row"], [1, "col-12"], [1, "card", "card-primary"], [1, "card-header"], [1, "card-body"], [1, "text-muted"], ["method", "POST"], [1, "form-group"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "tabindex", "1", "required", "", "autofocus", "", 1, "form-control"], ["for", "password"], ["id", "password", "type", "password", "data-indicator", "pwindicator", "name", "password", "tabindex", "2", "required", "", 1, "form-control", "pwstrength"], ["id", "pwindicator", 1, "pwindicator"], [1, "bar"], [1, "label"], ["for", "password-confirm"], ["id", "password-confirm", "type", "password", "name", "confirm-password", "tabindex", "2", "required", "", 1, "form-control"], ["type", "submit", "tabindex", "4", 1, "btn", "btn-primary", "btn-lg", "btn-block"]], template: function ResetComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h4");
        \u0275\u0275text(8, "Reset Password");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7)(10, "p", 8);
        \u0275\u0275text(11, "Enter Your New Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "form", 9)(13, "div", 10)(14, "label", 11);
        \u0275\u0275text(15, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "input", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 10)(18, "label", 13);
        \u0275\u0275text(19, "New Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 14);
        \u0275\u0275elementStart(21, "div", 15);
        \u0275\u0275element(22, "div", 16)(23, "div", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 10)(25, "label", 18);
        \u0275\u0275text(26, "Confirm Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 10)(29, "button", 20);
        \u0275\u0275text(30, " Reset Password ");
        \u0275\u0275elementEnd()()()()()()()()()();
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetComponent, [{
    type: Component,
    args: [{ selector: "app-reset", imports: [FormsModule], template: '<main class="d-flex align-items-center min-vh-100 py-3 py-md-0">\r\n  <div class="container">\r\n    <div class="auth-card">\r\n      <div class="row">\r\n        <div class="col-12">\r\n          <div class="card card-primary">\r\n            <div class="card-header">\r\n              <h4>Reset Password</h4>\r\n            </div>\r\n            <div class="card-body">\r\n              <p class="text-muted">Enter Your New Password</p>\r\n              <form method="POST">\r\n                <div class="form-group">\r\n                  <label for="email">Email</label>\r\n                  <input id="email" type="email" class="form-control" name="email" tabindex="1" required autofocus>\r\n                </div>\r\n                <div class="form-group">\r\n                  <label for="password">New Password</label>\r\n                  <input id="password" type="password" class="form-control pwstrength" data-indicator="pwindicator"\r\n                    name="password" tabindex="2" required>\r\n                  <div id="pwindicator" class="pwindicator">\r\n                    <div class="bar"></div>\r\n                    <div class="label"></div>\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <label for="password-confirm">Confirm Password</label>\r\n                  <input id="password-confirm" type="password" class="form-control" name="confirm-password" tabindex="2"\r\n                    required>\r\n                </div>\r\n                <div class="form-group">\r\n                  <button type="submit" class="btn btn-primary btn-lg btn-block" tabindex="4">\r\n                    Reset Password\r\n                  </button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetComponent, { className: "ResetComponent", filePath: "src/app/authentication/reset/reset.component.ts", lineNumber: 10 });
})();

// src/app/authentication/auth.routes.ts
var AUTH_ROUTE = [
  {
    path: "",
    redirectTo: "signin",
    pathMatch: "full"
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "forgot",
    component: ForgotComponent
  },
  {
    path: "reset",
    component: ResetComponent
  },
  {
    path: "page404",
    component: Page404Component
  },
  {
    path: "page500",
    component: Page500Component
  }
];
export {
  AUTH_ROUTE
};
//# sourceMappingURL=auth.routes-6OVIG654.js.map
