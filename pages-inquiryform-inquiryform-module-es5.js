function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inquiryform-inquiryform-module"], {
  /***/
  "./src/app/pages/inquiryform/inquiryform-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/inquiryform/inquiryform-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: InquiryFormRoutingModule */

  /***/
  function srcAppPagesInquiryformInquiryformRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InquiryFormRoutingModule", function () {
      return InquiryFormRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _inquiryform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./inquiryform.component */
    "./src/app/pages/inquiryform/inquiryform.component.ts");

    var routes = [{
      path: '',
      component: _inquiryform_component__WEBPACK_IMPORTED_MODULE_2__["InquiryFormComponent"]
    }];

    var InquiryFormRoutingModule = function InquiryFormRoutingModule() {
      _classCallCheck(this, InquiryFormRoutingModule);
    };

    InquiryFormRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InquiryFormRoutingModule
    });
    InquiryFormRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InquiryFormRoutingModule_Factory(t) {
        return new (t || InquiryFormRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InquiryFormRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InquiryFormRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/inquiryform/inquiryform.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/inquiryform/inquiryform.component.ts ***!
    \************************************************************/

  /*! exports provided: InquiryFormComponent */

  /***/
  function srcAppPagesInquiryformInquiryformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InquiryFormComponent", function () {
      return InquiryFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InquiryFormComponent = /*#__PURE__*/function () {
      function InquiryFormComponent() {
        _classCallCheck(this, InquiryFormComponent);
      }

      _createClass(InquiryFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InquiryFormComponent;
    }();

    InquiryFormComponent.ɵfac = function InquiryFormComponent_Factory(t) {
      return new (t || InquiryFormComponent)();
    };

    InquiryFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InquiryFormComponent,
      selectors: [["app-inquiryform"]],
      decls: 2,
      vars: 0,
      template: function InquiryFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "inquiryform works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lucXVpcnlmb3JtL2lucXVpcnlmb3JtLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InquiryFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inquiryform',
          templateUrl: './inquiryform.component.html',
          styleUrls: ['./inquiryform.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/inquiryform/inquiryform.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/inquiryform/inquiryform.module.ts ***!
    \*********************************************************/

  /*! exports provided: InquiryFormModule */

  /***/
  function srcAppPagesInquiryformInquiryformModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InquiryFormModule", function () {
      return InquiryFormModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _inquiryform_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./inquiryform-routing.module */
    "./src/app/pages/inquiryform/inquiryform-routing.module.ts");
    /* harmony import */


    var _inquiryform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./inquiryform.component */
    "./src/app/pages/inquiryform/inquiryform.component.ts");

    var InquiryFormModule = function InquiryFormModule() {
      _classCallCheck(this, InquiryFormModule);
    };

    InquiryFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InquiryFormModule
    });
    InquiryFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InquiryFormModule_Factory(t) {
        return new (t || InquiryFormModule)();
      },
      imports: [[_inquiryform_routing_module__WEBPACK_IMPORTED_MODULE_1__["InquiryFormRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InquiryFormModule, {
        declarations: [_inquiryform_component__WEBPACK_IMPORTED_MODULE_2__["InquiryFormComponent"]],
        imports: [_inquiryform_routing_module__WEBPACK_IMPORTED_MODULE_1__["InquiryFormRoutingModule"]],
        exports: [_inquiryform_component__WEBPACK_IMPORTED_MODULE_2__["InquiryFormComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InquiryFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_inquiryform_routing_module__WEBPACK_IMPORTED_MODULE_1__["InquiryFormRoutingModule"]],
          declarations: [_inquiryform_component__WEBPACK_IMPORTED_MODULE_2__["InquiryFormComponent"]],
          exports: [_inquiryform_component__WEBPACK_IMPORTED_MODULE_2__["InquiryFormComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-inquiryform-inquiryform-module-es5.js.map