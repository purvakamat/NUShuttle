webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_pickup_pickup_component__ = __webpack_require__("../../../../../src/app/components/pickup/pickup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dropoff_dropoff_component__ = __webpack_require__("../../../../../src/app/components/dropoff/dropoff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_shortestpath_shortestpath_component__ = __webpack_require__("../../../../../src/app/components/shortestpath/shortestpath.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_apitest_apitest_component__ = __webpack_require__("../../../../../src/app/components/apitest/apitest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_home_home_component__ = __webpack_require__("../../../../../src/app/components/user/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_driver_driver_component__ = __webpack_require__("../../../../../src/app/components/user/driver/driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_ride_service_client__ = __webpack_require__("../../../../../src/app/services/ride.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_queueslot_service_client__ = __webpack_require__("../../../../../src/app/services/queueslot.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_home_service_client__ = __webpack_require__("../../../../../src/app/services/home.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_driver_service_client__ = __webpack_require__("../../../../../src/app/services/driver.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_schedule_panel_schedule_panel_component__ = __webpack_require__("../../../../../src/app/components/admin/schedule-panel/schedule-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_admin_driver_panel_driver_panel_component__ = __webpack_require__("../../../../../src/app/components/admin/driver-panel/driver-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_admin_setting_panel_setting_panel_component__ = __webpack_require__("../../../../../src/app/components/admin/setting-panel/setting-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_student_rides_rides_component__ = __webpack_require__("../../../../../src/app/components/student/rides/rides.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_student_myride_myride_component__ = __webpack_require__("../../../../../src/app/components/student/myride/myride.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_student_rides_list_rides_list_component__ = __webpack_require__("../../../../../src/app/components/student/rides-list/rides-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_admin_schedule_panel_schedule_list_schedule_list_component__ = __webpack_require__("../../../../../src/app/components/admin/schedule-panel/schedule-list/schedule-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_admin_schedule_panel_schedule_new_schedule_new_component__ = __webpack_require__("../../../../../src/app/components/admin/schedule-panel/schedule-new/schedule-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_admin_schedule_panel_schedule_edit_schedule_edit_component__ = __webpack_require__("../../../../../src/app/components/admin/schedule-panel/schedule-edit/schedule-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_admin_driver_panel_driver_list_driver_list_component__ = __webpack_require__("../../../../../src/app/components/admin/driver-panel/driver-list/driver-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_admin_driver_panel_driver_edit_driver_edit_component__ = __webpack_require__("../../../../../src/app/components/admin/driver-panel/driver-edit/driver-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_admin_driver_panel_driver_new_driver_new_component__ = __webpack_require__("../../../../../src/app/components/admin/driver-panel/driver-new/driver-new.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_pickup_pickup_component__["a" /* PickupComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_dropoff_dropoff_component__["a" /* DropoffComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_shortestpath_shortestpath_component__["a" /* ShortestpathComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_apitest_apitest_component__["a" /* ApitestComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_user_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_user_driver_driver_component__["a" /* DriverComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_admin_schedule_panel_schedule_panel_component__["a" /* SchedulePanelComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_admin_driver_panel_driver_panel_component__["a" /* DriverPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_admin_setting_panel_setting_panel_component__["a" /* SettingPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_student_rides_rides_component__["a" /* RidesComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_student_myride_myride_component__["a" /* MyrideComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_student_rides_list_rides_list_component__["a" /* RidesListComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_admin_schedule_panel_schedule_list_schedule_list_component__["a" /* ScheduleListComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_admin_schedule_panel_schedule_new_schedule_new_component__["a" /* ScheduleNewComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_admin_schedule_panel_schedule_edit_schedule_edit_component__["a" /* ScheduleEditComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_admin_driver_panel_driver_list_driver_list_component__["a" /* DriverListComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_admin_driver_panel_driver_new_driver_new_component__["a" /* DriverNewComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_admin_driver_panel_driver_edit_driver_edit_component__["a" /* DriverEditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_27_ngx_carousel__["a" /* NgxCarouselModule */],
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyAh8OY5Iqf02wY21IRqNkYP1AcqIvmSavI',
                libraries: ['places']
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_13__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_17__services_ride_service_client__["a" /* RideService */], __WEBPACK_IMPORTED_MODULE_18__services_queueslot_service_client__["a" /* QueueSlotService */], __WEBPACK_IMPORTED_MODULE_19__services_home_service_client__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_20__services_driver_service_client__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_29__services_shared_service__["a" /* SharedService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_apitest_apitest_component__ = __webpack_require__("../../../../../src/app/components/apitest/apitest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_home_home_component__ = __webpack_require__("../../../../../src/app/components/user/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_pickup_pickup_component__ = __webpack_require__("../../../../../src/app/components/pickup/pickup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dropoff_dropoff_component__ = __webpack_require__("../../../../../src/app/components/dropoff/dropoff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_driver_driver_component__ = __webpack_require__("../../../../../src/app/components/user/driver/driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_setting_panel_setting_panel_component__ = __webpack_require__("../../../../../src/app/components/admin/setting-panel/setting-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_shortestpath_shortestpath_component__ = __webpack_require__("../../../../../src/app/components/shortestpath/shortestpath.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_student_rides_list_rides_list_component__ = __webpack_require__("../../../../../src/app/components/student/rides-list/rides-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_student_rides_rides_component__ = __webpack_require__("../../../../../src/app/components/student/rides/rides.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_student_myride_myride_component__ = __webpack_require__("../../../../../src/app/components/student/myride/myride.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_admin_schedule_panel_schedule_list_schedule_list_component__ = __webpack_require__("../../../../../src/app/components/admin/schedule-panel/schedule-list/schedule-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_admin_driver_panel_driver_list_driver_list_component__ = __webpack_require__("../../../../../src/app/components/admin/driver-panel/driver-list/driver-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_admin_schedule_panel_schedule_new_schedule_new_component__ = __webpack_require__("../../../../../src/app/components/admin/schedule-panel/schedule-new/schedule-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_schedule_panel_schedule_edit_schedule_edit_component__ = __webpack_require__("../../../../../src/app/components/admin/schedule-panel/schedule-edit/schedule-edit.component.ts");


















var APP_ROUTES = [
    { path: 'apitest', component: __WEBPACK_IMPORTED_MODULE_4__components_apitest_apitest_component__["a" /* ApitestComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/home', component: __WEBPACK_IMPORTED_MODULE_5__components_user_home_home_component__["a" /* HomeComponent */] },
    { path: 'user/:uid/pickup', component: __WEBPACK_IMPORTED_MODULE_6__components_pickup_pickup_component__["a" /* PickupComponent */] },
    { path: 'user/:uid/dropoff', component: __WEBPACK_IMPORTED_MODULE_7__components_dropoff_dropoff_component__["a" /* DropoffComponent */] },
    { path: 'user/:uid/driver', component: __WEBPACK_IMPORTED_MODULE_8__components_user_driver_driver_component__["a" /* DriverComponent */] },
    { path: 'user/:uid/admin/schedules', component: __WEBPACK_IMPORTED_MODULE_14__components_admin_schedule_panel_schedule_list_schedule_list_component__["a" /* ScheduleListComponent */] },
    { path: 'user/:uid/admin/schedules/new', component: __WEBPACK_IMPORTED_MODULE_16__components_admin_schedule_panel_schedule_new_schedule_new_component__["a" /* ScheduleNewComponent */] },
    { path: 'user/:uid/admin/schedules/:rid', component: __WEBPACK_IMPORTED_MODULE_17__components_admin_schedule_panel_schedule_edit_schedule_edit_component__["a" /* ScheduleEditComponent */] },
    { path: 'user/:uid/admin/drivers', component: __WEBPACK_IMPORTED_MODULE_15__components_admin_driver_panel_driver_list_driver_list_component__["a" /* DriverListComponent */] },
    { path: 'user/:uid/admin/setting-panel', component: __WEBPACK_IMPORTED_MODULE_9__components_admin_setting_panel_setting_panel_component__["a" /* SettingPanelComponent */] },
    { path: 'user/:uid/driver/ride/:rid', component: __WEBPACK_IMPORTED_MODULE_10__components_shortestpath_shortestpath_component__["a" /* ShortestpathComponent */] },
    { path: 'rides-list', component: __WEBPACK_IMPORTED_MODULE_11__components_student_rides_list_rides_list_component__["a" /* RidesListComponent */] },
    { path: 'rides', component: __WEBPACK_IMPORTED_MODULE_12__components_student_rides_rides_component__["a" /* RidesComponent */] },
    { path: 'myride', component: __WEBPACK_IMPORTED_MODULE_13__components_student_myride_myride_component__["a" /* MyrideComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/driver-panel/driver-edit/driver-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/driver-panel/driver-edit/driver-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  driver-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/driver-panel/driver-edit/driver-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DriverEditComponent = (function () {
    function DriverEditComponent() {
    }
    DriverEditComponent.prototype.ngOnInit = function () {
    };
    return DriverEditComponent;
}());
DriverEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-driver-edit',
        template: __webpack_require__("../../../../../src/app/components/admin/driver-panel/driver-edit/driver-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/driver-panel/driver-edit/driver-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DriverEditComponent);

//# sourceMappingURL=driver-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/driver-panel/driver-list/driver-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/driver-panel/driver-list/driver-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  driver-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/driver-panel/driver-list/driver-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DriverListComponent = (function () {
    function DriverListComponent() {
    }
    DriverListComponent.prototype.ngOnInit = function () {
    };
    return DriverListComponent;
}());
DriverListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-driver-list',
        template: __webpack_require__("../../../../../src/app/components/admin/driver-panel/driver-list/driver-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/driver-panel/driver-list/driver-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DriverListComponent);

//# sourceMappingURL=driver-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/driver-panel/driver-new/driver-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/driver-panel/driver-new/driver-new.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  driver-new works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/driver-panel/driver-new/driver-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DriverNewComponent = (function () {
    function DriverNewComponent() {
    }
    DriverNewComponent.prototype.ngOnInit = function () {
    };
    return DriverNewComponent;
}());
DriverNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-driver-new',
        template: __webpack_require__("../../../../../src/app/components/admin/driver-panel/driver-new/driver-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/driver-panel/driver-new/driver-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DriverNewComponent);

//# sourceMappingURL=driver-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/driver-panel/driver-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/driver-panel/driver-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"tab\">\n    <button class=\"tablinks\" [routerLink]=\"['/user/123/admin/schedule-panel']\">Schedule</button>\n    <button class=\"tablinks\">Driver</button>\n    <button class=\"tablinks\" [routerLink]=\"['/user/123/admin/setting-panel']\">Settings</button>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"username\">\n      Username\n    </label>\n    <input [(ngModel)]=\"username\"\n           placeholder=\"Username\"\n           type=\"text\"\n           id=\"username\"\n           class=\"form-control\"/>\n\n    <label for=\"password\">\n      Password\n    </label>\n    <input [(ngModel)]=\"password\"\n           placeholder=\"Password\"\n           type=\"text\"\n           id=\"password\"\n           class=\"form-control\"/>\n\n    <label for=\"firstName\">\n      First Name\n    </label>\n    <input [(ngModel)]=\"firstName\"\n           placeholder=\"First Name\"\n           type=\"text\"\n           id=\"firstName\"\n           class=\"form-control\"/>\n\n    <label for=\"lastName\">\n      Last Name\n    </label>\n    <input [(ngModel)]=\"lastName\"\n           placeholder=\"Last Name\"\n           type=\"text\"\n           id=\"lastName\"\n           class=\"form-control\"/>\n    <label for=\"email\">\n      Email\n    </label>\n    <input [(ngModel)]=\"emailId\"\n           placeholder=\"abcd@gmail.com\"\n           type=\"text\"\n           id=\"email\"\n           class=\"form-control\"/>\n    <button class=\"btn btn-primary btn-block\" type=\"submit\"\n            (click)=\"createDriver(username, password, firstName, lastName, emailId)\">Add Driver</button>\n\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <label>Drivers</label>\n      </div>\n    </div>\n\n    <div>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <div class=\"row\" *ngFor=\"let driver of fetchDrivers()\">\n            <div class=\"col-xs-2\">\n              {{driver.firstName}}\n            </div>\n            <div class=\"col-xs-2\">\n              {{driver.lastName}}\n            </div>\n            <div class=\"col-xs-4\">\n              {{driver.emailId}}\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/driver-panel/driver-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_driver_service_client__ = __webpack_require__("../../../../../src/app/services/driver.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DriverPanelComponent = (function () {
    function DriverPanelComponent(userService, driverService, route, router) {
        this.userService = userService;
        this.driverService = driverService;
        this.route = route;
        this.router = router;
    }
    DriverPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.driverService.findAllDrivers()
                .subscribe(function (drivers) {
                _this.drivers = drivers;
            });
        });
    };
    DriverPanelComponent.prototype.fetchDrivers = function () {
        return this.drivers;
    };
    DriverPanelComponent.prototype.createDriver = function (username, password, firstName, lastName, emailId) {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__["a" /* User */]('', username, password, emailId, 'DRIVER');
        user.firstName = firstName;
        user.lastName = lastName;
        this.userService.createUser(user)
            .subscribe(function (ride1) {
            if (ride1) {
                _this.router.navigate(['/user/123/admin/driver-panel']);
            }
        });
    };
    return DriverPanelComponent;
}());
DriverPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-driver-panel',
        template: __webpack_require__("../../../../../src/app/components/admin/driver-panel/driver-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/driver-panel/driver-panel.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_driver_service_client__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_driver_service_client__["a" /* DriverService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], DriverPanelComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=driver-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/schedule-panel/schedule-edit/schedule-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/schedule-panel/schedule-edit/schedule-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user/123/admin/schedules']\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\n      </a>\n    </div>\n\n    <a class=\"navbar-brand\">\n      <b class=\"colorWhite\">EDIT RIDE</b>\n    </a>\n\n  </div>\n</nav>\n\n<div class=\"container fluid\">\n  <div class=\"form-group\">\n    <label for=\"vehicleNo\">\n      Vehicle No:\n    </label>\n    <input [(ngModel)]=\"vehicleNo\"\n           placeholder=\"Vehicle Number\"\n           type=\"text\"\n           id=\"vehicleNo\"\n           class=\"form-control\"/>\n\n    <div>\n      <label for=\"driver\">\n        Choose driver\n      </label>\n    </div>\n    <div>\n      <select id=\"driver\" class=\"form-control\">\n        <option value=\"driver1\">Driver1</option>\n        <option value=\"driver2\">Driver2</option>\n      </select>\n    </div>\n    <div>\n      <label for=\"departureTime\">\n        Departure Time\n      </label>\n    </div>\n    <div>\n      <input [(ngModel)]=\"departureTime\"\n             type=\"datetime-local\" id=\"departureTime\" name=\"departureTime\"\n             placeholder=\"HH:mm:ss\"/>\n    </div>\n\n    <div>\n      <label for=\"seatCount\">\n        Seat count\n      </label>\n    </div>\n    <div>\n      <input [(ngModel)]=\"seatCount\"\n             type=\"number\" id=\"seatCount\" name=\"seatCount\"\n             placeholder=\"9\" value=\"9\"/>\n    </div>\n\n    <div>\n      <label for=\"blockedSeat\">\n        Blocked Seat\n      </label>\n    </div>\n    <div>\n      <input [(ngModel)]=\"blockedCount\"\n             type=\"number\" id=\"Blockedseat\" name=\"blockedSeat\"\n             placeholder=\"1\" value=\"1\"/>\n    </div>\n\n    <button class=\"btn btn-primary btn-block\" type=\"submit\"\n            (click)=\"updateRide(departureTime, _driver, vehicleNo, seatCount, blockedCount)\">Update Ride\n    </button>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\"></nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/schedule-panel/schedule-edit/schedule-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_ride_model_client__ = __webpack_require__("../../../../../src/app/models/ride.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ride_service_client__ = __webpack_require__("../../../../../src/app/services/ride.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_home_service_client__ = __webpack_require__("../../../../../src/app/services/home.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScheduleEditComponent = (function () {
    function ScheduleEditComponent(rideService, route, homeService, router) {
        this.rideService = rideService;
        this.route = route;
        this.homeService = homeService;
        this.router = router;
    }
    ScheduleEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.rideId = params['rid'];
            _this.rideService.findRideById(_this.rideId)
                .subscribe(function (ride) {
                _this.ride = ride;
                _this.departureTime = _this.ride.departure_time;
                _this._driver = _this.ride._driver;
                _this.seatCount = _this.ride.seat_count;
                _this.blockedCount = _this.ride.blocked_seats;
                _this.vehicleNo = _this.ride.vehicle_no;
            });
            _this.homeService.findAllRides()
                .subscribe(function (rides) {
                _this.rides = rides;
                console.log(rides);
            });
        });
    };
    ScheduleEditComponent.prototype.updateRide = function (departureTime, _driver, vehicleNo, seatCount, blockedCount) {
        var _this = this;
        var ride = new __WEBPACK_IMPORTED_MODULE_1__models_ride_model_client__["a" /* Ride */](this.rideId, departureTime, _driver);
        ride.seat_count = seatCount;
        ride.blocked_seats = blockedCount;
        ride._driver = 'driver_id';
        ride.delay = 0;
        ride.origin = '';
        ride.status = '';
        ride.destination = '';
        ride.vehicle_no = vehicleNo;
        this.rideService.updateRide(this.rideId, ride)
            .subscribe(function (ride1) {
            if (ride1) {
                _this.router.navigate(['/user/123/admin/schedules']);
            }
        });
    };
    return ScheduleEditComponent;
}());
ScheduleEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-schedule-edit',
        template: __webpack_require__("../../../../../src/app/components/admin/schedule-panel/schedule-edit/schedule-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/schedule-panel/schedule-edit/schedule-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_ride_service_client__["a" /* RideService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_ride_service_client__["a" /* RideService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_home_service_client__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_home_service_client__["a" /* HomeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ScheduleEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=schedule-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/schedule-panel/schedule-list/schedule-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/schedule-panel/schedule-list/schedule-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left vertical-center\">\n      <a [routerLink]=\"['/rides-list']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left nav-foreground\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header\">\n      <a class=\"navbar-brand thick\">\n        <b class=\"nav-foreground\">SCHEDULES</b>\n      </a>\n    </p>\n\n    <!--hamburger to open rides in list form-->\n    <p class=\"navbar-text pull-right vertical-center\">\n      <a [routerLink]=\"['/user/123/admin/schedules/new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus nav-foreground\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <label>Rides</label>\n    </div>\n  </div>\n\n  <div>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <div class=\"row\" *ngFor=\"let ride of fetchRides()\">\n          <div class=\"col-xs-2\">\n            {{ride._driver}}\n          </div>\n          <div class=\"col-xs-2\">\n            {{ride.departure_time}}\n          </div>\n          <div class=\"col-xs-4\">\n            {{ride.seat_count}}\n          </div>\n          <div class=\"col-xs-2\">\n            {{ride.blocked_seats}}\n          </div>\n          <a [routerLink]=\"['/user/123/admin/schedules', ride._id]\"\n             class=\"pull-right\">\n            <span class=\"glyphicon-cog glyphicon\"></span>\n          </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/myride']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-sunglasses nav-foreground\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-cog nav-foreground\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/schedule-panel/schedule-list/schedule-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ride_service_client__ = __webpack_require__("../../../../../src/app/services/ride.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_home_service_client__ = __webpack_require__("../../../../../src/app/services/home.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScheduleListComponent = (function () {
    function ScheduleListComponent(rideService, route, homeService, router) {
        this.rideService = rideService;
        this.route = route;
        this.homeService = homeService;
        this.router = router;
    }
    ScheduleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.homeService.findAllRides()
                .subscribe(function (rides) {
                _this.rides = rides;
                console.log(rides);
            });
        });
    };
    ScheduleListComponent.prototype.fetchRides = function () {
        return this.rides;
    };
    return ScheduleListComponent;
}());
ScheduleListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-schedule-list',
        template: __webpack_require__("../../../../../src/app/components/admin/schedule-panel/schedule-list/schedule-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/schedule-panel/schedule-list/schedule-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ride_service_client__["a" /* RideService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_ride_service_client__["a" /* RideService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_home_service_client__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_home_service_client__["a" /* HomeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ScheduleListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=schedule-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/schedule-panel/schedule-new/schedule-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/schedule-panel/schedule-new/schedule-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user/123/admin/schedules']\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\n      </a>\n    </div>\n\n    <a class=\"navbar-brand\">\n      <b class=\"colorWhite\">NEW RIDE</b>\n    </a>\n\n  </div>\n</nav>\n\n<div class=\"container fluid\">\n  <div class=\"form-group\">\n    <label for=\"vehicleNo\">\n      Vehicle No:\n    </label>\n    <input [(ngModel)]=\"vehicleNo\"\n           placeholder=\"Vehicle Number\"\n           type=\"text\"\n           id=\"vehicleNo\"\n           class=\"form-control\"/>\n\n    <div>\n      <label for=\"driver\">\n        Choose driver\n      </label>\n    </div>\n    <div>\n      <select id=\"driver\" class=\"form-control\">\n        <option value=\"driver1\">Driver1</option>\n        <option value=\"driver2\">Driver2</option>\n      </select>\n    </div>\n    <div>\n      <label for=\"departureTime\">\n        Departure Time\n      </label>\n    </div>\n    <div>\n      <input [(ngModel)]=\"departureTime\"\n             type=\"datetime-local\" id=\"departureTime\" name=\"departureTime\"\n             placeholder=\"HH:mm:ss\"/>\n    </div>\n\n    <div>\n      <label for=\"seatCount\">\n        Seat count\n      </label>\n    </div>\n    <div>\n      <input [(ngModel)]=\"seatCount\"\n             type=\"number\" id=\"seatCount\" name=\"seatCount\"\n             placeholder=\"9\" value=\"9\"/>\n    </div>\n\n    <div>\n      <label for=\"blockedSeat\">\n        Blocked Seat\n      </label>\n    </div>\n    <div>\n      <input [(ngModel)]=\"blockedCount\"\n             type=\"number\" id=\"Blockedseat\" name=\"blockedSeat\"\n             placeholder=\"1\" value=\"1\"/>\n    </div>\n\n    <button class=\"btn btn-primary btn-block\" type=\"submit\"\n            (click)=\"createRide(departureTime, _driver, vehicleNo, seatCount, blockedCount)\">Add Ride\n    </button>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\"></nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/schedule-panel/schedule-new/schedule-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_ride_model_client__ = __webpack_require__("../../../../../src/app/models/ride.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ride_service_client__ = __webpack_require__("../../../../../src/app/services/ride.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_home_service_client__ = __webpack_require__("../../../../../src/app/services/home.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScheduleNewComponent = (function () {
    function ScheduleNewComponent(rideService, route, homeService, router) {
        this.rideService = rideService;
        this.route = route;
        this.homeService = homeService;
        this.router = router;
    }
    ScheduleNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.homeService.findAllRides()
                .subscribe(function (rides) {
                _this.rides = rides;
                console.log(rides);
            });
        });
    };
    ScheduleNewComponent.prototype.createRide = function (departureTime, _driver, vehicleNo, seatCount, blockedCount) {
        var _this = this;
        var ride = new __WEBPACK_IMPORTED_MODULE_1__models_ride_model_client__["a" /* Ride */]('', departureTime, _driver);
        ride.seat_count = seatCount;
        ride.blocked_seats = blockedCount;
        ride._driver = 'driver_id';
        ride.delay = 0;
        ride.origin = '';
        ride.status = '';
        ride.destination = '';
        ride.vehicle_no = vehicleNo;
        this.rideService.createRide(ride)
            .subscribe(function (ride1) {
            if (ride1) {
                _this.router.navigate(['/user/123/admin/schedules']);
            }
        });
    };
    return ScheduleNewComponent;
}());
ScheduleNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-schedule-new',
        template: __webpack_require__("../../../../../src/app/components/admin/schedule-panel/schedule-new/schedule-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/schedule-panel/schedule-new/schedule-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_ride_service_client__["a" /* RideService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_ride_service_client__["a" /* RideService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_home_service_client__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_home_service_client__["a" /* HomeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ScheduleNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=schedule-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/schedule-panel/schedule-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropbtn {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 16px;\r\n  font-size: 16px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f9f9f9;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.dropdown-content a:hover {background-color: #f1f1f1}\r\n\r\n.dropdown:hover .dropdown-content {\r\n  display: block;\r\n}\r\n\r\n.dropdown:hover .dropbtn {\r\n  background-color: #3e8e41;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/schedule-panel/schedule-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"tab\">\n    <button class=\"tablinks\">Schedule</button>\n    <button class=\"tablinks\" [routerLink]=\"['/user/123/admin/driver-panel']\">Driver</button>\n    <button class=\"tablinks\" [routerLink]=\"['/user/123/admin/setting-panel']\">Settings</button>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"vehicleNo\">\n      Vehicle No:\n    </label>\n    <input [(ngModel)]=\"vehicleNo\"\n           placeholder=\"Vehicle Number\"\n           type=\"text\"\n           id=\"vehicleNo\"\n           class=\"form-control\"/>\n\n    <div>\n      <label for=\"driver\">\n        Choose driver\n      </label>\n    </div>\n    <div>\n      <select id=\"driver\" class=\"form-control\">\n        <option value=\"driver1\">Driver1</option>\n        <option value=\"driver2\">Driver2</option>\n      </select>\n    </div>\n    <div>\n      <label for=\"departureTime\">\n        Departure Time\n      </label>\n    </div>\n    <div>\n      <input [(ngModel)]=\"departureTime\"\n             type=\"datetime-local\" id=\"departureTime\" name=\"departureTime\"\n             placeholder=\"HH:mm:ss\"/>\n    </div>\n\n    <div>\n      <label for=\"seatCount\">\n        Seat count\n      </label>\n    </div>\n    <div>\n      <input [(ngModel)]=\"seatCount\"\n             type=\"number\" id=\"seatCount\" name=\"seatCount\"\n             placeholder=\"9\" value=\"9\"/>\n    </div>\n\n    <div>\n      <label for=\"blockedSeat\">\n        Blocked Seat\n      </label>\n    </div>\n    <div>\n      <input [(ngModel)]=\"blockedCount\"\n             type=\"number\" id=\"Blockedseat\" name=\"blockedSeat\"\n             placeholder=\"1\" value=\"1\"/>\n    </div>\n\n    <button class=\"btn btn-primary btn-block\" type=\"submit\"\n            (click)=\"createRide(departureTime, _driver, vehicleNo, seatCount, blockedCount)\">Add Ride</button>\n\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <label>Rides</label>\n      </div>\n    </div>\n\n    <div>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <div class=\"row\" *ngFor=\"let ride of fetchRides()\">\n            <div class=\"col-xs-2\">\n              {{ride._id}}\n            </div>\n            <div class=\"col-xs-2\">\n              {{ride._driver}}\n            </div>\n            <div class=\"col-xs-4\">\n              {{ride.departure_time}}\n            </div>\n            <div class=\"col-xs-2\">\n              {{ride.seat_count}}\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/schedule-panel/schedule-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_home_service_client__ = __webpack_require__("../../../../../src/app/services/home.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ride_model_client__ = __webpack_require__("../../../../../src/app/models/ride.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ride_service_client__ = __webpack_require__("../../../../../src/app/services/ride.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SchedulePanelComponent = (function () {
    function SchedulePanelComponent(rideService, route, homeService, router) {
        this.rideService = rideService;
        this.route = route;
        this.homeService = homeService;
        this.router = router;
    }
    SchedulePanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.homeService.findAllRides()
                .subscribe(function (rides) {
                _this.rides = rides;
                console.log(rides);
            });
        });
    };
    SchedulePanelComponent.prototype.fetchRides = function () {
        return this.rides;
    };
    SchedulePanelComponent.prototype.createRide = function (departureTime, _driver, vehicleNo, seatCount, blockedCount) {
        var _this = this;
        var ride = new __WEBPACK_IMPORTED_MODULE_3__models_ride_model_client__["a" /* Ride */]('', departureTime, _driver);
        ride.seat_count = seatCount;
        ride.blocked_seats = blockedCount;
        ride._driver = 'driver_id';
        ride.delay = 0;
        ride.origin = '';
        ride.status = '';
        ride.destination = '';
        ride.vehicle_no = vehicleNo;
        this.rideService.createRide(ride)
            .subscribe(function (ride1) {
            if (ride1) {
                _this.router.navigate(['/user/123/admin/schedule-panel']);
            }
        });
    };
    return SchedulePanelComponent;
}());
SchedulePanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-schedule-panel',
        template: __webpack_require__("../../../../../src/app/components/admin/schedule-panel/schedule-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/schedule-panel/schedule-panel.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_ride_service_client__["a" /* RideService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_ride_service_client__["a" /* RideService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_home_service_client__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_home_service_client__["a" /* HomeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], SchedulePanelComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=schedule-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/setting-panel/setting-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/setting-panel/setting-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"tab\">\n    <button class=\"tablinks\" [routerLink]=\"['/user/123/admin/schedule-panel']\">Schedule</button>\n    <button class=\"tablinks \" [routerLink]=\"['/user/123/admin/driver-panel']\">Driver</button>\n    <button class=\"tablinks\">Settings</button>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"origin\">\n      Origin\n    </label>\n    <input placeholder=\"Northeastern University\"\n           type=\"text\"\n           id=\"origin\"\n           class=\"form-control\"/>\n\n    <label for=\"destination\">\n      Destination\n    </label>\n    <input placeholder=\"Home address\"\n           type=\"text\"\n           id=\"destination\"\n           class=\"form-control\"/>\n    <button class=\"btn btn-primary btn-block\" type=\"submit\">Update</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/setting-panel/setting-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingPanelComponent = (function () {
    function SettingPanelComponent() {
    }
    SettingPanelComponent.prototype.ngOnInit = function () {
    };
    return SettingPanelComponent;
}());
SettingPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-setting-panel',
        template: __webpack_require__("../../../../../src/app/components/admin/setting-panel/setting-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/setting-panel/setting-panel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SettingPanelComponent);

//# sourceMappingURL=setting-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/apitest/apitest.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row_style{\r\n  margin: 10px;\r\n}\r\n.dropoff {\r\n  margin-top: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/apitest/apitest.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row_style\">\r\n    <h2>\r\n      Location Search API for Drop Off\r\n    </h2>\r\n  </div>\r\n  <div class = \"row dropoff\">\r\n    <div class=\"col-xs-12\">\r\n      <input placeholder=\"Dropoff Address\"\r\n             autocorrect=\"off\"\r\n             autocapitalize=\"off\"\r\n             spellcheck=\"off\"\r\n             type=\"text\"\r\n             name=\"dropoff\"\r\n             [(ngModel)]=\"dropoff\"\r\n             class=\"form-control\"\r\n             #search [formControl]=\"searchControl\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row dropoff\">\r\n    <div class=\"col-xs-12\">\r\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"16\" >\r\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"iconUrl\"></agm-marker>\r\n      </agm-map>\r\n    </div>\r\n  </div>\r\n  <div class=\"row dropoff\">\r\n    <div class=\"col-xs-12\">\r\n      <button type=\"button\" class=\"btn btn-success btn-block\" (click)=\"updateDropoff()\">Confirm Drop Off</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row_style\">\r\n    <h2>\r\n      Optimum Route Finder\r\n    </h2>\r\n  </div>\r\n  <app-shortestpath></app-shortestpath>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/apitest/apitest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApitestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApitestComponent = (function () {
    function ApitestComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
    }
    ApitestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.latitude = 42.3404957;
        this.longitude = -71.0878975;
        this.iconUrl = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
        this.dropoff = '360 Huntington Avenue, Boston, MA, United States';
        // create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.setCurrentPosition();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ['address']
            });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    // get the place result
                    // console.log(autocomplete);
                    var place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.dropoff = place.formatted_address;
                    _this.zoom = 12;
                });
            });
        });
    };
    ApitestComponent.prototype.updateDropoff = function () {
        alert(this.dropoff);
    };
    ApitestComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
            });
        }
    };
    return ApitestComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('search'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], ApitestComponent.prototype, "searchElementRef", void 0);
ApitestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-apitest',
        template: __webpack_require__("../../../../../src/app/components/apitest/apitest.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/apitest/apitest.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["c" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["c" /* MapsAPILoader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _c || Object])
], ApitestComponent);

var _a, _b, _c;
//# sourceMappingURL=apitest.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dropoff/dropoff.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dropoff/dropoff.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-1 col-sm-1\">\r\n        <div class=\"navbar-text\">\r\n          <a [routerLink]=\"['/user', userId]\"\r\n             class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-11 col-sm-11\">\r\n        <div class=\" navbar-header\">\r\n          <a class=\"navbar-brand\">\r\n            <b class=\"colorWhite\">My Drop Off</b>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div class = \"container\">\r\n  <div class = \"row dropoff\">\r\n    <div class=\"col-xs-12\">\r\n      <input placeholder=\"Dropoff Address\"\r\n             autocorrect=\"off\"\r\n             autocapitalize=\"off\"\r\n             spellcheck=\"off\"\r\n             type=\"text\"\r\n             name=\"dropoff\"\r\n             [(ngModel)]=\"dropoff\"\r\n             class=\"form-control\"\r\n             #search [formControl]=\"searchControl\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row dropoff\">\r\n    <div class=\"col-xs-12\">\r\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"16\" >\r\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"iconUrl\"></agm-marker>\r\n      </agm-map>\r\n    </div>\r\n  </div>\r\n  <div class=\"row dropoff\">\r\n    <div class=\"col-xs-12\">\r\n      <button type=\"button\" class=\"btn btn-success btn-block\" (click)=\"updateDropoff()\">Confirm Drop Off</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dropoff/dropoff.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropoffComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DropoffComponent = (function () {
    function DropoffComponent(userService, route, mapsAPILoader, ngZone) {
        this.userService = userService;
        this.route = route;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
    }
    DropoffComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.userService.findUserById(_this.userId)
                .subscribe(function (user) {
                _this.user = user;
                _this.username = user.username;
                _this.emailId = user.emailId;
                _this.firstName = user.firstName;
                _this.lastName = user.lastName;
                _this.type = user.role;
            });
        });
        // this.latitude = 42.3404957;
        // this.longitude = -71.0878975;
        this.iconUrl = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
        // create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        // set current position
        this.setCurrentPosition();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ['address']
            });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    // get the place result
                    // console.log(autocomplete);
                    var place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.dropoff = place.formatted_address;
                    _this.zoom = 12;
                });
            });
        });
    };
    DropoffComponent.prototype.updateDropoff = function () {
        var _this = this;
        // Remove this during final stages
        if (!this.userId) {
            return;
        }
        var tempUser = new __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__["a" /* User */](this.userId, this.username, this.user.password, this.emailId, this.type);
        this.userService
            .updateUser(this.userId, tempUser)
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    DropoffComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
            });
        }
    };
    return DropoffComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('search'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], DropoffComponent.prototype, "searchElementRef", void 0);
DropoffComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dropoff',
        template: __webpack_require__("../../../../../src/app/components/dropoff/dropoff.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dropoff/dropoff.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["c" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["c" /* MapsAPILoader */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _e || Object])
], DropoffComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=dropoff.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pickup/pickup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pickup {\r\n  margin-top: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n.gm-style div{color: #fff !important; font-weight: bold;}\r\n\r\n.colorWhite{\r\n  color: white;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pickup/pickup.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-2\">\r\n        <div class=\"navbar-text pull-left\">\r\n          <a [routerLink]=\"['/user', userId]\"\r\n             class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-10\">\r\n        <div class=\" navbar-header\">\r\n          <a class=\"navbar-brand\">\r\n            <b class=\"colorWhite\">My Pick Up</b>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div class = \"container\">\r\n  <div class = \"row pickup\">\r\n    <div class=\"col-xs-12\">\r\n      <input placeholder=\"Pickup Address\"\r\n             autocorrect=\"off\"\r\n             autocapitalize=\"off\"\r\n             spellcheck=\"off\"\r\n             type=\"text\"\r\n             disabled\r\n             name=\"pickup\"\r\n             [(ngModel)]=\"pickup\"\r\n             class=\"form-control\"\r\n             #search [formControl]=\"searchControl\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row pickup\">\r\n    <div class=\"col-xs-12\">\r\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"16\">\r\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"\r\n                    [iconUrl]=\"iconUrl\"></agm-marker>\r\n      </agm-map>\r\n    </div>\r\n  </div>\r\n  <div class=\"row pickup\">\r\n    <div class=\"col-xs-12\">\r\n      <button type=\"button\" *ngIf=\"false\" class=\"btn btn-primary btn-block\" (click)=\"updatePickup()\">Confirm Pick Up</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/pickup/pickup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PickupComponent = (function () {
    function PickupComponent(userService, route, mapsAPILoader, ngZone) {
        this.userService = userService;
        this.route = route;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.latitude = 42.340495;
        this.longitude = -71.0878;
        this.pickup = '360 Huntington Avenue, Boston, MA, United States';
    }
    PickupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.iconUrl = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
        // create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        // set current position
        this.setCurrentPosition();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ['address']
            });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    PickupComponent.prototype.updatePickup = function () {
        // Remove this during final stages
        if (!this.userId) {
            return;
        }
    };
    PickupComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
            });
        }
    };
    return PickupComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('search'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], PickupComponent.prototype, "searchElementRef", void 0);
PickupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pickup',
        template: __webpack_require__("../../../../../src/app/components/pickup/pickup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pickup/pickup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["c" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["c" /* MapsAPILoader */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _e || Object])
], PickupComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=pickup.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shortestpath/shortestpath.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-style {\r\n  margin-top: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n.colorWhite{\r\n  color: white;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shortestpath/shortestpath.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-4\">\r\n        <div class=\"navbar-text pull-left\">\r\n          <a [routerLink]=\"['/user', userId, 'driver']\"\r\n             class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-4\">\r\n        <div class=\" navbar-header\">\r\n          <a class=\"navbar-brand\">\r\n            <b class=\"colorWhite\">Ride</b>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div class = \"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <label>Ride Information:</label>\r\n      <label>{{this.rideId}}</label>\r\n    </div>\r\n  </div>\r\n  <div class = \"row row-style\">\r\n    <div class=\"col-xs-12\">\r\n      <input #search\r\n             placeholder=\"Add a Custom Dropoff Address\"\r\n             autocorrect=\"off\"\r\n             autocapitalize=\"off\"\r\n             spellcheck=\"off\"\r\n             type=\"text\"\r\n             name=\"search\"\r\n             class=\"form-control\"\r\n             disabled\r\n             [formControl]=\"searchControl\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <label>ORIGIN</label>\r\n    </div>\r\n    <div class=\"col-xs-6\">\r\n      <span>{{shuttleOrigin}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <label>DESTINATION</label>\r\n    </div>\r\n    <div class=\"col-xs-6\">\r\n      <span>{{shuttleDestination}}</span>\r\n    </div>\r\n  </div>\r\n  <hr />\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <label>STUDENTS</label>\r\n    </div>\r\n  </div>\r\n  <ul class=\"list-group\">\r\n    <li  class=\"list-group-item\" *ngFor=\"let queueSlot of queueSlots\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-2\">\r\n          {{queueSlot.student.firstName}}\r\n        </div>\r\n        <div class=\"col-xs-2\">\r\n          {{queueSlot.student.lastName}}\r\n        </div>\r\n        <div class=\"col-xs-4\">\r\n          {{queueSlot.dropoff_location}}\r\n        </div>\r\n        <div class=\"col-xs-2\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-xs\">Check In</button>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n  <div class=\"row row-style\">\r\n    <div class=\"col-xs-12\">\r\n      <button #findRoute\r\n              id=\"findRoute\"\r\n              type=\"button\"\r\n              class=\"btn btn-primary btn-block\"\r\n              (click)=\"findOptimumRoute()\">Find Shortest Route</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row row-style\">\r\n    <div class=\"col-xs-12\">\r\n      <agm-map id=\"map\"\r\n               [latitude]=\"latitude\"\r\n               [longitude]=\"longitude\"\r\n               [scrollwheel]=\"false\"\r\n               [zoom]=\"16\">\r\n      </agm-map>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/shortestpath/shortestpath.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortestpathComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_queueslot_service_client__ = __webpack_require__("../../../../../src/app/services/queueslot.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_queueslot_model_client__ = __webpack_require__("../../../../../src/app/models/queueslot.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShortestpathComponent = (function () {
    function ShortestpathComponent(mapsAPILoader, queueslotService, ngZone, route) {
        this.mapsAPILoader = mapsAPILoader;
        this.queueslotService = queueslotService;
        this.ngZone = ngZone;
        this.route = route;
        this.latitude = 42.3404957;
        this.longitude = -71.0878975;
        this.iconUrl = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
        this.shuttleOrigin = 'Snell Library, Huntington Avenue, Boston, MA';
        this.shuttleDestination = 'Snell Library, Huntington Avenue, Boston, MA';
        this.waypoints = [];
    }
    ShortestpathComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'] || '0';
            _this.rideId = params['rid'] || '0';
            // this.queueslotService
            // .findQueueSlotByRideId(this.rideId)
            // .subscribe((queueSlots: QueueSlot[]) => {
            // console.log(queueSlots);
            var dropoff_1 = '1179 Boylston St, Boston, MA 02215, USA';
            var user1 = new __WEBPACK_IMPORTED_MODULE_6__models_user_model_client__["a" /* User */]('', 'abc', 'q1', 'q1', 'STUDENT');
            user1.firstName = 'Nisarg';
            user1.lastName = 'Shah';
            var dropoff_2 = '75 Peterborough St, Boston, MA 02215, USA';
            var user2 = new __WEBPACK_IMPORTED_MODULE_6__models_user_model_client__["a" /* User */]('', 'q2', 'q2', 'q2', 'STUDENT');
            user2.firstName = 'Purva';
            user2.lastName = 'Kamat';
            var queueSlot1 = new __WEBPACK_IMPORTED_MODULE_5__models_queueslot_model_client__["a" /* QueueSlot */](user1._id, _this.rideId, dropoff_1);
            var queueSlot2 = new __WEBPACK_IMPORTED_MODULE_5__models_queueslot_model_client__["a" /* QueueSlot */](user2._id, _this.rideId, dropoff_2);
            _this.queueSlots = [];
            _this.queueSlots.push(queueSlot1);
            _this.queueSlots.push(queueSlot2);
            // console.log(this.queueSlots);
            for (var index = 0; index < _this.queueSlots.length; index++) {
                var temp = _this.queueSlots[index].dropoff_location;
                _this.addDropLocation(temp);
            }
            //
        });
        // create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        // set current position
        this.setCurrentPosition();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            // configure location search box
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ['address']
            });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                    _this.currentLocation = place.formatted_address;
                    // console.log(this.currentLocation);
                });
            });
        });
        this.agmMap.mapReady.subscribe(function (m) {
            _this.map = m;
        });
    };
    ShortestpathComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
            });
        }
    };
    ShortestpathComponent.prototype.addDropLocation = function (dropOffLocation) {
        if (dropOffLocation) {
            // console.log('Adding DropOffLocation: ' + dropOffLocation);
            this.waypoints.push({
                location: dropOffLocation,
                stopover: true
            });
            // console.log('testing');
            // console.log(this.waypoints);
        }
    };
    ShortestpathComponent.prototype.findOptimumRoute = function () {
        // console.log('map loaded');
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap(this.map);
        // console.log(directionsDisplay);
        directionsService.route({
            origin: this.shuttleOrigin,
            destination: this.shuttleDestination,
            waypoints: this.waypoints,
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.DRIVING
        }, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                // console.log(directionsDisplay);
                directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    return ShortestpathComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('search'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], ShortestpathComponent.prototype, "searchElementRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* AgmMap */]),
    __metadata("design:type", Object)
], ShortestpathComponent.prototype, "agmMap", void 0);
ShortestpathComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-shortestpath',
        template: __webpack_require__("../../../../../src/app/components/shortestpath/shortestpath.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shortestpath/shortestpath.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["c" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["c" /* MapsAPILoader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_queueslot_service_client__["a" /* QueueSlotService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_queueslot_service_client__["a" /* QueueSlotService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], ShortestpathComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=shortestpath.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/student/myride/myride.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/student/myride/myride.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <!--heading on the nav bar-->\r\n    <p class=\"navbar-header\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b class=\"nav-foreground\">MY RIDE</b>\r\n      </a>\r\n    </p>\r\n\r\n    <!--chevron-->\r\n    <p class=\"navbar-text pull-left vertical-center\">\r\n      <a [routerLink]=\"['/rides']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left nav-foreground\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class = \"row dropoff\">\r\n    <div class=\"col-xs-12\">\r\n      <input placeholder=\"Choose your dropoff location\"\r\n             autocorrect=\"off\"\r\n             autocapitalize=\"off\"\r\n             spellcheck=\"off\"\r\n             type=\"text\"\r\n             name=\"dropoff\"\r\n             [(ngModel)]=\"dropoff\"\r\n             class=\"form-control\"\r\n             #search [formControl]=\"searchControl\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row dropoff\">\r\n    <div class=\"col-xs-12\">\r\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"16\" >\r\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"iconUrl\"></agm-marker>\r\n      </agm-map>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row dropoff\">\r\n    <div class=\"col-xs-12\">\r\n      <button type=\"button\" class=\"btn btn-success btn-block\" (click)=\"locationConfirmed()\">\r\n        Confirm Drop Off Location\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-user nav-foreground\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/student/myride/myride.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyrideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_queueslot_service_client__ = __webpack_require__("../../../../../src/app/services/queueslot.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_queueslot_model_client__ = __webpack_require__("../../../../../src/app/models/queueslot.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyrideComponent = (function () {
    function MyrideComponent(mapsAPILoader, ngZone, router, sharedService, queueService) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.router = router;
        this.sharedService = sharedService;
        this.queueService = queueService;
        this.latitude = 42.3404957;
        this.longitude = -71.0878975;
        this.iconUrl = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
    }
    MyrideComponent.prototype.ngOnInit = function () {
        var _this = this;
        // create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        // set current position
        this.setCurrentPosition();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ['address']
            });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.dropOff = place.formatted_address;
                    _this.zoom = 12;
                });
            });
        });
    };
    MyrideComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
            });
        }
    };
    MyrideComponent.prototype.locationConfirmed = function () {
        var _this = this;
        var slot = new __WEBPACK_IMPORTED_MODULE_6__models_queueslot_model_client__["a" /* QueueSlot */]("", this.sharedService.addToRideId, this.dropOff);
        this.queueService.createQueueSlot(slot).subscribe(function (slot) {
            _this.router.navigate(['/rides']);
        });
    };
    return MyrideComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('search'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], MyrideComponent.prototype, "searchElementRef", void 0);
MyrideComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-myride',
        template: __webpack_require__("../../../../../src/app/components/student/myride/myride.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/student/myride/myride.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["c" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["c" /* MapsAPILoader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_queueslot_service_client__["a" /* QueueSlotService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_queueslot_service_client__["a" /* QueueSlotService */]) === "function" && _f || Object])
], MyrideComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=myride.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/student/rides-list/rides-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/student/rides-list/rides-list.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <!--heading on the nav bar-->\r\n    <p class=\"navbar-header\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b class=\"nav-foreground\">RIDES</b>\r\n      </a>\r\n    </p>\r\n\r\n    <!--chevron-->\r\n    <p class=\"navbar-text pull-left vertical-center\">\r\n      <a [routerLink]=\"['/rides']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left nav-foreground\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class=\"container\">\r\n  <ul class=\"list-group\">\r\n    <li *ngFor=\"let ride of rides\" class=\"list-group-item\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-3\">\r\n          <span>Departure Time</span>\r\n          <a [routerLink]=\"['/user', userId, 'driver', 'ride' , ride._id]\">{{ride.departure_time | date:'medium'}}</a>\r\n        </div>\r\n        <div class=\"col-xs-3\">\r\n          <span>Seat Count</span>\r\n          <span>{{ride.seat_count}}</span>\r\n        </div>\r\n        <div class=\"col-xs-3\">\r\n          <span>Status</span>\r\n          <span>{{ride.status}}</span>\r\n        </div>\r\n        <div class=\"col-xs-3\">\r\n          <span>Delay</span>\r\n          <span>{{ride.delay}}</span>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/myride']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-road nav-foreground\"></span>\r\n      </a>\r\n    </p>\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-user nav-foreground\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/student/rides-list/rides-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RidesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ride_service_client__ = __webpack_require__("../../../../../src/app/services/ride.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RidesListComponent = (function () {
    function RidesListComponent(rideService) {
        this.rideService = rideService;
    }
    RidesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rideService.getAllRides(10)
            .subscribe(function (rideList) {
            _this.rides = rideList;
        });
    };
    return RidesListComponent;
}());
RidesListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-rides-list',
        template: __webpack_require__("../../../../../src/app/components/student/rides-list/rides-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/student/rides-list/rides-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ride_service_client__["a" /* RideService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_ride_service_client__["a" /* RideService */]) === "function" && _a || Object])
], RidesListComponent);

