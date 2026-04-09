import {
  RouterLink
} from "./chunk-M24KWC6L.js";
import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ɵNgNoValidate
} from "./chunk-E4RPKPFV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-FZBB7M2N.js";

// src/app/authentication/page404/page404.component.ts
var Page404Component = class _Page404Component {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function Page404Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Page404Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Page404Component, selectors: [["app-page404"]], decls: 22, vars: 0, consts: [[1, "d-flex", "align-items-center", "min-vh-100", "py-3", "py-md-0"], [1, "container"], [1, "page-error"], [1, "page-inner"], [1, "page-description"], [1, "page-search"], [1, "form-group", "floating-addon", "floating-addon-not-append"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "input-group-append"], [1, "btn", "btn-primary", "btn-lg"], [1, "mt-3"], ["routerLink", "/authentication/signin"]], template: function Page404Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        \u0275\u0275text(5, "404");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275text(7, " The page you were looking for could not be found. ");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Page404Component, [{
    type: Component,
    args: [{ selector: "app-page404", imports: [FormsModule, RouterLink], template: '<main class="d-flex align-items-center min-vh-100 py-3 py-md-0">\r\n  <div class="container">\r\n    <div class="page-error">\r\n      <div class="page-inner">\r\n        <h1>404</h1>\r\n        <div class="page-description">\r\n          The page you were looking for could not be found.\r\n        </div>\r\n        <div class="page-search">\r\n          <form>\r\n            <div class="form-group floating-addon floating-addon-not-append">\r\n              <div class="input-group">\r\n                <div class="input-group-prepend">\r\n                  <div class="input-group-text">\r\n                    <i class="fas fa-search"></i>\r\n                  </div>\r\n                </div>\r\n                <input type="text" class="form-control" placeholder="Search">\r\n                <div class="input-group-append">\r\n                  <button class="btn btn-primary btn-lg">\r\n                    Search\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <div class="mt-3">\r\n            <a routerLink="/authentication/signin">Back to Home</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Page404Component, { className: "Page404Component", filePath: "src/app/authentication/page404/page404.component.ts", lineNumber: 11 });
})();

export {
  Page404Component
};
//# sourceMappingURL=chunk-KC5UHK32.js.map
