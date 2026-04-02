import {
  AuthService
} from "./chunk-U5TEKHL2.js";
import {
  require_sweetalert2_all
} from "./chunk-Z35HYVNV.js";
import {
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet
} from "./chunk-YHX3XJBE.js";
import {
  NgxDatatableModule
} from "./chunk-ANWRCOCX.js";
import {
  GlobalService
} from "./chunk-WEK6BSLY.js";
import {
  Router,
  RouterLink
} from "./chunk-ODGAOHOC.js";
import {
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  NgTemplateOutlet,
  ReactiveFormsModule,
  Validators,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EQOE5FII.js";
import {
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/profile/profile.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function ProfileComponent_img_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 33);
  }
}
function ProfileComponent_img_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 34);
  }
}
function ProfileComponent_ng_template_48_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ProfileComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProfileComponent_ng_template_48_ng_container_0_Template, 1, 0, "ng-container", 35);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const profilTemplate_r2 = \u0275\u0275reference(52);
    \u0275\u0275property("ngTemplateOutlet", profilTemplate_r2);
  }
}
function ProfileComponent_ng_template_51_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1, " Veuillez renseigner le pr\xE9nom. ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_template_51_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1, " Veuillez renseigner le nom. ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_template_51_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1, " Email invalide. ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_template_51_div_37_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 56);
    \u0275\u0275text(1, " Minimum 6 caract\xE8res. ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_template_51_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ProfileComponent_ng_template_51_div_37_small_1_Template, 2, 0, "small", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r3.profilForm.get("newpassword")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["minlength"]);
  }
}
function ProfileComponent_ng_template_51_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1, " Les mots de passe ne correspondent pas. ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "h4");
    \u0275\u0275text(2, "Modifier le Profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "form", 36);
    \u0275\u0275listener("ngSubmit", function ProfileComponent_ng_template_51_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onUpdateProfil());
    });
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 37)(6, "div", 38)(7, "label");
    \u0275\u0275text(8, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 39);
    \u0275\u0275template(10, ProfileComponent_ng_template_51_div_10_Template, 2, 0, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 38)(12, "label");
    \u0275\u0275text(13, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 41);
    \u0275\u0275template(15, ProfileComponent_ng_template_51_div_15_Template, 2, 0, "div", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 37)(17, "div", 42)(18, "label");
    \u0275\u0275text(19, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 43);
    \u0275\u0275template(21, ProfileComponent_ng_template_51_div_21_Template, 2, 0, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 44)(23, "label");
    \u0275\u0275text(24, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "h5", 46);
    \u0275\u0275text(27, "Modifier le mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 37)(29, "div", 47)(30, "label");
    \u0275\u0275text(31, "Ancien mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 47)(34, "label");
    \u0275\u0275text(35, "Nouveau mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, ProfileComponent_ng_template_51_div_37_Template, 2, 1, "div", 50);
    \u0275\u0275elementStart(38, "div", 47)(39, "label");
    \u0275\u0275text(40, "Confirmer mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 51);
    \u0275\u0275template(42, ProfileComponent_ng_template_51_div_42_Template, 2, 0, "div", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 52)(44, "button", 53);
    \u0275\u0275text(45, " Enregistrer ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r3.profilForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r3.profilForm.get("prenom")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r3.profilForm.get("prenom")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r3.profilForm.get("nom")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r3.profilForm.get("nom")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r3.profilForm.get("email")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r3.profilForm.get("email")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r3.profilForm.get("newpassword")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx_r3.profilForm.get("newpassword")) == null ? null : tmp_7_0.invalid));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.passwordsDontMatch);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.profilForm.invalid || ctx_r3.passwordsDontMatch);
  }
}
var ProfileComponent = class _ProfileComponent {
  constructor(authService, fb, globalService, router) {
    this.authService = authService;
    this.fb = fb;
    this.globalService = globalService;
    this.router = router;
    this.id = 0;
    this.nom = "Utilisateur";
    this.prenom = "Utilisateur";
    this.genre = "Utilisateur";
    this.email = "Utilisateur";
    this.phone = "Utilisateur";
    this.etat = true;
    this.role = "Personnel";
    this.password = "";
    this.newpassword = "";
    this.passwordsDontMatch = false;
    this.useRole = this.authService.getCurrentUserFromStorage().roles;
    console.log("ROLE : ", this.useRole);
  }
  ngOnInit() {
    const userString = localStorage.getItem("currentUser");
    if (userString) {
      const user = JSON.parse(userString);
      const token = user.bearer;
      if (token) {
        const decoded = this.authService.getDecodedToken(token);
        this.id = parseInt(`${decoded.id}`);
        this.nom = `${decoded.nom}`;
        this.prenom = `${decoded.prenom}`;
        this.genre = `${decoded.genre}`;
        this.phone = `${decoded.phone}`;
        this.email = `${decoded.email}`;
        this.role = `${decoded.role}`;
      }
    }
    this.profilForm = this.fb.group({
      prenom: [this.prenom, Validators.required],
      nom: [this.nom, Validators.required],
      genre: [this.genre, Validators.required],
      email: [this.email, [Validators.required, Validators.email]],
      phone: [this.phone],
      role: { "nom": this.useRole[0] },
      password: [""],
      newpassword: ["", Validators.minLength(6)],
      confirmPassword: [""]
    });
    this.profilForm.valueChanges.subscribe(() => {
      const newPass = this.profilForm.get("newpassword")?.value;
      const confirmPass = this.profilForm.get("confirmPassword")?.value;
      this.passwordsDontMatch = newPass !== confirmPass;
    });
  }
  onUpdateProfil() {
    console.log("Mise \xE0 jour du profil...", this.profilForm.value);
    if (this.profilForm.invalid || this.passwordsDontMatch)
      return;
    this.globalService.update("utilisateur", this.id, this.profilForm.value).subscribe({
      next: () => {
        import_sweetalert2.default.fire({
          icon: "success",
          title: "Succ\xE8s",
          text: "Profil mis \xE0 jour avec succ\xE8s !",
          timer: 2e3,
          showConfirmButton: false,
          willClose: () => {
            this.logout();
          }
        });
      },
      error: (err) => {
        console.error(err);
        import_sweetalert2.default.fire({
          icon: "error",
          title: "Erreur",
          text: err,
          timer: 2e3,
          showConfirmButton: false
        });
      }
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/authentication/signin"]);
  }
  static {
    this.\u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 53, vars: 10, consts: [["nav", "ngbNav"], ["profilTemplate", ""], [1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home", "font-17"], [1, "section-body"], [1, "row", "mt-sm-4"], [1, "col-12", "col-md-12", "col-lg-4"], [1, "card", "author-box"], [1, "card-body"], [1, "author-box-center"], ["src", "assets/images/users/userhomme.png", "class", "rounded-circle author-box-picture", "alt", "User Image", 4, "ngIf"], ["src", "assets/images/users/userfemme.png", "class", "rounded-circle author-box-picture", "alt", "User Image", 4, "ngIf"], [1, "clearfix"], [1, "author-box-name"], ["href", "#", "onClick", "return false;"], [1, "author-box-job"], [1, "card"], [1, "card-header"], [1, "py-4"], [1, "float-start"], [1, "float-end", "text-muted"], [1, "col-12", "col-md-12", "col-lg-8"], [1, "padding-20"], ["ngbNav", "", 1, "nav-tabs", 3, "activeIdChange", "activeId"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], ["src", "assets/images/users/userhomme.png", "alt", "User Image", 1, "rounded-circle", "author-box-picture"], ["src", "assets/images/users/userfemme.png", "alt", "User Image", 1, "rounded-circle", "author-box-picture"], [4, "ngTemplateOutlet"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "form-group", "col-md-6", "col-12"], ["type", "text", "formControlName", "prenom", 1, "form-control"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["type", "text", "formControlName", "nom", 1, "form-control"], [1, "form-group", "col-md-7", "col-12"], ["type", "email", "formControlName", "email", 1, "form-control"], [1, "form-group", "col-md-5", "col-12"], ["type", "tel", "formControlName", "phone", 1, "form-control"], [1, "mt-4"], [1, "form-group", "col-md-4", "col-12"], ["type", "password", "formControlName", "password", 1, "form-control"], ["type", "password", "formControlName", "newpassword", 1, "form-control"], [4, "ngIf"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control"], [1, "card-footer", "text-end"], [1, "btn", "btn-primary", 3, "disabled"], [1, "invalid-feedback", "d-block"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]], template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 2)(1, "ul", 3)(2, "li", 4)(3, "h5", 5);
        \u0275\u0275text(4, "Profile");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 6)(6, "a", 7);
        \u0275\u0275element(7, "i", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 4);
        \u0275\u0275text(9, "Profile");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14);
        \u0275\u0275template(16, ProfileComponent_img_16_Template, 1, 0, "img", 15)(17, ProfileComponent_img_17_Template, 1, 0, "img", 16);
        \u0275\u0275element(18, "div", 17);
        \u0275\u0275elementStart(19, "div", 18)(20, "a", 19);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 20);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "div", 21)(25, "div", 22)(26, "h4");
        \u0275\u0275text(27, "D\xE9tails Personnels");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 13)(29, "div", 23)(30, "p", 17)(31, "span", 24);
        \u0275\u0275text(32, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 25);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "p", 17)(36, "span", 24);
        \u0275\u0275text(37, "Mail");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 25);
        \u0275\u0275text(39);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(40, "div", 26)(41, "div", 21)(42, "div", 27)(43, "ul", 28, 0);
        \u0275\u0275twoWayListener("activeIdChange", function ProfileComponent_Template_ul_activeIdChange_43_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(45, "li", 29)(46, "a", 30);
        \u0275\u0275text(47, "Param\xE8tre");
        \u0275\u0275elementEnd();
        \u0275\u0275template(48, ProfileComponent_ng_template_48_Template, 1, 1, "ng-template", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(49, "div", 32);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(50, "section", 2);
        \u0275\u0275template(51, ProfileComponent_ng_template_51_Template, 46, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const nav_r5 = \u0275\u0275reference(44);
        \u0275\u0275advance(16);
        \u0275\u0275property("ngIf", ctx.genre === "Homme");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.genre === "Femme");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2("", ctx.prenom, " ", ctx.nom, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.useRole);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1("(00223)", ctx.phone, "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("activeId", ctx.active);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngbNavItem", 2);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngbNavOutlet", nav_r5);
      }
    }, dependencies: [
      RouterLink,
      NgbNav,
      NgbNavItem,
      NgbNavItemRole,
      NgbNavLinkBase,
      NgbNavLink,
      NgbNavContent,
      NgbNavOutlet,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgIf,
      NgxDatatableModule,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      CommonModule,
      NgTemplateOutlet
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", imports: [
      RouterLink,
      NgbNav,
      NgbNavItem,
      NgbNavItemRole,
      NgbNavLinkBase,
      NgbNavLink,
      NgbNavContent,
      NgbNavOutlet,
      FormsModule,
      NgIf,
      NgxDatatableModule,
      ReactiveFormsModule,
      CommonModule
    ], template: `<section class="main-content">\r
  <ul class="breadcrumb breadcrumb-style ">\r
    <li class="breadcrumb-item">\r
      <h5 class="page-title m-b-0">Profile</h5>\r
    </li>\r
    <li class="breadcrumb-item bcrumb-1">\r
      <a routerLink="/dashboard/main">\r
        <i class="fas fa-home font-17"></i></a>\r
    </li>\r
    <li class="breadcrumb-item">Profile</li>\r
  </ul>\r
\r
  <div class="section-body">\r
    <div class="row mt-sm-4">\r
\r
      <!-- ===== COLONNE GAUCHE ===== -->\r
      <div class="col-12 col-md-12 col-lg-4">\r
        <div class="card author-box">\r
          <div class="card-body">\r
            <div class="author-box-center">\r
              <img *ngIf="genre==='Homme'" src="assets/images/users/userhomme.png"  class="rounded-circle author-box-picture"  alt="User Image" />\r
              <img *ngIf="genre==='Femme'" src="assets/images/users/userfemme.png" class="rounded-circle author-box-picture"  alt="User Image" /> \r
              <div class="clearfix"></div>\r
\r
              <div class="author-box-name">\r
                <a href="#" onClick="return false;">{{ prenom }} {{ nom }}</a>\r
              </div>\r
              <div class="author-box-job">{{ useRole }}</div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="card">\r
          <div class="card-header">\r
            <h4>D\xE9tails Personnels</h4>\r
          </div>\r
          <div class="card-body">\r
            <div class="py-4">\r
              <p class="clearfix">\r
                <span class="float-start">Phone</span>\r
                <span class="float-end text-muted">(00223){{ phone }}</span>\r
              </p>\r
              <p class="clearfix">\r
                <span class="float-start">Mail</span>\r
                <span class="float-end text-muted">{{ email }}</span>\r
              </p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
\r
      <!-- ===== COLONNE DROITE ===== -->\r
      <div class="col-12 col-md-12 col-lg-8">\r
        <div class="card">\r
          <div class="padding-20">\r
\r
            <ul ngbNav #nav="ngbNav" [(activeId)]="active" class="nav-tabs">\r
              <!-- Onglet Param\xE8tre -->\r
              <li [ngbNavItem]="2">\r
                <a ngbNavLink>Param\xE8tre</a>\r
\r
                <!-- >>> CORRECTION : ON AFFICHE TON TEMPLATE ICI <<< -->\r
                <ng-template ngbNavContent>\r
                  <ng-container *ngTemplateOutlet="profilTemplate"></ng-container>\r
                </ng-template>\r
              </li>\r
            </ul>\r
\r
            <div [ngbNavOutlet]="nav" class="mt-2"></div>\r
\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
</section>\r
\r
\r
<!-- ===== TON FORMULAIRE PERSONNALIS\xC9 ===== -->\r
<section class="main-content">\r
  <ng-template #profilTemplate>\r
    <div class="card-header">\r
      <h4>Modifier le Profil</h4>\r
    </div>\r
\r
    <form [formGroup]="profilForm" (ngSubmit)="onUpdateProfil()">\r
      <div class="card-body">\r
\r
        <div class="row">\r
          <div class="form-group col-md-6 col-12">\r
            <label>Pr\xE9nom</label>\r
            <input type="text" class="form-control" formControlName="prenom" />\r
            <div class="invalid-feedback d-block"\r
                 *ngIf="profilForm.get('prenom')?.invalid && profilForm.get('prenom')?.touched">\r
              Veuillez renseigner le pr\xE9nom.\r
            </div>\r
          </div>\r
\r
          <div class="form-group col-md-6 col-12">\r
            <label>Nom</label>\r
            <input type="text" class="form-control" formControlName="nom" />\r
            <div class="invalid-feedback d-block"\r
                 *ngIf="profilForm.get('nom')?.invalid && profilForm.get('nom')?.touched">\r
              Veuillez renseigner le nom.\r
            </div>\r
          </div>\r
        </div>\r
\r
\r
        <div class="row">\r
          <div class="form-group col-md-7 col-12">\r
            <label>Email</label>\r
            <input type="email" class="form-control" formControlName="email" />\r
            <div class="invalid-feedback d-block"\r
                 *ngIf="profilForm.get('email')?.invalid && profilForm.get('email')?.touched">\r
              Email invalide.\r
            </div>\r
          </div>\r
\r
          <div class="form-group col-md-5 col-12">\r
            <label>T\xE9l\xE9phone</label>\r
            <input type="tel" class="form-control" formControlName="phone" />\r
          </div>\r
        </div>\r
\r
\r
        <!-- ===== Changement Mot de Passe ===== -->\r
        <h5 class="mt-4">Modifier le mot de passe</h5>\r
\r
        <div class="row">\r
          <div class="form-group col-md-4 col-12">\r
            <label>Ancien mot de passe</label>\r
            <input type="password" class="form-control" formControlName="password" />\r
          </div>\r
\r
          <div class="form-group col-md-4 col-12">\r
            <label>Nouveau mot de passe</label>\r
            <input type="password" class="form-control" formControlName="newpassword" />\r
           </div>\r
           <div *ngIf="profilForm.get('newpassword')?.touched && profilForm.get('newpassword')?.invalid">\r
                        \r
                        <small class="text-danger" *ngIf="profilForm.get('newpassword')?.errors?.['minlength']">\r
                          Minimum 6 caract\xE8res.\r
                        </small>\r
                      </div>\r
\r
          <div class="form-group col-md-4 col-12">\r
            <label>Confirmer mot de passe</label>\r
            <input type="password" class="form-control" formControlName="confirmPassword" />\r
            <div class="invalid-feedback d-block" *ngIf="passwordsDontMatch">\r
              Les mots de passe ne correspondent pas.\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
\r
      <div class="card-footer text-end">\r
        <button class="btn btn-primary" [disabled]="profilForm.invalid || passwordsDontMatch">\r
          Enregistrer\r
        </button>\r
      </div>\r
    </form>\r
  </ng-template>\r
</section>\r
` }]
  }], () => [{ type: AuthService }, { type: FormBuilder }, { type: GlobalService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/profile/profile.component.ts", lineNumber: 28 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=profile.component-KAFYDOGF.js.map