var _a;
//# sourceMappingURL=rides-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/student/rides/rides.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousal-height{\r\n  height: 50pt;\r\n  vertical-align: middle;\r\n  margin-bottom: 0pt;\r\n  margin-top: -15pt;\r\n}\r\n\r\n.carousal-text{\r\n  text-align: center;\r\n  line-height: 50pt;\r\n}\r\n\r\n.leftRs {\r\n  border: none;\r\n  background: none;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  margin-left: 20px;\r\n  outline: none;\r\n}\r\n\r\n.rightRs {\r\n  border: none;\r\n  background: none;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  margin-right: 20px;\r\n  outline: none;\r\n}\r\n\r\n.responsive-image {\r\n  height: auto;\r\n  max-width: 200px;\r\n  margin: auto;\r\n  display: block;\r\n}\r\n\r\n.queue-slot-outer{\r\n  margin: 5pt;\r\n}\r\n\r\n.queue-slot-inner{\r\n  width: 120pt;\r\n  height: 30pt;\r\n  margin: auto;\r\n  border-style: groove;\r\n  border: 2pt solid lightgrey;\r\n  border-radius: 10px;\r\n}\r\n\r\n.queue{\r\n  list-style-type: none;\r\n  margin: auto;\r\n  width: auto;\r\n  height: auto;\r\n  padding: 0;\r\n}\r\n\r\n.add-button{\r\n  margin: 15pt;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/student/rides/rides.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--heading on the nav bar-->\r\n    <p class=\"navbar-header\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b class=\"nav-foreground\">RIDES</b>\r\n      </a>\r\n    </p>\r\n\r\n    <!--hamburger to open rides in list form-->\r\n    <p class=\"navbar-text pull-right vertical-center\">\r\n      <a [routerLink]=\"['/rides-list']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-align-justify nav-foreground\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <ngx-carousel [inputs]=\"carouselTile\"\r\n                  (onMove)=\"nextRide($event)\">\r\n\r\n      <ngx-tile class=\"carousal-height\" NgxCarouselItem *ngFor=\"let ride of carousel_rides\">\r\n        <div class=\"carousal-height\">\r\n          <h3 class=\"carousal-text\">{{ride.departure_time | date:\"hh:mm a\"}}</h3>\r\n        </div>\r\n      </ngx-tile>\r\n\r\n      <button NgxCarouselPrev class=\"leftRs vertical-center\">\r\n        <a class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n        </a>\r\n      </button>\r\n\r\n      <button NgxCarouselNext class=\"rightRs vertical-center\">\r\n        <a class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n        </a>\r\n      </button>\r\n    </ngx-carousel>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <img class=\"responsive-image\" src=\"../../../../assets/red_eye.png\">\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <ul class=\"queue\">\r\n      <li *ngFor=\"let slot of queue_slots\">\r\n        <div class=\"queue-slot-outer\">\r\n          <div class=\"queue-slot-inner\">\r\n            <img *ngIf=\"slot.occupied\" class=\"responsive-image\" width=\"35px\" src=\"../../../../assets/person.png\">\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"row add-button\">\r\n    <button class=\"btn btn-success btn-block\" (click)=\"addToQueue()\">ADD TO QUEUE</button>\r\n  </div>\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/myride']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-road nav-foreground\"></span>\r\n      </a>\r\n    </p>\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-user nav-foreground\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/student/rides/rides.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RidesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ride_service_client__ = __webpack_require__("../../../../../src/app/services/ride.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_queueslot_service_client__ = __webpack_require__("../../../../../src/app/services/queueslot.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RidesComponent = (function () {
    function RidesComponent(rideService, queueService, router, sharedService) {
        this.rideService = rideService;
        this.queueService = queueService;
        this.router = router;
        this.sharedService = sharedService;
        this.carousel_rides = [];
        this.queue_slots = [];
    }
    RidesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carouselTile = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            animation: 'lazy',
            point: {
                visible: false
            },
            load: 1,
            touch: true,
            easing: 'ease',
            loop: false
        };
        this.rideService.getAllRides(10)
            .subscribe(function (rideList) {
            _this.rides = rideList;
            var count = Math.min(4, rideList.length);
            for (var i = 0; i < count; i++) {
                _this.carousel_rides.push(_this.rides[i]);
            }
            _this.currentRide = 0;
            _this.fetchQueue();
        });
    };
    RidesComponent.prototype.nextRide = function (data) {
        this.currentRide = data.currentSlide;
        this.fetchQueue();
    };
    RidesComponent.prototype.fetchQueue = function () {
        var _this = this;
        var rideId = this.carousel_rides[this.currentRide]._id;
        var seatCount = this.carousel_rides[this.currentRide].seat_count;
        this.queue_slots = [];
        this.queueService.findQueueSlotsByRideId(rideId)
            .subscribe(function (queueSlots) {
            var occupied = queueSlots.length;
            for (var i = 0; i < seatCount; i++) {
                if (i < occupied)
                    _this.queue_slots.push({ 'occupied': true });
                else
                    _this.queue_slots.push({ 'occupied': false });
            }
        });
    };
    RidesComponent.prototype.addToQueue = function () {
        this.sharedService.addToRideId = this.carousel_rides[this.currentRide]._id;
        this.router.navigate(['/myride']);
    };
    return RidesComponent;
}());
RidesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-rides',
        template: __webpack_require__("../../../../../src/app/components/student/rides/rides.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/student/rides/rides.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ride_service_client__["a" /* RideService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_ride_service_client__["a" /* RideService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_queueslot_service_client__["a" /* QueueSlotService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_queueslot_service_client__["a" /* QueueSlotService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], RidesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=rides.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/driver/driver.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".colorWhite{\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/driver/driver.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-4 col-xs-offset-4\">\r\n        <div class=\" navbar-header\">\r\n          <a class=\"navbar-brand\">\r\n            <b class=\"colorWhite\">Dashboard</b>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-4\">\r\n        <div class=\"navbar-text pull-right\">\r\n          <a  class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-user colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <h2>My Rides</h2>\r\n      <ul class=\"list-group\">\r\n        <li *ngFor=\"let ride of rides\" class=\"list-group-item\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-3\">\r\n              <span>Departure Time</span>\r\n              <a [routerLink]=\"['/user', userId, 'driver', 'ride' , ride._id]\">{{ride.departure_time | date:'medium'}}</a>\r\n            </div>\r\n            <div class=\"col-xs-3\">\r\n              <span>Seat Count</span>\r\n              <span>{{ride.seat_count}}</span>\r\n            </div>\r\n            <div class=\"col-xs-3\">\r\n              <span>Status</span>\r\n              <span>{{ride.status}}</span>\r\n            </div>\r\n            <div class=\"col-xs-3\">\r\n              <span>Delay</span>\r\n              <span>{{ride.delay}}</span>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/driver/driver.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ride_model_client__ = __webpack_require__("../../../../../src/app/models/ride.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_driver_service_client__ = __webpack_require__("../../../../../src/app/services/driver.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DriverComponent = (function () {
    function DriverComponent(userService, driverService, route) {
        this.userService = userService;
        this.driverService = driverService;
        this.route = route;
    }
    DriverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.driverService
                .findRidesByUser(_this.userId)
                .subscribe(function (rides) {
                console.log(rides);
                var newRide = new __WEBPACK_IMPORTED_MODULE_2__models_ride_model_client__["a" /* Ride */]('123', new Date(new Date().getTime() - 2000000), '200');
                var newRide1 = new __WEBPACK_IMPORTED_MODULE_2__models_ride_model_client__["a" /* Ride */]('456', new Date(), '100');
                _this.rides = rides;
                _this.rides.push(newRide);
                _this.rides.push(newRide1);
            });
        });
    };
    return DriverComponent;
}());
DriverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-driver',
        template: __webpack_require__("../../../../../src/app/components/user/driver/driver.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/driver/driver.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_driver_service_client__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_driver_service_client__["a" /* DriverService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], DriverComponent);

var _a, _b, _c;
//# sourceMappingURL=driver.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".colorWhite{\r\n  color: white;\r\n}\r\n\r\n::before,::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.shuttle {\r\n  margin: 50px auto;\r\n  max-width: 500px;\r\n}\r\n\r\n.cockpit {\r\n  height: 100px;\r\n  position: relative;\r\n  overflow: hidden;\r\n  text-align: center;\r\n  border-bottom: 5px solid #a6ada1;\r\n}\r\n\r\n.cockpit::before {\r\n   content: \"\";\r\n   display: block;\r\n   position: absolute;\r\n   height: 200px;\r\n   width: 100%;\r\n   border-radius: 30px;\r\n   border-right: 5px solid #a6ada1;\r\n   border-left: 5px solid #a6ada1;\r\n }\r\n\r\n.cockpit h4 {\r\n  width: 100%;\r\n  margin: 50px auto 20px auto;\r\n}\r\n\r\n.entry {\r\n  position: relative;\r\n  height: 50px;\r\n}\r\n\r\n.entry::after {\r\n   content: \"ENTRY\";\r\n   font-size: 14px;\r\n   display: block;\r\n   position: absolute;\r\n   background: green;\r\n   color: white;\r\n   top: 30%;\r\n   right: 0;\r\n }\r\n\r\n.shuttle-body {\r\n  border-right: 5px solid #a6ada1;\r\n  border-left: 5px solid #a6ada1;\r\n}\r\n\r\nol {\r\n  list-style :none;\r\n  padding-left: 10px;\r\n  margin: 0;\r\n}\r\n\r\n.seats {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-wrap: nowrap;\r\n      flex-wrap: nowrap;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n}\r\n\r\n\r\n.seat {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 0;\r\n      -ms-flex: 0 0 32%;\r\n          flex: 0 0 32%;\r\n  padding: 5px;\r\n  position: relative;\r\n}\r\n\r\n.seat input[type=radio] {\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n\r\n.seat input[type=radio]:checked + label {\r\n  background: #9bef64;\r\n}\r\n\r\n.seat label {\r\n  display: block;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  padding-top: 25%;\r\n  background: #ef6464;\r\n  border-radius: 15px;\r\n}\r\n\r\n.seat label::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 75%;\r\n  height: 75%;\r\n  top: 0;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, 0%);\r\n          transform: translate(-50%, 0%);\r\n  background: rgba(255,255,255,.4);\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n}\r\n\r\n.seat label:hover {\r\n   cursor: pointer;\r\n   box-shadow: 0 0 0 2px #428BCA;\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-9\">\r\n        <div class=\"navbar-text pull-left\">\r\n          <a [routerLink]=\"['/user', userId, 'website']\"\r\n             class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\" navbar-header hidden-xs\">\r\n          <a class=\"navbar-brand\">\r\n            <b class=\"colorWhite\">Home</b>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"navbar-text pull-right hidden-xs\">\r\n          <a class=\"navbar-link\">\r\n            <a [routerLink]=\"['/user', userId]\"><span class=\"glyphicon glyphicon-user colorWhite\"></span></a>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-3\">\r\n        <a class=\"navbar-brand\">\r\n          <b class=\"colorWhite\">Schedules</b>\r\n        </a>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"col-sm-9\">\r\n    <div class=\"shuttle\">\r\n      <div class=\"cockpit\">\r\n        <h4>Please select a seat</h4>\r\n      </div>\r\n      <div class=\"entry shuttle-body\">\r\n      </div>\r\n      <ol class=\"cabin shuttle-body\">\r\n        <li class=\"row\">\r\n          <ol class=\"seats\" type=\"A\">\r\n            <li class=\"seat\">\r\n              <input type=\"radio\" name=\"seat\" id=\"1A\"/>\r\n              <label for=\"1A\">1A</label>\r\n            </li>\r\n            <li class=\"seat\">\r\n              <input type=\"radio\" name=\"seat\" id=\"1B\"/>\r\n              <label for=\"1B\">1B</label>\r\n            </li>\r\n            <li class=\"seat\">\r\n              <input type=\"radio\" name=\"seat\" id=\"1C\"/>\r\n              <label for=\"1C\">1C</label>\r\n            </li>\r\n          </ol>\r\n        </li>\r\n        <li class=\"row\">\r\n          <ol class=\"seats\" type=\"A\">\r\n            <li class=\"seat\">\r\n              <input type=\"radio\" name=\"seat\" id=\"2A\"/>\r\n              <label for=\"2A\">2A</label>\r\n            </li>\r\n            <li class=\"seat\">\r\n              <input type=\"radio\" name=\"seat\" id=\"2B\"/>\r\n              <label for=\"2B\">2B</label>\r\n            </li>\r\n            <li class=\"seat\">\r\n              <input type=\"radio\" name=\"seat\" id=\"2C\"/>\r\n              <label for=\"2C\">2C</label>\r\n            </li>\r\n          </ol>\r\n        </li>\r\n        <li class=\"row\">\r\n          <ol class=\"seats\" type=\"A\">\r\n            <li class=\"seat\">\r\n              <input type=\"radio\" name=\"seat\" id=\"3A\"/>\r\n              <label for=\"3A\">3A</label>\r\n            </li>\r\n            <li class=\"seat\">\r\n              <input type=\"radio\" name=\"seat\" id=\"3B\"/>\r\n              <label for=\"3B\">3B</label>\r\n            </li>\r\n            <li class=\"seat\">\r\n              <input type=\"radio\" name=\"seat\" id=\"3C\"/>\r\n              <label for=\"3C\">3C</label>\r\n            </li>\r\n          </ol>\r\n        </li>\r\n      </ol>\r\n    </div>\r\n\r\n    <button class=\"btn btn-primary btn-block\" type=\"submit\">Confirm Ride</button>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-sm-3\">\r\n    <ul class=\"list-group\">\r\n      <div *ngFor=\"let ride of fetchRides()\">\r\n        <li class=\"list-group-item\">\r\n          <a href=\"#\">{{ride.departure_time}}</a>\r\n        </li>\r\n      </div>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_home_service_client__ = __webpack_require__("../../../../../src/app/services/home.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(userService, route, homeService) {
        this.userService = userService;
        this.route = route;
        this.homeService = homeService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.userService.findUserById(_this.userId)
                .subscribe(function (user) {
                _this.user = user;
                _this.username = user.username;
                _this.emailId = user.emailId;
                _this.firstName = user.firstName;
                _this.lastName = user.lastName;
                _this.type = user.role;
            });
            _this.homeService.findAllRides()
                .subscribe(function (rides) {
                _this.rides = rides;
            });
        });
    };
    HomeComponent.prototype.fetchRides = function () {
        return this.rides;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/user/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_home_service_client__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_home_service_client__["a" /* HomeService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-elements {\r\n  margin-bottom: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\r\n    {{errorMsg}}\r\n  </div>\r\n  <h1>Login</h1>\r\n  <form (ngSubmit)=\"login()\" #form=\"ngForm\">\r\n    <input type=\"text\" class=\"form-control login-elements\" placeholder=\"username\" name=\"username\" ngModel required\r\n           #username=\"ngModel\"/>\r\n    <span class=\"errorMessage\" *ngIf=\"!username.valid && username.touched\">\r\n            Please enter valid username\r\n    </span>\r\n    <input type=\"password\" class=\"form-control login-elements\" placeholder=\"password\" name=\"password\" ngModel\r\n           required  #password=\"ngModel\"/>\r\n    <span class=\"errorMessage\" *ngIf=\"!password.valid && password.touched\">\r\n            Please enter valid password\r\n    </span>\r\n    <button class=\"btn btn-primary btn-block login-elements\" type=\"submit\" [disabled]=\"!form.valid\">Login</button>\r\n    <button class=\"btn btn-success btn-block login-elements\" type=\"submit\" [routerLink]=\"['/register']\">Register</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Please enter valid username and password';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
    };
    // Form Metod
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            // console.log(user);
            if (user && user.role === 'STUDENT') {
                _this.router.navigate(['/user', user._id, 'home']);
            }
            else if (user && user.role === 'DRIVER') {
                _this.router.navigate(['/user', user._id, 'driver']);
            }
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('form'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".colorWhite{\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-4\">\r\n        <div class=\"navbar-text pull-left\">\r\n          <a [routerLink]=\"['/user', userId, 'home']\"\r\n             class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-4\">\r\n        <div class=\" navbar-header\">\r\n          <a class=\"navbar-brand\">\r\n            <b class=\"colorWhite\">Profile</b>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-4\">\r\n        <div class=\"navbar-text pull-right\">\r\n          <a  class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-ok colorWhite\"\r\n                  (click)=\"updateUser(username, emailId, firstName, lastName)\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-xs-12\">\r\n      <label for=\"username\">Type</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"type\" placeholder=\"username\" disabled=\"true\" [(ngModel)]=\"type\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-xs-12\">\r\n      <label for=\"username\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"username\" [(ngModel)]=\"username\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-xs-12\">\r\n      <label for=\"email\">Email Address</label>\r\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"emailid\" [(ngModel)]=\"emailId\" disabled=\"true\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-xs-12\">\r\n      <label for=\"first-name\">First Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"firstname\" [(ngModel)]=\"firstName\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-xs-12\">\r\n      <label for=\"last-name\">Last Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"lastname\" [(ngModel)]=\"lastName\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6 form-group\">\r\n      <a class = \"btn btn-success btn-block form-control\" [routerLink]=\"['/user', userId, 'pickup']\">Update PickUp</a>\r\n    </div>\r\n    <div class=\"col-xs-6 form-group\">\r\n      <a class = \"btn btn-success btn-block form-control\" [routerLink]=\"['/user', userId, 'dropoff']\">Update DropOff</a>\r\n    </div>\r\n  </div>\r\n  <a class = \"btn btn-danger btn-block form-control\" (click)=\"deleteUser(user._id)\">Delete</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.userService.findUserById(_this.userId)
                .subscribe(function (user) {
                _this.user = user;
                _this.username = user.username;
                _this.emailId = user.emailId;
                _this.firstName = user.firstName;
                _this.lastName = user.lastName;
                _this.type = user.role;
            });
        });
    };
    ProfileComponent.prototype.updateUser = function (userName, emailId, firstName, lastName) {
        var _this = this;
        var tempUser = new __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__["a" /* User */](this.userId, userName, this.user.password, this.emailId, this.type);
        tempUser.emailId = emailId;
        tempUser.firstName = firstName;
        tempUser.lastName = lastName;
        this.userService
            .updateUser(this.userId, tempUser)
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    ProfileComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService
            .deleteUser(this.userId)
            .subscribe(function (user) {
            _this.router.navigate(['/login']);
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".regitser-elements {\r\n  margin-top: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class = \"row regitser-elements\">\r\n    <div class = \"col-xs-12\">\r\n      <h1>Register</h1>\r\n    </div>\r\n  </div>\r\n  <div class = \"row regitser-elements\">\r\n    <div class = \"col-xs-12\">\r\n      <div class=\"radio\">\r\n        <div class = \"col-xs-4\">\r\n          <label><input type=\"radio\" value=\"STUDENT\" [(ngModel)]=\"type\" name=\"userType\">Student</label>\r\n        </div>\r\n        <div class = \"col-xs-4\">\r\n          <label><input type=\"radio\" value=\"DRIVER\" [(ngModel)]=\"type\" name=\"userType\">Driver</label>\r\n        </div>\r\n        <div class = \"col-xs-4\">\r\n          <label><input type=\"radio\" value=\"NUPD\" [(ngModel)]=\"type\" name=\"userType\">NUPD</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class = \"row regitser-elements\">\r\n    <div class = \"col-xs-12\">\r\n      <input placeholder=\"username\" type=\"text\"class=\"form-control\" [(ngModel)]=\"username\"/>\r\n    </div>\r\n  </div>\r\n  <div class = \"row regitser-elements\">\r\n    <div class = \"col-xs-12\">\r\n      <input placeholder=\"Email Address\" type=\"email\" class=\"form-control\" [(ngModel)]=\"emailId\"/>\r\n    </div>\r\n  </div>\r\n  <div class = \"row regitser-elements\">\r\n    <div class = \"col-xs-12\">\r\n      <input placeholder=\"password\" type=\"password\" class=\"form-control\" [(ngModel)]=\"password\"/>\r\n    </div>\r\n  </div>\r\n  <div class = \"row regitser-elements\">\r\n    <div class = \"col-xs-12\">\r\n      <input placeholder=\"verify password\" type=\"password\" class=\"form-control\" [(ngModel)]=\"verifyPassword\"/>\r\n    </div>\r\n  </div>\r\n  <div class = \"row regitser-elements\">\r\n    <div class = \"col-xs-12\">\r\n      <a class=\"btn btn-primary btn-block\" (click)=\"createUser(username, password, verifyPassword, emailId, type)\">\r\n        Register</a>\r\n    </div>\r\n  </div>\r\n  <div class = \"row regitser-elements\">\r\n    <div class = \"col-xs-12\">\r\n      <a class=\"btn btn-danger btn-block\" [routerLink]=\"['/login']\">Cancel</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row errorBlock\" [hidden]=\"!showError\">\r\n    <div class = \"col-sm-8 col-xs-11 col-sm-offset-4 col-xs-offset-1\">\r\n      <span class=\"errorMessage\">Please enter Username and Passwords</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = __WEBPACK_IMPORTED_MODULE_1__models_user_model_client__["a" /* User */];
        this.dropoff = '360 Huntington Avenue, Boston, MA, United States';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.showError = false;
    };
    RegisterComponent.prototype.createUser = function (username, password, verifyPassword, emailId, type) {
        var _this = this;
        // console.log(type);
        this.username = username;
        this.password = password;
        this.verifyPassword = verifyPassword;
        this.emailId = emailId;
        if (password === verifyPassword) {
            var tempUser_1 = new __WEBPACK_IMPORTED_MODULE_1__models_user_model_client__["a" /* User */]('', username, password, emailId, type);
            this.userService
                .findUserByUsername(username)
                .subscribe(function (user) {
                if (user === null) {
                    _this.userService
                        .createUser(tempUser_1)
                        .subscribe(function (newUser) {
                        _this.user = newUser;
                        console.log(_this.user);
                    });
                }
                else {
                    _this.showError = true;
                    return;
                }
                _this.router.navigate(['/login']);
            });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/queueslot.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueSlot; });
var QueueSlot = (function () {
    function QueueSlot(student, ride, location) {
        this._student = student;
        this._ride = ride;
        this.dropoff_location = location;
    }
    return QueueSlot;
}());

//# sourceMappingURL=queueslot.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/ride.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ride; });
var Ride = (function () {
    function Ride(_id, departure_time, _driver) {
        this._id = _id;
        this.departure_time = departure_time;
        this._driver = _driver;
    }
    return Ride;
}());

//# sourceMappingURL=ride.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, username, password, emailId, role) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.emailId = emailId;
        this.role = role;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/driver.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriverService = (function () {
    function DriverService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    DriverService.prototype.findRidesByUser = function (userId) {
        var url = this.baseUrl + '/api/rides/driver/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    DriverService.prototype.findAllDrivers = function () {
        var url = this.baseUrl + '/api/drivers';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return DriverService;
}());
DriverService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DriverService);

var _a;
//# sourceMappingURL=driver.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/home.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    HomeService.prototype.findAllRides = function () {
        var url = this.baseUrl + '/api/rides/10';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return HomeService;
}());
HomeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], HomeService);

