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

module.exports = "<router-outlet></router-outlet>\n"

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
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyAh8OY5Iqf02wY21IRqNkYP1AcqIvmSavI',
                libraries: ['places']
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_13__services_user_service_client__["a" /* UserService */]],
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








var APP_ROUTES = [
    { path: 'apitest', component: __WEBPACK_IMPORTED_MODULE_4__components_apitest_apitest_component__["a" /* ApitestComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/home', component: __WEBPACK_IMPORTED_MODULE_5__components_user_home_home_component__["a" /* HomeComponent */] },
    { path: 'user/:uid/pickup', component: __WEBPACK_IMPORTED_MODULE_6__components_pickup_pickup_component__["a" /* PickupComponent */] },
    { path: 'user/:uid/dropoff', component: __WEBPACK_IMPORTED_MODULE_7__components_dropoff_dropoff_component__["a" /* DropoffComponent */] }
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/apitest/apitest.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row_style{\n  margin: 10pt;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/apitest/apitest.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row_style\">\n    <h2>\n      Location Search API for Drop Off\n    </h2>\n  </div>\n  <app-pickup></app-pickup>\n  <div class=\"row_style\">\n    <h2>\n      Location Search API for Pick Up\n    </h2>\n  </div>\n  <app-dropoff></app-dropoff>\n  <div class=\"row_style\">\n    <h2>\n      Optimum Route Finder\n    </h2>\n  </div>\n  <app-shortestpath></app-shortestpath>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/apitest/apitest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApitestComponent; });
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

var ApitestComponent = (function () {
    function ApitestComponent() {
    }
    ApitestComponent.prototype.ngOnInit = function () {
    };
    return ApitestComponent;
}());
ApitestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-apitest',
        template: __webpack_require__("../../../../../src/app/components/apitest/apitest.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/apitest/apitest.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ApitestComponent);

//# sourceMappingURL=apitest.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dropoff/dropoff.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropoff {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dropoff/dropoff.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <div class = \"row dropoff\">\n    <div class=\"col-xs-12\">\n      <input placeholder=\"Dropoff Address\"\n             autocorrect=\"off\"\n             autocapitalize=\"off\"\n             spellcheck=\"off\"\n             type=\"text\"\n             name=\"dropoff\"\n             [(ngModel)]=\"dropoff\"\n             class=\"form-control\"\n             #search [formControl]=\"searchControl\">\n    </div>\n  </div>\n  <div class=\"row dropoff\">\n    <div class=\"col-xs-12\">\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"16\" >\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"iconUrl\"></agm-marker>\n      </agm-map>\n    </div>\n  </div>\n  <div class=\"row dropoff\">\n    <div class=\"col-xs-12\">\n      <button type=\"button\" class=\"btn btn-success btn-block\" (click)=\"updateDropoff()\">Confirm Drop Off</button>\n    </div>\n  </div>\n</div>\n"

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
                _this.type = user.type;
                _this.pickup = user.pickup;
                _this.dropoff = user.dropoff;
                _this.latitude = user.latitude;
                _this.longitude = user.longitude;
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
        var tempUser = new __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__["a" /* User */](this.userId, this.username, this.user.password, this.emailId, this.type, this.pickup, this.dropoff);
        tempUser.latitude = this.latitude;
        tempUser.longitude = this.longitude;
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
exports.push([module.i, ".pickup {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n.gm-style div{color: #fff !important; font-weight: bold;}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pickup/pickup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <div class = \"row pickup\">\n    <div class=\"col-xs-12\">\n      <input placeholder=\"Pickup Address\"\n             autocorrect=\"off\"\n             autocapitalize=\"off\"\n             spellcheck=\"off\"\n             type=\"text\"\n             disabled\n             name=\"pickup\"\n             [(ngModel)]=\"pickup\"\n             class=\"form-control\"\n             #search [formControl]=\"searchControl\">\n    </div>\n  </div>\n  <div class=\"row pickup\">\n    <div class=\"col-xs-12\">\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"16\">\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"\n                    [iconUrl]=\"iconUrl\"></agm-marker>\n      </agm-map>\n    </div>\n  </div>\n  <div class=\"row pickup\">\n    <div class=\"col-xs-12\">\n      <button type=\"button\" *ngIf=\"false\" class=\"btn btn-primary btn-block\" (click)=\"updatePickup()\">Confirm Pick Up</button>\n    </div>\n  </div>\n</div>\n\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
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
    }
    PickupComponent.prototype.ngOnInit = function () {
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
                _this.type = user.type;
                _this.pickup = user.pickup;
                _this.dropoff = user.dropoff;
                _this.latitude = 42.340495;
                _this.longitude = -71.0878;
            });
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
                    _this.pickup = place.formatted_address;
                    _this.zoom = 12;
                });
            });
        });
    };
    PickupComponent.prototype.updatePickup = function () {
        var _this = this;
        // Remove this during final stages
        if (!this.userId) {
            return;
        }
        console.log(this.pickup);
        var tempUser = new __WEBPACK_IMPORTED_MODULE_5__models_user_model_client__["a" /* User */](this.userId, this.username, this.user.password, this.emailId, this.type, this.pickup, this.dropoff);
        this.userService
            .updateUser(this.userId, tempUser)
            .subscribe(function (user) {
            _this.user = user;
        });
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
exports.push([module.i, ".row-style {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shortestpath/shortestpath.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <div class = \"row row-style\">\n    <div class=\"col-xs-12\">\n      <input #search\n             placeholder=\"Dropoff Address\"\n             autocorrect=\"off\"\n             autocapitalize=\"off\"\n             spellcheck=\"off\"\n             type=\"text\"\n             name=\"search\"\n             class=\"form-control\"\n             [formControl]=\"searchControl\">\n    </div>\n  </div>\n  <div>\n    <h4>\n      ORIGIN: {{shuttleOrigin}}\n    </h4>\n    <h4>\n      DESTINATON: {{shuttleDestination}}\n    </h4>\n  </div>\n  <div>\n    <h4>\n      DROP POINTS:\n    </h4>\n    <ul>\n      <li *ngFor=\"let w of waypoints\">{{w.location}}</li>\n    </ul>\n  </div>\n  <div class=\"row row-style\">\n    <div class=\"col-xs-12\">\n      <agm-map id=\"map\"\n               [latitude]=\"latitude\"\n               [longitude]=\"longitude\"\n               [scrollwheel]=\"false\"\n               [zoom]=\"16\">\n      </agm-map>\n    </div>\n  </div>\n\n  <div class=\"row row-style\">\n    <div class=\"col-xs-6\">\n      <button #addDrop\n              id=\"addDrop\"\n              type=\"button\"\n              class=\"btn btn-success btn-block\"\n              (click)=\"addDropLocation()\">Add Drop Point</button>\n    </div>\n    <div class=\"col-xs-6\">\n      <button #findRoute\n              id=\"findRoute\"\n              type=\"button\"\n              class=\"btn btn-primary btn-block\"\n              (click)=\"findOptimumRoute()\">Find Shortest Route</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/shortestpath/shortestpath.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortestpathComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
    function ShortestpathComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.latitude = 42.3404957;
        this.longitude = -71.0878975;
        this.iconUrl = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
        this.shuttleOrigin = 'Snell Library, Huntington Avenue, Boston, MA';
        this.shuttleDestination = 'Snell Library, Huntington Avenue, Boston, MA';
        this.waypoints = [];
    }
    ShortestpathComponent.prototype.ngOnInit = function () {
        var _this = this;
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
                    console.log(_this.currentLocation);
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
    ShortestpathComponent.prototype.addDropLocation = function () {
        if (this.currentLocation != undefined) {
            this.waypoints.push({
                location: this.currentLocation,
                stopover: true
            });
            console.log(this.waypoints);
        }
    };
    ShortestpathComponent.prototype.findOptimumRoute = function () {
        console.log("map loaded");
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap(this.map);
        console.log(directionsDisplay);
        directionsService.route({
            origin: this.shuttleOrigin,
            destination: this.shuttleDestination,
            waypoints: this.waypoints,
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.DRIVING
        }, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                console.log(directionsDisplay);
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["c" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["c" /* MapsAPILoader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _c || Object])
], ShortestpathComponent);

var _a, _b, _c;
//# sourceMappingURL=shortestpath.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".colorWhite{\n  color: white;\n}\n\n::before,::after {\n  box-sizing: border-box;\n}\n\n.shuttle {\n  margin: 50px auto;\n  max-width: 500px;\n}\n\n.cockpit {\n  height: 100px;\n  position: relative;\n  overflow: hidden;\n  text-align: center;\n  border-bottom: 5px solid #a6ada1;\n}\n\n.cockpit::before {\n   content: \"\";\n   display: block;\n   position: absolute;\n   height: 200px;\n   width: 100%;\n   border-radius: 30px;\n   border-right: 5px solid #a6ada1;\n   border-left: 5px solid #a6ada1;\n }\n\n.cockpit h4 {\n  width: 100%;\n  margin: 50px auto 20px auto;\n}\n\n.entry {\n  position: relative;\n  height: 50px;\n}\n\n.entry::after {\n   content: \"ENTRY\";\n   font-size: 14px;\n   display: block;\n   position: absolute;\n   background: green;\n   color: white;\n   top: 30%;\n   right: 0;\n }\n\n.shuttle-body {\n  border-right: 5px solid #a6ada1;\n  border-left: 5px solid #a6ada1;\n}\n\nol {\n  list-style :none;\n  padding-left: 10px;\n  margin: 0;\n}\n\n.seats {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\n\n.seat {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 32%;\n          flex: 0 0 32%;\n  padding: 5px;\n  position: relative;\n}\n\n.seat input[type=radio] {\n  position: absolute;\n  opacity: 0;\n}\n\n.seat input[type=radio]:checked + label {\n  background: #9bef64;\n}\n\n.seat label {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100px;\n  text-align: center;\n  font-size: 20px;\n  padding-top: 25%;\n  background: #ef6464;\n  border-radius: 15px;\n}\n\n.seat label::before {\n  content: \"\";\n  position: absolute;\n  width: 75%;\n  height: 75%;\n  top: 0;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0%);\n          transform: translate(-50%, 0%);\n  background: rgba(255,255,255,.4);\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.seat label:hover {\n   cursor: pointer;\n   box-shadow: 0 0 0 2px #428BCA;\n }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-sm-9\">\n        <div class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/user', userId, 'website']\"\n             class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\n          </a>\n        </div>\n\n        <div class=\" navbar-header hidden-xs\">\n          <a class=\"navbar-brand\">\n            <b class=\"colorWhite\">Home</b>\n          </a>\n        </div>\n\n        <div class=\"navbar-text pull-right hidden-xs\">\n          <a class=\"navbar-link\">\n            <a [routerLink]=\"['/user', userId]\"><span class=\"glyphicon glyphicon-user colorWhite\"></span></a>\n          </a>\n        </div>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <a class=\"navbar-brand\">\n          <b class=\"colorWhite\">Schedules</b>\n        </a>\n      </div>\n\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"col-sm-9\">\n    <div class=\"shuttle\">\n      <div class=\"cockpit\">\n        <h4>Please select a seat</h4>\n      </div>\n      <div class=\"entry shuttle-body\">\n      </div>\n      <ol class=\"cabin shuttle-body\">\n        <li class=\"row\">\n          <ol class=\"seats\" type=\"A\">\n            <li class=\"seat\">\n              <input type=\"radio\" name=\"seat\" id=\"1A\"/>\n              <label for=\"1A\">1A</label>\n            </li>\n            <li class=\"seat\">\n              <input type=\"radio\" name=\"seat\" id=\"1B\"/>\n              <label for=\"1B\">1B</label>\n            </li>\n            <li class=\"seat\">\n              <input type=\"radio\" name=\"seat\" id=\"1C\"/>\n              <label for=\"1C\">1C</label>\n            </li>\n          </ol>\n        </li>\n        <li class=\"row\">\n          <ol class=\"seats\" type=\"A\">\n            <li class=\"seat\">\n              <input type=\"radio\" name=\"seat\" id=\"2A\"/>\n              <label for=\"2A\">2A</label>\n            </li>\n            <li class=\"seat\">\n              <input type=\"radio\" name=\"seat\" id=\"2B\"/>\n              <label for=\"2B\">2B</label>\n            </li>\n            <li class=\"seat\">\n              <input type=\"radio\" name=\"seat\" id=\"2C\"/>\n              <label for=\"2C\">2C</label>\n            </li>\n          </ol>\n        </li>\n        <li class=\"row\">\n          <ol class=\"seats\" type=\"A\">\n            <li class=\"seat\">\n              <input type=\"radio\" name=\"seat\" id=\"3A\"/>\n              <label for=\"3A\">3A</label>\n            </li>\n            <li class=\"seat\">\n              <input type=\"radio\" name=\"seat\" id=\"3B\"/>\n              <label for=\"3B\">3B</label>\n            </li>\n            <li class=\"seat\">\n              <input type=\"radio\" name=\"seat\" id=\"3C\"/>\n              <label for=\"3C\">3C</label>\n            </li>\n          </ol>\n        </li>\n      </ol>\n    </div>\n\n    <button class=\"btn btn-primary btn-block\" type=\"submit\">Confirm Ride</button>\n\n  </div>\n\n  <div class=\"col-sm-3\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <a href=\"#\">18:00</a>\n      </li>\n\n      <li class=\"list-group-item\">\n        <a href=\"#\">18:30</a>\n      </li>\n\n      <li class=\"list-group-item\">\n        <a href=\"#\">19:00</a>\n      </li>\n\n      <li class=\"list-group-item\">\n        <a href=\"#\">19:30</a>\n      </li>\n\n      <li class=\"list-group-item\">\n        <a href=\"#\">20:00</a>\n      </li>\n    </ul>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
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
    function HomeComponent(userService, route) {
        this.userService = userService;
        this.route = route;
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
                _this.type = user.type;
                _this.pickup = user.pickup;
                _this.dropoff = user.dropoff;
            });
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/user/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-elements {\n  margin-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>Login</h1>\n  <form (ngSubmit)=\"login()\" #form=\"ngForm\">\n    <input type=\"text\" class=\"form-control login-elements\" placeholder=\"username\" name=\"username\" ngModel required\n           #username=\"ngModel\"/>\n    <span class=\"errorMessage\" *ngIf=\"!username.valid && username.touched\">\n            Please enter valid username\n    </span>\n    <input type=\"password\" class=\"form-control login-elements\" placeholder=\"password\" name=\"password\" ngModel\n           required  #password=\"ngModel\"/>\n    <span class=\"errorMessage\" *ngIf=\"!password.valid && password.touched\">\n            Please enter valid password\n    </span>\n    <button class=\"btn btn-primary btn-block login-elements\" type=\"submit\" [disabled]=\"!form.valid\">Login</button>\n    <button class=\"btn btn-success btn-block login-elements\" type=\"submit\" [routerLink]=\"['/register']\">Register</button>\n  </form>\n</div>\n"

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
            if (user) {
                _this.router.navigate(['/user', user._id]);
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"form-group col-xs-12\">\n      <label for=\"username\">Type</label>\n      <input type=\"text\" class=\"form-control\" id=\"type\" placeholder=\"username\" disabled=\"true\" [(ngModel)]=\"type\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-xs-12\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"username\" [(ngModel)]=\"username\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-xs-12\">\n      <label for=\"email\">Email Address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"emailid\" [(ngModel)]=\"emailId\" disabled=\"true\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-xs-12\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"firstname\" [(ngModel)]=\"firstName\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-xs-12\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"lastname\" [(ngModel)]=\"lastName\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-6 form-group\">\n      <a class = \"btn btn-success btn-block form-control\" [routerLink]=\"['/user', userId, 'pickup']\">Update PickUp</a>\n    </div>\n    <div class=\"col-xs-6 form-group\">\n      <a class = \"btn btn-success btn-block form-control\" [routerLink]=\"['/user', userId, 'dropoff']\">Update DropOff</a>\n    </div>\n  </div>\n  <a class = \"btn btn-danger btn-block form-control\" (click)=\"deleteUser(user._id)\">Delete</a>\n</div>\n"

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
                _this.type = user.type;
                _this.pickup = user.pickup;
                _this.dropoff = user.dropoff;
            });
        });
    };
    ProfileComponent.prototype.updateUser = function (userName, emailId, firstName, lastName) {
        var _this = this;
        var tempUser = new __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__["a" /* User */](this.userId, userName, this.user.password, this.emailId, this.type, this.pickup, this.dropoff);
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
exports.push([module.i, ".regitser-elements {\n  margin-top: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <h1>Register</h1>\n    </div>\n  </div>\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <div class=\"radio\">\n        <div class = \"col-xs-4\">\n          <label><input type=\"radio\" value=\"STUDENT\" [(ngModel)]=\"type\" name=\"userType\">Student</label>\n        </div>\n        <div class = \"col-xs-4\">\n          <label><input type=\"radio\" value=\"DRIVER\" [(ngModel)]=\"type\" name=\"userType\">Driver</label>\n        </div>\n        <div class = \"col-xs-4\">\n          <label><input type=\"radio\" value=\"NUPD\" [(ngModel)]=\"type\" name=\"userType\">NUPD</label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <input placeholder=\"username\" type=\"text\"class=\"form-control\" [(ngModel)]=\"username\"/>\n    </div>\n  </div>\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <input placeholder=\"Email Address\" type=\"email\" class=\"form-control\" [(ngModel)]=\"emailId\"/>\n    </div>\n  </div>\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <input placeholder=\"password\" type=\"password\" class=\"form-control\" [(ngModel)]=\"password\"/>\n    </div>\n  </div>\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <input placeholder=\"verify password\" type=\"password\" class=\"form-control\" [(ngModel)]=\"verifyPassword\"/>\n    </div>\n  </div>\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <a class=\"btn btn-primary btn-block\" (click)=\"createUser(username, password, verifyPassword, emailId, type)\">\n        Register</a>\n    </div>\n  </div>\n  <div class = \"row regitser-elements\">\n    <div class = \"col-xs-12\">\n      <a class=\"btn btn-danger btn-block\" [routerLink]=\"['/login']\">Cancel</a>\n    </div>\n  </div>\n  <div class=\"row errorBlock\" [hidden]=\"!showError\">\n    <div class = \"col-sm-8 col-xs-11 col-sm-offset-4 col-xs-offset-1\">\n      <span class=\"errorMessage\">Please enter Username and Passwords</span>\n    </div>\n  </div>\n</div>\n"

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
        this.pickup = '360 Huntington Avenue, Boston, MA, United States';
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
            var tempUser_1 = new __WEBPACK_IMPORTED_MODULE_1__models_user_model_client__["a" /* User */]('', username, password, emailId, type, this.pickup, this.dropoff);
            tempUser_1.latitude = 42.3404;
            tempUser_1.longitude = -71.0878;
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

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, username, password, emailId, type, pickup, dropoff) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.emailId = emailId;
        this.type = type;
        this.pickup = pickup;
        this.dropoff = dropoff;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

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