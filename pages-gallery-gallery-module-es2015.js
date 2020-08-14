(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gallery-gallery-module"],{

/***/ "./src/app/pages/gallery/gallery-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/gallery/gallery-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: GalleryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryRoutingModule", function() { return GalleryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.component */ "./src/app/pages/gallery/gallery.component.ts");





const routes = [
    { path: '', component: _gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"] },
];
class GalleryRoutingModule {
}
GalleryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GalleryRoutingModule });
GalleryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GalleryRoutingModule_Factory(t) { return new (t || GalleryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GalleryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/gallery/gallery.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/gallery/gallery.component.ts ***!
  \****************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GalleryComponent {
    constructor() { }
    ngOnInit() {
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 51, vars: 0, consts: [[1, "row"], [1, "column"], ["src", "assets/img/JobImages/1.jpg"], ["src", "assets/img/JobImages/5.jpg"], ["src", "assets/img/JobImages/9.jpg"], ["src", "assets/img/JobImages/13.jpg"], ["src", "assets/img/JobImages/17.jpg"], ["src", "assets/img/JobImages/21.jpg"], ["src", "assets/img/JobImages/25.jpg"], ["src", "assets/img/JobImages/29.jpg"], ["src", "assets/img/JobImages/33.jpg"], ["src", "assets/img/JobImages/37.jpg"], ["src", "assets/img/JobImages/41.jpg"], ["src", "assets/img/JobImages/45.jpg"], ["src", "assets/img/JobImages/2.jpg"], ["src", "assets/img/JobImages/6.jpg"], ["src", "assets/img/JobImages/10.jpg"], ["src", "assets/img/JobImages/14.jpg"], ["src", "assets/img/JobImages/18.jpg"], ["src", "assets/img/JobImages/22.jpg"], ["src", "assets/img/JobImages/26.jpg"], ["src", "assets/img/JobImages/30.jpg"], ["src", "assets/img/JobImages/34.jpg"], ["src", "assets/img/JobImages/38.jpg"], ["src", "assets/img/JobImages/42.jpg"], ["src", "assets/img/JobImages/46.jpg"], ["src", "assets/img/JobImages/3.jpg"], ["src", "assets/img/JobImages/7.jpg"], ["src", "assets/img/JobImages/11.jpg"], ["src", "assets/img/JobImages/15.jpg"], ["src", "assets/img/JobImages/19.jpg"], ["src", "assets/img/JobImages/23.jpg"], ["src", "assets/img/JobImages/27.jpg"], ["src", "assets/img/JobImages/31.jpg"], ["src", "assets/img/JobImages/35.jpg"], ["src", "assets/img/JobImages/39.jpg"], ["src", "assets/img/JobImages/43.jpg"], ["src", "assets/img/JobImages/4.jpg"], ["src", "assets/img/JobImages/8.jpg"], ["src", "assets/img/JobImages/12.jpg"], ["src", "assets/img/JobImages/16.jpg"], ["src", "assets/img/JobImages/20.jpg"], ["src", "assets/img/JobImages/24.jpg"], ["src", "assets/img/JobImages/28.jpg"], ["src", "assets/img/JobImages/32.jpg"], ["src", "assets/img/JobImages/36.jpg"], ["src", "assets/img/JobImages/40.jpg"], ["src", "assets/img/JobImages/44.jpg"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 0 4px;\r\n  }\r\n  \r\n  \r\n  \r\n  .column[_ngcontent-%COMP%] {\r\n    flex: 25%;\r\n    max-width: 25%;\r\n    padding: 0 4px;\r\n  }\r\n  \r\n  .column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 8px;\r\n    vertical-align: middle;\r\n    width: 100%;\r\n  }\r\n  \r\n  .row[_ngcontent-%COMP%]::after {\r\n    content:\"\";\r\n    clear: both;\r\n    display: table;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0VBRUEsMkRBQTJEOztFQUMzRDtJQUNFLFNBQVM7SUFDVCxjQUFjO0lBQ2QsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAwIDRweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ3JlYXRlIGZvdXIgZXF1YWwgY29sdW1ucyB0aGF0IHNpdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBmbGV4OiAyNSU7XHJcbiAgICBtYXgtd2lkdGg6IDI1JTtcclxuICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gIH1cclxuICBcclxuICAuY29sdW1uIGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucm93OjphZnRlciB7XHJcbiAgICBjb250ZW50OlwiXCI7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/gallery/gallery.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/gallery/gallery.module.ts ***!
  \*************************************************/
/*! exports provided: GalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryModule", function() { return GalleryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery-routing.module */ "./src/app/pages/gallery/gallery-routing.module.ts");
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.component */ "./src/app/pages/gallery/gallery.component.ts");




class GalleryModule {
}
GalleryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GalleryModule });
GalleryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GalleryModule_Factory(t) { return new (t || GalleryModule)(); }, imports: [[_gallery_routing_module__WEBPACK_IMPORTED_MODULE_1__["GalleryRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GalleryModule, { declarations: [_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]], imports: [_gallery_routing_module__WEBPACK_IMPORTED_MODULE_1__["GalleryRoutingModule"]], exports: [_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_gallery_routing_module__WEBPACK_IMPORTED_MODULE_1__["GalleryRoutingModule"]],
                declarations: [_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]],
                exports: [_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-gallery-gallery-module-es2015.js.map