var _a;
//# sourceMappingURL=home.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/queueslot.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueSlotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QueueSlotService = (function () {
    function QueueSlotService(http) {
        this.http = http;
        this.baseURLRide = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + '/api/rideQueue';
        this.baseURLQueue = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + '/api/queue';
    }
    QueueSlotService.prototype.createQueueSlot = function (queueSlot) {
        var url = this.baseURLQueue;
        console.log(url);
        console.log(queueSlot);
        return this.http.post(url, queueSlot)
            .map(function (response) {
            return response.json();
        });
    };
    QueueSlotService.prototype.findQueueSlotsByRideId = function (rideId) {
        var url = this.baseURLRide + '/' + rideId + '/queue';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return QueueSlotService;
}());
QueueSlotService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], QueueSlotService);

var _a;
//# sourceMappingURL=queueslot.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/ride.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RideService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RideService = (function () {
    function RideService(http) {
        this.http = http;
        this.baseURL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + '/api/ride';
        this.baseURLRides = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + '/api/rides';
    }
    RideService.prototype.createRide = function (user) {
        var url = this.baseURL;
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    RideService.prototype.findRideById = function (rideId) {
        var url = this.baseURL + '/' + rideId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    RideService.prototype.getAllRides = function (count) {
        return this.http.get(this.baseURLRides + '/' + count).map(function (response) {
            return response.json();
        });
    };
    RideService.prototype.updateRide = function (rideId, ride) {
        var url = this.baseURL + rideId;
        return this.http.put(url, ride)
            .map(function (response) {
            return response.json();
        });
    };
    return RideService;
}());
RideService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], RideService);

var _a;
//# sourceMappingURL=ride.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + '/api/user/';
        console.log(user);
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + '/api/user?username=' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map