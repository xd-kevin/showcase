(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    视频封面抽取\n  </h1>\n</div>\n\n<div class=\"select-container\">\n  <h2 class=\"select-name\">选择视频名称</h2>\n  <select name=\"video\" [(ngModel)]=\"selectedVideo\" (ngModelChange)=\"handleVideoChange()\">\n    <option *ngFor=\"let video of videoNames\">{{video}}</option>\n  </select>\n</div>\n\n<div *ngIf=\"selectedVideo\" class=\"content\" [class.is-width]=\"isWidth\">\n  <section class=\"container video\">\n    <h2>视频</h2>\n    <video controls autoplay>\n      <source src=\"../assets/weishi/{{selectedVideo}}.mp4\" type=\"video/mp4\">\n    </video>\n  </section>\n\n  <section class=\"container img\">\n    <h2>GIF图</h2>\n    <img src=\"../assets/gif/{{selectedVideo}}_00.gif\"/>\n  </section>\n\n  <section class=\"container img\">\n    <h2>封面</h2>\n    <img src=\"../assets/thumb/{{selectedVideo}}_00.jpg\" alt=\"thumb\">\n    <img src=\"../assets/thumb/{{selectedVideo}}_01.jpg\" alt=\"thumb\">\n    <img src=\"../assets/thumb/{{selectedVideo}}_02.jpg\" alt=\"thumb\">\n  </section>\n\n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-name {\n  display: inline-block;\n  margin-right: 20px;\n  vertical-align: middle; }\n\n.select-container {\n  text-align: center; }\n\nselect {\n  vertical-align: middle; }\n\n.content {\n  text-align: center; }\n\n.content .container {\n    display: inline-block;\n    vertical-align: top;\n    margin-right: 60px;\n    position: relative; }\n\n.content .container img {\n      display: inline-block;\n      vertical-align: top;\n      width: 200px;\n      margin-left: 10px; }\n\n.content .container video {\n      width: 200px; }\n\n.content.is-width .container.video {\n    display: block; }\n\n.content.is-width .container img, .content.is-width .container video {\n    width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bnRhbmcvZGF0YS9zaG93Y2FzZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsbUJBQWtCLEVBK0JuQjs7QUFoQ0Q7SUFJSSxzQkFBcUI7SUFDckIsb0JBQW1CO0lBQ25CLG1CQUFrQjtJQUNsQixtQkFBa0IsRUFZbkI7O0FBbkJIO01BVU0sc0JBQXFCO01BQ3JCLG9CQUFtQjtNQUNuQixhQUFZO01BQ1osa0JBQWlCLEVBQ2xCOztBQWRMO01BaUJNLGFBQVksRUFDYjs7QUFsQkw7SUF3QlEsZUFBYyxFQUNmOztBQXpCUDtJQTRCUSxhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LW5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNlbGVjdC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnNlbGVjdCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi1yaWdodDogNjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBpbWcge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cblxuICAgIHZpZGVvIHtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG4gIH1cblxuICAmLmlzLXdpZHRoIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICYudmlkZW8ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgaW1nLCB2aWRlbyB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(elmRef) {
        var _this = this;
        this.elmRef = elmRef;
        this.title = '视频封面抽取';
        this.videoNames = [
            '1047_2ffed9a44fce4b3fa48ee64ca6dcvide0',
            '1047_3ff64346edb7438490914a6c5d23vide0',
            '1047_4fcd93d4a5f440d5bc7ce8b23044vide0',
            '1047_72d66ef781bd4dafbea140b8df4evide0',
            '1047_729f7ceafe7c419cb470ef2d496bvide0',
            '1047_4877dbdb9abc46f49aaa7aa06115vide0',
            '1047_ada5b738aae74c438a0a19a451bavide0',
            '1047_b29e9c539e7c4959ba2a7f1e7a02vide0',
            '1047_de76c9a3cc384f90aa613c2194fbvide0',
            '1047_fbefbefb2a764839a286ed3f736bvide0',
            'shg_93304989_1047_49d387ca49b2488aab30e7054a96vide0',
            'shg_472708436_1047_1eda60008859432b979b7155a9b5vide0',
            'shg_658186741_1047_1475e7fb7b0a403f968e2848fe53vide0',
            'shg_1070358327_1047_1be5b3d25ef24412acb893fb3bfcvide0',
            'shg_1116961427_1047_1aa3cfdba6dd410cb57907dc8849vide0',
            'shg_1281039150_1047_43785cae0eb24a58b161b8ddeb9bvide0',
            'shg_1311423411_1047_8d9b5196f5da49c3afc3ad37ce07vide0',
            'shg_1330740161_1047_fb56a4d2725a45a49a32dad9c89dvide0',
            'shg_1380276323_1047_93407e4b6dd54418a13107b18806vide0',
            'shg_1761309749_1047_28f493fd3460482bb545fac82e99vide0',
            'shg_2146973187_1047_cc04c4595b9646b88fbff539b262vide0',
            'tjg_256134490_1047_3f4409522385446a9e19b55d859fvide0',
            'tjg_260121748_1047_6624588630224bd9beef3cc3910cvide0',
            'tjg_568113310_1047_1b7d6f1d492d43b08157ccf502b3vide0',
            'tjg_671130620_1047_78e8cb6824024a968c34f4e1871bvide0',
            'tjg_1135081752_1047_33a9c52aa1ef4f4fb995f3da3ed9vide0',
            'tjg_1374745472_1047_3041a09a3dec4b509cfc58f6691evide0',
            'tjg_1560362132_1047_683193c0bb534fa38eee421c15devide0',
            'tjg_1692110052_1047_08af07c4789945b28e2993fc367bvide0',
            'tjg_2025270294_1047_7cf540b559f2455ba482f4961eeevide0',
            'tjg_2095269251_1047_0dafac68c5b643b49270a25a314cvide0'
        ];
        this.selectedVideo = this.videoNames[0];
        this.isWidth = false;
        this.isSelectedVideoImageWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isSelectedVideoImageWidth$.subscribe(function (isWidth) {
            console.log('is-width', isWidth);
            _this.isWidth = isWidth;
        });
    }
    AppComponent.prototype.handleVideoChange = function () {
        var player = this.elmRef.nativeElement.querySelector('video');
        player.load();
        this.getImageDimension(this.selectedVideo);
    };
    AppComponent.prototype.getImageDimension = function (src) {
        var img = new Image();
        var isSelectedVideoImageWidth$ = this.isSelectedVideoImageWidth$;
        img.onload = function (event) {
            var loadedImage = event.currentTarget;
            console.log('width', loadedImage.width);
            console.log('height', loadedImage.height);
            console.log(loadedImage.width >= loadedImage.height);
            isSelectedVideoImageWidth$.next(loadedImage.width >= loadedImage.height);
        };
        img.src = "../assets/gif/" + src + "_00.gif";
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shawntang/data/showcase/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map