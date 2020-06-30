(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _measurements_card_measurements_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./measurements-card/measurements-card.component */ "./src/app/measurements-card/measurements-card.component.ts");



class AppComponent {
    constructor() {
        this.title = 'oximetro';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "toolbar"], ["src", "../assets/oximetro_128x128.png", "alt", "\u00CDcone de ox\u00EDmetro"], [1, "titulo"], [1, "measurements-cards-grid"], ["measurement", "sp02"], ["measurement", "hearthate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sistema Ox\u00EDmetro IoT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-measurements-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-measurements-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_measurements_card_measurements_card_component__WEBPACK_IMPORTED_MODULE_1__["MeasurementsCardComponent"]], styles: ["img[_ngcontent-%COMP%]{\n  margin: 14px;\n  width: auto;\n  height: 50px;\n}\n\n.toolbar[_ngcontent-%COMP%]{\n  z-index: 2;\n}\n\n.titulo[_ngcontent-%COMP%]{\n  display: inline-block;\n  font-size: 1.6em;\n  margin-top: 32px;\n  vertical-align: top;\n}\n\n.measurements-cards-grid[_ngcontent-%COMP%]{\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 90vh;\n}\n\napp-measurements-card[_ngcontent-%COMP%]{\n  height: 100%;\n}\n\n@media (min-width: 600px) {\n  .measurements-cards-grid[_ngcontent-%COMP%]{\n    min-height: 200vh;\n  }\n}\n\n@media (min-width: 800px) {\n  img[_ngcontent-%COMP%]{\n    height: 70px;\n  }\n\n  .measurements-cards-grid[_ngcontent-%COMP%]{\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    margin-left: auto;\n    margin-right: auto;\n    min-height: 65vh;\n  }\n\n  .titulo[_ngcontent-%COMP%]{\n    font-size: 2.2em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gIG1hcmdpbjogMTRweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnRvb2xiYXJ7XG4gIHotaW5kZXg6IDI7XG59XG5cbi50aXR1bG97XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjZlbTtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLm1lYXN1cmVtZW50cy1jYXJkcy1ncmlke1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA5MHZoO1xufVxuXG5hcHAtbWVhc3VyZW1lbnRzLWNhcmR7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5tZWFzdXJlbWVudHMtY2FyZHMtZ3JpZHtcbiAgICBtaW4taGVpZ2h0OiAyMDB2aDtcbiAgfVxufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuICBpbWd7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG5cbiAgLm1lYXN1cmVtZW50cy1jYXJkcy1ncmlke1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogNjV2aDtcbiAgfVxuXG4gIC50aXR1bG97XG4gICAgZm9udC1zaXplOiAyLjJlbTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _measurements_card_measurements_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./measurements-card/measurements-card.component */ "./src/app/measurements-card/measurements-card.component.ts");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./network.service */ "./src/app/network.service.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_3__["GoogleChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _measurements_card_measurements_card_component__WEBPACK_IMPORTED_MODULE_7__["MeasurementsCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        angular_google_charts__WEBPACK_IMPORTED_MODULE_3__["GoogleChartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _measurements_card_measurements_card_component__WEBPACK_IMPORTED_MODULE_7__["MeasurementsCardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    angular_google_charts__WEBPACK_IMPORTED_MODULE_3__["GoogleChartsModule"]
                ],
                providers: [
                    _network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/measurements-card/measurements-card.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/measurements-card/measurements-card.component.ts ***!
  \******************************************************************/
/*! exports provided: MeasurementsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementsCardComponent", function() { return MeasurementsCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../network.service */ "./src/app/network.service.ts");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");





class MeasurementsCardComponent {
    constructor(networkService) {
        this.networkService = networkService;
        this.ultimaLeitura = 0;
        this.initialChartData = [
            [0, 0]
        ];
        this.chartConfig = {
            title: 'Area Chart',
            type: 'AreaChart',
            columnNames: ['Data', '<Medida>'],
            data: this.initialChartData,
            options: {
                chartArea: {
                    width: '80%',
                    height: '80%'
                },
                backgroundColor: '#efefef',
                colors: ['#82b1ff'],
                pointSize: 6,
                fontName: 'Roboto',
                fontSize: 14,
                hAxis: {
                    textPosition: 'none',
                    textStyle: {
                        color: 'black',
                    },
                    baselineColor: 'black'
                },
                vAxis: {
                    minValue: 0,
                    maxValue: 100,
                    textStyle: {
                        color: 'black',
                    },
                    baselineColor: 'black'
                },
                animation: {
                    startup: true,
                    duration: 1000
                },
                legend: {
                    position: 'none',
                    textStyle: {
                        color: 'black',
                    }
                },
                tooltip: {
                    ignoreBounds: false,
                    isHtml: false
                }
            }
        };
        setInterval(() => this.fetchData(), 1000 * 60 * _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].update_interval);
    }
    ngOnInit() {
        const options = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].graph_options[this.measurement];
        this.titulo = options.title;
        this.pathDaImagem = options.header_img;
        this.descricao = options.description;
        this.chartConfig.columnNames = ['Data', this.titulo];
        this.fetchData();
    }
    fetchData() {
        // Busca dados de medição no banco de dados.
        const route = 'busca_dados_para_grafico/' + this.measurement;
        this.response = this.networkService.buscarDadosNoServidor(route);
        this.response.subscribe((data) => {
            this.updateGraphData(data);
        });
    }
    updateGraphData(data) {
        if (data.graph_data.length === 0) {
            this.chartConfig.data = this.initialChartData;
        }
        else {
            this.chartConfig.data = data.graph_data;
        }
    }
}
MeasurementsCardComponent.ɵfac = function MeasurementsCardComponent_Factory(t) { return new (t || MeasurementsCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"])); };
MeasurementsCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeasurementsCardComponent, selectors: [["app-measurements-card"]], inputs: { measurement: "measurement" }, decls: 8, vars: 7, consts: [[1, "card"], [1, "header"], [1, "header-image"], [1, "header-image", 3, "src", "alt"], [1, "titulo"], [1, "content"], ["dynamicResize", "true", "width", "100%", 3, "type", "data", "columns", "options"]], template: function MeasurementsCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "google-chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pathDaImagem, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.descricao);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.chartConfig.type)("data", ctx.chartConfig.data)("columns", ctx.chartConfig.columnNames)("options", ctx.chartConfig.options);
    } }, directives: [angular_google_charts__WEBPACK_IMPORTED_MODULE_3__["GoogleChartComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border-radius: 4%;\n  box-shadow: -10px -10px 25px 5px rgba(255, 255, 255, .9), 20px 20px 50px 5px rgba(100, 100, 100, .5);\n  height: 85%;\n  margin-left: 32px;\n  margin-top: 32px;\n  max-width: 80%;\n}\n\nimg.header-image[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 45px;\n  margin-left: 16px;\n  margin-top: 16px;\n  max-width: 90%;\n  padding-bottom: 8px;\n\n}\n\n.titulo[_ngcontent-%COMP%]{\n  display: inline-block;\n  font-size: 1.3em;\n  margin-left: 16px;\n  margin-top: 32px;\n  vertical-align: top;\n}\n\n.content[_ngcontent-%COMP%]{\n  height: 80%;\n}\n\ngoogle-chart[_ngcontent-%COMP%]{\n  width: 90%;\n  height: 85%;\n  margin-right: 8px;\n}\n\n@media (min-width: 800px){\n  .card[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n\n  img.header-image[_ngcontent-%COMP%]{\n    height: 50px;\n    margin-left: 48px;\n  }\n\n  .titulo[_ngcontent-%COMP%]{\n    font-size: 1.8em;\n  }\n\n  google-chart[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVhc3VyZW1lbnRzLWNhcmQvbWVhc3VyZW1lbnRzLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsb0dBQW9HO0VBQ3BHLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWVhc3VyZW1lbnRzLWNhcmQvbWVhc3VyZW1lbnRzLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgYm9yZGVyLXJhZGl1czogNCU7XG4gIGJveC1zaGFkb3c6IC0xMHB4IC0xMHB4IDI1cHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpLCAyMHB4IDIwcHggNTBweCA1cHggcmdiYSgxMDAsIDEwMCwgMTAwLCAuNSk7XG4gIGhlaWdodDogODUlO1xuICBtYXJnaW4tbGVmdDogMzJweDtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbmltZy5oZWFkZXItaW1hZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1heC13aWR0aDogOTAlO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuXG59XG5cbi50aXR1bG97XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5jb250ZW50e1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuZ29vZ2xlLWNoYXJ0e1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDg1JTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCl7XG4gIC5jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgfVxuXG4gIGltZy5oZWFkZXItaW1hZ2V7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0OHB4O1xuICB9XG5cbiAgLnRpdHVsb3tcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICB9XG5cbiAgZ29vZ2xlLWNoYXJ0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTAlO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeasurementsCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-measurements-card',
                templateUrl: './measurements-card.component.html',
                styleUrls: ['./measurements-card.component.css']
            }]
    }], function () { return [{ type: _network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"] }]; }, { measurement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/network.service.ts":
/*!************************************!*\
  !*** ./src/app/network.service.ts ***!
  \************************************/
/*! exports provided: NetworkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkService", function() { return NetworkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class NetworkService {
    constructor(http) {
        this.http = http;
    }
    buscarDadosNoServidor(route) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server_url + route;
        return this.http.get(url);
    }
}
NetworkService.ɵfac = function NetworkService_Factory(t) { return new (t || NetworkService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
NetworkService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NetworkService, factory: NetworkService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NetworkService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
const environment = {
    production: false,
    server_url: 'http://0.0.0.0:8080/',
    update_interval: 5,
    graph_options: {
        sp02: {
            title: 'Saturação de Oxigênio',
            header_img: '../../assets/sp02.png',
            description: 'Icone de Saturação de Oxigênio'
        },
        hearthate: {
            title: 'Frequência Cardíaca',
            header_img: '../../assets/hearthate.png',
            description: 'Icone de Frequência Cardíaca'
        }
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/paulo/workspace/oximetro/oximetro-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map