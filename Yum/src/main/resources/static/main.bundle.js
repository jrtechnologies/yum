webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin-route.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRouteGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminRouteGuard = (function () {
    function AdminRouteGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AdminRouteGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.getLoggedInRole() === 'admin') {
            return true;
        }
        else {
            this.router.navigate(['/']);
        }
    };
    return AdminRouteGuard;
}());
AdminRouteGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AdminRouteGuard);

var _a, _b;
//# sourceMappingURL=admin-route.guard.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/admin/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_routing__ = __webpack_require__("../../../../../src/app/admin/admin.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_user_user_component__ = __webpack_require__("../../../../../src/app/admin/home/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_users_component__ = __webpack_require__("../../../../../src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__global_settings_global_settings_component__ = __webpack_require__("../../../../../src/app/admin/global-settings/global-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_admin_nav_admin_nav_component__ = __webpack_require__("../../../../../src/app/admin/shared/admin-nav/admin-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_route_guard__ = __webpack_require__("../../../../../src/app/admin/admin-route.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tinymce_directive__ = __webpack_require__("../../../../../src/app/admin/tinymce.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__admin_routing__["a" /* AdminRouting */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_user_user_component__["b" /* UserDisapproveDialog */],
            __WEBPACK_IMPORTED_MODULE_5__home_user_user_component__["c" /* UserDeleteConfirmDialog */],
            __WEBPACK_IMPORTED_MODULE_5__home_user_user_component__["d" /* UserDelete402Dialog */],
            __WEBPACK_IMPORTED_MODULE_5__home_user_user_component__["e" /* UserDelete409Dialog */],
            __WEBPACK_IMPORTED_MODULE_5__home_user_user_component__["f" /* UserDelete412Dialog */],
            __WEBPACK_IMPORTED_MODULE_5__home_user_user_component__["g" /* UserDelete412DisapprovedDialog */],
            __WEBPACK_IMPORTED_MODULE_7__users_users_component__["a" /* ResetPwdDialog */],
            __WEBPACK_IMPORTED_MODULE_7__users_users_component__["b" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_8__global_settings_global_settings_component__["a" /* GlobalSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__shared_admin_nav_admin_nav_component__["a" /* AdminNavComponent */],
            __WEBPACK_IMPORTED_MODULE_11__tinymce_directive__["a" /* TinymceDirective */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__remote__["AdminApi"], __WEBPACK_IMPORTED_MODULE_10__admin_route_guard__["a" /* AdminRouteGuard */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__home_user_user_component__["b" /* UserDisapproveDialog */],
            __WEBPACK_IMPORTED_MODULE_5__home_user_user_component__["c" /* UserDeleteConfirmDialog */],
            __WEBPACK_IMPORTED_MODULE_5__home_user_user_component__["d" /* UserDelete402Dialog */],
            __WEBPACK_IMPORTED_MODULE_5__home_user_user_component__["e" /* UserDelete409Dialog */],
            __WEBPACK_IMPORTED_MODULE_5__home_user_user_component__["f" /* UserDelete412Dialog */],
            __WEBPACK_IMPORTED_MODULE_5__home_user_user_component__["g" /* UserDelete412DisapprovedDialog */],
            __WEBPACK_IMPORTED_MODULE_7__users_users_component__["a" /* ResetPwdDialog */]
        ]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/admin/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_users_component__ = __webpack_require__("../../../../../src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_logged_logged_component__ = __webpack_require__("../../../../../src/app/shared/logged/logged.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_settings_global_settings_component__ = __webpack_require__("../../../../../src/app/admin/global-settings/global-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_route_guard__ = __webpack_require__("../../../../../src/app/admin/admin-route.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRouting; });






var adminRoutes = [
    { path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_3__shared_logged_logged_component__["a" /* LoggedComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__admin_route_guard__["a" /* AdminRouteGuard */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
            { path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_2__users_users_component__["b" /* UsersComponent */] },
            { path: 'globalSettings', component: __WEBPACK_IMPORTED_MODULE_4__global_settings_global_settings_component__["a" /* GlobalSettingsComponent */] }
        ]
    }
];
var AdminRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(adminRoutes);
//# sourceMappingURL=admin.routing.js.map

/***/ }),

/***/ "../../../../../src/app/admin/global-settings/global-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<md-grid-list cols=\"8\" rowHeight=\"100px\">\r\n  <md-grid-tile class=\"left-no-pad\" colspan=\"4\" rowspan=\"1\">\r\n    <h2>Global Settings</h2>\r\n  </md-grid-tile>\r\n  <md-grid-tile class=\"right-no-pad\" colspan=\"4\" rowspan=\"1\">\r\n    <app-admin-nav></app-admin-nav>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n<md-grid-list *ngIf=\"showLoadSpinner\" cols=\"1\" rowHeight=\"200px\">\r\n  <md-grid-tile>\r\n    <md-spinner class=\"centered\" color=\"accent\"></md-spinner>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n<div *ngIf='gss' class=\"globalSettings\">\r\n  <form #gssForm=\"ngForm\" (ngSubmit)=\"save(gssForm)\" class=\"form\" autocomplete=\"off\">\r\n    <h3>Set global settings</h3>\r\n    <span layout=\"row\"><hr flex/></span>\r\n    <md-grid-list cols=\"1\" rowHeight=\"50\">\r\n      <md-grid-tile class=\"right\" colspan=\"1\" rowspan=\"1\">\r\n        <button md-raised-button type=\"submit\" color='accent'>Save Changes</button>\r\n        <button md-raised-button class=\"cancel\" (click)=\"cancel()\" color='accent'>Cancel</button>\r\n      </md-grid-tile>\r\n    </md-grid-list>\r\n    <div class=\"textareas\">\r\n      <md-grid-list cols=\"8\" rowHeight=\"4:1\">\r\n        <md-grid-tile class=\"left-no-pad\" colspan=\"4\" rowspan=\"1\">\r\n          <label for=\"deadline\">Time of last order</label>\r\n        </md-grid-tile>\r\n        <md-grid-tile class=\"right-no-pad\" colspan=\"4\" rowspan=\"1\">\r\n          <label for=\"currency\">Active currency</label>\r\n        </md-grid-tile>\r\n        <md-grid-tile class=\"left-no-pad\" colspan=\"4\" rowspan=\"2\">\r\n          <input class=\"deadlineCurrency\" type=\"time\" name=\"deadline\" [(ngModel)]=\"gss.deadline\">\r\n        </md-grid-tile>\r\n        <md-grid-tile class=\"right-no-pad\" colspan=\"4\" rowspan=\"2\">\r\n          <md-select class=\"deadlineCurrency\" [(ngModel)]=\"gss.currency\" name=\"currency\">\r\n            <md-option *ngFor=\"let currency of currencyList\" [value]='currency.symbol' [innerHtml]=\"currency.name\"> </md-option>\r\n          </md-select>\r\n        </md-grid-tile>\r\n      </md-grid-list>\r\n      <div class=\"area\">\r\n        <label for=\"notes\">Notes</label>\r\n        <textarea htmlEditor [(ngModel)]=\"gss.notes\" rows=\"20\" cols=\"100\" name=\"notes\"></textarea>\r\n      </div>\r\n      <div class=\"area\">\r\n        <label for=\"tos\">Terms of service</label>\r\n        <textarea htmlEditor [(ngModel)]=\"gss.tos\" rows=\"20\" cols=\"100\" name=\"tos\"></textarea>\r\n      </div>\r\n      <div class=\"area\">\r\n        <label for=\"policy\">Privacy Policy</label>\r\n        <textarea htmlEditor [(ngModel)]=\"gss.policy\" rows=\"20\" cols=\"100\" name=\"policy\"></textarea>\r\n      </div>\r\n    </div>\r\n    <md-grid-list cols=\"1\" rowHeight=\"50\">\r\n      <md-grid-tile class=\"right\" colspan=\"1\" rowspan=\"1\">\r\n        <button md-raised-button type=\"submit\" color='accent'>Save Changes</button>\r\n        <button md-raised-button class=\"cancel\" (click)=\"cancel()\" color='accent'>Cancel</button>\r\n      </md-grid-tile>\r\n    </md-grid-list>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/global-settings/global-settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  padding: 20px; }\n\nlabel {\n  display: block; }\n\nmd-select {\n  background-color: white; }\n\nhr {\n  border-top: 1px solid red; }\n\n.globalSettings {\n  margin-top: 20px;\n  border: 2px solid #CECECE;\n  border-radius: 5px; }\n\n.deadlineCurrency {\n  width: 200px;\n  border: 2px solid #CECECE; }\n\n.textareas {\n  width: 70%; }\n\n.area {\n  margin-top: 3%; }\n\nh3 {\n  margin-top: 0; }\n\n.cancel {\n  background-color: #D7D7D7;\n  margin-left: 5px; }\n\n.cancel:hover {\n  background-color: #F44336; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/global-settings/global-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalSettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GlobalSettingsComponent = (function () {
    function GlobalSettingsComponent(adminService, snackBar, router) {
        this.adminService = adminService;
        this.snackBar = snackBar;
        this.router = router;
        this.showLoadSpinner = false;
        this.currencyList = [
            { name: 'Euro &euro;', symbol: '&euro;' },
            { name: 'Dollar &dollar;', symbol: '&dollar;' },
            { name: 'Pound &pound;', symbol: '&pound;' },
            { name: 'Yen &yen;', symbol: '&yen;' },
            { name: 'Ruble &#8381;', symbol: '&#8381;' },
            { name: 'Ruppe &#8377;', symbol: '&#8377;' },
            { name: 'Yuan &#20803;', symbol: '&#20803;' },
        ];
    }
    GlobalSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showLoadSpinner = true;
        this.adminService.globalsettingsGet().subscribe(function (response) {
            _this.showLoadSpinner = false;
            _this.gss = response;
        }, function (error) {
            _this.showLoadSpinner = false;
        });
    };
    GlobalSettingsComponent.prototype.save = function (form) {
        var _this = this;
        this.adminService.globalsettingsPut(this.gss).subscribe(function (response) {
            _this.gss.lastEdit.version++;
            _this.router.navigate(['/admin/']);
            _this.openSnackBar('Settings saved', 'ok', 1);
        }, function (error) {
            var errorStr;
            switch (error.status) {
                case 400:
                    errorStr = 'Settings not changed';
                    break;
                case 409:
                    errorStr = 'Settings already changed';
                    break;
            }
            _this.openSnackBar(errorStr, 'ok', 3);
        });
    };
    GlobalSettingsComponent.prototype.cancel = function () {
        this.router.navigate(['/admin/']);
    };
    GlobalSettingsComponent.prototype.openSnackBar = function (message, action, status) {
        if (action === undefined) {
            action = 'ok';
        }
        ;
        switch (status) {
            case 1:
                this.snackBar.open(message, action, {
                    duration: 5000,
                    extraClasses: ['success-snack-bar']
                });
                break;
            case 2:
                this.snackBar.open(message, action, {
                    extraClasses: ['warning-snack-bar']
                });
                break;
            case 3:
                this.snackBar.open(message, action, {
                    extraClasses: ['error-snack-bar']
                });
                break;
        }
    };
    return GlobalSettingsComponent;
}());
GlobalSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-global-settings',
        template: __webpack_require__("../../../../../src/app/admin/global-settings/global-settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/global-settings/global-settings.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_3__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__remote__).AdminApi) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], GlobalSettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=global-settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<md-grid-list cols=\"8\" rowHeight=\"30px\" class= \"adm-header\">\r\n  <md-grid-tile colspan=\"4\" rowspan=\"1\" class=\"left-no-pad\">\r\n    <div class=\"adm-header-title\">\r\n      Welcome administrator!\r\n    </div>\r\n  </md-grid-tile>\r\n  <md-grid-tile colspan=\"4\" rowspan=\"2\" class=\"right-no-pad\">\r\n    <app-admin-nav></app-admin-nav>\r\n  </md-grid-tile>\r\n  <md-grid-tile colspan=\"4\" rowspan=\"1\" class=\"left-no-pad create-user\">\r\n    Create or view users...\r\n\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n\r\n<!--Create User Form-->\r\n<md-card>\r\n  <form novalidate [formGroup]=\"userGroup\" autocomplete=\"off\">\r\n    <md-grid-list cols=\"6\" rowHeight=\"55px\">\r\n      <md-grid-tile colspan=\"6\">\r\n        <md-radio-group formControlName=\"role\" class=\"radio\">\r\n          <md-radio-button value=\"hungry\" checked=\"checked\"> User is hungry</md-radio-button>\r\n          <md-radio-button value=\"chef\"> User is a Chef</md-radio-button>\r\n          <md-radio-button value=\"admin\"> User is an admin</md-radio-button>\r\n        </md-radio-group>\r\n      </md-grid-tile>\r\n      <md-grid-tile colspan=\"2\" rowspan=\"2\">\r\n        <md-input-container>\r\n          <input mdInput type=\"text\" placeholder=\"First name\" formControlName=\"firstName\">\r\n          <md-error *ngIf=\"userGroup.get('firstName').touched && userGroup.get('firstName').hasError('required')\">\r\n            First Name is required\r\n          </md-error>\r\n          <md-error *ngIf=\"userGroup.get('firstName').touched && userGroup.get('firstName').hasError('minlength')\">\r\n            Minimum of 2 characters\r\n          </md-error>\r\n        </md-input-container>\r\n      </md-grid-tile>\r\n      <md-grid-tile colspan=\"2\" rowspan=\"2\">\r\n        <md-input-container>\r\n          <input mdInput type=\"text\" placeholder=\"Last name\" formControlName=\"lastName\">\r\n          <md-error *ngIf=\"userGroup.get('lastName').touched && userGroup.get('lastName').hasError('required')\">\r\n            Last Name is required\r\n          </md-error>\r\n          <md-error *ngIf=\"userGroup.get('lastName').touched && userGroup.get('lastName').hasError('minlength')\">\r\n            Minimum of 2 characters\r\n          </md-error>\r\n        </md-input-container>\r\n      </md-grid-tile>\r\n      <md-grid-tile colspan=\"2\" rowspan=\"2\">\r\n        <md-input-container class=\"input-med-width\">\r\n          <input mdInput type=\"email\" placeholder=\"User email address\" formControlName=\"email\">\r\n          <md-error *ngIf=\"userGroup.get('email').hasError('required') && userGroup.get('email').touched\">\r\n            Email is required\r\n          </md-error>\r\n          <md-error *ngIf=\"userGroup.get('email').hasError('pattern') && userGroup.get('email').touched\">\r\n            Email is not valid\r\n          </md-error>\r\n        </md-input-container>\r\n      </md-grid-tile>\r\n      <md-grid-tile colspan=\"2\" rowspan=\"2\">\r\n        <md-input-container>\r\n\r\n          <input mdInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" (keyup)=\"onPasswordChange()\">\r\n\r\n          <md-hint *ngIf=\"userGroup.get('password').value===null || userGroup.get('password').value.length<6 \">Password should be at least 6 characters (space not allowed) </md-hint>\r\n\r\n          <md-error *ngIf=\"userGroup.get('password').hasError('required') && userGroup.get('password').touched\">\r\n            Password is required\r\n          </md-error>\r\n\r\n          <md-error *ngIf=\"userGroup.get('password').hasError('pattern') && userGroup.get('password').touched\">\r\n            Password shoud be at least 6 characters (space not allowed)\r\n          </md-error>\r\n\r\n        </md-input-container>\r\n      </md-grid-tile>\r\n      <md-grid-tile colspan=\"2\" rowspan=\"2\">\r\n        <md-input-container>\r\n          <input mdInput type=\"password\" placeholder=\"Confirm Password\" formControlName=\"confirm\">\r\n          <md-error *ngIf=\"userGroup.get('confirm').hasError('required') && userGroup.get('confirm').touched\">\r\n            Password Confirming is required\r\n          </md-error>\r\n\r\n          <md-error *ngIf=\"userGroup.get('confirm').hasError('pattern') && userGroup.get('confirm').touched\">\r\n            Password should be at least 6 characters (space not allowed)\r\n          </md-error>\r\n\r\n          <md-error *ngIf=\"userGroup.get('confirm').hasError('confirmError') && userGroup.get('confirm').touched\">\r\n            Password and confirm do not match\r\n          </md-error>\r\n        </md-input-container>\r\n      </md-grid-tile>\r\n      <md-grid-tile colspan=\"2\" rowspan=\"2\">\r\n        <button md-raised-button color=\"accent\" type=\"button\" (click)=\"createUser()\" [disabled]=\"userGroup.invalid || showSpinner\">Create user</button>\r\n        <img *ngIf=\"showSpinner\" src=\"../../../assets/img/spinner.gif\">\r\n      </md-grid-tile>\r\n    </md-grid-list>\r\n  </form>\r\n</md-card>\r\n\r\n<div>\r\n  <div class=\"adm-user-list\">User List</div>\r\n</div>\r\n\r\n<md-grid-list cols=\"18\" rowHeight=\"80px\">\r\n  <md-grid-tile colspan=\"3\" class=\"left-no-pad\">\r\n    <md-select [ngModel]=\"pageSize\" (ngModelChange)=\"changePageSize($event)\" placeholder=\"Show\" name=\"show\">\r\n      <md-option *ngFor=\"let pageSizeOption of pageSizes\" [value]=\"pageSizeOption.value\">\r\n        {{ pageSizeOption.viewValue }}\r\n      </md-option>\r\n    </md-select>\r\n  </md-grid-tile>\r\n  <md-grid-tile colspan=\"3\" class=\"left-no-pad\">\r\n    <md-select [ngModel]=\"orderBy\" (ngModelChange)=\"changeOrderBy($event)\" placeholder=\"Order by\" name=\"order\" class=\"largerSelect\">\r\n      <md-option *ngFor=\"let orderByOption of orderByOptions\" [value]=\"orderByOption.value\">\r\n        {{ orderByOption.viewValue }}\r\n      </md-option>\r\n    </md-select>\r\n  </md-grid-tile>\r\n  <md-grid-tile colspan=\"2\" class=\"direction-title left-no-pad\">\r\n    <div>\r\n      <div class=\"direction\">Desc</div>\r\n      <div>\r\n        <button md-icon-button [ngClass]=\"{current:direction === 'DESC'}\" color=\"accent\" (click)=\"changeDirection('DESC')\" [disabled]=\"direction === 'DESC'\"><i class=\"material-icons\">arrow_downward</i></button>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div class=\"direction\">Asc</div>\r\n      <div>\r\n        <button md-icon-button [ngClass]=\"{current:direction === 'ASC'}\" color=\"accent\" (click)=\"changeDirection('ASC')\" [disabled]=\"direction === 'ASC'\"><i class=\"material-icons\">arrow_upward</i></button>\r\n      </div>\r\n    </div>\r\n  </md-grid-tile>\r\n  <md-grid-tile colspan=\"10\" class=\"right-no-pad\">\r\n    <app-pagination (changePage)=\"handlechangePage($event)\" [totalItems]=\"totalUsers\" [currentPage]=\"page\" [pageSize]=\"pageSize\"></app-pagination>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n\r\n<md-card class=\"user-card\" *ngFor=\"let user of getUsers()\">\r\n  <app-admin-user [user]=user (userDeleted)=\"handleDeletedUser($event)\"></app-admin-user>\r\n</md-card>\r\n\r\n<md-grid-list *ngIf=\"showLoadSpinner\" cols=\"1\" rowHeight=\"200px\">\r\n  <md-grid-tile>\r\n    <md-spinner class=\"centered\" color=\"accent\"></md-spinner>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n<md-grid-list cols=\"8\" rowHeight=\"50px\">\r\n  <md-grid-tile colspan=\"8\" class=\"right-no-pad\">\r\n    <app-pagination (changePage)=\"handlechangePage($event)\" [totalItems]=\"totalUsers\" [currentPage]=\"page\" [pageSize]=\"pageSize\"></app-pagination>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".adm-header {\n  margin-top: 20px;\n  margin-bottom: 10px; }\n\n.adm-header-title {\n  font-size: 28px;\n  font-weight: 700; }\n\n.create-user {\n  font-size: 20px;\n  font-weight: 700; }\n\n.adm-user-list {\n  font-size: 28px;\n  font-weight: 700;\n  margin-top: 30px;\n  margin-bottom: 20px; }\n\n.user-card {\n  margin: 10px 0; }\n\n.direction {\n  text-align: center;\n  font-family: Arial;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.38); }\n\n.direction-title {\n  padding-top: 0px  !important;\n  margin-top: -5px  !important; }\n\n.radio md-radio-button {\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.current {\n  color: black !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(adminService, fb, snackBar, dialog) {
        this.adminService = adminService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.page = 1;
        this.pageSize = 10;
        this.orderBy = 'registrationDate';
        this.direction = 'DESC';
        this.showLoadSpinner = false;
        // Options for pageSize Select
        this.pageSizes = [
            { value: 10, viewValue: '10' },
            { value: 20, viewValue: '20' },
            { value: 50, viewValue: '50' },
            { value: 100, viewValue: '100' }
        ];
        // Options for orderBy Select
        this.orderByOptions = [
            { value: 'registrationDate', viewValue: 'Registration date' },
            { value: 'lastName', viewValue: 'Name' },
            { value: 'userRole', viewValue: 'Role' },
            { value: 'approved', viewValue: 'Approval status' }
        ];
        // create user spinner
        this.showSpinner = false;
        //this.someExpression = null;
    }
    // Custom validator for password and confirm password
    HomeComponent.prototype.validateEqual = function (control) {
        if (control.parent != null) {
            return (control.parent.value.password === control.value) ? null : { 'confirmError': true };
        }
        else {
            return { 'confirmError': true };
        }
    };
    // trigger confirm password validator
    HomeComponent.prototype.onPasswordChange = function () {
        this.userGroup.controls.confirm.updateValueAndValidity();
    };
    // Create Form group using FormBuilder,  form controls, validators
    HomeComponent.prototype.buildForm = function () {
        return this.fb.group({
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(1)]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(1)]],
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(2),
                    // tslint:disable-next-line:max-line-length
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                ]],
            password: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required,
                    // tslint:disable-next-line:max-line-length
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].pattern(/^(?=.*[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|])[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|]{6,}$/)
                ]],
            confirm: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required,
                    // tslint:disable-next-line:max-line-length
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].pattern(/^(?=.*[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|])[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|]{6,}$/),
                    this.validateEqual
                ],
            ],
            role: ['hungry'],
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        // Create Form group, form controls, validators
        this.userGroup = this.buildForm();
        this.loadUsers(this.page);
    };
    // load users of specific page
    HomeComponent.prototype.loadUsers = function (page) {
        var _this = this;
        this.showLoadSpinner = true;
        this.adminService.usersGet((page - 1).toString(), this.pageSize.toString(), this.orderBy, this.direction).subscribe(function (usersPage) {
            _this.users = usersPage.users;
            _this.totalUsers = usersPage.totalElements;
            _this.totalpages = usersPage.totalPages;
            _this.page = page;
            _this.showLoadSpinner = false;
        }, function (error) {
            _this.showLoadSpinner = false;
        });
    };
    HomeComponent.prototype.getUsers = function () {
        return this.users;
    };
    // Resets the form
    HomeComponent.prototype.clearForm = function () {
        this.userGroup.reset();
        this.userGroup.patchValue({ role: 'hungry' });
    };
    HomeComponent.prototype.createUser = function () {
        var _this = this;
        var value = this.userGroup.value;
        //Creation of DTO
        var userReg = {};
        userReg.firstName = value.firstName;
        userReg.lastName = value.lastName;
        userReg.password = value.password;
        userReg.role = value.role;
        userReg.email = value.email;
        //show spinner next to button
        this.showSpinner = true;
        this.adminService.usersPost(userReg)
            .finally(function () {
            _this.showSpinner = false;
        })
            .subscribe(function (result) {
            _this.openSnackBar('User successfully created!', 'ok', true);
            _this.clearForm();
            _this.pageSize = 10;
            _this.orderBy = 'registrationDate';
            _this.direction = 'DESC';
            _this.loadUsers(1);
        }, function (error) {
            _this.openSnackBar('User cannot be created!', 'ok', false);
        });
    };
    // change page size callback
    HomeComponent.prototype.changePageSize = function (newValue) {
        this.pageSize = newValue;
        this.page = 1;
        this.loadUsers(this.page);
    };
    // change order callback
    HomeComponent.prototype.changeOrderBy = function (newValue) {
        this.orderBy = newValue;
        this.loadUsers(this.page);
    };
    // change direction callback
    HomeComponent.prototype.changeDirection = function (direction) {
        this.direction = direction;
        this.loadUsers(this.page);
    };
    // success and error snackBars
    HomeComponent.prototype.openSnackBar = function (message, action, timeOut) {
        if (timeOut) {
            this.snackBar.open(message, action, {
                duration: 5000,
                extraClasses: ['success-snack-bar']
            });
        }
        else {
            this.snackBar.open(message, action, {
                extraClasses: ['error-snack-bar']
            });
        }
    };
    // delete user callback
    HomeComponent.prototype.handleDeletedUser = function () {
        if (this.totalUsers % this.pageSize === 1) {
            this.page -= 1;
        }
        this.loadUsers(this.page);
        this.openSnackBar('User successfully deleted!', 'ok', true);
    };
    // change page callback
    HomeComponent.prototype.handlechangePage = function (page) {
        this.page = page;
        this.loadUsers(page);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/admin/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_2__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__remote__).AdminApi) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MdDialog */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/home/user/user-delete-402-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title class=\"centered\">Delete user</h1>\r\n<md-dialog-content class=\"dialog-content-size\">\r\n  <div>The user has final and non final orders.</div>\r\n  <div>Do you want to disapprove him and delete the non final orders?</div>\r\n</md-dialog-content>\r\n\r\n<md-grid-list cols=\"4\" rowHeight=\"50px\">\r\n  <md-grid-tile>\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n    <button md-raised-button color=\"accent\" (click)=\"dialogRef.close('Yes')\">Yes</button>\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n    <button md-raised-button color=\"accent\" (click)=\"dialogRef.close('No')\">No</button>\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/home/user/user-delete-409-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title class=\"centered\">Force delete user</h1>\r\n<md-dialog-content class=\"centered\">\r\n  <div>The user only non final orders.</div>\r\n  <div>Do you want to delete the non final orders and delete the user?</div>\r\n</md-dialog-content>\r\n<md-grid-list cols=\"4\" rowHeight=\"50px\">\r\n  <md-grid-tile>\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n    <button md-raised-button color=\"accent\" (click)=\"dialogRef.close('Yes')\">Yes</button>\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n    <button md-raised-button color=\"accent\" (click)=\"dialogRef.close('No')\">No</button>\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/home/user/user-delete-412-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title class=\"centered\">Delete user</h1>\r\n<md-dialog-content class=\"centered\">\r\n  <div>The user has only final orders and cannot be deleted.</div>\r\n  <div>Do you want to disapprove the user?</div>\r\n</md-dialog-content>\r\n<md-grid-list cols=\"4\" rowHeight=\"50px\">\r\n  <md-grid-tile>\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n    <button md-raised-button color=\"accent\" (click)=\"dialogRef.close('Yes')\">Yes</button>\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n    <button md-raised-button color=\"accent\" (click)=\"dialogRef.close('No')\">No</button>\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/home/user/user-delete-412-disapproved-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title class=\"centered\">Delete user</h1>\r\n<md-dialog-content class=\"centered\">\r\n  <div>The user has only final orders and cannot be deleted.</div>\r\n  <div>The user is diasapproved, as well.</div>\r\n</md-dialog-content>\r\n<md-grid-list cols=\"3\" rowHeight=\"50px\">\r\n  <md-grid-tile>\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n    <button md-raised-button color=\"accent\" (click)=\"dialogRef.close('Ok')\">Ok</button>\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/home/user/user-delete-confirm-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title class=\"centered\">Delete User</h1>\r\n<md-dialog-content  class=\"centered\">\r\n  <div>Do you want to delete the user? </div>\r\n</md-dialog-content>\r\n<md-grid-list cols=\"4\" rowHeight=\"20px\">\r\n</md-grid-list>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" >\r\n  <div>\r\n    <button md-raised-button color=\"accent\" (click)=\"dialogRef.close('Yes')\">Yes</button>\r\n  </div>\r\n  <div>\r\n    <button md-raised-button color=\"accent\" (click)=\"dialogRef.close('No')\">No</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/home/user/user-disapprove-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title  class=\"centered\">Disapprove user</h1>\r\n<md-dialog-content class=\"centered\" >\r\n  <div>User has non final orders. </div>\r\n  <div>Do you want to delete the  non final orders and disapprove the user?</div>\r\n</md-dialog-content>\r\n<md-grid-list cols=\"4\" rowHeight=\"50px\">\r\n  <md-grid-tile>\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n    <button md-raised-button color=\"accent\" (click)=\"dialogRef.close('Yes')\">Yes</button>\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n    <button md-raised-button color=\"accent\" (click)=\"dialogRef.close('No')\">No</button>\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/home/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<md-grid-list cols=\"14\" rowHeight=\"50px\">\r\n\r\n  <md-grid-tile colspan=\"2\" rowspan=\"2\">\r\n    <i *ngIf=\"!user.hasPicture\" class=\"material-icons face\">face</i>\r\n    <img class=\"profile-image\" *ngIf=\"user.hasPicture\" src=\"{{userPicture}}\" />\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"2\" class= \"bold\">\r\n    Name\r\n  </md-grid-tile>\r\n\r\n\r\n  <md-grid-tile colspan=\"2\" class= \"bold\">\r\n    Role\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"2\" class= \"bold\">\r\n    Registered\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile colspan=\"3\" rowspan=\"2\">\r\n\r\n    <app-slide-toggle-component [user]=\"user\"></app-slide-toggle-component>\r\n\r\n  </md-grid-tile>\r\n  <md-grid-tile colspan=\"2\" rowspan=\"2\">\r\n    <a [routerLink]=\"editRouterLink\" routerLinkActive=\"active\" md-fab color=\"accent\" title=\"Edit user!\" ><i class=\"material-icons\">edit</i></a>\r\n  </md-grid-tile>\r\n  <md-grid-tile colspan=\"1\" rowspan=\"2\">\r\n    <button md-icon-button color=\"accent\" (click)=\"deleteConfirm()\" [disabled]=\"user.id===1||user.id===userId\" title=\"Delete user!\"><i class=\"material-icons bigger-button\">delete_forever</i></button>\r\n  </md-grid-tile>\r\n  <md-grid-tile colspan=\"2\">\r\n    {{getUser().firstName}}\r\n    <span class=\"name-divider\"> </span>{{getUser().lastName}}\r\n\r\n  </md-grid-tile>\r\n  <md-grid-tile colspan=\"2\">\r\n    {{getUser().role}}\r\n  </md-grid-tile>\r\n  <md-grid-tile colspan=\"2\">\r\n    {{getUser().registrationDate}}\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n<!--<app-admin-user-edit>\r\n</app-admin-user-edit>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/home/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".face {\n  font-size: 70px;\n  color: #F44336; }\n\nmd-grid-tile {\n  font-size: 15px; }\n\n.profile-image {\n  border-radius: 50%;\n  height: 100%; }\n\n.name-divider {\n  padding: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/home/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remote_variables__ = __webpack_require__("../../../../../src/app/remote/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserDisapproveDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UserDeleteConfirmDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UserDelete402Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UserDelete409Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UserDelete412Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return UserDelete412DisapprovedDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var UserComponent = (function () {
    function UserComponent(adminService, snackBar, dialog, authService, baseUrl) {
        this.adminService = adminService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.authService = authService;
        this.baseUrl = baseUrl;
        this.userDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userId = this.authService.getLoggedInUser().id;
    }
    UserComponent.prototype.ngOnInit = function () {
        if (this.user.id === this.userId) {
            this.editRouterLink = '../settings/';
        }
        else {
            this.editRouterLink = 'users/' + this.user.id;
        }
        this.userPicture = this.baseUrl + '/users/' + this.user.id + '/picture/token?token=' + this.authService.getToken();
    };
    UserComponent.prototype.getUser = function () {
        return this.user;
    };
    // approve or disapprove user
    UserComponent.prototype.approve = function (event, aprv) {
        var _this = this;
        if (aprv) {
            this.adminService.usersIdApprovePut(this.user.id, aprv)
                .subscribe(function (value) {
                _this.user.approved = true;
            });
        }
        else {
            this.adminService.usersIdApprovePut(this.user.id, aprv, false)
                .subscribe(function (value) {
                _this.user.approved = false;
            }, function (error) {
                if (error.status === 400) {
                    event.source.checked = true;
                }
                else if (error.status === 409) {
                    event.source.checked = true;
                    // User has non final orders. Force disapprove?
                    var dialogRef = _this.dialog.open(UserDisapproveDialog);
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            _this.forceDisapprove();
                        }
                    });
                }
            });
        }
    };
    // Delete non fonal orders and diasapprove user
    UserComponent.prototype.forceDisapprove = function () {
        var _this = this;
        this.adminService.usersIdApprovePut(this.user.id, false, true)
            .subscribe(function (value) {
            _this.user.approved = false;
            // this.approvedText = 'User not approved';
        });
    };
    // Success and error snackbar
    UserComponent.prototype.openSnackBar = function (message, action, timeOut) {
        if (timeOut) {
            this.snackBar.open(message, action, {
                duration: 5000,
                extraClasses: ['success-snack-bar']
            });
        }
        else {
            this.snackBar.open(message, action, {
                extraClasses: ['error-snack-bar']
            });
        }
    };
    UserComponent.prototype.deleteUser = function () {
        var _this = this;
        this.adminService.usersIdDelete(this.user.id)
            .subscribe(function (result) {
            _this.userDeleted.emit();
        }, function (error) {
            switch (error.status) {
                // User has both final and non-final orders. Can be force disapproved
                case 402:
                    var dialogRef = _this.dialog.open(UserDelete402Dialog, {});
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            _this.forceDisapprove();
                        }
                    });
                    break;
                // User has only non-final orders. Can be force deleted
                case 409:
                    dialogRef = _this.dialog.open(UserDelete409Dialog, {});
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            _this.forceDelete();
                        }
                    });
                    break;
                // User has only final orders. Can be disapproved
                case 412:
                    if (_this.user.approved) {
                        dialogRef = _this.dialog.open(UserDelete412Dialog, {});
                        dialogRef.afterClosed().subscribe(function (result) {
                            if (result === 'Yes') {
                                _this.approve(event, false);
                            }
                        });
                        //User already disapproved
                    }
                    else {
                        dialogRef = _this.dialog.open(UserDelete412DisapprovedDialog, {});
                    }
                    break;
                default:
            }
        });
    };
    // delete non final orders and delete user
    UserComponent.prototype.forceDelete = function () {
        var _this = this;
        this.adminService.usersIdDelete(this.user.id, true)
            .subscribe(function (result) {
            _this.userDeleted.emit();
        }, function (error) {
            _this.openSnackBar('User can not be deleted!', 'ok', false);
        });
    };
    // Dialog to confirm delete user
    UserComponent.prototype.deleteConfirm = function () {
        var _this = this;
        var dialogRef = this.dialog.open(UserDeleteConfirmDialog, {});
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'Yes') {
                _this.deleteUser();
            }
        });
    };
    return UserComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_1__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__remote__).User) === "function" && _a || Object)
], UserComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UserComponent.prototype, "userDeleted", void 0);
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-user',
        template: __webpack_require__("../../../../../src/app/admin/home/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/home/user/user.component.scss")]
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__remote_variables__["a" /* BASE_PATH */])),
    __metadata("design:paramtypes", [typeof (_b = (typeof __WEBPACK_IMPORTED_MODULE_1__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__remote__).AdminApi) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_authentication_service__["a" /* AuthenticationService */]) === "function" && _e || Object, String])
], UserComponent);

var UserDisapproveDialog = (function () {
    function UserDisapproveDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return UserDisapproveDialog;
}());
UserDisapproveDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-disapprove-dialog',
        template: __webpack_require__("../../../../../src/app/admin/home/user/user-disapprove-dialog.html"),
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdDialogRef */]) === "function" && _f || Object])
], UserDisapproveDialog);

var UserDeleteConfirmDialog = (function () {
    function UserDeleteConfirmDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return UserDeleteConfirmDialog;
}());
UserDeleteConfirmDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-delete-confirm-dialog',
        template: __webpack_require__("../../../../../src/app/admin/home/user/user-delete-confirm-dialog.html"),
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdDialogRef */]) === "function" && _g || Object])
], UserDeleteConfirmDialog);

var UserDelete402Dialog = (function () {
    function UserDelete402Dialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return UserDelete402Dialog;
}());
UserDelete402Dialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-delete-402-dialog',
        template: __webpack_require__("../../../../../src/app/admin/home/user/user-delete-402-dialog.html"),
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdDialogRef */]) === "function" && _h || Object])
], UserDelete402Dialog);

var UserDelete409Dialog = (function () {
    function UserDelete409Dialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return UserDelete409Dialog;
}());
UserDelete409Dialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-delete-409-dialog',
        template: __webpack_require__("../../../../../src/app/admin/home/user/user-delete-409-dialog.html"),
    }),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdDialogRef */]) === "function" && _j || Object])
], UserDelete409Dialog);

var UserDelete412Dialog = (function () {
    function UserDelete412Dialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return UserDelete412Dialog;
}());
UserDelete412Dialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-delete-412-dialog',
        template: __webpack_require__("../../../../../src/app/admin/home/user/user-delete-412-dialog.html"),
    }),
    __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdDialogRef */]) === "function" && _k || Object])
], UserDelete412Dialog);

var UserDelete412DisapprovedDialog = (function () {
    function UserDelete412DisapprovedDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return UserDelete412DisapprovedDialog;
}());
UserDelete412DisapprovedDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-delete-412-disapproved-dialog',
        template: __webpack_require__("../../../../../src/app/admin/home/user/user-delete-412-disapproved-dialog.html"),
    }),
    __metadata("design:paramtypes", [typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdDialogRef */]) === "function" && _l || Object])
], UserDelete412DisapprovedDialog);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/shared/admin-nav/admin-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inline\">\r\n  <button md-raised-button color=\"accent\" routerLink=\"/admin\"  [routerLinkActiveOptions]=\"{ exact: true }\" routerLinkActive  #rlaAdmin=\"routerLinkActive\" [disabled]='rlaAdmin.isActive' routerLinkActive=\"active\">Users</button>\r\n\r\n  <button md-raised-button color=\"accent\" routerLink=\"/admin/globalSettings\"  routerLinkActive  #rlaAdminGS=\"routerLinkActive\" [disabled]='rlaAdminGS.isActive' routerLinkActive=\"active\">Global Settings</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/shared/admin-nav/admin-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/shared/admin-nav/admin-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminNavComponent = (function () {
    function AdminNavComponent() {
    }
    AdminNavComponent.prototype.ngOnInit = function () {
    };
    return AdminNavComponent;
}());
AdminNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-nav',
        template: __webpack_require__("../../../../../src/app/admin/shared/admin-nav/admin-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/shared/admin-nav/admin-nav.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AdminNavComponent);

//# sourceMappingURL=admin-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/tinymce.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* unused harmony export TinyMceValueAccessor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinymceDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TinyMceValueAccessor = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return TinymceDirective; }),
    multi: true
};
// Tinymce directive
var TinymceDirective = TinymceDirective_1 = (function () {
    function TinymceDirective(sanitizer) {
        this.sanitizer = sanitizer;
        this.init = false;
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.uniqueId = "tinymce-host-" + TinymceDirective_1.nextUniqueId++;
    }
    Object.defineProperty(TinymceDirective.prototype, "value", {
        // get accessor
        get: function () {
            return this.innerValue;
        },
        // set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    TinymceDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log('tinymce');
        tinymce.init({
            selector: "[data-tinymce-uniqueid=" + this.uniqueId + "]",
            skin_url: 'assets/skins/lightgray',
            menubar: false,
            statusbar: false,
            schema: 'html5',
            setup: function (ed) {
                ed.on('init', function (ed2) {
                    if (_this.innerValue)
                        ed2.target.setContent(_this.innerValue);
                    _this.init = true;
                });
            }
        }).then(function (editor) {
            _this.editor = editor[0];
            editor[0].on('blur', function () { return _this.updateValue(); });
        });
    };
    TinymceDirective.prototype.updateValue = function () {
        var content = tinymce.activeEditor.getContent();
        this.value = this.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SecurityContext"].HTML, content);
    };
    TinymceDirective.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
            if (this.init && value)
                tinymce.activeEditor.setContent(value);
        }
    };
    TinymceDirective.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TinymceDirective.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    TinymceDirective.prototype.ngOnDestroy = function () {
        if (this.init)
            tinymce.remove("[data-tinymce-uniqueid=" + this.uniqueId + "]");
    };
    return TinymceDirective;
}());
TinymceDirective.nextUniqueId = 0;
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.data-tinymce-uniqueid'),
    __metadata("design:type", Object)
], TinymceDirective.prototype, "uniqueId", void 0);
TinymceDirective = TinymceDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[htmlEditor]',
        providers: [TinyMceValueAccessor]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* DomSanitizer */]) === "function" && _a || Object])
], TinymceDirective);

var TinymceDirective_1, _a;
//# sourceMappingURL=tinymce.directive.js.map

/***/ }),

/***/ "../../../../../src/app/admin/users/admin-reset-pwd-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title class=\"centered\">Reset password</h1>\r\n<md-dialog-content  class=\"centered\">\r\n  <div>Do you want to reset the user's password? </div>\r\n</md-dialog-content>\r\n<md-grid-list cols=\"4\" rowHeight=\"20px\">\r\n</md-grid-list>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n  <button md-raised-button color=\"accent\" (click)=\"dialogRef.close('Yes')\">Yes</button>\r\n\r\n    <button md-raised-button color=\"accent\" (click)=\"dialogRef.close('No')\">No</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<md-grid-list cols=\"8\" rowHeight=\"70px\" class=\"title\">\r\n  <md-grid-tile colspan=\"4\" class=\"heading left-no-pad\">\r\n      User account settings\r\n  </md-grid-tile>\r\n  <md-grid-tile colspan=\"4\" class=\"right-no-pad\">\r\n    <app-admin-nav></app-admin-nav>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n<md-card>\r\n  <md-grid-list cols=\"8\" rowHeight=\"100px\" class=\"divider\">\r\n    <md-grid-tile colspan=\"4\" class=\"left\">\r\n      <div class=\"heading\">\r\n        <div>Profile details</div>\r\n      </div>\r\n    </md-grid-tile>\r\n    <md-grid-tile colspan=\"4\" class=\"right\">\r\n      <app-slide-toggle-component *ngIf=\"user\" [user]=\"user\" (updateVersion)=\"handleUpdateVersion($event)\"></app-slide-toggle-component>\r\n    </md-grid-tile>\r\n  </md-grid-list>\r\n     <app-profile *ngIf=\"user\" [(user)]=\"user\" [change]=\"change\" [admin]=\"true\" (invalidProfileForm)=\"handleInvalidProfileForm($event)\" (updateVersion)=\"handleUpdateVersion($event)\">\r\n  </app-profile>\r\n  <md-grid-list cols=\"8\" rowHeight=\"100px\">\r\n    <md-grid-tile colspan=\"4\" class=\"left\">\r\n      <button [disabled]=\"user==null || !user.approved\" md-raised-button color=\"accent\" (click)=\"resetPwd()\">Reset Password</button>\r\n    </md-grid-tile>\r\n    <md-grid-tile colspan=\"4\" class=\"right\">\r\n      <form (ngSubmit)=\"updateUser(profileGroup)\" [formGroup]=\"profileGroup\" autocomplete=\"off\">\r\n        <button md-raised-button color=\"accent\" type=\"submit\" [disabled]=\"(profileGroup.invalid)||(!detectChanges())||showSpinner||invalid\">Save changes</button>\r\n      </form>\r\n      <img *ngIf=\"showSpinner\" src=\"../../../assets/img/spinner.gif\">\r\n    </md-grid-tile>\r\n  </md-grid-list>\r\n</md-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".divider {\n  border-bottom: 1px solid #F44336; }\n\n.heading {\n  font-family: 'Roboto Slab', Arial;\n  font-weight: bold;\n  font-size: 26px; }\n\n.title {\n  margin-bottom: 15px;\n  margin-top: 15px; }\n\nmd-card {\n  margin-bottom: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UsersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPwdDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersComponent = (function () {
    function UsersComponent(route, adminService, fb, snackBar, dialog, router) {
        this.route = route;
        this.adminService = adminService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.router = router;
        this.userId = 0;
        //Flag for refreshing inputs after 409 error
        this.change = false;
        //spinner
        this.showSpinner = false;
        this.invalid = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //check if id is valid
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (!isNaN(id)) {
                _this.userId = +id; // (+) converts string 'id' to a number
                _this.loadUser();
            }
        });
        // Create formGroup
        this.profileGroup = this.fb.group({
            role: [''],
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].minLength(1)]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].minLength(1)]],
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                ]
            ]
        });
    };
    UsersComponent.prototype.ngOnChanges = function () {
        this.profileGroup.markAsTouched();
    };
    // loads user form usersIdGet API
    UsersComponent.prototype.loadUser = function () {
        var _this = this;
        this.adminService.usersIdGet(this.userId).subscribe(function (user) {
            _this.user = user;
            _this.initialEmail = user.email;
            _this.initialFirstName = user.firstName;
            _this.initialLastName = user.lastName;
            _this.initialRole = user.role;
            _this.profileGroup.controls.role.patchValue(user.role);
            _this.profileGroup.controls.firstName.patchValue(user.firstName);
            _this.profileGroup.controls.lastName.patchValue(user.lastName);
            _this.profileGroup.controls.email.patchValue(user.email);
        }, function (error) {
            //console.log(error)
        });
    };
    // if changes of initial values enable 'Save changes' button
    UsersComponent.prototype.detectChanges = function () {
        if ((this.user.firstName !== this.initialFirstName) || (this.user.lastName !== this.initialLastName) ||
            (this.user.email !== this.initialEmail) || (this.user.role !== this.initialRole)) {
            return true;
        }
        else {
            return false;
        }
    };
    // status -> 1:success , 2:warning, 3:error
    UsersComponent.prototype.openSnackBar = function (message, action, status) {
        switch (status) {
            case 1:
                this.snackBar.open(message, action, {
                    duration: 5000,
                    extraClasses: ['success-snack-bar']
                });
                break;
            case 2:
                this.snackBar.open(message, action, {
                    extraClasses: ['warning-snack-bar']
                });
                break;
            case 3:
                this.snackBar.open(message, action, {
                    extraClasses: ['error-snack-bar']
                });
                break;
        }
    };
    // Callback on submit
    UsersComponent.prototype.updateUser = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        var userSettings = {};
        userSettings.firstName = this.user.firstName;
        userSettings.lastName = this.user.lastName;
        userSettings.role = this.user.role;
        userSettings.email = this.user.email;
        userSettings.lastEdit = this.user.lastEdit;
        this.showSpinner = true;
        this.adminService.usersIdPut(this.userId, userSettings)
            .subscribe(function (result) {
            //this.user.lastEdit.version += 1;
            //this.profileGroup.markAsUntouched();
            _this.showSpinner = false;
            _this.openSnackBar('User succefully modified!', 'ok', 1);
            _this.router.navigate(['/admin/']);
        }, function (error) {
            _this.showSpinner = false;
            switch (error.status) {
                // User has both final and non-final orders. Can be force disapproved
                case 400:
                    _this.openSnackBar('User can not be modified! Some data are invalid', 'ok', 3);
                    break;
                // User has only non-final orders. Can be force deleted
                case 409:
                    var newUserVersion = JSON.parse(error._body);
                    _this.user.lastName = newUserVersion.lastName;
                    _this.user.firstName = newUserVersion.firstName;
                    _this.user.email = newUserVersion.email;
                    _this.user.role = newUserVersion.role.toLowerCase();
                    _this.user.approved = newUserVersion.approved;
                    _this.user.lastEdit.version = newUserVersion.lastEdit.version;
                    //Refresh initial values
                    _this.initialEmail = newUserVersion.email;
                    _this.initialFirstName = newUserVersion.firstName;
                    _this.initialLastName = newUserVersion.lastName;
                    _this.initialRole = newUserVersion.role.toLowerCase();
                    _this.change = !_this.change;
                    _this.openSnackBar('User\'s details have been modified by someone else. The newest version is now dispalyed in the form', 'ok', 2);
                    break;
                // User has only final orders. Can be disapproved
                case 500:
                    _this.openSnackBar('User can not be modified!', 'ok', 3);
                    break;
                default:
            }
        });
    };
    UsersComponent.prototype.resetPwd = function () {
        var _this = this;
        var dialogRef = this.dialog.open(ResetPwdDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'Yes') {
                _this.adminService.usersIdForgotpwdPost(_this.user.id)
                    .subscribe(function (value) {
                    _this.openSnackBar('Successfull password reset', 'ok', 1);
                }, function (error) {
                    _this.openSnackBar('Password cannot be reset', 'ok', 1);
                });
            }
        });
    };
    // Callball after invalid data in form from profile component
    UsersComponent.prototype.handleInvalidProfileForm = function (validFlag) {
        if (validFlag === "invalid") {
            this.invalid = true;
        }
        else {
            this.invalid = false;
        }
    };
    UsersComponent.prototype.handleUpdateVersion = function () {
        this.user.lastEdit.version += 1;
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/admin/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/users/users.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = (typeof __WEBPACK_IMPORTED_MODULE_4__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__remote__).AdminApi) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MdDialog */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _f || Object])
], UsersComponent);

var ResetPwdDialog = (function () {
    function ResetPwdDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return ResetPwdDialog;
}());
ResetPwdDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-reset-pwd-dialog',
        template: __webpack_require__("../../../../../src/app/admin/users/admin-reset-pwd-dialog.html"),
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdDialogRef */]) === "function" && _g || Object])
], ResetPwdDialog);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/anon/anon.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/anon/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/anon/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgotpwd_forgotpwd_component__ = __webpack_require__("../../../../../src/app/anon/forgotpwd/forgotpwd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resetpwd_resetpwd_component__ = __webpack_require__("../../../../../src/app/anon/resetpwd/resetpwd.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnonModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AnonModule = (function () {
    function AnonModule() {
    }
    return AnonModule;
}());
AnonModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__forgotpwd_forgotpwd_component__["a" /* ForgotpwdComponent */],
            __WEBPACK_IMPORTED_MODULE_6__resetpwd_resetpwd_component__["a" /* ResetpwdComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
        ]
    })
], AnonModule);

//# sourceMappingURL=anon.module.js.map

/***/ }),

/***/ "../../../../../src/app/anon/forgotpwd/forgotpwd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background min-sizes\">\r\n  <div class=\"forgotPass\">\r\n    <form  (ngSubmit)=\"resetPassword()\" [formGroup]=\"forgotForm\" autocomplete=\"off\">\r\n        <img src=\"/assets/img/Yum-logo-small.png\">\r\n        <h2>Forgot Password?</h2>\r\n        <p>\r\n        Enter your email address below and<br>\r\n        we'll send you password reset<br>\r\n        instructions.\r\n        </p>\r\n        <label>Enter your email address</label>\r\n        <md-input-container>\r\n          <input mdInput type=\"email\" placeholder=\"Email\" formControlName=\"email\"/>\r\n          <md-error class=\"error\" *ngIf=\"forgotForm.get('email').touched && forgotForm.get('email').hasError('required')\">\r\n            Email is required.\r\n          </md-error>\r\n          <md-error class=\"error\" *ngIf=\"forgotForm.get('email').touched && forgotForm.get('email').hasError('pattern')\">\r\n            Wrong email address\r\n          </md-error>\r\n        </md-input-container>\r\n        <div>\r\n          <button md-raised-button type=\"submit\" color=\"accent\" [disabled]=\"forgotForm.invalid || isDisable === true\">Reset Password</button>\r\n          <img class=\"spinner\" *ngIf=\"showSpinner\" src=\"../../assets/img/spinner.gif\">\r\n        </div>\r\n    </form>\r\n    <div class=\"links\">\r\n      <a routerLink=\"/login\" routerLinkActive=\"active\">Cancel </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/anon/forgotpwd/forgotpwd.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\n  background-image: url(\"/assets/img/reset-Password-Bg.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100vh;\n  position: relative; }\n\n.forgotPass {\n  position: absolute;\n  background-color: white;\n  width: 324px;\n  height: 430px;\n  padding: 20px 20px 20px 20px;\n  margin-left: 5%;\n  margin-top: 4%;\n  text-align: center; }\n\nbutton {\n  width: 270px;\n  height: 50px;\n  margin-top: 5px; }\n\ninput {\n  width: 270px;\n  height: 30px; }\n\n.spinner {\n  position: absolute;\n  margin-left: 1%;\n  margin-top: 7%; }\n\na {\n  text-decoration: none;\n  font-size: 1.2em;\n  color: black; }\n\na:hover {\n  color: #FF5B57; }\n\n.links {\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/anon/forgotpwd/forgotpwd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpwdComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotpwdComponent = (function () {
    function ForgotpwdComponent(fb, authService, router, snackBar) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.isDisable = false;
        // create spinner
        this.showSpinner = false;
    }
    ForgotpwdComponent.prototype.ngOnInit = function () {
        // Create Form group, form controls, validators
        this.forgotForm = this.fb.group({
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                ]]
        });
    };
    ForgotpwdComponent.prototype.resetPassword = function () {
        var _this = this;
        this.showSpinner = true;
        this.isDisable = true;
        this.authService.authForgotpwdPost(this.forgotForm.value.email)
            .finally(function () {
            _this.showSpinner = false;
            _this.isDisable = false;
        })
            .subscribe(function (result) {
            _this.router.navigate(['login']);
            _this.openSnackBar('Password Reset successfully!', 'ok', 1);
        }, function (error) {
            console.log(error);
            _this.openSnackBar('No user found with this email', 'ok', 2);
        });
    };
    // status -> 1:success , 3:error
    ForgotpwdComponent.prototype.openSnackBar = function (message, action, status) {
        switch (status) {
            case 1:
                this.snackBar.open(message, action, {
                    duration: 3000,
                    extraClasses: ['success-snack-bar']
                });
                break;
            case 2:
                this.snackBar.open(message, action, {
                    extraClasses: ['error-snack-bar']
                });
                break;
        }
    };
    return ForgotpwdComponent;
}());
ForgotpwdComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forgotpwd',
        template: __webpack_require__("../../../../../src/app/anon/forgotpwd/forgotpwd.component.html"),
        styles: [__webpack_require__("../../../../../src/app/anon/forgotpwd/forgotpwd.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = (typeof __WEBPACK_IMPORTED_MODULE_4__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__remote__).AuthApi) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdSnackBar */]) === "function" && _d || Object])
], ForgotpwdComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=forgotpwd.component.js.map

/***/ }),

/***/ "../../../../../src/app/anon/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background min-sizes\">\r\n  <div class=\"login\">\r\n    <form (ngSubmit)=\"login()\" [formGroup]=\"loginForm\" autocomplete=\"off\">\r\n      <img src=\"/assets/img/Yum-logo-small.png\">\r\n      <h2>Sign in</h2>\r\n        <md-input-container>\r\n          <input mdInput type=\"email\" placeholder=\"user email\" formControlName=\"email\"/>\r\n          <md-error class=\"error\" *ngIf=\"loginForm.get('email').touched && (loginForm.get('email').hasError('required'))\">\r\n            Email is required.\r\n          </md-error>\r\n          <md-error class=\"error\" *ngIf=\"loginForm.get('email').touched && loginForm.get('email').hasError('pattern')\">\r\n            Wrong email address\r\n          </md-error>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput type=\"password\" placeholder=\"password\" formControlName=\"password\"/>\r\n          <md-error class=\"error\" *ngIf=\"loginForm.get('password').touched && loginForm.get('password').hasError('required')\">\r\n            Password is required.\r\n          </md-error>\r\n        </md-input-container>\r\n        <button md-raised-button type=\"submit\" color=\"accent\" [disabled]=\"disableBtn\">Login</button>\r\n        <img class=\"spinner\" *ngIf=\"showSpinner\" src=\"../../assets/img/spinner.gif\">\r\n      </form>\r\n    <div class=\"links\">\r\n      <a routerLink=\"/forgotpwd\" routerLinkActive=\"active\">Forgot password?</a>\r\n    </div>\r\n    <div class=\"links\">\r\n      <a routerLink=\"/register\" routerLinkActive=\"active\">Create account </a>\r\n    </div>\r\n  </div>\r\n  <div class=\"text\">\r\n    <p>\r\n        What I've enjoyed most, though, is meeting people who have\r\n        a real interest in food and sharing ideas with them.\r\n        Good food is a global thing and I find that there is\r\n        always something new and amazing to learn - I love it!<br><br>\r\n        Jamie Oliver<br><br>\r\n        www.brainyquote.com\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/anon/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\n  background-image: url(\"/assets/img/Login-Bg.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100vh;\n  position: relative; }\n\n.login {\n  position: absolute;\n  background-color: white;\n  width: 341px;\n  height: 490px;\n  padding: 20px 20px 20px 20px;\n  margin-left: 7%;\n  margin-top: 4%;\n  text-align: center; }\n\nbutton {\n  width: 270px;\n  height: 50px;\n  margin-top: 5px; }\n\ninput {\n  width: 270px;\n  height: 50px; }\n\na {\n  text-decoration: none;\n  font-size: 1.2em;\n  color: black; }\n\n.spinner {\n  position: absolute;\n  margin-left: 1%;\n  margin-top: 7%; }\n\n.links {\n  margin-top: 20px; }\n\n.text {\n  position: relative;\n  background: rgba(255, 255, 255, 0.7);\n  top: 44%;\n  left: 87%;\n  -webkit-transform: translate(-80%, -80%);\n          transform: translate(-80%, -80%);\n  padding: 30px;\n  text-align: center;\n  width: 280px; }\n\n.text p {\n  font-family: arial;\n  text-align: center;\n  font-size: 18px;\n  font-weight: normal;\n  color: #777; }\n\na:hover {\n  color: #FF5B57; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/anon/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(fb, router, snackBar, authenticationService) {
        this.fb = fb;
        this.router = router;
        this.snackBar = snackBar;
        this.authenticationService = authenticationService;
        // create spinner
        this.showSpinner = false;
        this.disableBtn = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // Create Form group, form controls, validators.
        this.loginForm = this.fb.group({
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                ]],
            password: ['', [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* Validators */].required
                ]]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.showSpinner = true;
        this.disableBtn = true;
        this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password)
            .finally(function () {
            _this.showSpinner = false;
            _this.disableBtn = false;
        })
            .subscribe(function (result) {
            //this.openSnackBar('Successful login', 'ok', 1);
            if (result != null) {
                console.log('Logged as:' + result);
                switch (result) {
                    case 'admin':
                        _this.router.navigate(['admin']);
                        break;
                    case 'hungry':
                        _this.router.navigate(['hungry']);
                        break;
                    case 'chef':
                        _this.router.navigate(['chef']);
                        break;
                }
            }
        }, function (error) {
            console.log(error.body);
            switch (error.status) {
                case 403:
                    _this.openSnackBar('You can not login (Your account is not activated yet)', 'ok', 2);
                    break;
                case 404:
                    _this.openSnackBar('User not found (bad credentials)', 'ok', 2);
                    break;
                case 500:
                    _this.openSnackBar('Server Error try again later', 'ok', 2);
                    break;
            }
        });
    };
    // status -> 1:success , 3:error
    LoginComponent.prototype.openSnackBar = function (message, action, status) {
        switch (status) {
            case 1:
                this.snackBar.open(message, action, {
                    duration: 3000,
                    extraClasses: ['success-snack-bar']
                });
                break;
            case 2:
                this.snackBar.open(message, action, {
                    extraClasses: ['error-snack-bar']
                });
                break;
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/anon/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/anon/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/anon/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background min-sizes\">\r\n  <div class=\"register\">\r\n    <form [formGroup]=\"registerForm\" autocomplete=\"off\">\r\n      <img src=\"/assets/img/Yum-logo-small.png\">\r\n      <h2>Register</h2>\r\n      <md-input-container>\r\n        <input mdInput type=\"text\" placeholder=\"First name\" formControlName=\"firstName\">\r\n        <md-error class=\"error\" *ngIf=\"registerForm.get('firstName').touched && registerForm.get('firstName').hasError('required')\">\r\n            First name is required.\r\n        </md-error>\r\n        <md-error *ngIf=\"registerForm.get('firstName').touched && registerForm.get('firstName').hasError('minlength')\">\r\n            Minimum of 2 characters\r\n        </md-error>\r\n      </md-input-container>\r\n      <md-input-container>\r\n        <input mdInput type=\"text\" placeholder=\"Last name\" formControlName=\"lastName\">\r\n        <md-error class=\"error\" *ngIf=\"registerForm.get('lastName').touched && registerForm.get('lastName').hasError('required')\">\r\n            Last name is required.\r\n        </md-error>\r\n        <md-error *ngIf=\"registerForm.get('lastName').touched && registerForm.get('lastName').hasError('minlength')\">\r\n            Minimum of 2 characters\r\n        </md-error>\r\n      </md-input-container>\r\n      <md-input-container>\r\n        <input mdInput  type=\"email\" placeholder=\"email\" formControlName=\"email\">\r\n        <md-error class=\"error\" *ngIf=\"registerForm.get('email').touched && registerForm.get('email').hasError('required')\">\r\n          Email is required.\r\n        </md-error>\r\n        <md-error class=\"error\" *ngIf=\"registerForm.get('email').touched && registerForm.get('email').hasError('pattern')\">\r\n          Wrong email address\r\n        </md-error>\r\n      </md-input-container>\r\n      <md-input-container>\r\n        <input mdInput autocomplete=\"off\" nofill type=\"password\" placeholder=\"password\" formControlName=\"password\" (keyup)= \"onPasswordChange()\">\r\n        <md-error class=\"error\" *ngIf=\"registerForm.get('password').touched && registerForm.get('password').hasError('required')\">\r\n          Password is required.\r\n        </md-error>\r\n        <md-error class=\"error\" *ngIf=\"registerForm.get('password').touched && registerForm.get('password').hasError('pattern')\">\r\n          Password min 6 characters.\r\n        </md-error>\r\n      </md-input-container>\r\n      <md-input-container>\r\n        <input mdInput autocomplete=\"off\" nofill type=\"password\" placeholder=\"password verification\" formControlName=\"confirm\">\r\n        <md-error *ngIf=\"registerForm.get('confirm').hasError('required') && registerForm.get('confirm').touched\">\r\n          Password Confirming is required.\r\n        </md-error>\r\n        <md-error *ngIf=\"registerForm.get('confirm').hasError('pattern') && registerForm.get('confirm').touched\">\r\n          Password min 6 characters.\r\n        </md-error>\r\n        <md-error *ngIf=\"registerForm.get('confirm').hasError('confirmError') && registerForm.get('confirm').touched\">\r\n          Password and confirm do not match.\r\n        </md-error>\r\n      </md-input-container>\r\n      <button class=\"submitBtn\" md-raised-button type=\"button\" (click)=\"register()\" [disabled]=\"registerForm.invalid || disableBtn === true\" color=\"accent\">Create account</button>\r\n      <img *ngIf=\"showSpinner\" class=\"spinner\" src=\"../../assets/img/spinner.gif\">\r\n    </form>\r\n    <div class=\"signIn\">\r\n      <h4>Already have an account?</h4>\r\n      <div class=\"links\">\r\n        <a routerLink=\"/login\" routerLinkActive=\"active\">Sign in</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"text\">\r\n    <p>\r\n      Part of the secret of a success in life is to eat\r\n      what you like and let the food fight it out inside.<br><br>\r\n      Mark Twain<br><br>\r\n      www.brainyquote.com\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/anon/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\n  background-image: url(\"/assets/img/Login-Bg.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100vh;\n  position: relative; }\n\n.register {\n  position: absolute;\n  background-color: white;\n  width: 404px;\n  height: 630px;\n  padding: 15px 10px 10px 10px;\n  margin-left: 4%;\n  margin-top: 4%;\n  text-align: center; }\n\n.submitBtn {\n  width: 340px;\n  height: 40px;\n  margin-top: 29px; }\n\n.signBtn {\n  width: 50%; }\n\ninput {\n  width: 340px;\n  height: 17px; }\n\n.spinner {\n  position: absolute;\n  margin-left: 1%;\n  margin-top: 10%; }\n\n.text {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.7);\n  top: 40%;\n  left: 89%;\n  -webkit-transform: translate(-80%, -80%);\n          transform: translate(-80%, -80%);\n  padding: 35px;\n  text-align: center;\n  width: 175px; }\n\n.text p {\n  font-family: arial;\n  text-align: center;\n  font-size: 18px;\n  font-weight: normal;\n  color: #777; }\n\na {\n  text-decoration: none;\n  font-size: 1.2em;\n  color: black; }\n\na:hover {\n  color: #FF5B57; }\n\n.links {\n  margin-top: 20px; }\n\n.signIn {\n  margin-top: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/anon/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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
    function RegisterComponent(fb, router, authService, snackBar) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.snackBar = snackBar;
        // create spinner
        this.showSpinner = false;
        this.disableBtn = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // Create Form group, form controls, validators
        this.registerForm = this.fb.group({
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].pattern('.*[^ ].*')]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].pattern('.*[^ ].*')]],
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                ]],
            password: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].pattern(/^(?=.*[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|])[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|]{6,}$/)
                ]],
            confirm: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].pattern(/^(?=.*[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|])[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|]{6,}$/),
                    this.validationEquals
                ]]
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.showSpinner = true;
        this.disableBtn = true;
        var body = {};
        body.firstName = this.registerForm.value.firstName;
        body.lastName = this.registerForm.value.lastName;
        body.email = this.registerForm.value.email;
        body.password = this.registerForm.value.password;
        body.role = 'hungry';
        this.authService.authRegisterPost(body)
            .finally(function () {
            _this.showSpinner = false;
            _this.disableBtn = false;
        })
            .subscribe(function () {
            _this.openSnackBar('Account successfully created!', 'ok', 1);
            _this.registerForm.reset();
            _this.router.navigate(['login']);
        }, function (error) {
            switch (error.status) {
                case 400:
                    _this.openSnackBar('Bad registration data.', 'ok', 2);
                    break;
                case 412:
                    _this.openSnackBar('User already exists.', 'ok', 2);
                    break;
                case 500:
                    _this.openSnackBar('Server error try again later.', 'ok', 2);
                    break;
            }
        });
    };
    // Custom validator for password and confirm password
    RegisterComponent.prototype.validationEquals = function (control) {
        if (control.parent != null) {
            return (control.parent.value.password === control.value) ? null : { 'confirmError': true };
        }
        else {
            return { 'confirmError': true };
        }
    };
    // trigger confirm password validator
    RegisterComponent.prototype.onPasswordChange = function () {
        this.registerForm.controls.confirm.updateValueAndValidity();
    };
    // status -> 1:success , 3:error
    RegisterComponent.prototype.openSnackBar = function (message, action, status) {
        switch (status) {
            case 1:
                this.snackBar.open(message, action, {
                    duration: 5000,
                    extraClasses: ['success-snack-bar']
                });
                break;
            case 2:
                this.snackBar.open(message, action, {
                    extraClasses: ['error-snack-bar']
                });
                break;
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/anon/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/anon/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = (typeof __WEBPACK_IMPORTED_MODULE_4__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__remote__).AuthApi) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdSnackBar */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/anon/resetpwd/resetpwd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background min-sizes\">\r\n  <div class=\"resetPass\">\r\n    <form  (ngSubmit)=\"changePassword()\" [formGroup]=\"resetForm\" autocomplete=\"off\">\r\n        <img src=\"/assets/img/Yum-logo-small.png\">\r\n        <h2>Reset password</h2>\r\n        <p>\r\n        Please enter a new password<br>to continue.\r\n        </p>\r\n        <md-input-container>\r\n          <input mdInput type=\"password\" placeholder=\"New Password\" formControlName=\"password\" (keyup)= \"onPasswordChange()\"/>\r\n          <md-error class=\"error\" *ngIf=\"resetForm.get('password').touched && resetForm.get('password').hasError('required')\">\r\n            Password is required.\r\n          </md-error>\r\n          <md-error class=\"error\" *ngIf=\"resetForm.get('password').touched && resetForm.get('password').hasError('pattern')\">\r\n            Password min 6 characters.\r\n          </md-error>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput type=\"password\" placeholder=\"Confirm Password\" formControlName=\"confirm\"/>\r\n          <md-error *ngIf=\"resetForm.get('confirm').hasError('required') && resetForm.get('confirm').touched\">\r\n            Password Confirming is required.\r\n          </md-error>\r\n           <md-error *ngIf=\"resetForm.get('confirm').hasError('pattern') && resetForm.get('confirm').touched\">\r\n            Password min 6 characters.\r\n          </md-error>\r\n          <md-error *ngIf=\"resetForm.get('confirm').hasError('confirmError') && resetForm.get('confirm').touched\">\r\n            Password and confirm do not match.\r\n          </md-error>\r\n        </md-input-container>\r\n        <div>\r\n          <button md-raised-button type=\"submit\" color=\"warn\" [disabled]=\"resetForm.invalid || isDisable === true\">Change Password</button>\r\n          <img class=\"spinner\" *ngIf=\"showSpinner\" src=\"../../assets/img/spinner.gif\">\r\n        </div>\r\n    </form>\r\n    <div class=\"links\">\r\n      <a routerLink=\"/login\" routerLinkActive=\"active\">Cancel </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/anon/resetpwd/resetpwd.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\n  background-image: url(\"/assets/img/reset-Password-Bg.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100vh;\n  position: relative; }\n\n.resetPass {\n  position: absolute;\n  background-color: white;\n  width: 348px;\n  height: 500px;\n  padding: 20px 20px 20px 20px;\n  margin-left: 5%;\n  margin-top: 3%;\n  text-align: center; }\n\nbutton {\n  width: 250px;\n  height: 50px;\n  margin-top: 15px; }\n\ninput {\n  width: 250px;\n  height: 30px;\n  margin-top: 5px; }\n\n.spinner {\n  position: absolute;\n  margin-left: 1%;\n  margin-top: 8%; }\n\na {\n  text-decoration: none;\n  font-size: 1.2em;\n  color: black; }\n\na:hover {\n  color: #FF5B57; }\n\n.links {\n  margin-top: 38px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/anon/resetpwd/resetpwd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpwdComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetpwdComponent = (function () {
    function ResetpwdComponent(fb, authService, router, activatedRoute, snackBar) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.isDisable = false;
        this.token = '';
        // create spinner
        this.showSpinner = false;
    }
    ResetpwdComponent.prototype.ngOnInit = function () {
        this.isDisable = false;
        // Create Form group, form controls, validators
        this.resetForm = this.fb.group({
            password: ['', [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* Validators */].pattern(/^(?=.*[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|])[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|]{6,}$/)
                ]],
            confirm: ['', [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* Validators */].pattern(/^(?=.*[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|])[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|]{6,}$/),
                    this.validationEquals
                ]]
        });
    };
    ResetpwdComponent.prototype.changePassword = function () {
        var _this = this;
        this.showSpinner = true;
        this.isDisable = true;
        // Take the secret token from url.
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.token = params['token'];
        });
        var resetpwd = {};
        resetpwd.password = this.resetForm.value.password;
        resetpwd.token = this.token;
        this.authService.authChangepwdPut(resetpwd)
            .finally(function () {
            _this.showSpinner = false;
            _this.isDisable = false;
        })
            .subscribe(function (result) {
            _this.router.navigate(['login']);
            _this.openSnackBar('Password Change successfully!', 'ok', 1);
        }, function (error) {
            console.log(error);
            _this.openSnackBar('Bad reset password data', 'ok', 2);
        });
    };
    // Custom validator for password and confirm password
    ResetpwdComponent.prototype.validationEquals = function (control) {
        if (control.parent != null) {
            return (control.parent.value.password === control.value) ? null : { 'confirmError': true };
        }
        else {
            return { 'confirmError': true };
        }
    };
    // trigger confirm password validator
    ResetpwdComponent.prototype.onPasswordChange = function () {
        this.resetForm.controls.confirm.updateValueAndValidity();
    };
    // status -> 1:success , 3:error
    ResetpwdComponent.prototype.openSnackBar = function (message, action, status) {
        switch (status) {
            case 1:
                this.snackBar.open(message, action, {
                    duration: 3000,
                    extraClasses: ['success-snack-bar']
                });
                break;
            case 2:
                this.snackBar.open(message, action, {
                    extraClasses: ['error-snack-bar']
                });
                break;
        }
    };
    return ResetpwdComponent;
}());
ResetpwdComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resetpwd',
        template: __webpack_require__("../../../../../src/app/anon/resetpwd/resetpwd.component.html"),
        styles: [__webpack_require__("../../../../../src/app/anon/resetpwd/resetpwd.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = (typeof __WEBPACK_IMPORTED_MODULE_4__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__remote__).AuthApi) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdSnackBar */]) === "function" && _e || Object])
], ResetpwdComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=resetpwd.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-route.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouteGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppRouteGuard = (function () {
    function AppRouteGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AppRouteGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.isLogged()) {
            this.router.navigate(['/' + this.authenticationService.getLoggedInRole()]);
            return false;
        }
        else {
            return true; // this will go to login page
        }
    };
    return AppRouteGuard;
}());
AppRouteGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AppRouteGuard);

var _a, _b;
//# sourceMappingURL=app-route.guard.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.bootstrapUser();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hungry_hungry_module__ = __webpack_require__("../../../../../src/app/hungry/hungry.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chef_chef_module__ = __webpack_require__("../../../../../src/app/chef/chef.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__anon_anon_module__ = __webpack_require__("../../../../../src/app/anon/anon.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__remote_variables__ = __webpack_require__("../../../../../src/app/remote/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_route_guard__ = __webpack_require__("../../../../../src/app/app-route.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_settings_settings_route_guard__ = __webpack_require__("../../../../../src/app/shared/settings/settings-route.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* AppRouting */],
            __WEBPACK_IMPORTED_MODULE_11_angular_calendar__["a" /* CalendarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__hungry_hungry_module__["a" /* HungryModule */],
            __WEBPACK_IMPORTED_MODULE_7__chef_chef_module__["a" /* ChefModule */],
            __WEBPACK_IMPORTED_MODULE_8__admin_admin_module__["a" /* AdminModule */],
            __WEBPACK_IMPORTED_MODULE_9__anon_anon_module__["a" /* AnonModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__remote__["AuthApi"],
            { provide: __WEBPACK_IMPORTED_MODULE_13__remote_variables__["a" /* BASE_PATH */], useValue: "http://localhost:8080/api" },
            __WEBPACK_IMPORTED_MODULE_14__app_route_guard__["a" /* AppRouteGuard */],
            __WEBPACK_IMPORTED_MODULE_15__shared_settings_settings_route_guard__["a" /* SettingsRouteGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__anon_login_login_component__ = __webpack_require__("../../../../../src/app/anon/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anon_register_register_component__ = __webpack_require__("../../../../../src/app/anon/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__anon_forgotpwd_forgotpwd_component__ = __webpack_require__("../../../../../src/app/anon/forgotpwd/forgotpwd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_settings_settings_component__ = __webpack_require__("../../../../../src/app/shared/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__anon_resetpwd_resetpwd_component__ = __webpack_require__("../../../../../src/app/anon/resetpwd/resetpwd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/shared/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_route_guard__ = __webpack_require__("../../../../../src/app/app-route.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_settings_settings_route_guard__ = __webpack_require__("../../../../../src/app/shared/settings/settings-route.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });









var appRoutes = [
    // { path: '', canActivate: [AppRouteGuard], redirectTo: 'login', pathMatch: 'full' },
    { path: '', canActivate: [__WEBPACK_IMPORTED_MODULE_7__app_route_guard__["a" /* AppRouteGuard */]], component: __WEBPACK_IMPORTED_MODULE_1__anon_login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__anon_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__anon_register_register_component__["a" /* RegisterComponent */] },
    { path: 'forgotpwd', component: __WEBPACK_IMPORTED_MODULE_3__anon_forgotpwd_forgotpwd_component__["a" /* ForgotpwdComponent */] },
    { path: 'settings', canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_settings_settings_route_guard__["a" /* SettingsRouteGuard */]], component: __WEBPACK_IMPORTED_MODULE_4__shared_settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'resetpwd/:token', component: __WEBPACK_IMPORTED_MODULE_5__anon_resetpwd_resetpwd_component__["a" /* ResetpwdComponent */] },
    // { path: 'hungry', loadChildren: './hungry/hungry.module' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__shared_not_found_not_found_component__["a" /* NotFoundComponent */] },
];
var AppRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes //, {  useHash: true }
);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/chef/chef-route.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefRouteGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChefRouteGuard = (function () {
    function ChefRouteGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    ChefRouteGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.getLoggedInRole() === 'chef' || this.authenticationService.getLoggedInRole() === 'admin') {
            return true;
        }
        else {
            this.router.navigate(['/']);
        }
    };
    return ChefRouteGuard;
}());
ChefRouteGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ChefRouteGuard);

var _a, _b;
//# sourceMappingURL=chef-route.guard.js.map

/***/ }),

/***/ "../../../../../src/app/chef/chef.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/chef/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chef_routing__ = __webpack_require__("../../../../../src/app/chef/chef.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_food_food_component__ = __webpack_require__("../../../../../src/app/chef/home/food/food.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_food_edit_food_edit_component__ = __webpack_require__("../../../../../src/app/chef/home/food-edit/food-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_food_inline_edit_food_inline_edit_component__ = __webpack_require__("../../../../../src/app/chef/home/food-inline-edit/food-inline-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_foods_service__ = __webpack_require__("../../../../../src/app/chef/services/foods.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_chef_nav_chef_nav_component__ = __webpack_require__("../../../../../src/app/chef/shared/chef-nav/chef-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__menus_menus_component__ = __webpack_require__("../../../../../src/app/chef/menus/menus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__orders_orders_component__ = __webpack_require__("../../../../../src/app/chef/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ordersday_ordersday_component__ = __webpack_require__("../../../../../src/app/chef/ordersday/ordersday.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__menus_daily_menu_daily_menu_component__ = __webpack_require__("../../../../../src/app/chef/menus/daily-menu/daily-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__orders_order_total_order_total_component__ = __webpack_require__("../../../../../src/app/chef/orders/order-total/order-total.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ordersday_food_item_food_item_component__ = __webpack_require__("../../../../../src/app/chef/ordersday/food-item/food-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ordersday_user_order_user_order_component__ = __webpack_require__("../../../../../src/app/chef/ordersday/user-order/user-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__chef_route_guard__ = __webpack_require__("../../../../../src/app/chef/chef-route.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var ChefModule = (function () {
    function ChefModule() {
    }
    return ChefModule;
}());
ChefModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__chef_routing__["a" /* ChefRouting */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_6__home_food_food_component__["a" /* FoodComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_food_edit_food_edit_component__["a" /* FoodEditComponent */], __WEBPACK_IMPORTED_MODULE_8__home_food_inline_edit_food_inline_edit_component__["a" /* FoodInlineEditComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_food_food_component__["b" /* EditCloneDialogComponent */], __WEBPACK_IMPORTED_MODULE_6__home_food_food_component__["c" /* DeleteDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_10__shared_chef_nav_chef_nav_component__["a" /* ChefNavComponent */],
            __WEBPACK_IMPORTED_MODULE_11__menus_menus_component__["a" /* MenusComponent */],
            __WEBPACK_IMPORTED_MODULE_12__orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_13__ordersday_ordersday_component__["a" /* OrdersdayComponent */],
            __WEBPACK_IMPORTED_MODULE_14__menus_daily_menu_daily_menu_component__["a" /* DailyMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_food_food_component__["d" /* DeleteAskDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_16__orders_order_total_order_total_component__["a" /* OrderTotalComponent */],
            __WEBPACK_IMPORTED_MODULE_17__ordersday_food_item_food_item_component__["a" /* FoodItemComponent */],
            __WEBPACK_IMPORTED_MODULE_18__ordersday_user_order_user_order_component__["a" /* UserOrderComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__remote__["ChefApi"], __WEBPACK_IMPORTED_MODULE_9__services_foods_service__["a" /* FoodsService */], __WEBPACK_IMPORTED_MODULE_19__chef_route_guard__["a" /* ChefRouteGuard */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_6__home_food_food_component__["b" /* EditCloneDialogComponent */], __WEBPACK_IMPORTED_MODULE_6__home_food_food_component__["c" /* DeleteDialogComponent */], __WEBPACK_IMPORTED_MODULE_6__home_food_food_component__["d" /* DeleteAskDialogComponent */]]
    })
], ChefModule);

//# sourceMappingURL=chef.module.js.map

/***/ }),

/***/ "../../../../../src/app/chef/chef.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/chef/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_logged_logged_component__ = __webpack_require__("../../../../../src/app/shared/logged/logged.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orders_orders_component__ = __webpack_require__("../../../../../src/app/chef/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ordersday_ordersday_component__ = __webpack_require__("../../../../../src/app/chef/ordersday/ordersday.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menus_menus_component__ = __webpack_require__("../../../../../src/app/chef/menus/menus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chef_route_guard__ = __webpack_require__("../../../../../src/app/chef/chef-route.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefRouting; });







var chefRoutes = [
    { path: 'chef',
        component: __WEBPACK_IMPORTED_MODULE_2__shared_logged_logged_component__["a" /* LoggedComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__chef_route_guard__["a" /* ChefRouteGuard */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_3__orders_orders_component__["a" /* OrdersComponent */] },
            { path: 'orders/daily/:day', component: __WEBPACK_IMPORTED_MODULE_4__ordersday_ordersday_component__["a" /* OrdersdayComponent */] },
            { path: 'orders/:year/:month', component: __WEBPACK_IMPORTED_MODULE_3__orders_orders_component__["a" /* OrdersComponent */] },
            { path: 'menus', component: __WEBPACK_IMPORTED_MODULE_5__menus_menus_component__["a" /* MenusComponent */] },
            { path: 'menus/:year/:month', component: __WEBPACK_IMPORTED_MODULE_5__menus_menus_component__["a" /* MenusComponent */] },
        ]
    }
];
var ChefRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(chefRoutes);
//# sourceMappingURL=chef.routing.js.map

/***/ }),

/***/ "../../../../../src/app/chef/home/food-edit/food-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The form where chef can create new Food items-->\r\n<md-card>\r\n  <form createNewFoodItemForm [formGroup]=\"food\" autocomplete=\"off\">\r\n    <md-grid-list cols=\"4\" rowHeight=\"100px\">\r\n      <md-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\r\n        <md-input-container class=\"full-width\">\r\n          <input mdInput placeholder=\"Food Name\" type=\"text\" formControlName=\"foodName\" (blur)=\"uniqueName($event.target.value)\">\r\n          <md-error *ngIf=\"food.get('foodName').touched && food.get('foodName').hasError('required')\">\r\n            Food Name is required\r\n          </md-error>\r\n          <md-error *ngIf=\"food.get('foodName').touched && food.get('foodName').hasError('minlength')\">\r\n            Minimum of 2 characters\r\n          </md-error>\r\n          <md-error *ngIf=\"food.get('foodName').touched && food.get('foodName').hasError('maxlength')\">\r\n            Maximum of 100 characters\r\n          </md-error>\r\n          <md-error *ngIf=\"food.get('foodName').touched && food.get('foodName').hasError('pattern')\">\r\n            Invalid food name\r\n          </md-error>\r\n          <div *ngIf=\"!isNameUnique\">\r\n            <md-error>\r\n              This name already exists\r\n            </md-error>\r\n          </div>\r\n        </md-input-container>\r\n      </md-grid-tile>\r\n      <md-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n      </md-grid-tile>\r\n      <md-grid-tile [colspan]=\"1\" [rowspan]=\"1\" class=\"alignBottom\">\r\n        <md-select placeholder=\"Food Type\" formControlName=\"foodType\" class=\"left-position margin-bottom\">\r\n          <md-option *ngFor=\"let foodType of this.foodTypesForm\" [value]='foodType'>\r\n            {{ foodType }}\r\n          </md-option>\r\n        </md-select>\r\n      </md-grid-tile>\r\n\r\n      <md-grid-tile [colspan]=\"2\" [rowspan]=\"1\" class=\"smallPaddingBottom\">\r\n        <md-input-container class=\"full-width\">\r\n          <textarea mdInput placeholder=\"Description\" type=\"text\" formControlName=\"description\" cols=\"50\" rows=\"4\" class=\"noResize\" (keyup)=\"count(tweetmsg)\"  [(ngModel)]=\"tweetmsg\"></textarea>\r\n          <md-hint>{{characterleft}} charcter(s) left</md-hint>\r\n          <md-error *ngIf=\"food.get('description').touched && food.get('description').hasError('maxlength')\">\r\n            Maximum of 250 characters\r\n          </md-error>\r\n        </md-input-container>\r\n      </md-grid-tile>\r\n      <md-grid-tile [colspan]=\"1\" [rowspan]=\"1\" class=\"alignBottom\">\r\n        <md-input-container class=\"noMarginInput\">\r\n          <input mdInput placeholder='Price' formControlName=\"price\" />\r\n          <md-error *ngIf=\"food.get('price').touched && food.get('price').hasError('required')\">\r\n            Price is required\r\n          </md-error>\r\n          <md-error *ngIf=\"food.get('price').touched && food.get('price').hasError('maxlength')\">\r\n            Invalid price\r\n          </md-error>\r\n          <md-error *ngIf=\"food.get('price').touched && food.get('price').hasError('pattern')\">\r\n            Invalid price\r\n          </md-error>\r\n        </md-input-container>\r\n      </md-grid-tile>\r\n      <md-grid-tile [colspan]=\"3\" [rowspan]=\"1\">\r\n      </md-grid-tile>\r\n      <md-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n        <!--The create food button-->\r\n        <md-card-actions>\r\n          <button md-raised-button type=\"button\" (click)=\"createFood()\" color='accent' [disabled]=\"!(!food.invalid && (isNameUnique && (food.get('foodName').value !== '')))\">Create food</button>\r\n          <img *ngIf=\"showSpinner\" src=\"../../../assets/img/spinner.gif\">\r\n        </md-card-actions>\r\n        <!---->\r\n      </md-grid-tile>\r\n    </md-grid-list>\r\n  </form>\r\n</md-card>\r\n<!---->\r\n"

/***/ }),

/***/ "../../../../../src/app/chef/home/food-edit/food-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\n  width: 500px; }\n\n.full-width {\n  width: 100%; }\n\n.left-position {\n  width: 50%;\n  margin-right: 50%; }\n\n.margin-bottom {\n  margin-bottom: 20px; }\n\n.smallPaddingBottom {\n  padding-bottom: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chef/home/food-edit/food-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_global_settings_service_service__ = __webpack_require__("../../../../../src/app/shared/services/global-settings-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FoodEditComponent = (function () {
    function FoodEditComponent(chefService, snackBar, gss) {
        this.chefService = chefService;
        this.snackBar = snackBar;
        this.gss = gss;
        this.foodDetails = {};
        this.foodCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showForm = true;
        // create spinner
        this.showSpinner = false;
        // validation for unique name of foods
        this.isNameUnique = true;
        // values for counter
        this.maxlength = 250;
        this.characterleft = this.maxlength;
    }
    FoodEditComponent.prototype.ngOnInit = function () {
        this.foodTypesForm = ['Main', 'Salad', 'Drink'];
        this.currency = this.gss.getCurrency();
        this.food = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormGroup */]({
            foodName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(100), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].pattern('.*[^ ].*')]),
            foodType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(250)),
            price: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].pattern('^([1-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$')])
        });
    };
    // method for count how many chars is remaning for the description
    FoodEditComponent.prototype.count = function (msg) {
        if (this.maxlength >= msg.length) {
            this.characterleft = (this.maxlength) - (msg.length);
        }
        else {
            this.tweetmsg = msg.substr(0, msg.length - 1);
            console.log(msg);
        }
    };
    FoodEditComponent.prototype.clearForm = function () {
        var _this = this;
        this.showForm = false;
        setTimeout(function () {
            _this.food.reset({ description: '' });
            _this.showForm = true;
        });
    };
    FoodEditComponent.prototype.createFood = function () {
        var _this = this;
        this.showSpinner = true;
        this.clearForm();
        this.chefService.foodsPost(this.food.value).subscribe(function (foodDetails) {
            _this.foodCreated.emit(_this.foodDetails);
            _this.openSnackBar('Food succefully created!', 'ok', true);
        }, function (error) {
            console.log(error);
            _this.openSnackBar('Food cannot be created!', 'ok', false);
            _this.showSpinner = false;
        }, function () {
            _this.showSpinner = false;
        });
    };
    FoodEditComponent.prototype.openSnackBar = function (message, action, timeOut) {
        if (timeOut) {
            this.snackBar.open(message, action, {
                duration: 5000,
                extraClasses: ['success-snack-bar']
            });
        }
        else {
            this.snackBar.open(message, action, {
                extraClasses: ['error-snack-bar']
            });
        }
    };
    // Checks if the name of the new food that Chef want it doesn't exist, or if it's exists checks if it's archived or not
    FoodEditComponent.prototype.uniqueName = function (name) {
        var _this = this;
        this.chefService.foodsFindByNameNameGet(name).subscribe(function (food) {
            if (food.archived === false) {
                _this.isNameUnique = false;
            }
            else {
                _this.isNameUnique = true;
            }
        }, function (error) {
            console.log(error);
            _this.isNameUnique = true;
        });
    };
    return FoodEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_3__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__remote__).FoodDetails) === "function" && _a || Object)
], FoodEditComponent.prototype, "foodDetails", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FoodEditComponent.prototype, "foodCreated", void 0);
FoodEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-food-edit',
        template: __webpack_require__("../../../../../src/app/chef/home/food-edit/food-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chef/home/food-edit/food-edit.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = (typeof __WEBPACK_IMPORTED_MODULE_3__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__remote__).ChefApi) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */]) === "function" && _d || Object])
], FoodEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=food-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/chef/home/food-inline-edit/food-inline-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The form where chef can edit Food items-->\r\n\r\n<form createNewFoodItemForm (ngSubmit)=\"editFood(foodEditForm)\" [formGroup]=\"foodEditForm\" autocomplete=\"off\">\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around start\" class=\"margin-bar\">\r\n\r\n\r\n    <div fxFlex=\"20\" class=\"align-left\">\r\n      <div fxLayout=\"column\">\r\n        <div>\r\n          <md-input-container>\r\n            <input mdInput placeholder=\"Food Name\" type=\"text\" formControlName=\"foodName\" (keyup)=\"nameChangesAndUnique($event.target.value)\">\r\n            <md-error *ngIf=\"foodEditForm.get('foodName').touched && foodEditForm.get('foodName').hasError('required')\">\r\n              Food Name is required\r\n            </md-error>\r\n            <md-error *ngIf=\"foodEditForm.get('foodName').touched && foodEditForm.get('foodName').hasError('minlength')\">\r\n              Minimum of 2 characters\r\n            </md-error>\r\n            <md-error *ngIf=\"foodEditForm.get('foodName').touched && foodEditForm.get('foodName').hasError('pattern')\">\r\n              Invalid food name\r\n            </md-error>\r\n            <md-error *ngIf=\"foodEditForm.get('foodName').touched && foodEditForm.get('foodName').hasError('maxlength')\">\r\n              Maximum of 100 characters\r\n            </md-error>\r\n            <div *ngIf=\"!isNameUnique\">\r\n              <md-error>\r\n                This name already exists\r\n              </md-error>\r\n            </div>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div class=\"top-margin\">\r\n          <md-select placeholder=\"Food Type\" formControlName=\"foodType\" (ngModelChange)=\"foodTypeChanges($event)\">\r\n            <md-option *ngFor=\"let foodType of this.foodTypesForm\" [value]='foodType'>\r\n              {{ foodType }}\r\n            </md-option>\r\n          </md-select>\r\n          <md-error *ngIf=\"foodEditForm.get('foodType').touched && foodEditForm.get('foodType').hasError('required')\">\r\n            Food Type is required\r\n          </md-error>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxFlex=\"20\">\r\n      <md-input-container class=\"example-full-width\" (keyup)=\"descriptionChanges($event.target.value)\">\r\n        <textarea mdInput placeholder=\"Description\" type=\"text\" formControlName=\"description\" cols=\"40\" rows=\"3\" (keyup)=\"count(tweetmsg)\" [(ngModel)]=\"tweetmsg\" class=\"noResize\"></textarea>\r\n        <md-hint>{{characterleft}} charcter(s) left</md-hint>\r\n        <md-error *ngIf=\"foodEditForm.get('description').touched && foodEditForm.get('description').hasError('maxlength')\">\r\n          Maximum of 250 characters\r\n        </md-error>\r\n      </md-input-container>\r\n    </div>\r\n\r\n    <div fxFlex=\"20\" class=\"smallLeftPad\">\r\n      <md-input-container>\r\n        <input mdInput placeholder=\"Price\" formControlName=\"price\" (keyup)=\"priceChanges($event.target.value)\">\r\n        <md-error *ngIf=\"foodEditForm.get('price').touched && foodEditForm.get('price').hasError('required')\">\r\n          Price is required\r\n        </md-error>\r\n        <md-error *ngIf=\"foodEditForm.get('price').touched && foodEditForm.get('price').hasError('maxlength')\">\r\n          Invalid price\r\n        </md-error>\r\n        <md-error *ngIf=\"foodEditForm.get('price').touched && foodEditForm.get('price').hasError('pattern')\">\r\n          Invalid price\r\n        </md-error>\r\n      </md-input-container>\r\n    </div>\r\n\r\n    <div fxFlex=\"20\">\r\n      <div class=\"align-center\">\r\n        <!--The check button-->\r\n        <button md-fab color='accent' [disabled]=\"(foodEditForm.invalid || !(isNameUnique && (foodNameChange || foodTypeChange || descriptionChange || priceChange)))\"\r\n          title=\"Save\">\r\n        <i class=\"material-icons\">check</i>\r\n      </button>\r\n        <img *ngIf=\"showSpinner\" src=\"../../../../assets/img/spinner.gif\">\r\n        <!---->\r\n      </div>\r\n    </div>\r\n\r\n    <div fxFlex=\"20\">\r\n      <div class=\"align-center\">\r\n        <!--The cancel button-->\r\n        <button type='button' md-mini-fab color='accent' (click)='close()' title=\"Close\">\r\n          <i class=\"material-icons\">close</i>\r\n        </button>\r\n        <!---->\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <md-card-footer>\r\n    <md-grid-tile-footer>\r\n    </md-grid-tile-footer>\r\n  </md-card-footer>\r\n\r\n</form>\r\n<!---->\r\n"

/***/ }),

/***/ "../../../../../src/app/chef/home/food-inline-edit/food-inline-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\n  width: 500px; }\n\n.example-full-width {\n  width: 100%; }\n\n.food-edit-padding {\n  padding-top: 3%; }\n\n.align-left {\n  text-align: left  !important;\n  margin-left: 20px; }\n\n.margin-bar {\n  margin: 20px 0; }\n\n.align-center {\n  text-align: center; }\n\n.top-margin {\n  margin-top: 22px; }\n\n.smallLeftPad {\n  padding-left: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chef/home/food-inline-edit/food-inline-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodInlineEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodInlineEditComponent = (function () {
    function FoodInlineEditComponent(chefService, snackBar, fb) {
        this.chefService = chefService;
        this.snackBar = snackBar;
        this.fb = fb;
        this.updateFood = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.closeEditFood = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
        // booleans for check if there are any change in the form while the chef edits
        this.foodNameChange = false;
        this.foodTypeChange = false;
        this.descriptionChange = false;
        this.priceChange = false;
        // create spinner
        this.showSpinner = false;
        // validation for unique name of foods
        this.isNameUnique = true;
        // values for counter
        this.maxlength = 250;
        this.characterleft = this.maxlength;
    }
    FoodInlineEditComponent.prototype.ngOnInit = function () {
        if (this.foodEditable.editable) {
            this.disabled = false;
        }
        else if (this.clone === false) {
            this.disabled = true;
        }
        else if (this.clone === true) {
            this.disabled = false;
        }
        this.foodTypesForm = ['Main', 'Salad', 'Drink'];
        // The form fills with the values of the Food which we want to edit
        this.foodEditForm = this.fb.group({
            foodName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */]({ value: this.foodEditable.foodItem.foodName, disabled: this.disabled }, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(100), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].pattern('.*[^ ].*')]),
            foodType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */]({ value: this.foodEditable.foodItem.foodType, disabled: this.disabled }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */](this.foodEditable.foodItem.description, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(250)),
            price: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */]({ value: this.foodEditable.foodItem.price, disabled: this.disabled }, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].pattern('^([1-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$')])
        });
        this.tweetmsg = this.foodEditable.foodItem.description;
        this.characterleft = (this.maxlength) - (this.tweetmsg.length);
    };
    // method for count how many chars is remaning for the description
    FoodInlineEditComponent.prototype.count = function (msg) {
        if (this.maxlength >= msg.length) {
            this.characterleft = (this.maxlength) - (msg.length);
        }
        else {
            this.tweetmsg = msg.substr(0, msg.length - 1);
            console.log(msg);
        }
    };
    // status -> 1:success , 2:error
    FoodInlineEditComponent.prototype.openSnackBar = function (message, action, status) {
        switch (status) {
            case 1:
                this.snackBar.open(message, action, {
                    duration: 5000,
                    extraClasses: ['success-snack-bar']
                });
                break;
            case 2:
                this.snackBar.open(message, action, {
                    extraClasses: ['error-snack-bar']
                });
                break;
        }
    };
    // The method editFood, update the Food with the changes
    FoodInlineEditComponent.prototype.editFood = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        value.lastEdit = this.foodEditable.lastEdit;
        this.showSpinner = true;
        if (this.disabled) {
            value.foodName = this.foodEditable.foodItem.foodName;
            value.foodType = this.foodEditable.foodItem.foodType;
            value.price = this.foodEditable.foodItem.price;
        }
        this.chefService.foodsFoodIdPut(this.food.foodItem.id, value, this.clone).subscribe(function (foodDetails) {
            _this.openSnackBar('Food succefully edited!', 'ok', 1);
        }, function (error) {
            console.log(error);
            _this.openSnackBar('Food cannot be edited!', 'ok', 2);
            _this.showSpinner = false;
        }, function () {
            _this.showSpinner = false;
            _this.closeEditFood.emit();
            _this.updateFood.emit(value);
        });
    };
    // The method closed the open block
    FoodInlineEditComponent.prototype.close = function () {
        this.closeEditFood.emit();
    };
    // Checks if the Food name after the edit it doesn't exist, or if it's exists checks if it's archived or not
    FoodInlineEditComponent.prototype.uniqueName = function (name) {
        var _this = this;
        this.chefService.foodsFindByNameNameGet(name).subscribe(function (food) {
            if (food.archived === false) {
                _this.isNameUnique = false;
            }
            else {
                _this.isNameUnique = true;
            }
        }, function (error) {
            console.log(error);
            _this.isNameUnique = true;
        });
        return this.isNameUnique;
    };
    // check if the name change and if it is, it checks if it's unique
    FoodInlineEditComponent.prototype.nameChangesAndUnique = function (foodName) {
        console.log(foodName);
        if (this.foodEditable.foodItem.foodName !== foodName) {
            if (this.uniqueName(foodName)) {
                this.foodNameChange = true;
            }
        }
        else {
            this.foodNameChange = false;
        }
    };
    // check if the food type change
    FoodInlineEditComponent.prototype.foodTypeChanges = function (foodType) {
        if (this.foodEditable.foodItem.foodType !== foodType) {
            this.foodTypeChange = true;
        }
        else {
            this.foodTypeChange = false;
        }
    };
    // check if the description change
    FoodInlineEditComponent.prototype.descriptionChanges = function (description) {
        if (this.foodEditable.foodItem.description !== description) {
            this.descriptionChange = true;
        }
        else {
            this.descriptionChange = false;
        }
    };
    // check if the price change
    FoodInlineEditComponent.prototype.priceChanges = function (price) {
        if (this.foodEditable.foodItem.price != price) {
            this.priceChange = true;
        }
        else {
            this.priceChange = false;
        }
    };
    return FoodInlineEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_2__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__remote__).FoodWithStats) === "function" && _a || Object)
], FoodInlineEditComponent.prototype, "food", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FoodInlineEditComponent.prototype, "updateFood", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FoodInlineEditComponent.prototype, "closeEditFood", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = (typeof __WEBPACK_IMPORTED_MODULE_2__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__remote__).FoodEditable) === "function" && _b || Object)
], FoodInlineEditComponent.prototype, "foodEditable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FoodInlineEditComponent.prototype, "clone", void 0);
FoodInlineEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-food-inline-edit',
        template: __webpack_require__("../../../../../src/app/chef/home/food-inline-edit/food-inline-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chef/home/food-inline-edit/food-inline-edit.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = (typeof __WEBPACK_IMPORTED_MODULE_2__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__remote__).ChefApi) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _e || Object])
], FoodInlineEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=food-inline-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/chef/home/food/food-delete-ask-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title class=\"centered\">The food will be deleted</h1>\r\n<md-dialog-content class=\"dialog-content-size\">Are you sure you want to delete this Food ?</md-dialog-content>\r\n<md-dialog-actions class=\"is-flex-space\">\r\n  <button md-raised-button color=\"accent\" (click)=\"deleteAskRef.close(1)\">Delete</button>\r\n  <button md-raised-button color=\"accent\" (click)=\"deleteAskRef.close(2)\">Cancel</button>\r\n</md-dialog-actions>\r\n"

/***/ }),

/***/ "../../../../../src/app/chef/home/food/food-delete-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>The food can't be deleted</h1>\r\n<md-dialog-content>Do you want to archived it?</md-dialog-content>\r\n<md-dialog-actions class=\"is-flex-space\">\r\n  <button md-raised-button color=\"accent\" (click)=\"deleteRef.close(1)\">Archived</button>\r\n  <button md-raised-button color=\"accent\" (click)=\"deleteRef.close(2)\">Cancel</button>\r\n</md-dialog-actions>\r\n"

/***/ }),

/***/ "../../../../../src/app/chef/home/food/food-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>The food can't be modified</h1>\r\n<md-dialog-content>Do you want to edit only its description or make a clone of it?</md-dialog-content>\r\n<md-dialog-actions class=\"is-flex-space\">\r\n  <button md-raised-button color=\"accent\" (click)=\"dialogRef.close(1)\">Edit description</button>\r\n  <button md-raised-button color=\"accent\" (click)=\"dialogRef.close(2)\">Clone</button>\r\n  <button md-raised-button color=\"accent\" (click)=\"dialogRef.close(3)\">Cancel</button>\r\n</md-dialog-actions>\r\n"

/***/ }),

/***/ "../../../../../src/app/chef/home/food/food.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!editing\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around start\" class=\"margin-bar has-flex-columns\">\r\n\r\n    <!--Icon for food type-->\r\n    <div fxFlex=\"20\" class=\"align-left is-flex-start\">\r\n      <span [ngClass]=\"{'icon-Meal': food.foodItem.foodType==='Main', 'icon-Salad': food.foodItem.foodType==='Salad', 'icon-Drink': food.foodItem.foodType==='Drink'}\"\r\n        class='biggerSize'></span>\r\n\r\n      <span class=\"food-name-style\">{{food.foodItem.foodName}}</span>\r\n      <!--Name - Description - price-->\r\n    </div>\r\n\r\n    <div fxFlex=\"20\" class=\"align-center is-flex-centered  description-style\">\r\n      <span>{{food.foodItem.description}}</span>\r\n    </div>\r\n\r\n    <div fxFlex=\"20\" class=\"align-center is-flex-centered  \">\r\n      <div>\r\n        {{food.foodItem.price | number : '1.2-2'}}<span [innerHTML]=\"currency | async\"></span></div>\r\n    </div>\r\n\r\n    <!--Edit icon-->\r\n    <div fxFlex=\"20\">\r\n      <div class=\"align-center\">\r\n        <button md-fab color='accent' (click)=\"edit()\" title=\"Edit food!\">\r\n      <i class=\"material-icons\">edit</i>\r\n    </button>\r\n      </div>\r\n    </div>\r\n\r\n    <!--Delete icon-->\r\n    <div fxFlex=\"20\">\r\n      <div *ngIf=\"!food.foodItem.archived\" class=\"align-center\">\r\n        <button md-icon-button type='butoon' color='accent' (click)='delete()' title=\"Delete food!\">\r\n      <i class=\"material-icons bigger-button\">delete_forever</i>\r\n      </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--Statistic about foods-->\r\n  <span *ngIf=\"food.stats['currentWeek'].quantity !== null || lastWeek !== 0 || secondLastWeek !== 0\">\r\n    <div class=\"footer-style\">\r\n      <md-card-footer>\r\n        <md-grid-tile-footer>\r\n          <span *ngIf=\"food.stats['currentWeek'].quantity === null\"> 0 </span>\r\n  <span *ngIf=\"food.stats['currentWeek'].quantity !== null\" class=\"number-style\">\r\n            {{food.stats['currentWeek'].quantity}} </span> / this week | prev. week:\r\n  <span class=\"number-style\">{{lastWeek}}</span> | 2 weeks ago:\r\n  <span class=\"number-style\">{{secondLastWeek}}</span>\r\n  <span *ngIf=\"percentage !== -1 && (lastWeek !== 0 || secondLastWeek !== 0)\" class=\"number-style\">\r\n          ({{percentage | number : '2.0-2'}}%)\r\n          </span>\r\n  <span *ngIf=\"percentage > 0\">\r\n            <i class=\"material-icons arrow-up-color\">arrow_drop_up</i>\r\n          </span>\r\n  <span *ngIf=\"percentage < 0\">\r\n            <i class=\"material-icons arrow-down-color\">arrow_drop_down</i>\r\n          </span>\r\n  </md-grid-tile-footer>\r\n  </md-card-footer>\r\n</div>\r\n</span>\r\n</div>\r\n<div *ngIf=\"editing && ready\">\r\n  <app-food-inline-edit [food]='food' [foodEditable]='foodEditable' [clone]='clone' (closeEditFood)=\"handleCloseEditFoodEvent()\"\r\n    (updateFood)='handleUpdateFood($event)'></app-food-inline-edit>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chef/home/food/food.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".biggerSize {\n  font-size: 3em !important; }\n\n.align-left {\n  text-align: left  !important;\n  margin-left: 20px; }\n\n.margin-bar {\n  margin: 30px 0; }\n\n.align-center {\n  text-align: center; }\n\n.top-margin {\n  margin-top: 22px; }\n\n.arrow-up-color {\n  color: lightseagreen;\n  font-size: 2em !important;\n  position: absolute;\n  top: -6px;\n  width: 16px;\n  height: 8px; }\n\n.arrow-down-color {\n  color: #DC143C;\n  font-size: 2em !important;\n  position: absolute;\n  top: -6px;\n  width: 16px;\n  height: 8px; }\n\n.food-name-style {\n  font-family: 'Roboto Slab Bold', 'Roboto Slab Regular', 'Roboto Slab';\n  font-weight: 700;\n  font-style: normal;\n  font-size: 16px; }\n\n.description-style {\n  font-family: 'Arial';\n  font-weight: 400;\n  font-style: normal; }\n\n.number-style {\n  font-family: 'Arial Bold', 'Arial';\n  font-weight: 700; }\n\n.footer-style {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  width: absolute !important;\n  padding: 5px 5px 5px 15px;\n  height: 14px;\n  background: inherit;\n  background-color: #f2f2f2;\n  border: none;\n  border-radius: 3px;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px; }\n\n.is-flex-start {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.has-flex-columns {\n  -webkit-box-align: stretch !important;\n      -ms-flex-align: stretch !important;\n          align-items: stretch !important;\n  -ms-flex-wrap: nowrap !important;\n      flex-wrap: nowrap !important; }\n\n.is-flex-centered {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chef/home/food/food.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_global_settings_service_service__ = __webpack_require__("../../../../../src/app/shared/services/global-settings-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EditCloneDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DeleteAskDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DeleteDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FoodComponent = (function () {
    function FoodComponent(chefService, dialog, globalSettingsService, decpipe, snackBar) {
        this.chefService = chefService;
        this.dialog = dialog;
        this.globalSettingsService = globalSettingsService;
        this.decpipe = decpipe;
        this.snackBar = snackBar;
        this.foodEditHome = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.foodRefresh = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.editFlag = 0;
        this.clone = false;
        this.editing = false;
        this.config = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MdDialogConfig */]();
        this.flagClone = false;
        this.lastWeek = 0;
        this.secondLastWeek = 0;
    }
    FoodComponent.prototype.ngOnInit = function () {
        this.currency = this.globalSettingsService.getCurrency();
        this.config.disableClose = true;
        if (this.food.stats['lastWeek'].quantity !== null) {
            this.lastWeek = this.food.stats['lastWeek'].quantity;
        }
        if (this.food.stats['2ndLastWeek'].quantity !== null) {
            this.secondLastWeek = this.food.stats['2ndLastWeek'].quantity;
        }
        if (this.secondLastWeek === 0 && this.lastWeek === 0) {
            this.percentage = 0;
        }
        else if (this.secondLastWeek === 0 && this.lastWeek === 0) {
            this.percentage = -1;
        }
        else {
            this.percentage = (this.lastWeek * 100) / this.secondLastWeek;
            this.percentage -= 100;
        }
    };
    FoodComponent.prototype.openSnackBar = function (message, action, timeOut) {
        if (timeOut) {
            this.snackBar.open(message, action, {
                duration: 5000,
                extraClasses: ['success-snack-bar']
            });
        }
        else {
            this.snackBar.open(message, action, {
                extraClasses: ['error-snack-bar']
            });
        }
    };
    FoodComponent.prototype.edit = function () {
        var _this = this;
        this.chefService.foodsFoodIdGet(this.food.foodItem.id, 'editable').subscribe(function (foodEditable) {
            _this.foodEditable = foodEditable;
            if (foodEditable.editable) {
                _this.editing = true;
            }
            else {
                var dialogRef = _this.dialog.open(EditCloneDialogComponent, _this.config);
                dialogRef.afterClosed().subscribe(function (result) {
                    if (result === 1) {
                        // edit only the description of Food
                        _this.editing = true;
                        _this.clone = false;
                    }
                    else if (result === 2) {
                        // clone the Food
                        _this.editing = true;
                        _this.clone = true;
                        _this.flagClone = true;
                    }
                    else {
                        // close the dialog
                        _this.editing = false;
                        _this.clone = false;
                    }
                });
            }
        }, function (error) {
            console.log(error);
            _this.openSnackBar('Food cannot be updated!', 'ok', false);
        }, function () { _this.ready = true; }); // when complete
    };
    FoodComponent.prototype.handleCloseEditFoodEvent = function () {
        this.editing = false;
        this.clone = false;
    };
    // Delete the Food or Archived it and refresh the list of Foods
    FoodComponent.prototype.delete = function () {
        var _this = this;
        var deleteAskRef = this.dialog.open(DeleteAskDialogComponent, this.config);
        deleteAskRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                // Delete the Food
                _this.chefService.foodsFoodIdDelete(_this.food.foodItem.id).subscribe(function (data) {
                    _this.openSnackBar('Food succefully deleted!', 'ok', true);
                }, function (error) {
                    console.log(error);
                    _this.openSnackBar('Food cannot be deleted!', 'ok', false);
                    if (error.status === 412) {
                        var deleteRef = _this.dialog.open(DeleteDialogComponent, _this.config);
                        deleteRef.afterClosed().subscribe(function (result) {
                            if (result === 1) {
                                // Archived the Food
                                _this.chefService.foodsFoodIdDelete(_this.food.foodItem.id, true).subscribe(function (complete) {
                                    _this.openSnackBar('Food succefully archived!', 'ok', true);
                                    _this.foodRefresh.emit(); // Refresh the list of Foods after Archived
                                }, function (error) {
                                    _this.openSnackBar('Food cannot be archived!', 'ok', false);
                                });
                            }
                            else {
                                _this.editing = false;
                            }
                        });
                    }
                }, function () {
                    _this.foodRefresh.emit(); // Refresh the list of Foods after delete
                });
            }
            else {
                _this.editing = false;
            }
        });
    };
    FoodComponent.prototype.handleUpdateFood = function (food) {
        this.food.foodItem = food;
        this.food.foodItem.price = Number(this.decpipe.transform(this.food.foodItem.price, '1.2-2'));
        if (this.flagClone) {
            this.openSnackBar('Food clone succefully created!', 'ok', true);
            this.flagClone = false;
        }
        else {
            this.openSnackBar('Food succefully updated!', 'ok', true);
        }
        this.foodRefresh.emit(); // Refresh the list of Foods after edit
    };
    return FoodComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FoodComponent.prototype, "foodEditHome", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FoodComponent.prototype, "foodRefresh", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FoodComponent.prototype, "editFlag", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_1__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__remote__).FoodWithStats) === "function" && _a || Object)
], FoodComponent.prototype, "food", void 0);
FoodComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-food',
        template: __webpack_require__("../../../../../src/app/chef/home/food/food.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chef/home/food/food.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = (typeof __WEBPACK_IMPORTED_MODULE_1__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__remote__).ChefApi) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["DecimalPipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["DecimalPipe"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdSnackBar */]) === "function" && _f || Object])
], FoodComponent);

var EditCloneDialogComponent = (function () {
    function EditCloneDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return EditCloneDialogComponent;
}());
EditCloneDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chef-food-dialog',
        template: __webpack_require__("../../../../../src/app/chef/home/food/food-dialog.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MdDialogRef */]) === "function" && _g || Object])
], EditCloneDialogComponent);

var DeleteAskDialogComponent = (function () {
    function DeleteAskDialogComponent(deleteAskRef) {
        this.deleteAskRef = deleteAskRef;
    }
    return DeleteAskDialogComponent;
}());
DeleteAskDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chef-delete-ask-dialog',
        template: __webpack_require__("../../../../../src/app/chef/home/food/food-delete-ask-dialog.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MdDialogRef */]) === "function" && _h || Object])
], DeleteAskDialogComponent);

var DeleteDialogComponent = (function () {
    function DeleteDialogComponent(deleteRef) {
        this.deleteRef = deleteRef;
    }
    return DeleteDialogComponent;
}());
DeleteDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chef-delete-dialog',
        template: __webpack_require__("../../../../../src/app/chef/home/food/food-delete-dialog.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MdDialogRef */]) === "function" && _j || Object])
], DeleteDialogComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=food.component.js.map

/***/ }),

/***/ "../../../../../src/app/chef/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<md-grid-list cols=\"8\" rowHeight=\"4:1\">\r\n\r\n  <div fxLayout=\"row\">\r\n    <div fxFlex=\"25\">\r\n      <div fxLayout=\"column\">\r\n        <div>\r\n          <img src=\"../../../assets/img/chef-hat.png\" class=\"img-size\">\r\n        </div>\r\n        <div>\r\n          <h1 class=\"title-style\">\r\n            Welcome Chef!\r\n          </h1>\r\n          <h3>Start preparing your menu...</h3>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div fxFlex=\"25\" fxFlexOffset=\"50\" class=\"buttons-style\">\r\n      <app-chef-nav></app-chef-nav>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <md-grid-list cols=\"1\" rowHeight=\"6:1\">\r\n    <!--The Form for the new Food Items-->\r\n    <app-food-edit novalidate (foodCreated)=\"handleFoodRefresh()\"></app-food-edit>\r\n  </md-grid-list>\r\n\r\n  <!--The area of sorting-->\r\n  <div fxLayout=\"row\" class=\"margin-bar\">\r\n\r\n    <div fxFlex=\"15\">\r\n      <md-select [ngModel]=\"nbrOfItem\" (ngModelChange)=\"changePageSize($event)\" placeholder=\"Number Of Items\">\r\n        <md-option *ngFor=\"let nbrOfItem of this.numberOfItems\" [value]='nbrOfItem'>\r\n          {{ nbrOfItem }}\r\n        </md-option>\r\n      </md-select>\r\n    </div>\r\n\r\n    <div fxFlex=\"15\">\r\n      <md-select placeholder=\"Type of food\" [(ngModel)]=\"foodType\" (ngModelChange)=\"showByFoodType()\">\r\n        <md-option *ngFor=\"let foodType of this.foodTypes\" [value]='foodType'>\r\n          {{ foodType }}\r\n        </md-option>\r\n      </md-select>\r\n    </div>\r\n\r\n    <div fxFlex=\"15\">\r\n      <md-select [ngModel]=\"sort\" placeholder=\"Order by\" (ngModelChange)=\"showByOrderType($event)\">\r\n        <md-option *ngFor=\"let sort of this.sortBy\" [value]='sort'>\r\n          {{ sort }}\r\n        </md-option>\r\n      </md-select>\r\n    </div>\r\n\r\n    <div fxFlex=\"15\">\r\n      <md-checkbox color='accent' [(ngModel)]=\"checked\" (ngModelChange)=\"viewArchived()\">View archived items</md-checkbox>\r\n    </div>\r\n\r\n    <div fxFlex=\"40\">\r\n      <app-pagination (changePage)=\"handleChangePage($event)\" [totalItems]=\"totalFoods\" [currentPage]=\"page\" [pageSize]=\"pageSize\"></app-pagination>\r\n    </div>\r\n\r\n  </div>\r\n  <!---->\r\n\r\n  <!--The list of all the existed Foods-->\r\n  <div *ngIf=\"foods\">\r\n    <h1 *ngIf=\"foods.length <= 0\" class=\"display-message\">No food to display</h1>\r\n  </div>\r\n\r\n  <md-card class=\"food-card\" *ngFor=\"let food of foods\">\r\n    <app-food [food]='food' (foodRefresh)='handleFoodRefresh()'></app-food>\r\n  </md-card>\r\n\r\n  <!---->\r\n  <md-grid-list *ngIf=\"showLoadSpinner\" cols=\"1\" rowHeight=\"200px\">\r\n    <md-grid-tile>\r\n      <md-spinner class=\"centered\" color=\"accent\"></md-spinner>\r\n    </md-grid-tile>\r\n  </md-grid-list>\r\n\r\n\r\n  <!--The area of sorting-->\r\n  <div fxLayout=\"row\" class=\"margin-bar\">\r\n    <div fxFlex=\"40\" fxFlexOffset=\"60\">\r\n      <app-pagination (changePage)=\"handleChangePage($event)\" [totalItems]=\"totalFoods\" [currentPage]=\"page\" [pageSize]=\"pageSize\"></app-pagination>\r\n    </div>\r\n  </div>\r\n  <!---->\r\n"

/***/ }),

/***/ "../../../../../src/app/chef/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\n  width: 500px; }\n\n.example-full-width {\n  width: 100%; }\n\n.food-card {\n  margin: 10px 0; }\n\n.margin-bar {\n  margin: 45px 0; }\n\n.img-size {\n  margin-top: 10px;\n  height: 28px;\n  width: 38px;\n  -webkit-transform: rotateZ(-22deg); }\n\n.title-style {\n  margin-top: -15px !important;\n  margin-left: 25px; }\n\n.buttons-style {\n  margin-top: 39px !important;\n  text-align: right; }\n\n.display-message {\n  text-align: center;\n  margin-top: 100px;\n  margin-bottom: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chef/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(chefService) {
        this.chefService = chefService;
        this.checked = false;
        this.showLoadSpinner = false;
        this.page = 1;
        this.pageSize = 10;
        this.direction = 'DESC';
        this.archived = 'false';
        this.orderBy = 'id';
        this.stats = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foodTypes = ['All', 'Main', 'Salad', 'Drink'];
        this.numberOfItems = ['10', '20', '50', '100'];
        this.sortBy = ['Newest food', 'Most popular food', 'Least popular food', 'Higher price', 'Lower price'];
        this.foodType = this.foodTypes[0];
        this.nbrOfItem = this.numberOfItems[0];
        this.chefService.foodsGet(this.stats, null, this.nbrOfItem, this.foodType, this.archived, this.orderBy, null, this.direction).subscribe(function (foods) {
            _this.foods = foods.foods;
        }, function (error) { return console.log(error); });
        this.loadFoods(this.page);
    };
    HomeComponent.prototype.loadFoods = function (page) {
        var _this = this;
        this.showLoadSpinner = true;
        this.chefService.foodsGet(this.stats, (page - 1).toString(), this.pageSize.toString(), this.foodType, this.archived, this.orderBy, null, this.direction).subscribe(function (foodsPage) {
            _this.foods = foodsPage.foods;
            _this.totalFoods = foodsPage.totalElements;
            _this.totalpages = foodsPage.totalPages;
            _this.page = page;
            _this.showLoadSpinner = false;
        }, function (error) {
            console.log(error);
            _this.showLoadSpinner = false;
        });
    };
    // Pagination
    HomeComponent.prototype.handleChangePage = function (page) {
        this.showLoadSpinner = true;
        this.page = page;
        this.loadFoods(page);
    };
    // Number of Items in a page
    HomeComponent.prototype.changePageSize = function (newValue) {
        this.showLoadSpinner = true;
        this.pageSize = newValue;
        this.page = 1;
        this.loadFoods(this.page);
    };
    // This method displays/refresh the list of foods after we created/delete/archived a food
    HomeComponent.prototype.handleFoodRefresh = function () {
        this.loadFoods(this.page);
    };
    HomeComponent.prototype.showByFoodType = function () {
        this.loadFoods(this.page);
    };
    HomeComponent.prototype.showByOrderType = function (value) {
        this.showLoadSpinner = true;
        if (value === 'Higher price') {
            this.orderBy = 'price';
            this.direction = 'DESC';
        }
        else if (value === 'Lower price') {
            this.orderBy = 'price';
            this.direction = 'ASC';
        }
        else if (value === 'Newest food') {
            this.orderBy = 'id';
            this.direction = 'DESC';
        }
        else if (value === 'Most popular food') {
            this.orderBy = 'popular';
            this.direction = 'DESC';
        }
        else if (value === 'Least popular food') {
            this.orderBy = 'popular';
            this.direction = 'ASC';
        }
        this.loadFoods(this.page);
    };
    HomeComponent.prototype.viewArchived = function () {
        if (this.checked === true) {
            this.showLoadSpinner = true;
            this.archived = 'true';
            this.loadFoods(this.page);
        }
        else {
            this.showLoadSpinner = true;
            this.archived = 'false';
            this.loadFoods(this.page);
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chef-home',
        template: __webpack_require__("../../../../../src/app/chef/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chef/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_1__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__remote__).ChefApi) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/chef/menus/daily-menu/daily-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"smallSidePad calendarDate\">\r\n\r\n    <div class=\"cal-cell-top is-flex\">\r\n      <span class=\"cal-day-number flexItemLeft\">{{ day | date:\"d\" }}</span>\r\n      <ng-container *ngIf=\"menuCanBeEdited\">\r\n        <button md-icon-button color=\"accent\" title=\"Discard changes\" (click)=\"discardChanges()\" [disabled]=\"!menuCanBeDiscarded\"><i class=\"material-icons\">cancel</i></button>\r\n        <button md-icon-button color=\"accent\"  title=\"Save\"(click)=\"updateMenu()\" [disabled]=\"!menuCanBeUpdated\"><i class=\"material-icons\">check</i></button>\r\n      </ng-container>\r\n   </div>\r\n\r\n\r\n  <md-input-container *ngIf=\"menuCanBeEdited\" class=\"smallInputContainer\">\r\n   <input type=\"text\" mdInput [formControl]=\"selectCtrl\" [mdAutocomplete]=\"auto\" placeholder=\"select food\">\r\n</md-input-container>\r\n\r\n<md-autocomplete #auto=\"mdAutocomplete\" [displayWith]=\"displayFn\">\r\n   <md-option *ngFor=\"let food of filteredFoods | async\" [value]=\"food\"  >\r\n     <div class=\"is-flex\"><span [ngClass]=\"{'icon-Meal': food.foodType==='Main', 'icon-Salad': food.foodType==='Salad', 'icon-Drink': food.foodType==='Drink'}\" > </span>\r\n      <span>{{ food.foodName }}</span>\r\n      </div>\r\n   </md-option>\r\n</md-autocomplete>\r\n\r\n\r\n  <!--<md-select [(ngModel)]=\"food\" #selectCtrl=\"ngModel\" class=\"responsive\"  *ngIf=\"menuCanBeEdited\">\r\n    <md-option *ngFor=\"let food of foodsAvailable\" [value]='food' placeholder=\"select food\" (click)=\"addMenuFood()\">\r\n      {{ food.foodName }}\r\n    </md-option>\r\n  </md-select>-->\r\n\r\n\r\n  <div class=\"foodsList\">\r\n     <div *ngFor=\"let food of foodsSelected\" class=\"is-flex foodsListItem\">\r\n        <button md-icon-button color=\"accent\"  title=\"Delete\" (click)=\"removeMenuFood(food)\" [disabled]=\"false\"  *ngIf=\"menuCanBeEdited\"><i class=\"material-icons\">cancel</i></button>\r\n        <span [ngClass]=\"{'icon-Meal': food.foodType==='Main', 'icon-Salad': food.foodType==='Salad', 'icon-Drink': food.foodType==='Drink'}\" > </span>\r\n        <span class=\"list-text\">{{food.foodName}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"fullLayer\" *ngIf=\"showSpinner\">\r\n    <md-spinner class=\"centered\" color=\"accent\"></md-spinner>\r\n    <!--<img  src=\"../../../assets/img/spinner.gif\" />-->\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chef/menus/daily-menu/daily-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".responsive {\n  width: 100%; }\n\n.list-text {\n  -webkit-box-flex: 3;\n      -ms-flex: 3 1;\n          flex: 3 1;\n  margin-left: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chef/menus/daily-menu/daily-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_foods_service__ = __webpack_require__("../../../../../src/app/chef/services/foods.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_global_settings_service_service__ = __webpack_require__("../../../../../src/app/shared/services/global-settings-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DailyMenuComponent = (function () {
    function DailyMenuComponent(foodsService, chefService, datePipe, globalSettingsService) {
        this.foodsService = foodsService;
        this.chefService = chefService;
        this.datePipe = datePipe;
        this.globalSettingsService = globalSettingsService;
        this.snackMessage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showSpinner = true;
        this.selectCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormControl */]('', []);
        this.menuCanBeDiscarded = false;
        this.menuCanBeUpdated = false;
        this.menuCanBeEdited = false;
        this.checkUserChanges = false;
        this.foodsSelectedMap = new Map();
        this.foodsSelected = [];
        this.initfoodsSelected = [];
    }
    DailyMenuComponent.prototype.ngOnInit = function () {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_date_fns__["getMonth"])(this.day) !== __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_date_fns__["getMonth"])(this.viewdate)) {
            this.showSpinner = false;
            return;
        }
        this.setAvailableFoods();
        this.setup();
    };
    DailyMenuComponent.prototype.ngOnChanges = function (changes) {
        if (changes.menu !== undefined && !changes.menu.isFirstChange()) {
            //console.log("menu changed:"+changes.menu.currentValue.date, changes.menu.currentValue);
            this.setup();
        }
    };
    DailyMenuComponent.prototype.setAvailableFoods = function () {
        this.foodsAvailable = [];
        for (var _i = 0, _a = this.foods; _i < _a.length; _i++) {
            var food = _a[_i];
            if (!food.archived) {
                this.foodsAvailable.push(food);
            }
        }
    };
    DailyMenuComponent.prototype.setup = function () {
        var _this = this;
        console.log("setup menu");
        this.menuCanBeDiscarded = false;
        this.menuCanBeUpdated = false;
        this.menuCanBeEdited = false;
        this.checkUserChanges = false;
        this.initMenu = this.menu;
        this.foodsSelectedMap.clear();
        this.foodsSelected = [];
        this.globalSettingsService.getDeadLine().subscribe(function (dt) {
            var today = new Date();
            var menuDate = new Date(_this.day);
            menuDate.setHours(0, 0, 0, 0);
            //console.log("menu date", menuDate);
            menuDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_date_fns__["subDays"])(menuDate, 1);
            menuDate.setHours(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_date_fns__["getHours"])(dt), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_date_fns__["getMinutes"])(dt), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_date_fns__["getSeconds"])(dt));
            _this.menuCanBeEdited = new Date(menuDate) > today;
            //console.log("deadline:", new Date(menuDate));
        });
        if (this.menu !== undefined) {
            for (var _i = 0, _a = this.menu.foods; _i < _a.length; _i++) {
                var menuFood = _a[_i];
                var food = this.foodsService.getFoodById(menuFood.foodId);
                if (food !== undefined) {
                    //this.food = food;
                    this.addMenuFood(food);
                }
            }
        }
        this.filteredFoods = this.selectCtrl.valueChanges
            .startWith(null)
            .map(function (food) {
            if (food && typeof food === 'object') {
                _this.addMenuFood(food);
                _this.selectCtrl.setValue("");
                //this.mdAutoCompleteTrigger.closePanel();
                //this.mdAutoCompleteTrigger.openPanel();
            }
            else {
                return food;
            }
        })
            .map(function (name) { return name && name != "" ? _this.filter(name) : _this.foodsAvailable.slice(); });
        this.checkUserChanges = true;
        this.initfoodsSelected = this.foodsSelected;
        this.checkChanges();
        this.showSpinner = false;
    };
    DailyMenuComponent.prototype.displayFn = function (food) {
        return food ? food.foodName : "";
    };
    DailyMenuComponent.prototype.filter = function (name) {
        return this.foodsAvailable.filter(function (food) { return new RegExp("(.)*" + name + "(.)*", 'gi').test(food.foodName); });
    };
    DailyMenuComponent.prototype.addMenuFood = function (food) {
        //console.log(this.selectCtrl);
        this.foodsSelectedMap.set(food.id, food);
        this.removeFromAvailable(food);
        this.displayList();
    };
    DailyMenuComponent.prototype.removeMenuFood = function (food) {
        this.addToAvailable(food);
        this.foodsSelectedMap.delete(food.id);
        this.displayList();
    };
    DailyMenuComponent.prototype.removeFromAvailable = function (foodRemove) {
        this.foodsAvailable = this.foodsAvailable.filter(function (food) { return food.id !== foodRemove.id; });
    };
    DailyMenuComponent.prototype.addToAvailable = function (food) {
        this.foodsAvailable.push(food);
        this.foodsAvailable = this.foodsService.sortArrayOfFoods(this.foodsAvailable);
        this.selectCtrl.setValue(""); //reset foodsAvailable
    };
    DailyMenuComponent.prototype.displayList = function () {
        var _this = this;
        this.foodsSelected = [];
        this.foodsSelectedMap.forEach(function (food) {
            _this.foodsSelected.push(food);
        });
        this.foodsSelected = this.foodsSelected.sort(function (n1, n2) {
            if (n1.foodType > n2.foodType) {
                return -1;
            }
            else if (n1.foodType < n2.foodType) {
                return 1;
            }
            return 0;
        });
        this.checkChanges();
    };
    DailyMenuComponent.prototype.updateMenu = function () {
        var _this = this;
        this.showSpinner = true;
        //this.menuCanBeEdited=false;
        // build food list ids
        var newFoodList = [];
        for (var _i = 0, _a = this.foodsSelected; _i < _a.length; _i++) {
            var food = _a[_i];
            var menuFood = {};
            menuFood.foodId = food.id;
            newFoodList.push(menuFood);
        }
        // PUT
        if (this.menu !== undefined) {
            console.log("update menu id:", this.menu.id);
            var menuEdit_1 = {};
            menuEdit_1.lastEdit = {};
            menuEdit_1.lastEdit.version = this.menu.lastEdit.version;
            menuEdit_1.foods = newFoodList;
            menuEdit_1.date = this.menu.date;
            this.remote = this.chefService.dailyMenusIdPut(this.menu.id.toString(), menuEdit_1)
                .finally(function () {
                _this.showSpinner = false;
            })
                .subscribe(function (response) {
                console.log(response);
                var responseOk = {};
                _this.menu.foods = menuEdit_1.foods;
                //this.menu.lastEdit.version=lastEdit.version;
                _this.menu.lastEdit.version++;
                if (menuEdit_1.foods.length == 0) {
                    _this.menu = undefined;
                }
                switch (response.status) {
                    case 200:
                        responseOk.message = "Menu updated successfully";
                        break;
                    case 204:
                        responseOk.message = "Menu deleted successfully";
                        break;
                }
                _this.setup();
                responseOk.status = 1; //ok
                _this.snackMessage.emit(responseOk);
                _this.showSpinner = false;
            }, function (error) {
                console.log(error);
                var responseError = {};
                switch (error.status) {
                    case 404:
                        responseError.message = "Menu not found";
                        break;
                    case 409:
                        responseError.message = "Menu already changed";
                        break;
                    case 412:
                        responseError.message = "Can't modify menu, deadline time has passed";
                        break;
                    case 417:
                        responseError.message = "The request failed because there are orders on the food";
                        _this.setup();
                        break;
                    case 410:
                        var resDto = void 0;
                        resDto = JSON.parse(error._body);
                        if (resDto.id != 0) {
                            responseError.message = "You deleted this menu earlier, and recreated it. Here is the new one.";
                            _this.menu = resDto;
                            _this.setup();
                        }
                        else {
                            responseError.message = "You deleted this menu earlier. Please recreate it again if this is what was intended.";
                            _this.menu = undefined;
                            _this.setup();
                        }
                        break;
                    case 500:
                        responseError.message = "An unexpected error occured.";
                        break;
                }
                _this.showSpinner = false;
                responseError.status = 3; //error
                _this.snackMessage.emit(responseError);
            });
        }
        else {
            // POST
            console.log("Post new menu");
            var newMenu = {};
            newMenu.date = this.datePipe.transform(this.day, 'yyyy-MM-dd');
            newMenu.foods = newFoodList;
            this.menuCanBeDiscarded = false;
            this.menuCanBeUpdated = false;
            this.remote = this.chefService.dailyMenusPost(newMenu)
                .finally(function () {
                _this.showSpinner = false;
            })
                .subscribe(function (menu) {
                console.log(menu);
                var responseError = {};
                _this.menu = menu;
                _this.setup();
                responseError.status = 1; //ok
                responseError.message = "New menu created!";
                _this.snackMessage.emit(responseError);
                _this.showSpinner = false;
            }, function (error) {
                console.log(error);
                var responseError = {};
                switch (error.status) {
                    case 400:
                        responseError.message = "Menu create bad request data";
                        break;
                    case 409:
                        responseError.message = "A menu was already created for that day";
                        var resDto = void 0;
                        resDto = JSON.parse(error._body);
                        _this.menu = resDto;
                        _this.setup();
                        break;
                    case 500:
                        responseError.message = "An unexpected error occured.";
                        break;
                }
                responseError.status = 3; //error
                _this.snackMessage.emit(responseError);
                _this.showSpinner = false;
            });
        }
    };
    DailyMenuComponent.prototype.discardChanges = function () {
        this.menu = this.initMenu;
        this.setAvailableFoods();
        this.setup();
    };
    DailyMenuComponent.prototype.checkChanges = function () {
        if (this.checkUserChanges && this.initfoodsSelected != this.foodsSelected && (this.foodsSelected.length > 0 || this.initfoodsSelected.length > 0)) {
            this.menuCanBeDiscarded = true;
            this.menuCanBeUpdated = true;
        }
        else {
            this.menuCanBeDiscarded = false;
            this.menuCanBeUpdated = false;
        }
    };
    return DailyMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DailyMenuComponent.prototype, "foods", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DailyMenuComponent.prototype, "day", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DailyMenuComponent.prototype, "viewdate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_5__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__remote__).DailyMenuChef) === "function" && _a || Object)
], DailyMenuComponent.prototype, "menu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DailyMenuComponent.prototype, "snackMessage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MdAutocompleteTrigger */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MdAutocompleteTrigger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MdAutocompleteTrigger */]) === "function" && _b || Object)
], DailyMenuComponent.prototype, "mdAutoCompleteTrigger", void 0);
DailyMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-daily-menu',
        template: __webpack_require__("../../../../../src/app/chef/menus/daily-menu/daily-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chef/menus/daily-menu/daily-menu.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_foods_service__["a" /* FoodsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_foods_service__["a" /* FoodsService */]) === "function" && _c || Object, typeof (_d = (typeof __WEBPACK_IMPORTED_MODULE_5__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__remote__).ChefApi) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */]) === "function" && _f || Object])
], DailyMenuComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=daily-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/chef/menus/menus.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"is-flex header\">\r\n  <div>\r\n    <app-month-nav [(viewDate)]='viewdate' (monthViewDate)=\"onMonthNavChange($event)\">\r\n    </app-month-nav>\r\n\r\n  </div>\r\n  <app-chef-nav></app-chef-nav>\r\n</div>\r\n<h3>Assign foods to dates...</h3>\r\n\r\n  <div class=\"fullLayer\" *ngIf=\"showSpinner\">\r\n      <md-spinner class=\"centered\" color=\"accent\"></md-spinner>\r\n  </div>\r\n\r\n  <ng-container *ngIf=' foods.length>0'>\r\n    <mwl-calendar-month-view [viewDate]=\"viewdate\" [excludeDays]=\"excludeDays\" [cellTemplate]=\"dailyMenuTemplate\" [locale]=\"locale\">\r\n    </mwl-calendar-month-view>\r\n\r\n    <ng-template #dailyMenuTemplate let-day=\"day\" let-locale=\"locale\">\r\n      <app-daily-menu [foods]='foods' [day]=day.date [viewdate]=\"viewdate\" [menu]='menusMap.get(day.date|date:\"yyyy-MM-dd\")' (snackMessage)=\"dailyMenuError($event) \"></app-daily-menu>\r\n      <!--{{menusMap.get(day.date|date:\"yyyy-MM-dd\")}}-->\r\n      <small style=\"margin: 5px\"></small>\r\n    </ng-template>\r\n  </ng-container>\r\n\r\n\r\n <ng-container *ngIf=' foods.length==0'>\r\n   You should add some food, before creating a new menu.\r\n </ng-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/chef/menus/menus.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  padding-top: 35px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chef/menus/menus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_foods_service__ = __webpack_require__("../../../../../src/app/chef/services/foods.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MenusComponent = (function () {
    function MenusComponent(foodsService, chefService, datePipe, route, location, router, snackBar) {
        this.foodsService = foodsService;
        this.chefService = chefService;
        this.datePipe = datePipe;
        this.route = route;
        this.location = location;
        this.router = router;
        this.snackBar = snackBar;
        /////////////////////
        //calendar properties  https://mattlewis92.github.io/angular-calendar/
        this.view = 'month';
        this.viewdate = new Date();
        this.locale = 'en';
        // exclude weekends
        this.excludeDays = [0, 6];
        /////////////////////
        this.foods = [];
        this.menusMap = new Map();
        this.showSpinner = true;
    }
    MenusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewdate = new Date();
        this.foods = this.foodsService.getFoods();
        this.sub = this.route.params.subscribe(function (params) {
            //this.foods = this.foodsService.getFoods();
            var dt = new Date(+params['year'], +params['month'] - 1, 1, 0, 0, 0); // (+) converts string 'year' and 'month' to a number
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_date_fns__["isValid"])(dt)) {
                console.log("router date:" + dt);
                _this.viewdate = dt;
                _this.getRemoteMenus(_this.buildMonthYear(_this.viewdate));
            }
        });
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_date_fns__["isToday"])(this.viewdate)) {
            this.remote = this.chefService.dailyMenusMonthlyGet()
                .finally(function () {
                _this.showSpinner = false;
            })
                .subscribe(function (menus) {
                console.log("subscribed menus of current month");
                _this.setMenus(menus);
            }, function (error) { return console.log(error); });
        }
    };
    MenusComponent.prototype.getRemoteMenus = function (monthYear) {
        var _this = this;
        this.remote = this.chefService.dailyMenusMonthlyMonthyearGet(monthYear)
            .finally(function () {
            _this.showSpinner = false;
        })
            .subscribe(function (menus) {
            _this.showSpinner = false;
            _this.setMenus(menus);
        }, function (error) {
            _this.showSpinner = false;
            console.log(error);
        });
    };
    MenusComponent.prototype.onMonthNavChange = function (dt) {
        if (dt.getMonth() === new Date().getMonth()) {
            this.router.navigate(['/chef/menus/']);
        }
        else {
            this.router.navigate(['/chef/menus/', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_date_fns__["getYear"])(dt), this.pad(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_date_fns__["getMonth"])(dt) + 1, 2)]);
        }
    };
    MenusComponent.prototype.buildMonthYear = function (dt) {
        return this.pad(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_date_fns__["getMonth"])(dt) + 1, 2) + '-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_date_fns__["getYear"])(dt);
    };
    MenusComponent.prototype.setMenus = function (menus) {
        this.menus = menus;
        for (var i = 0; i < this.menus.length; i++) {
            var dt = new Date(this.menus[i].date);
            dt.setHours(0, 0, 0, 0);
            var dtStr = this.datePipe.transform(dt, 'yyyy-MM-dd');
            this.menusMap.set(dtStr, this.menus[i]);
        }
        console.log("menus map:", this.menusMap);
    };
    MenusComponent.prototype.pad = function (num, size) {
        var s = num + "";
        while (s.length < size)
            s = "0" + s;
        return s;
    };
    // status -> 1:success , 2:warning, 3:error
    MenusComponent.prototype.openSnackBar = function (message, action, status) {
        if (action === undefined) {
            action = "ok";
        }
        ;
        switch (status) {
            case 1:
                this.snackBar.open(message, action, {
                    duration: 5000,
                    extraClasses: ['success-snack-bar']
                });
                break;
            case 2:
                this.snackBar.open(message, action, {
                    extraClasses: ['warning-snack-bar']
                });
                break;
            case 3:
                this.snackBar.open(message, action, {
                    extraClasses: ['error-snack-bar']
                });
                break;
        }
    };
    MenusComponent.prototype.dailyMenuError = function (msg) {
        this.openSnackBar(msg.message, msg.action, msg.status);
    };
    MenusComponent.prototype.setSpinner = function (set) {
    };
    return MenusComponent;
}());
MenusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menus',
        template: __webpack_require__("../../../../../src/app/chef/menus/menus.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chef/menus/menus.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_foods_service__["a" /* FoodsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_foods_service__["a" /* FoodsService */]) === "function" && _a || Object, typeof (_b = (typeof __WEBPACK_IMPORTED_MODULE_5__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__remote__).ChefApi) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdSnackBar */]) === "function" && _g || Object])
], MenusComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=menus.component.js.map

/***/ }),

/***/ "../../../../../src/app/chef/orders/order-total/order-total.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"smallSidePad calendarDate is-flex-column\">\r\n  <div class=\"cal-cell-top is-flex\">\r\n    <span class=\"cal-day-number  flexItemLeft\">{{ day | date:\"d\" }}</span>\r\n    <ng-container *ngIf=\"dailyMenuOrderChef!==undefined\">\r\n      <button md-icon-button color=\"accent\" routerLink='/chef/orders/daily/{{dailyMenuOrderChef.dailyMenuDate | date:\"yyyy-MM-dd\"}}'\r\n        routerLinkActive=\"\" title=\"View order summary\"><i class=\"material-icons\">remove_red_eye</i></button>\r\n    </ng-container>\r\n\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"dailyMenuOrderChef!==undefined\" class=\"flexGrow\">\r\n\r\n    <div *ngIf=\"dailyMenuOrderChef.orderItems.length>0\" class=\"foodsList\">\r\n\r\n      <div *ngFor=\"let orderItem of dailyMenuOrderChef.orderItems\" class=\"is-flex foodsListItem\">\r\n        <span [ngClass]=\"{'icon-Meal': getFood(orderItem.foodId).foodType==='Main', 'icon-Salad': getFood(orderItem.foodId).foodType==='Salad', 'icon-Drink': getFood(orderItem.foodId).foodType==='Drink'}\"> </span>\r\n        <div> {{getFood(orderItem.foodId).foodName}} </div>\r\n        <div class=\"foodListItemQty\"> {{orderItem.quantity}}</div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"calendarBottom smallPad  borderTop is-flex\" *ngIf=\"dailyMenuOrderChef!==undefined\">\r\n    <div>Total: </div>\r\n    <div>{{(calcTotal()).toFixed(2)}}<span [innerHTML]=\"currency | async\"></span></div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chef/orders/order-total/order-total.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".is-flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chef/orders/order-total/order-total.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_foods_service__ = __webpack_require__("../../../../../src/app/chef/services/foods.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_global_settings_service_service__ = __webpack_require__("../../../../../src/app/shared/services/global-settings-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderTotalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderTotalComponent = (function () {
    function OrderTotalComponent(router, foodsService, globalSettingsService) {
        this.router = router;
        this.foodsService = foodsService;
        this.globalSettingsService = globalSettingsService;
        this.total = 0;
    }
    OrderTotalComponent.prototype.ngOnInit = function () {
        this.currency = this.globalSettingsService.getCurrency();
        //this.calcTotal();
    };
    OrderTotalComponent.prototype.calcTotal = function () {
        this.total = 0;
        if (this.dailyMenuOrderChef !== undefined) {
            for (var _i = 0, _a = this.dailyMenuOrderChef.orderItems; _i < _a.length; _i++) {
                var orderItem = _a[_i];
                var food = this.foodsService.getFoodById(orderItem.foodId);
                orderItem.foodType = food.foodType;
                this.total += food.price * orderItem.quantity;
            }
            this.dailyMenuOrderChef.orderItems = this.foodsService.sortArrayOfFoods(this.dailyMenuOrderChef.orderItems);
        }
        return this.total;
    };
    OrderTotalComponent.prototype.getFood = function (foodId) {
        return this.foodsService.getFoodById(foodId);
    };
    return OrderTotalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], OrderTotalComponent.prototype, "foods", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_1__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__remote__).DailyMenuOrder) === "function" && _a || Object)
], OrderTotalComponent.prototype, "dailyMenuOrderChef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], OrderTotalComponent.prototype, "day", void 0);
OrderTotalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-total',
        template: __webpack_require__("../../../../../src/app/chef/orders/order-total/order-total.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chef/orders/order-total/order-total.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_foods_service__["a" /* FoodsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_foods_service__["a" /* FoodsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */]) === "function" && _d || Object])
], OrderTotalComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=order-total.component.js.map

/***/ }),

/***/ "../../../../../src/app/chef/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"is-flex header\">\r\n  <div>\r\n    <app-month-nav [(viewDate)]='viewdate' (monthViewDate)=\"onMonthNavChange($event)\">\r\n    </app-month-nav>\r\n\r\n  </div>\r\n  <app-chef-nav></app-chef-nav>\r\n</div>\r\n\r\n<ng-container *ngIf='ordersMenusMap.size>=0'>\r\n\r\n  <h3>Your Orders</h3>\r\n\r\n  <div class=\"fullLayer\" *ngIf=\"showSpinner\">\r\n      <md-spinner class=\"centered\" color=\"accent\"></md-spinner>\r\n  </div>\r\n\r\n  <ng-template #dailyOrderTemplate let-day=\"day\" let-locale=\"locale\">\r\n\r\n    <ng-container *ngIf='foods.length>0'>\r\n      <app-order-total [foods]='foods' [day]=day.date [dailyMenuOrderChef]='ordersMenusMap.get(day.date|date:\"yyyy-MM-dd\")'></app-order-total>\r\n    </ng-container>\r\n\r\n  </ng-template>\r\n\r\n  <div [ngSwitch]=\"view\">\r\n    <mwl-calendar-month-view [viewDate]=\"viewdate\" [excludeDays]=\"excludeDays\" [cellTemplate]=\"dailyOrderTemplate\" [locale]=\"locale\">\r\n    </mwl-calendar-month-view>\r\n  </div>\r\n\r\n</ng-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/chef/orders/orders.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  padding-top: 35px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chef/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_foods_service__ = __webpack_require__("../../../../../src/app/chef/services/foods.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OrdersComponent = (function () {
    function OrdersComponent(chefService, foodsService, datePipe, route, location, router) {
        this.chefService = chefService;
        this.foodsService = foodsService;
        this.datePipe = datePipe;
        this.route = route;
        this.location = location;
        this.router = router;
        this.ordersMenusMap = new Map();
        this.showSpinner = true;
        /////////////////////
        // calendar properties
        this.view = 'month';
        this.viewdate = new Date();
        this.locale = 'en';
        // exclude weekends
        this.excludeDays = [0, 6];
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('----- on init HistoryComponent!! -----');
        this.foods = this.foodsService.getFoods();
        this.viewdate = new Date();
        this.sub = this.route.params.subscribe(function (params) {
            var dt = new Date(+params['year'], +params['month'] - 1, 1, 0, 0, 0); // (+) converts string 'year' na d 'month' to a number
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isValid"])(dt)) {
                console.log('router date:' + dt);
                _this.viewdate = dt;
                _this.getRemoteDailyMenus(_this.buildMonthYear(_this.viewdate));
            }
        });
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isToday"])(this.viewdate)) {
            this.remote = this.chefService.ordersMonthlyGet().subscribe(function (orders) {
                console.log('subscribed orders of current month');
                _this.dailyMenuOrderChef = orders;
                _this.setOrdersMenusMap();
                _this.showSpinner = false;
            }, function (error) {
                _this.showSpinner = false;
                console.log(error);
            });
        }
    };
    OrdersComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.remote.unsubscribe();
    };
    OrdersComponent.prototype.getRemoteDailyMenus = function (monthYear) {
        var _this = this;
        this.remote = this.chefService.ordersMonthlyMonthyearGet(monthYear)
            .subscribe(function (orders) {
            console.log('subscribed orders of:', monthYear);
            _this.dailyMenuOrderChef = orders;
            _this.setOrdersMenusMap();
            _this.showSpinner = false;
        }, function (error) {
            _this.showSpinner = false;
            console.log(error);
        });
    };
    OrdersComponent.prototype.setOrdersMenusMap = function () {
        for (var i = 0; i < this.dailyMenuOrderChef.length; i++) {
            var dt = new Date(this.dailyMenuOrderChef[i].dailyMenuDate);
            dt.setHours(0, 0, 0, 0);
            var dtStr = this.datePipe.transform(dt, 'yyyy-MM-dd');
            this.ordersMenusMap.set(dtStr, this.dailyMenuOrderChef[i]);
        }
        console.log('order s map:', this.ordersMenusMap);
    };
    OrdersComponent.prototype.orderExists = function (dateStr) {
        return this.ordersMenusMap.has(dateStr);
    };
    OrdersComponent.prototype.buildMonthYear = function (dt) {
        return this.pad(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getMonth"])(dt) + 1, 2) + '-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getYear"])(dt);
    };
    OrdersComponent.prototype.pad = function (num, size) {
        var s = num + '';
        while (s.length < size)
            s = '0' + s;
        return s;
    };
    OrdersComponent.prototype.onMonthNavChange = function (dt) {
        this.router.navigate(['/chef/orders/', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getYear"])(dt), this.pad(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getMonth"])(dt) + 1, 2)]);
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__("../../../../../src/app/chef/orders/orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chef/orders/orders.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_1__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__remote__).ChefApi) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_foods_service__["a" /* FoodsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_foods_service__["a" /* FoodsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _f || Object])
], OrdersComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/chef/ordersday/food-item/food-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"containerX\">\r\n\r\n  <div *ngIf=\"mainFoodOrders.length > 0\">\r\n\r\n    <div fxLayout=\"row\">\r\n      <div fxFlex=\"35\">\r\n        <h3> Main dishes </h3>\r\n      </div>\r\n      <div fxFlex=\"27\" class=\"align-center\">\r\n        <h3> QTY. </h3>\r\n      </div>\r\n      <div fxFlex=\"20\" class=\"align-center\">\r\n        <h3> Price </h3>\r\n      </div>\r\n      <div fxFlex=\"18\" class=\"align-right\">\r\n        <h3> Total </h3>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngFor=\"let foodOrder of mainFoodOrders\">\r\n      <div fxLayout=\"row\" class=\"bgColor print-row-border\">\r\n        <div fxFlex=\"35\" class=\"pad\">{{foodOrder.food.foodName}}</div>\r\n        <div fxFlex=\"27\" class=\"align-center\">\r\n          <div fxLayout=\"row\" class=\"quantity \">\r\n            <div fxFlex=\"100\">\r\n              {{foodOrder.quantity}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div fxFlex=\"20\" class=\"pad align-center\">{{foodOrder.food.price | number : '1.2-2'}}<span [innerHTML]=\"currency | async\"></span> </div>\r\n        <div fxFlex=\"18\" class=\"pad align-right\">{{foodOrder.quantity * foodOrder.food.price | number : '1.2-2'}}<span [innerHTML]=\"currency | async\"></span></div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"saladFoodOrders.length > 0\">\r\n\r\n    <div fxLayout=\"row\">\r\n      <div fxFlex=\"35\">\r\n        <h3> Salads </h3>\r\n      </div>\r\n      <div fxFlex=\"27\" class=\"align-center\">\r\n        <h3> QTY. </h3>\r\n      </div>\r\n      <div fxFlex=\"20\" class=\"align-center\">\r\n        <h3> Price </h3>\r\n      </div>\r\n      <div fxFlex=\"18\" class=\"align-right\">\r\n        <h3> Total </h3>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngFor=\"let foodOrder of saladFoodOrders\">\r\n      <div fxLayout=\"row\" class=\"bgColor is-flex print-row-border\">\r\n        <div fxFlex=\"35\" class=\"pad\">{{foodOrder.food.foodName}}</div>\r\n        <div fxFlex=\"27\" class=\"align-center\">\r\n          <div fxLayout=\"row\" class=\"quantity \">\r\n            <div fxFlex=\"100\">\r\n              {{foodOrder.quantity}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div fxFlex=\"20\" class=\"pad align-center\">{{foodOrder.food.price | number : '1.2-2'}}<span [innerHTML]=\"currency | async\"></span> </div>\r\n        <div fxFlex=\"18\" class=\"pad align-right\">{{foodOrder.quantity * foodOrder.food.price | number : '1.2-2'}}<span [innerHTML]=\"currency | async\"></span></div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"drinkFoodOrders.length > 0\">\r\n\r\n    <div fxLayout=\"row\">\r\n      <div fxFlex=\"100\">\r\n        <h3> Drinks </h3>\r\n      </div>\r\n      <div fxFlex=\"27\" class=\"align-center\">\r\n        <h3> QTY. </h3>\r\n      </div>\r\n      <div fxFlex=\"20\" class=\"align-center\">\r\n        <h3> Price </h3>\r\n      </div>\r\n      <div fxFlex=\"18\" class=\"align-right\">\r\n        <h3> Total </h3>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngFor=\"let foodOrder of drinkFoodOrders\">\r\n      <div fxLayout=\"row\" class=\"bgColor print-row-border\">\r\n        <div fxFlex=\"35\" class=\"pad\"> {{foodOrder.food.foodName}} </div>\r\n        <div fxFlex=\"27\" class=\"align-center\">\r\n          <div fxLayout=\"row\" class=\"quantity \">\r\n            <div fxFlex=\"100\">\r\n              {{foodOrder.quantity}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div fxFlex=\"20\" class=\"pad align-center\">{{foodOrder.food.price | number : '1.2-2'}}<span [innerHTML]=\"currency | async\"></span> </div>\r\n        <div fxFlex=\"18\" class=\"pad align-right\">{{foodOrder.quantity * foodOrder.food.price| number : '1.2-2'}}<span [innerHTML]=\"currency | async\"></span></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\">\r\n    <div fxFlex=\"85\" class=\"print-row-border-total\">\r\n    </div>\r\n    <div fxFlex=\"15\" class=\"total print-row-border-total\">\r\n      <h3 class=\"align-right\">Total: {{total| number : '1.2-2'}}<span [innerHTML]=\"currency | async\"></span></h3>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chef/ordersday/food-item/food-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".align-right {\n  text-align: right; }\n\n.align-center {\n  text-align: center; }\n\n.bgColor {\n  background-color: #F2F2F2;\n  border-radius: 5px;\n  margin-bottom: 10px; }\n\n.pad {\n  padding: 7px; }\n\n.quantity {\n  background-color: #F44336;\n  color: white;\n  border-radius: 5px;\n  padding: 10px;\n  margin-left: 44%;\n  width: 35px; }\n\n.total {\n  border-top: 2px solid #F44336; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chef/ordersday/food-item/food-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_foods_service__ = __webpack_require__("../../../../../src/app/chef/services/foods.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_global_settings_service_service__ = __webpack_require__("../../../../../src/app/shared/services/global-settings-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodItemComponent = (function () {
    function FoodItemComponent(foodsService, globalSettingsService, decpipe) {
        this.foodsService = foodsService;
        this.globalSettingsService = globalSettingsService;
        this.decpipe = decpipe;
        this.mainFoodOrders = new Array();
        this.saladFoodOrders = new Array();
        this.drinkFoodOrders = new Array();
        this.total = 0.00;
    }
    FoodItemComponent.prototype.ngOnInit = function () {
        var id;
        var food;
        this.currency = this.globalSettingsService.getCurrency();
        for (var i = 0; i < this.orderItems.length; i++) {
            id = this.orderItems[i].foodId;
            food = this.foodsService.getFoodById(id);
            if (food.foodType === 'Main') {
                this.mainFoodOrders.push({
                    food: food,
                    quantity: this.orderItems[i].quantity
                });
                this.total += food.price * this.orderItems[i].quantity;
            }
            else if (food.foodType === 'Salad') {
                this.saladFoodOrders.push({
                    food: food,
                    quantity: this.orderItems[i].quantity
                });
                this.total += food.price * this.orderItems[i].quantity;
            }
            else if (food.foodType === 'Drink') {
                this.drinkFoodOrders.push({
                    food: food,
                    quantity: this.orderItems[i].quantity
                });
                this.total += food.price * this.orderItems[i].quantity;
            }
        }
        this.total = Number(this.decpipe.transform(this.total, '1.2-2'));
    }; // ngOnInit
    return FoodItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FoodItemComponent.prototype, "orderItems", void 0);
FoodItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-food-item',
        template: __webpack_require__("../../../../../src/app/chef/ordersday/food-item/food-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chef/ordersday/food-item/food-item.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_foods_service__["a" /* FoodsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_foods_service__["a" /* FoodsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["DecimalPipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["DecimalPipe"]) === "function" && _c || Object])
], FoodItemComponent);

var _a, _b, _c;
//# sourceMappingURL=food-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/chef/ordersday/ordersday.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"fullLayer\" *ngIf=\"!orderItems || foods.length==0\">\r\n      <md-spinner class=\"centered\" color=\"accent\"></md-spinner>\r\n  </div>\r\n\r\n<div id=\"container-to-print\">\r\n\r\n  <div fxLayout=\"row\">\r\n    <div fxFlex=\"50\" class=\"left-no-pad\">\r\n      <h1>{{date | date:\"EEEE d MMMM y\" }}</h1>\r\n      <h3>Order Summary</h3>\r\n    </div>\r\n    <div fxFlex=\"50\" fxFlexOffset=\"25\" class=\"up-buttons no-print style-page-buttons\">\r\n      <div class=\"inline\">\r\n        <button md-raised-button color=\"accent\" routerLink=\"/chef/orders\" [routerLinkActiveOptions]=\"{ exact: true }\" routerLinkActive\r\n          #rla1=\"routerLinkActive\" [disabled]='rla1.isActive' routerLinkActive=\"active\">Back to orders</button>\r\n        <button md-raised-button color=\"accent\" (click)=\"print()\">Print page</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\">\r\n    <div fxFlex>\r\n      <div *ngIf=\"orderItems && foods.length>0\">\r\n        <md-card class=\"ordersday-card\">\r\n          <app-food-item [orderItems]='orderItems'></app-food-item>\r\n        </md-card>\r\n        <md-card class=\"ordersday-card\">\r\n          <app-user-order [userOrders]='userOrders'></app-user-order>\r\n        </md-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\">\r\n    <div fxFlex=\"50\" class=\"left-no-pad\">\r\n    </div>\r\n    <div fxFlex=\"25\" fxFlexOffset=\"75\" class=\"down-buttons no-print style-page-buttons\">\r\n      <div class=\"inline\">\r\n        <button md-raised-button color=\"accent\" routerLink=\"/chef/orders\" [routerLinkActiveOptions]=\"{ exact: true }\" routerLinkActive\r\n          #rla1=\"routerLinkActive\" [disabled]='rla1.isActive' routerLinkActive=\"active\">Back to orders</button>\r\n        <button md-raised-button color=\"accent\" (click)=\"print()\">Print page</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chef/ordersday/ordersday.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ordersday-card {\n  margin: 13px 0; }\n\n.style-page-buttons {\n  -ms-flex: 1 2 100% !important;\n      flex: 1 2 100% !important;\n  box-sizing: border-box;\n  -webkit-box-flex: 1;\n  max-width: 50%;\n  margin-left: 32% !important; }\n\n.up-buttons {\n  padding-top: 8% !important; }\n\n.down-buttons {\n  padding-bottom: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chef/ordersday/ordersday.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_foods_service__ = __webpack_require__("../../../../../src/app/chef/services/foods.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersdayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdersdayComponent = (function () {
    function OrdersdayComponent(chefService, foodsService, route, decpipe) {
        this.chefService = chefService;
        this.foodsService = foodsService;
        this.route = route;
        this.decpipe = decpipe;
        this.print = function () {
            var printContents, popupWin;
            printContents = document.getElementById('container-to-print').innerHTML;
            popupWin = window.open('', '_blank', 'top=0,left=0,height=800px,width=950px');
            popupWin.document.open();
            popupWin.document.write("\n      <html>\n        <head>\n          <title>Daily Order Summary</title>\n          <style>\n\n          .no-print {\n            display: none;\n          }\n          app-food-item, app-user-order {\n            display: block;\n          }\n          .print-row-border{\n            border-bottom: solid 1px;\n          }\n          .print-row-border-total {\n            border-bottom: solid 2px;\n          }\n\n          </style>\n        </head>\n        <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
            popupWin.document.close();
        };
    }
    OrdersdayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foods = this.foodsService.getFoods();
        this.sub = this.route.params.subscribe(function (params) {
            _this.date = params['day'];
        }, function (error) { return console.log(error); });
        this.chefService.ordersDailyDayGet(this.date).subscribe(function (dailyOrderSummary) {
            _this.orderItems = dailyOrderSummary.orderItems;
            _this.userOrders = dailyOrderSummary.userOrders;
        }, function (error) { return console.log(error); });
    }; // ngOnInit
    return OrdersdayComponent;
}());
OrdersdayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ordersday',
        template: __webpack_require__("../../../../../src/app/chef/ordersday/ordersday.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chef/ordersday/ordersday.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_2__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__remote__).ChefApi) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_foods_service__["a" /* FoodsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_foods_service__["a" /* FoodsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["DecimalPipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["DecimalPipe"]) === "function" && _d || Object])
], OrdersdayComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=ordersday.component.js.map

/***/ }),

/***/ "../../../../../src/app/chef/ordersday/user-order/user-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"userOrders.length > 0\">\r\n  <div fxLayout=\"row\">\r\n    <div fxFlex=\"15\">\r\n      <h3> Full Name </h3>\r\n    </div>\r\n    <div fxFlex=\"5\">\r\n      <h3 class=\"align-left\"> Qty. </h3>\r\n    </div>\r\n    <div fxFlex=\"20\">\r\n      <h3> Meal </h3>\r\n    </div>\r\n    <div fxFlex=\"5\">\r\n      <h3 class=\"align-left\"> Qty. </h3>\r\n    </div>\r\n    <div fxFlex=\"20\">\r\n      <h3> Salad </h3>\r\n    </div>\r\n    <div fxFlex=\"5\">\r\n      <h3 class=\"align-left\"> Qty. </h3>\r\n    </div>\r\n    <div fxFlex=\"20\">\r\n      <h3> Drink </h3>\r\n    </div>\r\n    <div fxFlex=\"10\" class=\"align-right\">\r\n      <h3> Total </h3>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngFor=\"let user of userOrders\" class=\"user\">\r\n\r\n  <div fxLayout=\"row\">\r\n\r\n    <div fxFlex=\"15\">\r\n      <div fxLayout=\"column\">\r\n        <div class=\"bold-chars\">{{user.lastName}}</div>\r\n        <div class=\"bold-chars\">{{user.firstName}}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxFlex=\"25\">\r\n      <div fxLayout=\"column\">\r\n        <div *ngFor=\"let foodOrder of mainFoodOrders\">\r\n          <div fxLayout=\"row\">\r\n            <div fxFlex=\"20\" class=\"align-left bold-chars\">{{foodOrder.quantity}}</div>\r\n            <div fxFlex=\"80\">{{foodOrder.food.foodName}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxFlex=\"25\">\r\n      <div fxLayout=\"column\">\r\n        <div *ngFor=\"let foodOrder of saladFoodOrders\">\r\n          <div fxLayout=\"row\">\r\n            <div fxFlex=\"20\" class=\"align-left bold-chars\">{{foodOrder.quantity}}</div>\r\n            <div fxFlex=\"80\">{{foodOrder.food.foodName}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxFlex=\"25\">\r\n      <div fxLayout=\"column\">\r\n        <div *ngFor=\"let foodOrder of drinkFoodOrders\">\r\n          <div fxLayout=\"row\">\r\n            <div fxFlex=\"20\" class=\"align-left bold-chars\">{{foodOrder.quantity}}</div>\r\n            <div fxFlex=\"80\">{{foodOrder.food.foodName}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" class=\"align-right print-row-border-total\">\r\n    <div fxFlex=\"10\" fxFlexOffset=\"90\" class=\"totalPrice\">\r\n      {{user.total | number : '1.2-2'}} <span [innerHTML]=\"currency | async\"></span>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chef/ordersday/user-order/user-order.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".align-right {\n  text-align: right; }\n\n.align-center {\n  text-align: center; }\n\n.align-left {\n  text-align: left; }\n\n.bold-chars {\n  font-weight: bold; }\n\n.user {\n  background-color: #F2F2F2;\n  padding: 10px;\n  margin-bottom: 10px; }\n\n.bottom-border {\n  border-bottom: 1px solid black;\n  padding: 5px 0 5px 0; }\n\n.totalPrice {\n  padding-top: 25px;\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chef/ordersday/user-order/user-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_foods_service__ = __webpack_require__("../../../../../src/app/chef/services/foods.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_global_settings_service_service__ = __webpack_require__("../../../../../src/app/shared/services/global-settings-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserOrderComponent = (function () {
    function UserOrderComponent(foodsService, globalSettingsService, decpipe) {
        this.foodsService = foodsService;
        this.globalSettingsService = globalSettingsService;
        this.decpipe = decpipe;
        this.mainFoodOrders = new Array();
        this.saladFoodOrders = new Array();
        this.drinkFoodOrders = new Array();
        this.total = 0;
    }
    UserOrderComponent.prototype.ngOnInit = function () {
        var orderItems;
        var food;
        this.currency = this.globalSettingsService.getCurrency();
        for (var i = 0; i < this.userOrders.length; i++) {
            orderItems = this.userOrders[i].orderItems;
            for (var j = 0; j < orderItems.length; j++) {
                food = this.foodsService.getFoodById(orderItems[j].foodId);
                if (food.foodType === 'Main') {
                    this.mainFoodOrders.push({
                        food: food,
                        quantity: orderItems[j].quantity
                    });
                    this.total += food.price * orderItems[j].quantity;
                    this.userOrders[i].total += food.price * orderItems[j].quantity;
                }
                else if (food.foodType === 'Salad') {
                    this.saladFoodOrders.push({
                        food: food,
                        quantity: orderItems[j].quantity
                    });
                    this.total += food.price * orderItems[j].quantity;
                    this.userOrders[i].total += food.price * orderItems[j].quantity;
                }
                else if (food.foodType === 'Drink') {
                    this.drinkFoodOrders.push({
                        food: food,
                        quantity: orderItems[j].quantity
                    });
                    this.total += food.price * orderItems[j].quantity;
                    this.userOrders[i].total += food.price * orderItems[j].quantity;
                }
            }
            this.total = Number(this.decpipe.transform(this.total, '1.2-2'));
            this.userOrders[i].total = Number(this.decpipe.transform(this.userOrders[i].total, '1.2-2'));
        }
    }; // ngOnInit
    return UserOrderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UserOrderComponent.prototype, "userOrders", void 0);
UserOrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-order',
        template: __webpack_require__("../../../../../src/app/chef/ordersday/user-order/user-order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chef/ordersday/user-order/user-order.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_foods_service__["a" /* FoodsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_foods_service__["a" /* FoodsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["DecimalPipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["DecimalPipe"]) === "function" && _c || Object])
], UserOrderComponent);

var _a, _b, _c;
//# sourceMappingURL=user-order.component.js.map

/***/ }),

/***/ "../../../../../src/app/chef/services/foods.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {Observable} from 'rxjs/Observable';
var FoodsService = (function () {
    function FoodsService(chefService) {
        this.chefService = chefService;
        this.foods = [];
        this.foodsMap = new Map();
        this.foods_version = 0;
        this.sortFoodTypes = new Map();
        this.sortFoodTypes.set("Main", 10);
        this.sortFoodTypes.set("Salad", 20);
        this.sortFoodTypes.set("Drink", 30);
    }
    FoodsService.prototype.getFoodById = function (id) {
        return this.foodsMap.get(id);
    };
    FoodsService.prototype.getFoods = function () {
        var _this = this;
        //check version
        this.chefService.foodsGet(false, null, null, "All", null, null, this.foods_version).subscribe(function (foodsPageRemote) {
            var foodsPage = foodsPageRemote;
            if (foodsPage.foods_version !== _this.foods_version) {
                _this.getRemoteFoods();
            }
            else {
                console.log("Foods not changed");
            }
            console.log("Local foods version:" + _this.foods_version + " remote:" + foodsPage.foods_version);
            // console.log(this.foods);
        }, function (error) { return console.log(error); });
        return this.foods;
    };
    FoodsService.prototype.getRemoteFoods = function () {
        var _this = this;
        //Renew foods lists
        this.chefService.foodsGet(false, null, null, "All", null, null).subscribe(function (foodsPageRemote) {
            var foodsPage = foodsPageRemote;
            //console.log(foodsPage);
            for (var i = 0; i < foodsPage.foods.length; i++) {
                _this.foods.push(foodsPage.foods[i].foodItem);
                _this.foodsMap.set(foodsPage.foods[i].foodItem.id, foodsPage.foods[i].foodItem);
            }
            _this.foods = _this.sortArrayOfFoods(_this.foods);
            _this.foods_version = foodsPageRemote.foods_version;
            //console.log("Renew foods", this.foods, this.foodsMap  );
            console.log("Renewed foods");
        }, function (error) { return console.log(error); });
    };
    //public sortArrayOfFoods(foods: Array<remote.Food>): Array<remote.Food> {
    FoodsService.prototype.sortArrayOfFoods = function (foods) {
        var _this = this;
        foods.sort(function (n1, n2) {
            if (_this.sortFoodTypes.get(n1.foodType) > _this.sortFoodTypes.get(n2.foodType)) {
                return 1;
            }
            if (_this.sortFoodTypes.get(n1.foodType) < _this.sortFoodTypes.get(n2.foodType)) {
                return -1;
            }
            return 0;
        });
        return foods;
    };
    return FoodsService;
}());
FoodsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_1__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__remote__).ChefApi) === "function" && _a || Object])
], FoodsService);

var _a;
//# sourceMappingURL=foods.service.js.map

/***/ }),

/***/ "../../../../../src/app/chef/shared/chef-nav/chef-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inline\">\r\n  <button md-raised-button color=\"accent\" routerLink=\"/chef\"   [routerLinkActiveOptions]=\"{ exact: true }\" routerLinkActive  #rlaChef=\"routerLinkActive\" [disabled]='rlaChef.isActive' routerLinkActive=\"active\">Menu</button>\r\n\r\n  <button md-raised-button color=\"accent\" routerLink=\"/chef/menus\"  routerLinkActive  #rlaChefMenus=\"routerLinkActive\" [disabled]='rlaChefMenus.isActive' routerLinkActive=\"active\">Daily menu</button>\r\n\r\n  <button md-raised-button color=\"accent\" routerLink=\"/chef/orders\"\r\n      routerLinkActive  #rlaChefOrders=\"routerLinkActive\" [disabled]='rlaChefOrders.isActive' routerLinkActive=\"active\" >\r\n     View orders</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chef/shared/chef-nav/chef-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chef/shared/chef-nav/chef-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChefNavComponent = (function () {
    function ChefNavComponent() {
    }
    ChefNavComponent.prototype.ngOnInit = function () {
    };
    return ChefNavComponent;
}());
ChefNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chef-nav',
        template: __webpack_require__("../../../../../src/app/chef/shared/chef-nav/chef-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chef/shared/chef-nav/chef-nav.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ChefNavComponent);

//# sourceMappingURL=chef-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/hungry/history/daily-order-history/daily-order-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"smallSidePad calendarDate is-flex-column\">\r\n  <div class=\"cal-cell-top\">\r\n    <span class=\"cal-day-number\">{{ day | date:\"d\" }}</span>\r\n  </div>\r\n\r\n  <div class=\" flexGrow is-flex-column clickable\" *ngIf=\"dailyMenu!==undefined\" (click)='viewDailyMenu()'>\r\n\r\n    <!--<md-card-title>{{dailyMenu.date}}</md-card-title>-->\r\n    <div *ngIf=\"dailyMenu.foods!==undefined\">\r\n      <ng-container *ngIf=\"dailyMenu.foods.length>0\">\r\n        <div class=\"foodsList\">\r\n          <div *ngFor=\"let food of dailyMenu.foods\" class=\"is-flex foodsListItem\">\r\n\r\n            <div> {{food.food.foodName}} </div>\r\n            <div class=\"foodListItemQty\"> {{food.quantity}}</div>\r\n          </div>\r\n        </div>\r\n        <!--<small style=\"margin: 5px\"></small>-->\r\n      </ng-container>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"dailyMenu!==undefined && dailyMenu.foods.length>0\" class=\"calendarBottom borderTop is-flex\">\r\n    <ng-container *ngIf=\"getTotal()!=0\">\r\n      <div>Total: </div>\r\n      <div> {{getTotal() | number : '1.2-2'}}<span [innerHTML]=\"currency | async\"></span></div>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div *ngIf=\"dailyMenu!==undefined && dailyMenu.foods.length==0\" class=\"calendarBottom smallPad flexEnd\">\r\n    <!--<ng-container *ngIf=\"dailyMenu.foods.length==0\">-->\r\n    <button md-raised-button color=\"accent\" (click)='viewDailyMenu()'>order</button>\r\n    <!--</ng-container>-->\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/hungry/history/daily-order-history/daily-order-history.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".is-flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.clickable {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hungry/history/daily-order-history/daily-order-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyOrderHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DailyOrderHistoryComponent = (function () {
    function DailyOrderHistoryComponent(router, datePipe) {
        this.router = router;
        this.datePipe = datePipe;
        this.total = 0;
    }
    DailyOrderHistoryComponent.prototype.ngOnChanges = function (changes) {
        //console.log("Changes:", changes);
        if (changes.total !== undefined) {
            // console.log('Changed:', changes.total.currentValue, changes.total.previousValue);
        }
    };
    DailyOrderHistoryComponent.prototype.ngOnInit = function () {
        if (this.dailyMenu !== undefined) {
            if (this.dailyMenu.foods !== undefined) {
                this.setTotal();
            }
        }
    };
    DailyOrderHistoryComponent.prototype.setTotal = function () {
        for (var i = 0; i < this.dailyMenu.foods.length; i++) {
            this.total += this.dailyMenu.foods[i].quantity * this.dailyMenu.foods[i].food.price;
        }
        // console.log('Init total:', this.total);
    };
    DailyOrderHistoryComponent.prototype.getTotal = function () {
        this.total = 0;
        for (var i = 0; i < this.dailyMenu.foods.length; i++) {
            this.total += this.dailyMenu.foods[i].quantity * this.dailyMenu.foods[i].food.price;
        }
        return this.total;
    };
    DailyOrderHistoryComponent.prototype.viewDailyMenu = function () {
        var dt = new Date(this.dailyMenu.date);
        console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_date_fns__["getISOWeek"])(dt));
        this.router.navigate(['/hungry/', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_date_fns__["getYear"])(dt), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_date_fns__["getISOWeek"])(dt)]);
    };
    return DailyOrderHistoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_5__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__remote__).DailyMenu) === "function" && _a || Object)
], DailyOrderHistoryComponent.prototype, "dailyMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DailyOrderHistoryComponent.prototype, "day", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"]) === "function" && _b || Object)
], DailyOrderHistoryComponent.prototype, "currency", void 0);
DailyOrderHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-daily-order-history',
        template: __webpack_require__("../../../../../src/app/hungry/history/daily-order-history/daily-order-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hungry/history/daily-order-history/daily-order-history.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"]) === "function" && _d || Object])
], DailyOrderHistoryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=daily-order-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/hungry/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"header\">\r\n  <app-month-nav\r\n    [viewDate]='viewdate'\r\n    (monthViewDate)=\"onMonthNavChange($event)\"\r\n  ></app-month-nav>\r\n\r\n  <app-hungry-nav></app-hungry-nav>\r\n\r\n</div>\r\n\r\n<div class=\"fullLayer\" *ngIf=\"showSpinner\">\r\n    <md-spinner class=\"centered\" color=\"accent\"></md-spinner>\r\n</div>\r\n\r\n\r\n<ng-container *ngIf='getDailyMenusMap().size>=0'>\r\n\r\n  <!--Counted Orders: {{ getDailyMenusMap().size}}-->\r\n\r\n  <ng-template #dailyOrderTemplate let-day=\"day\" let-locale=\"locale\">\r\n      <ng-container>\r\n        <app-daily-order-history   [dailyMenu]='getDailyMenusMap().get(day.date|date:\"yyyy-MM-dd\")' [day]=day.date [currency] = 'currency'></app-daily-order-history>\r\n      </ng-container>\r\n  </ng-template>\r\n\r\n  <div [ngSwitch]=\"view\">\r\n    <mwl-calendar-month-view\r\n      [viewDate]=\"viewdate\"\r\n      [excludeDays]=\"excludeDays\"\r\n      [cellTemplate]=\"dailyOrderTemplate\"\r\n      [locale]=\"locale\"\r\n      >\r\n    </mwl-calendar-month-view>\r\n  </div>\r\n\r\n</ng-container>\r\n\r\n<md-card>\r\n      <div fxLayout=\"row\">\r\n      <div fxFlexOffset=\"2\" fxFlex=\"91\"><h2>Your monthly total</h2></div>\r\n      <div fxFlex=\"7\"><h3>{{getTotal() | number : '1.2-2'}}<span [innerHTML]=\"currency | async\"></span></h3></div>\r\n    </div>\r\n</md-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/hungry/history/history.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0;\n  background-color: #fff; }\n\n.header {\n  padding-top: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hungry/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_global_settings_service_service__ = __webpack_require__("../../../../../src/app/shared/services/global-settings-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HistoryComponent = (function () {
    function HistoryComponent(hungryService, datePipe, route, location, router, globalSettingsService, decpipe) {
        this.hungryService = hungryService;
        this.datePipe = datePipe;
        this.route = route;
        this.location = location;
        this.router = router;
        this.globalSettingsService = globalSettingsService;
        this.decpipe = decpipe;
        // dailymenusMap: Map<Date, remote.DailyMenu> = new Map<Date, remote.DailyMenu>();  not working
        this.dailymenusMap = new Map();
        /////////////////////
        // calendar properties  https://mattlewis92.github.io/angular-calendar/
        this.view = 'month';
        this.viewdate = new Date();
        this.locale = 'en';
        // exclude weekends
        this.excludeDays = [0, 6];
        this.totalSum = 0;
        this.showSpinner = true;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('----- on init HistoryComponent!! -----');
        this.viewdate = new Date();
        this.currency = this.globalSettingsService.getCurrency();
        this.sub = this.route.params.subscribe(function (params) {
            var dt = new Date(+params['year'], +params['month'] - 1, 1, 0, 0, 0); // (+) converts string 'year' na d 'month' to a number
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isValid"])(dt)) {
                console.log('router date:' + dt);
                _this.viewdate = dt;
                _this.getRemoteDailyMenus(_this.buildMonthYear(_this.viewdate));
            }
        });
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isToday"])(this.viewdate)) {
            this.remote = this.hungryService.menusMonthlyGet()
                .finally(function () { _this.showSpinner = false; })
                .subscribe(function (dailymenus) {
                console.log('subscribed orders of current month');
                _this.dailymenus = dailymenus;
                _this.setDailyMenusMap();
                // console.log("route params:", this.route.params,this.route.params['month'] + '-' + this.route.params['year']);
            }, function (error) { return console.log(error); });
        }
    }; // ngOnInit
    HistoryComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.remote.unsubscribe();
    };
    HistoryComponent.prototype.getRemoteDailyMenus = function (monthYear) {
        var _this = this;
        this.remote = this.hungryService.menusMonthlyMonthyearGet(monthYear)
            .finally(function () { _this.showSpinner = false; })
            .subscribe(function (dailymenus) {
            console.log("subscribed orders of:", monthYear);
            _this.dailymenus = dailymenus;
            _this.setDailyMenusMap();
        }, function (error) { return console.log(error); });
    };
    HistoryComponent.prototype.setDailyMenusMap = function () {
        this.dailymenusMap = new Map();
        for (var i = 0; i < this.dailymenus.length; i++) {
            var dt = new Date(this.dailymenus[i].date);
            dt.setHours(0, 0, 0, 0);
            var dtStr = this.datePipe.transform(dt, 'yyyy-MM-dd');
            this.dailymenusMap.set(dtStr, this.dailymenus[i]);
        }
        console.log('daily menus history map:', this.dailymenusMap);
    };
    HistoryComponent.prototype.getDailyMenusMap = function () {
        return this.dailymenusMap;
    };
    HistoryComponent.prototype.getDailyMenus = function () {
        return this.dailymenus;
    };
    HistoryComponent.prototype.orderExists = function (dateStr) {
        return this.dailymenusMap.has(dateStr);
    };
    HistoryComponent.prototype.getTotal = function () {
        this.totalSum = 0;
        if (this.dailymenus !== undefined) {
            for (var _i = 0, _a = this.dailymenus; _i < _a.length; _i++) {
                var dm = _a[_i];
                for (var _b = 0, _c = dm.foods; _b < _c.length; _b++) {
                    var foodItem = _c[_b];
                    //this.total += this.dailyMenu.foods[i].quantity * this.dailyMenu.foods[i].food.price;
                    this.totalSum += foodItem.quantity * foodItem.food.price;
                }
            }
        }
        return this.totalSum;
    };
    HistoryComponent.prototype.buildMonthYear = function (dt) {
        return this.pad(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getMonth"])(dt) + 1, 2) + '-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getYear"])(dt);
    };
    HistoryComponent.prototype.pad = function (num, size) {
        var s = num + '';
        while (s.length < size)
            s = '0' + s;
        return s;
    };
    HistoryComponent.prototype.onMonthNavChange = function (dt) {
        // console.log("MonthNavComponent child changed:",dt)
        if (dt.getMonth() === new Date().getMonth()) {
            this.router.navigate(['/hungry/history/']);
        }
        else {
            this.router.navigate(['/hungry/history/', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getYear"])(dt), this.pad(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getMonth"])(dt) + 1, 2)]);
        }
        // this.getRemoteDailyMenus(this.buildMonthYear(this.viewdate));
    };
    return HistoryComponent;
}());
HistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-hungry-history',
        template: __webpack_require__("../../../../../src/app/hungry/history/history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hungry/history/history.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_1__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__remote__).HungryApi) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["DecimalPipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["DecimalPipe"]) === "function" && _g || Object])
], HistoryComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=history.component.js.map

/***/ }),

/***/ "../../../../../src/app/hungry/home/daily-menu/daily-menu-order-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class=\"right-align\">\r\n    <div fxFlex=\"100\">\r\n      <button class=\"miniBtnX\" md-button (click)=\"dialogRef.close('No')\">x</button>\r\n    </div>\r\n  </div>\r\n<div class=\"dialog\">\r\n  <div class=\"order\">\r\n    <div class=\"centered\" fxLayout=\"row\">\r\n      <div fxFlex=\"100\">\r\n        <img src=\"./../../../assets/img/Yum-logo-small.png\">\r\n      </div>\r\n    </div>\r\n    <div class=\"centered\">\r\n      <!--<p>Congrats,</p>-->\r\n      <p><b>Ms/Mr {{fullName}},</b></p>\r\n      <p>You are about to order for<br> <b>{{date|date:\"EEEE d MMM y\"}}</b>.</p>\r\n    </div>\r\n    <div>\r\n      <div *ngFor=\"let food of orderedFoods\">\r\n        <div class=\"food\" fxLayout=\"row\">\r\n          <div fxFlex=\"70\">\r\n            {{food.food.foodName}}\r\n          </div>\r\n          <div fxFlex=\"30\">\r\n            <div fxLayout=\"row\">\r\n              <div fxFlex=\"40\">\r\n                {{food.quantity}}\r\n              </div>\r\n              <div fxFlex=\"60\" class=\"right-align\">\r\n                <b>x {{food.food.price | number : '1.2-2'}}<span [innerHTML]=\"currency | async\"></span></b>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"total\" fxLayout=\"row\">\r\n        <div fxFlex=\"56\">\r\n          <b>Total</b>\r\n        </div>\r\n        <div fxFlex=\"24\">\r\n          &nbsp;<!--Items: {{items}}-->\r\n        </div>\r\n        <div fxFlex=\"20\" class=\"right-align\">\r\n          <b>{{total | number : '1.2-2'}}<span [innerHTML]=\"currency | async\"></span></b>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"centered email\" fxLayout=\"row\">\r\n      <md-checkbox fxFlex=\"100\" [checked]=\"isChecked\" (change)=\"toggle()\">Email me this</md-checkbox>\r\n    </div>\r\n    <div class=\"centered\" fxLayout=\"row\">\r\n      <button class=\"buttons cancel\" fxFlex=\"50\" md-raised-button (click)=\"dialogRef.close('No')\" color=\"accent\">Cancel</button>\r\n      <button class=\"buttons\" fxFlex=\"50\" md-raised-button (click)=\"dialogRef.close(getEmailCheck())\" color=\"accent\">Bon appetit!</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/hungry/home/daily-menu/daily-menu-order-dialog.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dialog {\n  height: 550px;\n  width: 420px; }\n\n.order {\n  width: 370px;\n  margin: 0 auto;\n  font-family: 'Roboto Slab', serif; }\n\nimg {\n  width: 182px;\n  height: 71px; }\n\n.miniBtnX {\n  min-width: 5px !important;\n  font-weight: bold;\n  font-size: 1.3em; }\n\n.food {\n  padding: 15px 0 15px 0;\n  border-bottom: 1px solid red; }\n\n.total {\n  padding: 15px 0 15px 0;\n  border-top: 1px solid red; }\n\n.email {\n  margin: 25px 0 30px 0; }\n\n.buttons {\n  height: 48px;\n  margin: 0 2px 15px 0; }\n\n.cancel {\n  background-color: #D7D7D7; }\n\n.cancel:hover {\n  background-color: #F44336; }\n\n.right-align {\n  text-align: right !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hungry/home/daily-menu/daily-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-around start\" class=\"mainDivs\">\r\n  <div fxFlex=\"27\" class=\"food-type\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n      <div class=\"type-title\"><span class='biggerSize' [ngClass]=\"'icon-Meal'\"> </span>Main dishes</div>\r\n    </div>\r\n    <ng-container *ngFor=\"let food of foodsList\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"food-line\" *ngIf='food.food.foodType === \"MAIN\"'>\r\n        <div fxFlex class=\"food-name\" title=\"{{getFoodDescription(food.food.id)}}\">{{getFoodName(food.food.id)}}</div>\r\n        <div fxFlex=\"10\">{{getFoodQuantity(food.food.id)}}</div>\r\n        <div fxFlex=\"10\" fxLayout=\"column\" class=\"quant-buttons\">\r\n          <div *ngIf=\"!isFinalised()\">\r\n            <button (click)=\"addFoodQuantity(food.food.id)\" md-raised-button color=\"accent\" [disabled]=\"statusButton()\">+</button>\r\n          </div>\r\n          <div *ngIf=\"!isFinalised()\">\r\n            <button (click)=\"removeFoodQuantity(food.food.id)\" md-raised-button color=\"accent\" [disabled]=\"statusButton() || getFoodQuantity(food.food.id) === 0\">-</button>\r\n          </div>\r\n        </div>\r\n        <div fxFlex=\"25\" class=\"price\">x{{getFoodPrice(food.food.id)| number : '1.2-2'}}<span [innerHTML]=\"currency | async\"></span></div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n  <div fxFlex=\"27\" class=\"food-type\">\r\n    <div class=\"type-title\"><span class='biggerSize' [ngClass]=\"'icon-Salad'\"> </span>Salads</div>\r\n    <ng-container *ngFor=\"let food of foodsList\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"food-line\" *ngIf='food.food.foodType === \"SALAD\"'>\r\n        <div fxFlex class=\"food-name\" title=\"{{getFoodDescription(food.food.id)}}\">{{getFoodName(food.food.id)}}</div>\r\n        <div fxFlex=\"10\">{{getFoodQuantity(food.food.id)}}</div>\r\n        <div fxFlex=\"10\" fxLayout=\"column\" class=\"quant-buttons\">\r\n          <div *ngIf=\"!isFinalised()\">\r\n            <button (click)=\"addFoodQuantity(food.food.id)\" md-raised-button color=\"accent\" [disabled]=\"statusButton()\">+</button>\r\n          </div>\r\n          <div *ngIf=\"!isFinalised()\">\r\n            <button (click)=\"removeFoodQuantity(food.food.id)\" md-raised-button color=\"accent\" [disabled]=\"statusButton() || getFoodQuantity(food.food.id) === 0\">-</button>\r\n          </div>\r\n        </div>\r\n        <div fxFlex=\"25\" class=\"price\">x{{getFoodPrice(food.food.id)| number : '1.2-2'}}<span [innerHTML]=\"currency | async\"></span></div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n  <div fxFlex=\"27\" class=\"drink-type\">\r\n    <div class=\"type-title\"><span class='biggerSize' [ngClass]=\"'icon-Drink'\"> </span>Drinks</div>\r\n    <ng-container *ngFor=\"let food of foodsList\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"food-line\" *ngIf='food.food.foodType === \"DRINK\"'>\r\n        <div fxFlex class=\"food-name\" title=\"{{getFoodDescription(food.food.id)}}\">{{getFoodName(food.food.id)}}</div>\r\n        <div fxFlex=\"10\">{{getFoodQuantity(food.food.id)}}</div>\r\n        <div fxFlex=\"10\" fxLayout=\"column\" class=\"quant-buttons\">\r\n           <div *ngIf=\"!isFinalised()\">\r\n          <button (click)=\"addFoodQuantity(food.food.id)\" md-raised-button color=\"accent\" [disabled]=\"statusButton()\">+</button>\r\n           </div>\r\n           <div *ngIf=\"!isFinalised()\">\r\n          <button (click)=\"removeFoodQuantity(food.food.id)\" md-raised-button color=\"accent\" [disabled]=\"statusButton() || getFoodQuantity(food.food.id) === 0\">-</button>\r\n           </div>\r\n        </div>\r\n        <div fxFlex=\"25\" class=\"price\">x{{getFoodPrice(food.food.id)| number : '1.2-2'}}<span [innerHTML]=\"currency | async\"></span></div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n  <div fxFlex=\"19\" class=\"total\">\r\n    <div>\r\n      <div class=\"total-title\">Total</div>\r\n      <div class=\"total-price\">{{ getTotalPrice() | number : '1.2-2'}}<span [innerHTML]=\"currency | async\"></span></div>\r\n    </div>\r\n    <div *ngIf=\"!isFinalised()\">\r\n      <div *ngIf=\"isOrderBoolean\">\r\n        <div class=\"placed\">\r\n          Order placed\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"orderNoFinal() && !modifyChecked\">\r\n        <div class=\"space-btn\">\r\n          <button md-raised-button (click)=\"modify()\" color=\"accent\" [disabled]=\"disableBtn\">Modify</button>\r\n          <button md-raised-button class=\"cancel\" (click)=\"cancelOrder()\" color=\"accent\" [disabled]=\"disableBtn\">Cancel Order</button>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"modifyChecked\">\r\n        <div class=\"space-btn\">\r\n          <button md-raised-button class=\"saveBtn\" (click)=\"order()\" color=\"accent\" [disabled]=\"getTotalPrice() === 0\">Save</button>\r\n          <button md-raised-button class=\"cancel\" (click)=\"cancelModify()\" color=\"accent\">Cancel Modify</button>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!isOrderBoolean\">\r\n        <div class=\"space-btn\">\r\n          <button md-raised-button (click)=\"order()\" color=\"accent\" [disabled]=\"getTotalPrice() === 0\">Order</button>\r\n          <button *ngIf=\"getTotalPrice() !== 0\" (click)=\"removeFoodMapQuantity()\" md-raised-button class=\"cancel reset-btn\" color=\"accent\">Reset</button>\r\n        </div>\r\n      </div>\r\n      <img *ngIf=\"showSpinner\" src=\"../../../assets/img/spinner.gif\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/hungry/home/daily-menu/daily-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".isOrdered {\n  background-color: green; }\n\n.quant-buttons .mat-raised-button {\n  min-width: 20px;\n  padding: 5px;\n  line-height: 5px;\n  border-radius: 2px;\n  font-weight: 800; }\n\n.food-line {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border-bottom: 1px dashed #F44336;\n  margin-right: 15px; }\n\n.food-type {\n  border-right: 1px solid #F44336;\n  padding-left: 15px;\n  height: 100%; }\n\n.drink-type {\n  padding-left: 15px; }\n\n.total {\n  padding-left: 15px;\n  border-left: 1px solid #F44336; }\n\n.type-title {\n  font-family: 'Roboto Slab', Arial;\n  font-weight: bold; }\n\n.total-title {\n  font-family: 'Roboto Slab', Arial;\n  font-weight: bold;\n  border-bottom: 1px solid #F44336;\n  padding-bottom: 15px; }\n\n.total-price {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-weight: bold; }\n\n.placed {\n  background-color: #00CC99;\n  color: white;\n  padding: 5px 15px 5px 15px;\n  font-size: 14px;\n  max-width: 210px;\n  width: 85%;\n  margin-bottom: 2px;\n  border-radius: 4px;\n  text-align: center; }\n\n.total {\n  text-align: center;\n  margin: 0 auto;\n  padding-left: 20px; }\n\n.space-btn button {\n  margin-bottom: 2px; }\n\n.price {\n  text-align: right; }\n\n.cancel {\n  background-color: #D7D7D7; }\n\n.cancel:hover {\n  background-color: #F44336; }\n\n.saveBtn {\n  min-width: 83px; }\n\n.food-name:hover {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hungry/home/daily-menu/daily-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_global_settings_service_service__ = __webpack_require__("../../../../../src/app/shared/services/global-settings-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DailyOrderCancelDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DailyMenuOrderDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DailyMenuComponent = (function () {
    function DailyMenuComponent(hungryService, dialog, snackBar, globalSettingsService) {
        this.hungryService = hungryService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.globalSettingsService = globalSettingsService;
        this.dailyTotalPrice = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.lastEditDailyOrder = {};
        this.foodsMapNoModify = new Map();
        this.foodsMap = new Map();
        this.foodsList = [];
        this.totalPrice = 0;
        this.modifyChecked = false;
        this.isOrderBoolean = false;
        // create spinner
        this.showSpinner = false;
        this.disableBtn = false;
    }
    DailyMenuComponent.prototype.ngOnInit = function () {
        this.currency = this.globalSettingsService.getCurrency();
        this.createFoodMap();
        if (this.dailyMenu.orderId != null) {
            this.isOrderBoolean = true;
            this.dailyTotalPrice.emit(this.getTotalPrice());
            if (!this.dailyMenu.isFinal) {
                this.getOrderLastEdit(); // Set order lastEdit.
            }
        }
    };
    DailyMenuComponent.prototype.createFoodMap = function () {
        this.foodsMap.clear();
        for (var _i = 0, _a = this.dailyMenu.foods; _i < _a.length; _i++) {
            var food = _a[_i];
            this.foodsMap.set(food.food.id, food);
        }
        this.fillFoodList();
    };
    // Set quantity = 0 for all foods.
    DailyMenuComponent.prototype.removeFoodMapQuantity = function () {
        var _this = this;
        this.foodsMap.forEach(function (food) {
            food.quantity = 0;
            _this.foodsMap.set(food.food.id, food);
        });
    };
    // Update food map with new order items.
    DailyMenuComponent.prototype.updateFoodMapWithOrderedFoods = function (foods) {
        this.removeFoodMapQuantity();
        for (var _i = 0, foods_1 = foods; _i < foods_1.length; _i++) {
            var food = foods_1[_i];
            this.foodsMap.set(food.food.id, food);
        }
        this.fillFoodList();
    };
    DailyMenuComponent.prototype.fillFoodList = function () {
        var _this = this;
        this.foodsList = [];
        this.foodsMap.forEach(function (food) {
            _this.foodsList.push(food);
        });
    };
    DailyMenuComponent.prototype.isFinalised = function () {
        return this.dailyMenu.isFinal;
    };
    DailyMenuComponent.prototype.orderNoFinal = function () {
        if (this.isOrderBoolean) {
            if (!this.isFinalised()) {
                return true;
            }
        }
        return false;
    };
    DailyMenuComponent.prototype.statusButton = function () {
        if (this.isFinalised()) {
            return true;
        }
        else if (this.isOrderBoolean && !this.isFinalised()) {
            if (this.modifyChecked) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    DailyMenuComponent.prototype.getFoodName = function (id) {
        return this.foodsMap.get(id).food.foodName;
    };
    DailyMenuComponent.prototype.getFoodPrice = function (id) {
        return this.foodsMap.get(id).food.price;
    };
    DailyMenuComponent.prototype.getFoodQuantity = function (id) {
        return this.foodsMap.get(id).quantity;
    };
    DailyMenuComponent.prototype.getFoodDescription = function (id) {
        return this.foodsMap.get(id).food.description;
    };
    DailyMenuComponent.prototype.getfood = function (id) {
        return this.foodsMap.get(id);
    };
    DailyMenuComponent.prototype.addFoodQuantity = function (id) {
        if (this.getfood(id) != null) {
            this.getfood(id).quantity += 1;
            this.fillFoodList(); // Fill food list.
        }
    };
    DailyMenuComponent.prototype.removeFoodQuantity = function (id) {
        if (this.getfood(id) != null && this.getfood(id).quantity > 0) {
            this.getfood(id).quantity -= 1;
            this.fillFoodList(); // Fill food list.
        }
    };
    DailyMenuComponent.prototype.getTotalPrice = function () {
        var _this = this;
        this.totalPrice = 0;
        this.foodsMap.forEach(function (food) {
            if (food.quantity > 0) {
                _this.totalPrice += (food.food.price * food.quantity);
            }
        });
        return this.totalPrice;
    };
    // Deep copy on the food map.
    DailyMenuComponent.prototype.cloneFoodsMap = function (foodsMapOriginal) {
        var _this = this;
        var foodsMapClone = new Map();
        foodsMapOriginal.forEach(function (foodOriginal) {
            foodsMapClone.set(foodOriginal.food.id, _this.cloneFoodQuantity(foodOriginal));
        });
        return foodsMapClone;
    };
    // Deep copy on the food with quantity.
    DailyMenuComponent.prototype.cloneFoodQuantity = function (foodQOriginal) {
        var foodQClone = {};
        foodQClone.food = foodQOriginal.food;
        foodQClone.quantity = foodQOriginal.quantity;
        return foodQClone;
    };
    // Update order last edit, Call get order with id Api.
    DailyMenuComponent.prototype.getOrderLastEdit = function () {
        var _this = this;
        this.hungryService.ordersIdGet(this.dailyMenu.orderId, this.dailyMenu.id, this.dailyMenu.lastEdit.version, this.dailyMenu.date)
            .subscribe(function (orderedMenu) {
            _this.lastEditDailyOrder = orderedMenu.lastEdit;
        }, function (error) { return console.log(error); });
    };
    // Modify the Order.
    DailyMenuComponent.prototype.modify = function () {
        this.foodsMapNoModify = this.cloneFoodsMap(this.foodsMap);
        this.modifyChecked = true;
    };
    // Cancel Modify.
    DailyMenuComponent.prototype.cancelModify = function () {
        this.foodsMap = this.cloneFoodsMap(this.foodsMapNoModify);
        this.modifyChecked = false;
    };
    // Call Order Dialog.
    DailyMenuComponent.prototype.order = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DailyMenuOrderDialog);
        var instance = dialogRef.componentInstance; // This instance pass data to dialog.
        var orderFoods = [];
        instance.total = this.totalPrice;
        instance.orderedFoods = [];
        instance.date = this.dailyMenu.date;
        instance.currency = this.currency;
        for (var _i = 0, _a = this.foodsList; _i < _a.length; _i++) {
            var food = _a[_i];
            if (food.quantity > 0) {
                instance.orderedFoods.push(food);
                orderFoods.push(food);
            }
            instance.items += food.quantity;
        }
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'Yes' || result === 'YesWithEmail') {
                _this.showSpinner = true;
                _this.disableBtn = true;
                // Is Modify.
                if (_this.modifyChecked) {
                    var updateOrderItem = {};
                    var updateOrderItems = [];
                    updateOrderItem.dailyMenuId = _this.dailyMenu.id;
                    updateOrderItem.dailyMenuDate = _this.dailyMenu.date;
                    updateOrderItem.dailyMenuVersion = _this.dailyMenu.lastEdit.version;
                    if (result === 'YesWithEmail') {
                        updateOrderItem.emailRequest = true;
                    }
                    else {
                        updateOrderItem.emailRequest = false;
                    }
                    updateOrderItem.lastEdit = _this.lastEditDailyOrder;
                    for (var _i = 0, orderFoods_1 = orderFoods; _i < orderFoods_1.length; _i++) {
                        var orderedFood = orderFoods_1[_i];
                        var foodItem = {};
                        foodItem.foodId = orderedFood.food.id;
                        foodItem.quantity = orderedFood.quantity;
                        updateOrderItems.push(foodItem);
                    }
                    updateOrderItem.orderItems = updateOrderItems;
                    // Call, order with id put API.
                    _this.hungryService.ordersIdPut(_this.dailyMenu.orderId, updateOrderItem)
                        .subscribe(function (lastEdit) {
                        _this.lastEditDailyOrder = lastEdit;
                        _this.isOrderBoolean = true;
                        _this.modifyChecked = false;
                        _this.showSpinner = false;
                        _this.disableBtn = false;
                        _this.dailyTotalPrice.emit(_this.getTotalPrice());
                        console.log('Order changed');
                        _this.openSnackBar('Modify Order placed successfully!', 'ok', 1); // Success SnackBar
                    }, function (error) {
                        switch (error.status) {
                            case 304:
                                _this.openSnackBar('Unmodified data', 'ok', 2);
                                break;
                            case 400:
                                _this.openSnackBar('Order couldn t be modified.', 'ok', 3);
                                break;
                            case 404:
                                _this.openSnackBar('Order not found', 'ok', 3);
                                break;
                            case 409:
                                var dailyOrder = JSON.parse(error._body);
                                _this.updateFoodMapWithOrderedFoods(dailyOrder.foods);
                                _this.lastEditDailyOrder = dailyOrder.lastEdit;
                                _this.openSnackBar('Order couldn t changed because have changed in past, Order now displayed in your page', 'ok', 3);
                                break;
                            case 410:
                                var errorDeletion = JSON.parse(error._body);
                                _this.openSnackBar(errorDeletion.error.message, 'ok', 3);
                                _this.dailyMenu = errorDeletion.dailyMenu;
                                _this.isOrderBoolean = false;
                                _this.modifyChecked = false;
                                _this.createFoodMap();
                                break;
                            case 412:
                                _this.openSnackBar('Deadline for orders passed', 'ok', 3);
                                break;
                            default:
                                _this.modifyChecked = false;
                                _this.foodsMap = _this.cloneFoodsMap(_this.foodsMapNoModify);
                                _this.openSnackBar('Server Error', 'ok', 3);
                                break;
                        }
                        _this.showSpinner = false;
                        _this.disableBtn = false;
                    });
                }
                else {
                    var order = {};
                    var newOrderItems = [];
                    order.dailyMenuId = _this.dailyMenu.id;
                    order.dailyMenuDate = _this.dailyMenu.date;
                    order.menuVersion = _this.dailyMenu.lastEdit.version;
                    if (result === 'YesWithEmail') {
                        order.emailRequest = true;
                    }
                    else {
                        order.emailRequest = false;
                    }
                    for (var _a = 0, orderFoods_2 = orderFoods; _a < orderFoods_2.length; _a++) {
                        var orderedFood = orderFoods_2[_a];
                        var foodItem = {};
                        foodItem.foodId = orderedFood.food.id;
                        foodItem.quantity = orderedFood.quantity;
                        newOrderItems.push(foodItem);
                    }
                    order.OrderItems = newOrderItems;
                    // Call, order post API.
                    _this.hungryService.ordersPost(order)
                        .subscribe(function (orderedDailyMenu) {
                        _this.dailyMenu = orderedDailyMenu;
                        _this.getOrderLastEdit(); // Update order last edit.
                        _this.isOrderBoolean = true;
                        _this.showSpinner = false;
                        _this.disableBtn = false;
                        _this.dailyTotalPrice.emit(_this.getTotalPrice());
                        console.log('Order placed');
                        _this.openSnackBar('Foods ordered successfully!', 'ok', 1);
                    }, function (error) {
                        switch (error.status) {
                            case 400:
                                _this.openSnackBar('Order couldn t have been placed.', 'ok', 3);
                                break;
                            case 409:
                                _this.dailyMenu = JSON.parse(error._body);
                                _this.isOrderBoolean = true;
                                _this.getOrderLastEdit();
                                _this.createFoodMap();
                                _this.openSnackBar('Order have already placed, And now is displayed in page', 'ok', 2);
                                break;
                            case 410:
                                var errorDeletion = JSON.parse(error._body);
                                _this.openSnackBar(errorDeletion.error.message, 'ok', 3);
                                _this.dailyMenu = errorDeletion.dailyMenu;
                                if (_this.dailyMenu.orderId != null) {
                                    _this.getOrderLastEdit();
                                }
                                _this.createFoodMap();
                                break;
                            case 412:
                                _this.openSnackBar('Deadline for orders passed, Your order Canceled.', 'ok', 3);
                                break;
                            default:
                                _this.isOrderBoolean = false;
                                _this.openSnackBar('Server Error', 'ok', 3);
                                break;
                        }
                        _this.showSpinner = false;
                        _this.disableBtn = false;
                    });
                }
            }
        });
    };
    // Cancel the Order.
    DailyMenuComponent.prototype.cancelOrder = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DailyOrderCancelDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'Yes') {
                _this.showSpinner = true;
                _this.disableBtn = true;
                var dailyMenuDetails = {};
                dailyMenuDetails.dailyMenuId = _this.dailyMenu.id;
                dailyMenuDetails.dailyMenuDate = _this.dailyMenu.date;
                dailyMenuDetails.dailyMenuVersion = _this.dailyMenu.lastEdit.version;
                // Call delete api.
                _this.hungryService.ordersIdDelete(_this.dailyMenu.orderId, dailyMenuDetails)
                    .subscribe(function () {
                    _this.isOrderBoolean = false;
                    _this.removeFoodMapQuantity();
                    _this.dailyTotalPrice.emit(_this.getTotalPrice());
                    _this.openSnackBar('Order deleted successfully!', 'ok', 1);
                    console.log('Order Deleted');
                    _this.showSpinner = false;
                    _this.disableBtn = false;
                }, function (error) {
                    switch (error.status) {
                        case 400:
                            _this.openSnackBar('Order couldn t be deleted.', 'ok', 3);
                            break;
                        case 404:
                            _this.openSnackBar('Order not found', 'ok', 3);
                            break;
                        case 410:
                            var errorDeletion = JSON.parse(error._body);
                            _this.openSnackBar(errorDeletion.error.message, 'ok', 3);
                            _this.dailyMenu = errorDeletion.dailyMenu;
                            _this.createFoodMap();
                            _this.isOrderBoolean = false;
                            break;
                        case 412:
                            _this.openSnackBar('Deadline for orders passed', 'ok', 3);
                            break;
                        default:
                            _this.isOrderBoolean = true;
                            _this.openSnackBar('Server Error', 'ok', 3);
                            break;
                    }
                    _this.showSpinner = false;
                    _this.disableBtn = false;
                });
            }
        });
    };
    // status -> 1:success , 2:warning, 3:error
    DailyMenuComponent.prototype.openSnackBar = function (message, action, status) {
        switch (status) {
            case 1:
                this.snackBar.open(message, action, {
                    duration: 5000,
                    extraClasses: ['success-snack-bar']
                });
                break;
            case 2:
                this.snackBar.open(message, action, {
                    extraClasses: ['warning-snack-bar']
                });
                break;
            case 3:
                this.snackBar.open(message, action, {
                    extraClasses: ['error-snack-bar']
                });
                break;
        }
    };
    return DailyMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_4__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__remote__).DailyMenu) === "function" && _a || Object)
], DailyMenuComponent.prototype, "dailyMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DailyMenuComponent.prototype, "dailyTotalPrice", void 0);
DailyMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-daily-menu',
        template: __webpack_require__("../../../../../src/app/hungry/home/daily-menu/daily-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hungry/home/daily-menu/daily-menu.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = (typeof __WEBPACK_IMPORTED_MODULE_4__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__remote__).HungryApi) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */]) === "function" && _e || Object])
], DailyMenuComponent);

// Daily Order Cancel Dialog to confirm delete.
var DailyOrderCancelDialog = (function () {
    function DailyOrderCancelDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return DailyOrderCancelDialog;
}());
DailyOrderCancelDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-daily-order-cancel-dialog',
        template: __webpack_require__("../../../../../src/app/hungry/home/daily-menu/daily-order-cancel-dialog.html"),
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdDialogRef */]) === "function" && _f || Object])
], DailyOrderCancelDialog);

// Daily Menu Order Details Dialog.
var DailyMenuOrderDialog = (function () {
    function DailyMenuOrderDialog(dialogRef, authenticationService) {
        this.dialogRef = dialogRef;
        this.authenticationService = authenticationService;
        this.lastEditDailyOrderVersion = {};
        this.orderedFoods = [];
        this.items = 0;
        this.total = 0;
        this.isChecked = false;
        this.fullName = '';
    }
    DailyMenuOrderDialog.prototype.ngOnInit = function () {
        // Get user details.
        var user = this.authenticationService.getLoggedInUser();
        this.fullName = user.firstName + ' ' + user.lastName;
    };
    // check email check box.
    DailyMenuOrderDialog.prototype.toggle = function () {
        this.isChecked = !this.isChecked;
    };
    // Dialog return value with email or not.
    DailyMenuOrderDialog.prototype.getEmailCheck = function () {
        if (this.isChecked) {
            return 'YesWithEmail';
        }
        else {
            return 'Yes';
        }
    };
    return DailyMenuOrderDialog;
}());
DailyMenuOrderDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dailymenu-order-dialog',
        template: __webpack_require__("../../../../../src/app/hungry/home/daily-menu/daily-menu-order-dialog.html"),
        styles: [__webpack_require__("../../../../../src/app/hungry/home/daily-menu/daily-menu-order-dialog.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdDialogRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__shared_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_authentication_service__["a" /* AuthenticationService */]) === "function" && _h || Object])
], DailyMenuOrderDialog);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=daily-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/hungry/home/daily-menu/daily-order-cancel-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"centered\">\r\n  <h1 md-dialog-title>Cancel your Order</h1>\r\n  <div md-dialog-content>\r\n    <h3>Are you sure?</h3>\r\n    <button md-raised-button (click)=\"dialogRef.close('No')\" color=\"warn\">No</button>\r\n    <button md-raised-button (click)=\"dialogRef.close('Yes')\" color=\"warn\">Yes</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/hungry/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"header\" >\r\n  <div >\r\n    <app-month-nav *ngIf=\"monthDate\" [(viewDate)]=\"monthDate\" (monthViewDate)=\"onMonthNavView($event)\"></app-month-nav>\r\n    <app-hungry-nav></app-hungry-nav>\r\n  </div>\r\n  <div>\r\n    <button md-raised-button color=\"accent\" (click)=\"previousWeek()\">Previous Week</button>\r\n    <button md-raised-button  color=\"accent\" (click)=\"currentWeek()\" routerLink=\"/hungry\" [routerLinkActiveOptions]=\"{ exact: true }\" routerLinkActive  #rlaCurrentHungry=\"routerLinkActive\" [disabled]='rlaCurrentHungry.isActive' routerLinkActive=\"active\">Current Week</button>\r\n    <button md-raised-button color=\"accent\" (click)=\"nextWeek()\">Next Week</button>\r\n  </div>\r\n</div>\r\n<md-grid-list *ngIf=\"showLoadSpinner\" cols=\"1\" rowHeight=\"200px\">\r\n  <md-grid-tile>\r\n    <md-spinner class=\"centered\" color=\"accent\"></md-spinner>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n<div *ngFor=\"let day of weekDays\">\r\n  <div class=\"date\">{{day|date:\"EEEE / d MMM\"}}</div>\r\n  <md-card>\r\n    <div class=\"no-menu centered\" *ngIf='dailyMenuExists(day|date:\"yyyy-MM-dd\") === false'>\r\n      <div><i class=\"material-icons medium-size\">mood_bad</i></div>\r\n      <div>\r\n        <div> Today there is no menu prepared!</div>\r\n        <div>Some fasting will be good for you ;)</div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf='dailyMenuExists(day|date:\"yyyy-MM-dd\") === true'>\r\n      <app-daily-menu (dailyTotalPrice)=\"handleUserUpdated($event, day)\" [dailyMenu]='getDailyMenu(day|date:\"yyyy-MM-dd\")'></app-daily-menu>\r\n    </div>\r\n  </md-card>\r\n</div>\r\n\r\n<md-grid-list cols=\"1\" rowHeight=\"70px\">\r\n  <md-grid-tile colspan=\"1\" class=\"right-no-pad\">\r\n    <button md-raised-button color=\"accent\" (click)=\"previousWeek()\">Previous Week</button>\r\n    <button md-raised-button color=\"accent\" (click)=\"nextWeek()\">Next Week</button>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n<md-card>\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"space-between none\" class=\"hungryFooter\">\r\n    <div fxFlex=\"30\">\r\n      <div fxLayout=\"row\">\r\n        <div fxFlexOffset=\"2\" fxFlex=\"91\"><h2>Your weekly total</h2></div>\r\n        <div fxFlex=\"7\"><h3>{{getTotalPrice() | number : '1.2-2'}}<span [innerHTML]=\"currency | async\"></span></h3></div>\r\n      </div>\r\n      <div fxLayout=\"row\">\r\n        <span fxFlexOffset=\"2\" fxFlex=\"97\"><hr flex/></span>\r\n      </div>\r\n    </div>\r\n    <div fxFlex=\"10\">\r\n      <div fxLayout=\"row\">\r\n        <div fxFlexOffset=\"2\"><p>Deadline for signing-up for the next day's meal is by <span class=\"bold\" [innerHTML]=\"deadline | async | date:'H:mm'\"></span> of the previous day.</p></div>\r\n      </div>\r\n      <div fxLayout=\"row\">\r\n        <div fxFlexOffset=\"2\"><h3>Notes</h3></div>\r\n      </div>\r\n    </div>\r\n    <div fxFlex=\"60\">\r\n      <div fxLayout=\"row\">\r\n        <div fxFlex=\"63\" fxFlexOffset=\"2\"><span [innerHTML]=\"notes | async\"></span></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</md-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/hungry/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".date {\n  background-color: black;\n  color: white;\n  width: 200px;\n  padding: 10px;\n  border-radius: 5px 5px 0 0;\n  margin-top: 15px; }\n\n.no-menu {\n  padding: 30px;\n  color: #F44336;\n  font-size: 18px;\n  font-weight: bold; }\n\n.medium-size {\n  font-size: 46px; }\n\n.right-no-pad button {\n  margin-left: 5px; }\n\n.hungryFooter {\n  background-color: white; }\n\nul {\n  padding-left: 1.4%; }\n\n.right-nav {\n  float: right !important; }\n\n.header {\n  padding-top: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hungry/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_global_settings_service_service__ = __webpack_require__("../../../../../src/app/shared/services/global-settings-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(hungryService, datePipe, route, location, router, globalSettingsService) {
        this.hungryService = hungryService;
        this.datePipe = datePipe;
        this.route = route;
        this.location = location;
        this.router = router;
        this.globalSettingsService = globalSettingsService;
        this.date = new Date();
        this.monthDate = new Date();
        this.weekDays = [];
        this.dailymenusMap = new Map();
        this.showLoadSpinner = false;
        this.weeklyTotalPrice = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currency = this.globalSettingsService.getCurrency();
        this.deadline = this.globalSettingsService.getDeadLine();
        this.notes = this.globalSettingsService.getNotes();
        this.sub = this.route.params.subscribe(function (params) {
            var dt = new Date(+params['year'], 1, 1); // (+) converts string 'year' na d 'month' to a number
            dt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setISOWeek"])(dt, +params['week']);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isValid"])(dt)) {
                dt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(dt, 1);
                console.log('router dt:', dt);
                _this.date = dt;
                _this.monthDate = _this.date;
                _this.weekDaysCal(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfWeek"])(_this.date, { weekStartsOn: 1 }));
                _this.getCurrentWeeklyMenu(_this.buildweekYear(_this.date));
            }
            else {
                console.warn('invalid router date');
            }
        });
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isToday"])(this.date)) {
            this.showLoadSpinner = true;
            this.monthDate = this.date;
            this.weekDaysCal(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfWeek"])(this.date, { weekStartsOn: 1 }));
            this.hungryService.menusWeeklyGet().subscribe(function (dailymenus) {
                _this.showLoadSpinner = false;
                _this.dailymenus = dailymenus;
                _this.weekMenuMap();
            }, function (error) { return _this.showLoadSpinner = false; });
        }
    };
    HomeComponent.prototype.handleUserUpdated = function (dailyTPrice, day) {
        var menu = this.dailymenusMap.get(day);
        menu.totalPrice = dailyTPrice;
        this.dailymenusMap.set(day, menu);
    };
    HomeComponent.prototype.getTotalPrice = function () {
        var weekTotal = 0;
        this.dailymenusMap.forEach(function (menu) {
            if (menu.totalPrice != null) {
                weekTotal += menu.totalPrice;
            }
        });
        return weekTotal;
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    HomeComponent.prototype.getCurrentWeeklyMenu = function (weekYear) {
        var _this = this;
        this.showLoadSpinner = true;
        this.hungryService.menusWeeklyWeekGet(weekYear).subscribe(function (dailymenus) {
            _this.showLoadSpinner = false;
            _this.dailymenus = dailymenus;
            _this.weekMenuMap();
        }, function (error) { return _this.showLoadSpinner = false; });
    };
    HomeComponent.prototype.weekDaysCal = function (d) {
        this.weekDays = [];
        for (var i = 0; i < 5; i++) {
            var dtStr = this.datePipe.transform(d, 'yyyy-MM-dd');
            this.weekDays.push(dtStr);
            d = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(d, 1);
        }
    };
    HomeComponent.prototype.weekMenuMap = function () {
        this.dailymenusMap.clear();
        for (var i = 0; i < this.dailymenus.length; i++) {
            var dt = new Date(this.dailymenus[i].date);
            var dtStr = this.datePipe.transform(dt, 'yyyy-MM-dd');
            this.dailymenusMap.set(dtStr, this.dailymenus[i]);
        }
    };
    HomeComponent.prototype.getDailyMenusMap = function () {
        return this.dailymenusMap;
    };
    HomeComponent.prototype.getDailyMenu = function (d) {
        for (var _i = 0, _a = this.dailymenus; _i < _a.length; _i++) {
            var dailymenu = _a[_i];
            if (dailymenu.date === d) {
                return dailymenu;
            }
        }
    };
    HomeComponent.prototype.dailyMenuExists = function (dateStr) {
        return this.dailymenusMap.has(dateStr);
    };
    HomeComponent.prototype.previousWeek = function () {
        this.date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subWeeks"])(this.date, 1);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getISOWeek"])(this.date) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getISOWeek"])(new Date())) {
            this.router.navigate(['/hungry']);
        }
        else {
            this.navWeekYear(this.date);
        }
    };
    HomeComponent.prototype.currentWeek = function () {
        this.router.navigate(['/hungry']);
    };
    HomeComponent.prototype.nextWeek = function () {
        this.date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addWeeks"])(this.date, 1);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getISOWeek"])(this.date) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getISOWeek"])(new Date())) {
            this.router.navigate(['/hungry']);
        }
        else {
            this.navWeekYear(this.date);
        }
    };
    HomeComponent.prototype.navWeekYear = function (dt) {
        this.router.navigate(['/hungry/', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getYear"])(dt), this.pad(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getISOWeek"])(dt), 2)]);
    };
    HomeComponent.prototype.buildweekYear = function (dt) {
        return this.pad(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getISOWeek"])(dt), 2) + '-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getYear"])(dt);
    };
    HomeComponent.prototype.pad = function (num, size) {
        var s = num + '';
        while (s.length < size) {
            s = '0' + s;
        }
        return s;
    };
    HomeComponent.prototype.onMonthNavView = function (dt) {
        this.monthDate = dt;
        if (dt.getMonth() === new Date().getMonth()) {
            this.router.navigate(['/hungry']);
        }
        else {
            this.router.navigate(['/hungry/', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getYear"])(dt), this.pad(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getISOWeek"])(dt), 2)]);
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-hungry-home',
        template: __webpack_require__("../../../../../src/app/hungry/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hungry/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_4__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__remote__).HungryApi) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_global_settings_service_service__["a" /* GlobalSettingsService */]) === "function" && _f || Object])
], HomeComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/hungry/hungry-route.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HungryRouteGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HungryRouteGuard = (function () {
    function HungryRouteGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    HungryRouteGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.isLogged()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
        }
    };
    return HungryRouteGuard;
}());
HungryRouteGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], HungryRouteGuard);

var _a, _b;
//# sourceMappingURL=hungry-route.guard.js.map

/***/ }),

/***/ "../../../../../src/app/hungry/hungry.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/hungry/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_history_component__ = __webpack_require__("../../../../../src/app/hungry/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hungry_routing__ = __webpack_require__("../../../../../src/app/hungry/hungry.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_daily_menu_daily_menu_component__ = __webpack_require__("../../../../../src/app/hungry/home/daily-menu/daily-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__history_daily_order_history_daily_order_history_component__ = __webpack_require__("../../../../../src/app/hungry/history/daily-order-history/daily-order-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hungry_route_guard__ = __webpack_require__("../../../../../src/app/hungry/hungry-route.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_hungry_nav_hungry_nav_component__ = __webpack_require__("../../../../../src/app/hungry/shared/hungry-nav/hungry-nav.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HungryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var HungryModule = (function () {
    function HungryModule() {
    }
    return HungryModule;
}());
HungryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__hungry_routing__["a" /* HungryRouting */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_3__history_history_component__["a" /* HistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_daily_menu_daily_menu_component__["a" /* DailyMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_8__history_daily_order_history_daily_order_history_component__["a" /* DailyOrderHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_daily_menu_daily_menu_component__["b" /* DailyMenuOrderDialog */],
            __WEBPACK_IMPORTED_MODULE_7__home_daily_menu_daily_menu_component__["c" /* DailyOrderCancelDialog */],
            __WEBPACK_IMPORTED_MODULE_10__shared_hungry_nav_hungry_nav_component__["a" /* HungryNavComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__remote__["HungryApi"], __WEBPACK_IMPORTED_MODULE_9__hungry_route_guard__["a" /* HungryRouteGuard */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__home_daily_menu_daily_menu_component__["b" /* DailyMenuOrderDialog */],
            __WEBPACK_IMPORTED_MODULE_7__home_daily_menu_daily_menu_component__["c" /* DailyOrderCancelDialog */]
        ]
    })
], HungryModule);

//# sourceMappingURL=hungry.module.js.map

/***/ }),

/***/ "../../../../../src/app/hungry/hungry.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/hungry/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_history_component__ = __webpack_require__("../../../../../src/app/hungry/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_logged_logged_component__ = __webpack_require__("../../../../../src/app/shared/logged/logged.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hungry_route_guard__ = __webpack_require__("../../../../../src/app/hungry/hungry-route.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HungryRouting; });





var hungryRoutes = [
    { path: 'hungry',
        component: __WEBPACK_IMPORTED_MODULE_3__shared_logged_logged_component__["a" /* LoggedComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__hungry_route_guard__["a" /* HungryRouteGuard */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
            { path: 'history', component: __WEBPACK_IMPORTED_MODULE_2__history_history_component__["a" /* HistoryComponent */] },
            { path: 'history/:year/:month', component: __WEBPACK_IMPORTED_MODULE_2__history_history_component__["a" /* HistoryComponent */] },
            { path: ':year/:week', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
        ]
    }
];
var HungryRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(hungryRoutes);
//# sourceMappingURL=hungry.routing.js.map

/***/ }),

/***/ "../../../../../src/app/hungry/shared/hungry-nav/hungry-nav.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n    <button md-raised-button color=\"accent\" routerLink=\"/hungry\"  [routerLinkActiveOptions]=\"{ exact: true }\" routerLinkActive  #rlaHungry=\"routerLinkActive\" [disabled]='rlaHungry.isActive' routerLinkActive=\"active\"><i class=\"material-icons\">home</i></button>\r\n\r\n    <button md-raised-button color=\"accent\" routerLink=\"/hungry/history\" routerLinkActive  #rlaHungryHistory=\"routerLinkActive\" [disabled]='rlaHungryHistory.isActive' routerLinkActive=\"active\">Order History</button>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/hungry/shared/hungry-nav/hungry-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hungry/shared/hungry-nav/hungry-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HungryNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HungryNavComponent = (function () {
    function HungryNavComponent() {
    }
    HungryNavComponent.prototype.ngOnInit = function () {
    };
    return HungryNavComponent;
}());
HungryNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-hungry-nav',
        template: __webpack_require__("../../../../../src/app/hungry/shared/hungry-nav/hungry-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hungry/shared/hungry-nav/hungry-nav.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HungryNavComponent);

//# sourceMappingURL=hungry-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  profile works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/remote/api/AdminApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__("../../../../../src/app/remote/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__("../../../../../src/app/remote/configuration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminApi; });
/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/* tslint:disable:no-unused-variable member-ordering */
var AdminApi = (function () {
    function AdminApi(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'http://localhost:8082/api';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    /**
     *
     * get global settings
     */
    AdminApi.prototype.globalsettingsGet = function (extraHttpRequestParams) {
        return this.globalsettingsGetWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     * set global settings
     * @param settings The global settings to be updated
     */
    AdminApi.prototype.globalsettingsPut = function (settings, extraHttpRequestParams) {
        return this.globalsettingsPutWithHttpInfo(settings, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return response;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Get users
     *
     * @param page Request pagination page
     * @param size Request pagination size / num of users
     * @param orderBy Request orderBy filter
     * @param orderDirection Request orderBy filter
     */
    AdminApi.prototype.usersGet = function (page, size, orderBy, orderDirection, extraHttpRequestParams) {
        return this.usersGetWithHttpInfo(page, size, orderBy, orderDirection, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     * Change approve status of user
     * @param id
     * @param approve Approve or disapprove
     * @param force Force disapprove user
     */
    AdminApi.prototype.usersIdApprovePut = function (id, approve, force, extraHttpRequestParams) {
        return this.usersIdApprovePutWithHttpInfo(id, approve, force, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Deletes an existing user
     *
     * @param id
     * @param force
     */
    AdminApi.prototype.usersIdDelete = function (id, force, extraHttpRequestParams) {
        return this.usersIdDeleteWithHttpInfo(id, force, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     * initiate pass reset
     * @param id
     */
    AdminApi.prototype.usersIdForgotpwdPost = function (id, extraHttpRequestParams) {
        return this.usersIdForgotpwdPostWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Get user by id
     *
     * @param id
     */
    AdminApi.prototype.usersIdGet = function (id, extraHttpRequestParams) {
        return this.usersIdGetWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
    * deletes profile picture.
    *
    * @param id user id
    */
    AdminApi.prototype.usersIdPictureDelete = function (id, extraHttpRequestParams) {
        return this.usersIdPictureDeleteWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Uploads a file.
     *
     * @param id user id
     * @param file The file to upload
     */
    AdminApi.prototype.usersIdPicturePost = function (id, file, extraHttpRequestParams) {
        return this.usersIdPicturePostWithHttpInfo(id, file, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     * Get profile picture.
     * @param token auth token
     * @param id user id
     */
    AdminApi.prototype.usersIdPictureTokenGet = function (token, id, extraHttpRequestParams) {
        return this.usersIdPictureTokenGetWithHttpInfo(token, id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Updates an existing user
     * Admin can update user data EXCEPT password. Can only initiate a pass reset.
     * @param id
     * @param user The user data to be updated
     */
    AdminApi.prototype.usersIdPut = function (id, user, extraHttpRequestParams) {
        return this.usersIdPutWithHttpInfo(id, user, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     * creates a new user
     * @param user The user to save
     */
    AdminApi.prototype.usersPost = function (user, extraHttpRequestParams) {
        return this.usersPostWithHttpInfo(user, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     * get global settings
     */
    AdminApi.prototype.globalsettingsGetWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + "/globalsettings";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     * set global settings
     * @param settings The global settings to be updated
     */
    AdminApi.prototype.globalsettingsPutWithHttpInfo = function (settings, extraHttpRequestParams) {
        var path = this.basePath + "/globalsettings";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'settings' is not null or undefined
        if (settings === null || settings === undefined) {
            throw new Error('Required parameter settings was null or undefined when calling globalsettingsPut.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Put,
            headers: headers,
            body: settings == null ? '' : JSON.stringify(settings),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get users
     *
     * @param page Request pagination page
     * @param size Request pagination size / num of users
     * @param orderBy Request orderBy filter
     * @param orderDirection Request orderBy filter
     */
    AdminApi.prototype.usersGetWithHttpInfo = function (page, size, orderBy, orderDirection, extraHttpRequestParams) {
        var path = this.basePath + "/users";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (page !== undefined) {
            queryParameters.set('page', page);
        }
        if (size !== undefined) {
            queryParameters.set('size', size);
        }
        if (orderBy !== undefined) {
            queryParameters.set('orderBy', orderBy);
        }
        if (orderDirection !== undefined) {
            queryParameters.set('orderDirection', orderDirection);
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     * Change approve status of user
     * @param id
     * @param approve Approve or disapprove
     * @param force Force disapprove user
     */
    AdminApi.prototype.usersIdApprovePutWithHttpInfo = function (id, approve, force, extraHttpRequestParams) {
        var path = this.basePath + ("/users/" + id + "/approve");
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling usersIdApprovePut.');
        }
        // verify required parameter 'approve' is not null or undefined
        if (approve === null || approve === undefined) {
            throw new Error('Required parameter approve was null or undefined when calling usersIdApprovePut.');
        }
        if (approve !== undefined) {
            queryParameters.set('approve', approve);
        }
        if (force !== undefined) {
            queryParameters.set('force', force);
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Put,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Deletes an existing user
     *
     * @param id
     */
    AdminApi.prototype.usersIdDeleteWithHttpInfo = function (id, force, extraHttpRequestParams) {
        var path = this.basePath + ("/users/" + id);
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling usersIdDelete.');
        }
        if (force !== undefined) {
            queryParameters.set('force', force);
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     * initiate pass reset
     * @param id
     */
    AdminApi.prototype.usersIdForgotpwdPostWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + ("/users/" + id + "/forgotpwd");
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling usersIdForgotpwdPost.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get user by id
     *
     * @param id
     */
    AdminApi.prototype.usersIdGetWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + ("/users/" + id);
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling usersIdGet.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
         * deletes profile picture.
         *
         * @param id user id
         */
    AdminApi.prototype.usersIdPictureDeleteWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + ("/users/" + id + "/picture");
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling usersIdPictureDelete.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Uploads a file.
     *
     * @param id user id
     * @param file The file to upload
     */
    AdminApi.prototype.usersIdPicturePostWithHttpInfo = function (id, file, extraHttpRequestParams) {
        var path = this.basePath + ("/users/" + id + "/picture");
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        var formParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling usersIdPicturePost.');
        }
        // to determine the Content-Type header
        var consumes = [
            'multipart/form-data'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/x-www-form-urlencoded');
        if (file !== undefined) {
            formParams.set('file', file);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: formParams.toString(),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     * Get profile picture.
     * @param token auth token
     * @param id user id
     */
    AdminApi.prototype.usersIdPictureTokenGetWithHttpInfo = function (token, id, extraHttpRequestParams) {
        var path = this.basePath + ("/users/" + id + "/picture/token");
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling usersIdPictureTokenGet.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling usersIdPictureTokenGet.');
        }
        if (token !== undefined) {
            queryParameters.set('token', token);
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'image/jpeg'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Updates an existing user
     * Admin can update user data EXCEPT password. Can only initiate a pass reset.
     * @param id
     * @param user The user data to be updated
     */
    AdminApi.prototype.usersIdPutWithHttpInfo = function (id, user, extraHttpRequestParams) {
        var path = this.basePath + ("/users/" + id);
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling usersIdPut.');
        }
        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling usersIdPut.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Put,
            headers: headers,
            body: user == null ? '' : JSON.stringify(user),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     * creates a new user
     * @param user The user to save
     */
    AdminApi.prototype.usersPostWithHttpInfo = function (user, extraHttpRequestParams) {
        var path = this.basePath + "/users";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: user == null ? '' : JSON.stringify(user),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return AdminApi;
}());
AdminApi = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, String, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]) === "function" && _b || Object])
], AdminApi);

var _a, _b;
//# sourceMappingURL=AdminApi.js.map

/***/ }),

/***/ "../../../../../src/app/remote/api/AuthApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__("../../../../../src/app/remote/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__("../../../../../src/app/remote/configuration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthApi; });
/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/* tslint:disable:no-unused-variable member-ordering */
var AuthApi = (function () {
    function AuthApi(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'http://localhost:8082/api';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    /**
     *
     * Allow users to reset password
     * @param body token/password
     */
    AuthApi.prototype.authChangepwdPut = function (body, extraHttpRequestParams) {
        return this.authChangepwdPutWithHttpInfo(body, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     * Remind password
     * @param email The email
     */
    AuthApi.prototype.authForgotpwdPost = function (email, extraHttpRequestParams) {
        return this.authForgotpwdPostWithHttpInfo(email, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     * Allow users to log in, and to receive a Token
     * @param body The email/password
     */
    AuthApi.prototype.authLoginPost = function (body, extraHttpRequestParams) {
        return this.authLoginPostWithHttpInfo(body, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     * Allow users to register
     * @param body The email/password
     */
    AuthApi.prototype.authRegisterPost = function (body, extraHttpRequestParams) {
        return this.authRegisterPostWithHttpInfo(body, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 200) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     * Allow users to reset password
     * @param body token/password
     */
    AuthApi.prototype.authChangepwdPutWithHttpInfo = function (body, extraHttpRequestParams) {
        var path = this.basePath + "/auth/changepwd";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling authChangepwdPut.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     * Remind password
     * @param email The email
     */
    AuthApi.prototype.authForgotpwdPostWithHttpInfo = function (email, extraHttpRequestParams) {
        var path = this.basePath + "/auth/forgotpwd";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'email' is not null or undefined
        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling authForgotpwdPost.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: email == null ? '' : email,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     * Allow users to log in, and to receive a Token
     * @param body The email/password
     */
    AuthApi.prototype.authLoginPostWithHttpInfo = function (body, extraHttpRequestParams) {
        var path = this.basePath + "/auth/login";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling authLoginPost.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     * Allow users to register
     * @param body The email/password
     */
    AuthApi.prototype.authRegisterPostWithHttpInfo = function (body, extraHttpRequestParams) {
        var path = this.basePath + "/auth/register";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling authRegisterPost.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return AuthApi;
}());
AuthApi = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, String, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]) === "function" && _b || Object])
], AuthApi);

var _a, _b;
//# sourceMappingURL=AuthApi.js.map

/***/ }),

/***/ "../../../../../src/app/remote/api/ChefApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__("../../../../../src/app/remote/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__("../../../../../src/app/remote/configuration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefApi; });
/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/* tslint:disable:no-unused-variable member-ordering */
var ChefApi = (function () {
    function ChefApi(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'http://localhost:8082/api';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    /**
     * Put Food/Foods in a dailyMenu
     *
     * @param id
     * @param dailyMenu The daily menu to be updated
     */
    ChefApi.prototype.dailyMenusIdPut = function (id, dailyMenu, extraHttpRequestParams) {
        return this.dailyMenusIdPutWithHttpInfo(id, dailyMenu, extraHttpRequestParams)
            .map(function (response) {
            return response;
            /*if (response.status === 204 || response.status === 200) {
                return response.json();
            } else {
                return response.json();
            }*/
        });
    };
    /**
     * Gets all dailyMenus
     * Return a list of all dailyMenus
     */
    ChefApi.prototype.dailyMenusMonthlyGet = function (extraHttpRequestParams) {
        return this.dailyMenusMonthlyGetWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Get dailyMenus by month
     *
     * @param monthyear ex. 02-2017
     */
    ChefApi.prototype.dailyMenusMonthlyMonthyearGet = function (monthyear, extraHttpRequestParams) {
        return this.dailyMenusMonthlyMonthyearGetWithHttpInfo(monthyear, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * New daily menu
     *
     * @param newDailyMenu A new daily menu
     */
    ChefApi.prototype.dailyMenusPost = function (newDailyMenu, extraHttpRequestParams) {
        return this.dailyMenusPostWithHttpInfo(newDailyMenu, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Get food by name
     *
     * @param name
     */
    ChefApi.prototype.foodsFindByNameNameGet = function (name, extraHttpRequestParams) {
        return this.foodsFindByNameNameGetWithHttpInfo(name, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Deletes an existing food
     * Chef can update food name, type, description or price
     * @param foodId
     * @param archive
     */
    ChefApi.prototype.foodsFoodIdDelete = function (foodId, archive, extraHttpRequestParams) {
        return this.foodsFoodIdDeleteWithHttpInfo(foodId, archive, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Get food by id, optionally check if editable
     *
     * @param foodId
     * @param editable
     */
    ChefApi.prototype.foodsFoodIdGet = function (foodId, editable, extraHttpRequestParams) {
        return this.foodsFoodIdGetWithHttpInfo(foodId, editable, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Updates an existing food
     * Chef can update food name, type, description or price
     * @param foodId
     * @param food The food to be updated
     * @param clone
     */
    ChefApi.prototype.foodsFoodIdPut = function (foodId, food, clone, extraHttpRequestParams) {
        return this.foodsFoodIdPutWithHttpInfo(foodId, food, clone, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Gets all foods, optionally return stats per food
     * Return a list of all foods
     * @param stats
     * @param page Request pagination page
     * @param size Request pagination size / num of foods
     * @param foodType Request foodType filter
     * @param archived Request archived filter
     * @param orderBy Request orderBy filter
     * @param foods_version Request foods_version
     * @param orderDirection Request order direction filter
     */
    ChefApi.prototype.foodsGet = function (stats, page, size, foodType, archived, orderBy, foods_version, orderDirection, extraHttpRequestParams) {
        return this.foodsGetWithHttpInfo(stats, page, size, foodType, archived, orderBy, foods_version, orderDirection, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else if (response.status === 304) {
                var foodsPage = void 0;
                foodsPage.foods_version = foods_version;
                return foodsPage;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * A new food
     * Create a food with basic data
     * @param foodDetails The food to save
     */
    ChefApi.prototype.foodsPost = function (foodDetails, extraHttpRequestParams) {
        return this.foodsPostWithHttpInfo(foodDetails, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Get daily orders summary
     *
     * @param day
     */
    ChefApi.prototype.ordersDailyDayGet = function (day, extraHttpRequestParams) {
        return this.ordersDailyDayGetWithHttpInfo(day, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Get a summary of orders by month
     *
     */
    ChefApi.prototype.ordersMonthlyGet = function (extraHttpRequestParams) {
        return this.ordersMonthlyGetWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Get a summary of orders by month
     *
     * @param monthyear ex 02-2017
     */
    ChefApi.prototype.ordersMonthlyMonthyearGet = function (monthyear, extraHttpRequestParams) {
        return this.ordersMonthlyMonthyearGetWithHttpInfo(monthyear, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Put Food/Foods in a dailyMenu
     *
     * @param id
     * @param dailyMenu The daily menu to be updated
     */
    ChefApi.prototype.dailyMenusIdPutWithHttpInfo = function (id, dailyMenu, extraHttpRequestParams) {
        var path = this.basePath + ("/dailyMenus/" + id);
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling dailyMenusIdPut.');
        }
        // verify required parameter 'dailyMenu' is not null or undefined
        if (dailyMenu === null || dailyMenu === undefined) {
            throw new Error('Required parameter dailyMenu was null or undefined when calling dailyMenusIdPut.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Put,
            headers: headers,
            body: dailyMenu == null ? '' : JSON.stringify(dailyMenu),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Gets all dailyMenus
     * Return a list of all dailyMenus
     */
    ChefApi.prototype.dailyMenusMonthlyGetWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + "/dailyMenus/monthly";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get dailyMenus by month
     *
     * @param monthyear ex. 02-2017
     */
    ChefApi.prototype.dailyMenusMonthlyMonthyearGetWithHttpInfo = function (monthyear, extraHttpRequestParams) {
        var path = this.basePath + ("/dailyMenus/monthly/" + monthyear);
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'monthyear' is not null or undefined
        if (monthyear === null || monthyear === undefined) {
            throw new Error('Required parameter monthyear was null or undefined when calling dailyMenusMonthlyMonthyearGet.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * New daily menu
     *
     * @param newDailyMenu A new daily menu
     */
    ChefApi.prototype.dailyMenusPostWithHttpInfo = function (newDailyMenu, extraHttpRequestParams) {
        var path = this.basePath + "/dailyMenus";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'newDailyMenu' is not null or undefined
        if (newDailyMenu === null || newDailyMenu === undefined) {
            throw new Error('Required parameter newDailyMenu was null or undefined when calling dailyMenusPost.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: newDailyMenu == null ? '' : JSON.stringify(newDailyMenu),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get food by name
     *
     * @param name
     */
    ChefApi.prototype.foodsFindByNameNameGetWithHttpInfo = function (name, extraHttpRequestParams) {
        var path = this.basePath + ("/foods/findByName/" + name);
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling foodsFindByNameNameGet.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Deletes an existing food
     * Chef can update food name, type, description or price
     * @param foodId
     * @param archive
     */
    ChefApi.prototype.foodsFoodIdDeleteWithHttpInfo = function (foodId, archive, extraHttpRequestParams) {
        var path = this.basePath + ("/foods/" + foodId);
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'foodId' is not null or undefined
        if (foodId === null || foodId === undefined) {
            throw new Error('Required parameter foodId was null or undefined when calling foodsFoodIdDelete.');
        }
        if (archive !== undefined) {
            queryParameters.set('archive', archive);
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get food by id, optionally check if editable
     *
     * @param foodId
     * @param editable
     */
    ChefApi.prototype.foodsFoodIdGetWithHttpInfo = function (foodId, editable, extraHttpRequestParams) {
        var path = this.basePath + ("/foods/" + foodId);
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'foodId' is not null or undefined
        if (foodId === null || foodId === undefined) {
            throw new Error('Required parameter foodId was null or undefined when calling foodsFoodIdGet.');
        }
        if (editable !== undefined) {
            queryParameters.set('editable', editable);
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Updates an existing food
     * Chef can update food name, type, description or price
     * @param foodId
     * @param food The food to be updated
     * @param clone
     */
    ChefApi.prototype.foodsFoodIdPutWithHttpInfo = function (foodId, food, clone, extraHttpRequestParams) {
        var path = this.basePath + ("/foods/" + foodId);
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'foodId' is not null or undefined
        if (foodId === null || foodId === undefined) {
            throw new Error('Required parameter foodId was null or undefined when calling foodsFoodIdPut.');
        }
        // verify required parameter 'food' is not null or undefined
        if (food === null || food === undefined) {
            throw new Error('Required parameter food was null or undefined when calling foodsFoodIdPut.');
        }
        if (clone !== undefined) {
            queryParameters.set('clone', clone);
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Put,
            headers: headers,
            body: food == null ? '' : JSON.stringify(food),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Gets all foods, optionally return stats per food
     * Return a list of all foods
     * @param stats
     * @param page Request pagination page
     * @param size Request pagination size / num of foods
     * @param foodType Request foodType filter
     * @param archived Request archived filter
     * @param orderBy Request orderBy filter
     */
    ChefApi.prototype.foodsGetWithHttpInfo = function (stats, page, size, foodType, archived, orderBy, foods_version, orderDirection, extraHttpRequestParams) {
        var path = this.basePath + "/foods";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (stats !== undefined) {
            queryParameters.set('stats', stats);
        }
        if (page !== undefined) {
            queryParameters.set('page', page);
        }
        if (size !== undefined) {
            queryParameters.set('size', size);
        }
        if (foodType !== undefined) {
            queryParameters.set('foodType', foodType);
        }
        if (archived !== undefined) {
            queryParameters.set('archived', archived);
        }
        if (orderBy !== undefined) {
            queryParameters.set('orderBy', orderBy);
        }
        if (foods_version !== undefined) {
            queryParameters.set('foods_version', foods_version);
        }
        if (orderDirection !== undefined) {
            queryParameters.set('orderDirection', orderDirection);
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * A new food
     * Create a food with basic data
     * @param foodDetails The food to save
     */
    ChefApi.prototype.foodsPostWithHttpInfo = function (foodDetails, extraHttpRequestParams) {
        var path = this.basePath + "/foods";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: foodDetails == null ? '' : JSON.stringify(foodDetails),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get daily orders summary
     *
     * @param day
     */
    ChefApi.prototype.ordersDailyDayGetWithHttpInfo = function (day, extraHttpRequestParams) {
        var path = this.basePath + ("/orders/daily/" + day);
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'day' is not null or undefined
        if (day === null || day === undefined) {
            throw new Error('Required parameter day was null or undefined when calling ordersDailyDayGet.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get a summary of orders by month
     *
     */
    ChefApi.prototype.ordersMonthlyGetWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + "/orders/monthly";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get a summary of orders by month
     *
     * @param monthyear ex 02-2017
     */
    ChefApi.prototype.ordersMonthlyMonthyearGetWithHttpInfo = function (monthyear, extraHttpRequestParams) {
        var path = this.basePath + ("/orders/monthly/" + monthyear);
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'monthyear' is not null or undefined
        if (monthyear === null || monthyear === undefined) {
            throw new Error('Required parameter monthyear was null or undefined when calling ordersMonthlyMonthyearGet.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return ChefApi;
}());
ChefApi = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, String, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]) === "function" && _b || Object])
], ChefApi);

var _a, _b;
//# sourceMappingURL=ChefApi.js.map

/***/ }),

/***/ "../../../../../src/app/remote/api/DefaultApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__("../../../../../src/app/remote/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__("../../../../../src/app/remote/configuration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultApi; });
/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/* tslint:disable:no-unused-variable member-ordering */
var DefaultApi = (function () {
    function DefaultApi(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'http://localhost:8082/api';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    /**
     * Uploads a file.
     *
     * @param upfile The file to upload
     * @param userid Description of file contents.
     */
    DefaultApi.prototype.settingsPicturePost = function (upfile, userid, extraHttpRequestParams) {
        return this.settingsPicturePostWithHttpInfo(upfile, userid, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Uploads a file.
     *
     * @param upfile The file to upload
     * @param userid Description of file contents.
     */
    DefaultApi.prototype.settingsPicturePostWithHttpInfo = function (upfile, userid, extraHttpRequestParams) {
        var path = this.basePath + "/settings/picture";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        var formParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        // to determine the Content-Type header
        var consumes = [
            'multipart/form-data'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/x-www-form-urlencoded');
        if (upfile !== undefined) {
            formParams.set('upfile', upfile);
        }
        if (userid !== undefined) {
            formParams.set('userid', userid);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: formParams.toString(),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return DefaultApi;
}());
DefaultApi = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, String, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]) === "function" && _b || Object])
], DefaultApi);

var _a, _b;
//# sourceMappingURL=DefaultApi.js.map

/***/ }),

/***/ "../../../../../src/app/remote/api/HungryApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__("../../../../../src/app/remote/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__("../../../../../src/app/remote/configuration.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HungryApi; });
/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/* tslint:disable:no-unused-variable member-ordering */
var HungryApi = (function () {
    function HungryApi(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'http://localhost:8082/api';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    /**
     * Gets monthly menus.
     * Return a list containing all menus of the month.
     */
    HungryApi.prototype.menusMonthlyGet = function (extraHttpRequestParams) {
        return this.menusMonthlyGetWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Gets monthly menus of the specified month.
     * Returns a list containing all menus of the month.
     * @param monthyear ex. 12-2016
     */
    HungryApi.prototype.menusMonthlyMonthyearGet = function (monthyear, extraHttpRequestParams) {
        return this.menusMonthlyMonthyearGetWithHttpInfo(monthyear, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Gets weekly menus
     * Returns a list containing all menus of the week.
     */
    HungryApi.prototype.menusWeeklyGet = function (extraHttpRequestParams) {
        return this.menusWeeklyGetWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Gets weekly menu of the specified week
     * Returns a list containing all menus of the week.
     * @param week ex. 02-2017
     */
    HungryApi.prototype.menusWeeklyWeekGet = function (week, extraHttpRequestParams) {
        return this.menusWeeklyWeekGetWithHttpInfo(week, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
       * Deletes specified order
       * Deletes the order
       * @param id
       * @param dailyMenuDetails dailymenu details id, version, date
       */
    HungryApi.prototype.ordersIdDelete = function (id, dailyMenuDetails, extraHttpRequestParams) {
        return this.ordersIdDeleteWithHttpInfo(id, dailyMenuDetails, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 200) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
       * Modifies order for the specified day
       * Modify the order
       * @param id
       * @param dailyMenuId
       * @param dailyMenuVersion
       * @param dailyMenuDate
       */
    HungryApi.prototype.ordersIdGet = function (id, dailyMenuId, dailyMenuVersion, dailyMenuDate, extraHttpRequestParams) {
        return this.ordersIdGetWithHttpInfo(id, dailyMenuId, dailyMenuVersion, dailyMenuDate, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Modifies order for the specified day
     * Modify the order
     * @param id
     * @param updateOrderItems The order items to modify
     */
    HungryApi.prototype.ordersIdPut = function (id, updateOrderItems, extraHttpRequestParams) {
        return this.ordersIdPutWithHttpInfo(id, updateOrderItems, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Place a new order
     * A new order for the specified daily menu
     * @param order The order to place
     */
    HungryApi.prototype.ordersPost = function (order, extraHttpRequestParams) {
        return this.ordersPostWithHttpInfo(order, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     * get user settings
     */
    HungryApi.prototype.settingsGet = function (extraHttpRequestParams) {
        return this.settingsGetWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * deletes profile picture.
     *
     */
    HungryApi.prototype.settingsPictureDelete = function (extraHttpRequestParams) {
        return this.settingsPictureDeleteWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Uploads profile pic.
     *
     * @param file The file to upload
     */
    HungryApi.prototype.settingsPicturePost = function (file, extraHttpRequestParams) {
        return this.settingsPicturePostWithHttpInfo(file, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     * Get profile picture.
     * @param token auth token
     */
    HungryApi.prototype.settingsPictureTokenGet = function (token, extraHttpRequestParams) {
        return this.settingsPictureTokenGetWithHttpInfo(token, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     * set user data/settings
     * @param body User data
     */
    HungryApi.prototype.settingsPut = function (body, extraHttpRequestParams) {
        return this.settingsPutWithHttpInfo(body, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * Gets monthly menus.
     * Return a list containing all menus of the month.
     */
    HungryApi.prototype.menusMonthlyGetWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + "/menus/monthly";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Gets monthly menus of the specified month.
     * Returns a list containing all menus of the month.
     * @param monthyear ex. 12-2016
     */
    HungryApi.prototype.menusMonthlyMonthyearGetWithHttpInfo = function (monthyear, extraHttpRequestParams) {
        var path = this.basePath + ("/menus/monthly/" + monthyear);
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'monthyear' is not null or undefined
        if (monthyear === null || monthyear === undefined) {
            throw new Error('Required parameter monthyear was null or undefined when calling menusMonthlyMonthyearGet.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Gets weekly menus
     * Returns a list containing all menus of the week.
     */
    HungryApi.prototype.menusWeeklyGetWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + "/menus/weekly";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Gets weekly menu of the specified week
     * Returns a list containing all menus of the week.
     * @param week ex. 02-2017
     */
    HungryApi.prototype.menusWeeklyWeekGetWithHttpInfo = function (week, extraHttpRequestParams) {
        var path = this.basePath + ("/menus/weekly/" + week);
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'week' is not null or undefined
        if (week === null || week === undefined) {
            throw new Error('Required parameter week was null or undefined when calling menusWeeklyWeekGet.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
      * Deletes specified order
      * Deletes the order
      * @param id
      * @param dailyMenuDetails dailymenu details id, version, date
      */
    HungryApi.prototype.ordersIdDeleteWithHttpInfo = function (id, dailyMenuDetails, extraHttpRequestParams) {
        var path = this.basePath + ("/orders/" + id);
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ordersIdDelete.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Delete,
            headers: headers,
            body: dailyMenuDetails == null ? '' : JSON.stringify(dailyMenuDetails),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
       * Modifies order for the specified day
       * Modify the order
       * @param id
       * @param dailyMenuId
       * @param dailyMenuVersion
       * @param dailyMenuDate
       */
    HungryApi.prototype.ordersIdGetWithHttpInfo = function (id, dailyMenuId, dailyMenuVersion, dailyMenuDate, extraHttpRequestParams) {
        var path = this.basePath + ("/orders/" + id);
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ordersIdGet.');
        }
        // verify required parameter 'dailyMenuId' is not null or undefined
        if (dailyMenuId === null || dailyMenuId === undefined) {
            throw new Error('Required parameter dailyMenuId was null or undefined when calling ordersIdGet.');
        }
        // verify required parameter 'dailyMenuVersion' is not null or undefined
        if (dailyMenuVersion === null || dailyMenuVersion === undefined) {
            throw new Error('Required parameter dailyMenuVersion was null or undefined when calling ordersIdGet.');
        }
        // verify required parameter 'dailyMenuDate' is not null or undefined
        if (dailyMenuDate === null || dailyMenuDate === undefined) {
            throw new Error('Required parameter dailyMenuDate was null or undefined when calling ordersIdGet.');
        }
        if (dailyMenuId !== undefined) {
            queryParameters.set('dailyMenuId', dailyMenuId);
        }
        if (dailyMenuVersion !== undefined) {
            queryParameters.set('dailyMenuVersion', dailyMenuVersion);
        }
        if (dailyMenuDate !== undefined) {
            queryParameters.set('dailyMenuDate', dailyMenuDate);
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
       * Modifies order for the specified day
       * Modify the order
       * @param id
       * @param updateOrderItems The order items to modify
       */
    HungryApi.prototype.ordersIdPutWithHttpInfo = function (id, updateOrderItems, extraHttpRequestParams) {
        var path = this.basePath + ("/orders/" + id);
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ordersIdPut.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Put,
            headers: headers,
            body: updateOrderItems == null ? '' : JSON.stringify(updateOrderItems),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
       * Place a new order
       * A new order for the specified daily menu
       * @param order The order to place
       */
    HungryApi.prototype.ordersPostWithHttpInfo = function (order, extraHttpRequestParams) {
        var path = this.basePath + "/orders";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: order == null ? '' : JSON.stringify(order),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
         *
         * get user settings
         */
    HungryApi.prototype.settingsGetWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + "/settings";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
         * deletes profile picture.
         *
         */
    HungryApi.prototype.settingsPictureDeleteWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + "/settings/picture";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Uploads profile pic.
     *
     * @param file The file to upload
     */
    HungryApi.prototype.settingsPicturePostWithHttpInfo = function (file, extraHttpRequestParams) {
        var path = this.basePath + "/settings/picture";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        var formParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        // to determine the Content-Type header
        var consumes = [
            'multipart/form-data'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/x-www-form-urlencoded');
        if (file !== undefined) {
            formParams.set('file', file);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: formParams.toString(),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     * Get profile picture.
     * @param token auth token
     */
    HungryApi.prototype.settingsPictureTokenGetWithHttpInfo = function (token, extraHttpRequestParams) {
        var path = this.basePath + "/settings/picture/token";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling settingsPictureTokenGet.');
        }
        if (token !== undefined) {
            queryParameters.set('token', token);
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'image/jpeg'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     * set user data/settings
     * @param body User data
     */
    HungryApi.prototype.settingsPutWithHttpInfo = function (body, extraHttpRequestParams) {
        var path = this.basePath + "/settings";
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling settingsPut.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return HungryApi;
}());
HungryApi = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, String, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]) === "function" && _b || Object])
], HungryApi);

var _a, _b;
//# sourceMappingURL=HungryApi.js.map

/***/ }),

/***/ "../../../../../src/app/remote/api/api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AdminApi__ = __webpack_require__("../../../../../src/app/remote/api/AdminApi.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__AdminApi__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AuthApi__ = __webpack_require__("../../../../../src/app/remote/api/AuthApi.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__AuthApi__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ChefApi__ = __webpack_require__("../../../../../src/app/remote/api/ChefApi.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__ChefApi__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DefaultApi__ = __webpack_require__("../../../../../src/app/remote/api/DefaultApi.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__DefaultApi__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HungryApi__ = __webpack_require__("../../../../../src/app/remote/api/HungryApi.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__HungryApi__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIS; });










var APIS = [__WEBPACK_IMPORTED_MODULE_0__AdminApi__["a" /* AdminApi */], __WEBPACK_IMPORTED_MODULE_1__AuthApi__["a" /* AuthApi */], __WEBPACK_IMPORTED_MODULE_2__ChefApi__["a" /* ChefApi */], __WEBPACK_IMPORTED_MODULE_3__DefaultApi__["a" /* DefaultApi */], __WEBPACK_IMPORTED_MODULE_4__HungryApi__["a" /* HungryApi */],];
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "../../../../../src/app/remote/configuration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
var Configuration = (function () {
    function Configuration() {
    }
    return Configuration;
}());

//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ "../../../../../src/app/remote/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__("../../../../../src/app/remote/api/api.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AdminApi", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AuthApi", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ChefApi", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DefaultApi", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HungryApi", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_models__ = __webpack_require__("../../../../../src/app/remote/model/models.ts");
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__model_models__) if(["APIS","AdminApi","AuthApi","ChefApi","DefaultApi","HungryApi","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__model_models__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variables__ = __webpack_require__("../../../../../src/app/remote/variables.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return __WEBPACK_IMPORTED_MODULE_2__variables__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return __WEBPACK_IMPORTED_MODULE_2__variables__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__("../../../../../src/app/remote/configuration.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return __WEBPACK_IMPORTED_MODULE_3__configuration__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/ConcurrentOrderDeletion.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 16/05/2017 12:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=ConcurrentOrderDeletion.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/DailyMenu.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 16/05/2017 12:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=DailyMenu.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/DailyMenuChef.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=DailyMenuChef.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/DailyMenuDetails.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 16/05/2017 12:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=DailyMenuDetails.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/DailyMenuEdit.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=DailyMenuEdit.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/DailyMenuOrder.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=DailyMenuOrder.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/DailyMenusFoods.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=DailyMenusFoods.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/DailyOrder.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=DailyOrder.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/DailyOrderSummary.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=DailyOrderSummary.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/EditedFood.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=EditedFood.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/Food.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=Food.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/FoodDetails.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=FoodDetails.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/FoodEditable.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=FoodEditable.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/FoodWithQuantity.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=FoodWithQuantity.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/FoodWithStats.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=FoodWithStats.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/FoodsPage.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=FoodsPage.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/GlobalSettings.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=GlobalSettings.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/LastEdit.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=LastEdit.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/Login.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=Login.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/Message.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=Message.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/ModelError.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=ModelError.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/NewDailyMenu.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=NewDailyMenu.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/Order.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 16/05/2017 12:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=Order.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/OrderItem.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=OrderItem.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/ResetPwd.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=ResetPwd.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/Settings.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=Settings.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/Statistic.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=Statistic.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/Token.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=Token.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/UpdateOrderItems.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 16/05/2017 12:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=UpdateOrderItems.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/User.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=User.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/UserOrder.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=UserOrder.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/UserReg.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=UserReg.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/UserSettings.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=UserSettings.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/UsersPage.ts":
/***/ (function(module, exports) {

/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=UsersPage.js.map

/***/ }),

/***/ "../../../../../src/app/remote/model/models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DailyMenu__ = __webpack_require__("../../../../../src/app/remote/model/DailyMenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DailyMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__DailyMenu__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__DailyMenu__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__DailyMenu__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DailyMenuChef__ = __webpack_require__("../../../../../src/app/remote/model/DailyMenuChef.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DailyMenuChef___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__DailyMenuChef__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__DailyMenuChef__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__DailyMenuChef__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DailyMenuEdit__ = __webpack_require__("../../../../../src/app/remote/model/DailyMenuEdit.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DailyMenuEdit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__DailyMenuEdit__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_2__DailyMenuEdit__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_2__DailyMenuEdit__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DailyMenuDetails__ = __webpack_require__("../../../../../src/app/remote/model/DailyMenuDetails.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DailyMenuDetails___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__DailyMenuDetails__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_3__DailyMenuDetails__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_3__DailyMenuDetails__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DailyMenuOrder__ = __webpack_require__("../../../../../src/app/remote/model/DailyMenuOrder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DailyMenuOrder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__DailyMenuOrder__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_4__DailyMenuOrder__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_4__DailyMenuOrder__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DailyMenusFoods__ = __webpack_require__("../../../../../src/app/remote/model/DailyMenusFoods.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DailyMenusFoods___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__DailyMenusFoods__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_5__DailyMenusFoods__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_5__DailyMenusFoods__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DailyOrder__ = __webpack_require__("../../../../../src/app/remote/model/DailyOrder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DailyOrder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__DailyOrder__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_6__DailyOrder__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_6__DailyOrder__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DailyOrderSummary__ = __webpack_require__("../../../../../src/app/remote/model/DailyOrderSummary.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DailyOrderSummary___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__DailyOrderSummary__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_7__DailyOrderSummary__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_7__DailyOrderSummary__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__EditedFood__ = __webpack_require__("../../../../../src/app/remote/model/EditedFood.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__EditedFood___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__EditedFood__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_8__EditedFood__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_8__EditedFood__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Food__ = __webpack_require__("../../../../../src/app/remote/model/Food.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Food___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Food__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_9__Food__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_9__Food__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__FoodDetails__ = __webpack_require__("../../../../../src/app/remote/model/FoodDetails.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__FoodDetails___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__FoodDetails__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_10__FoodDetails__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_10__FoodDetails__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__FoodEditable__ = __webpack_require__("../../../../../src/app/remote/model/FoodEditable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__FoodEditable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__FoodEditable__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_11__FoodEditable__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_11__FoodEditable__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__FoodWithQuantity__ = __webpack_require__("../../../../../src/app/remote/model/FoodWithQuantity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__FoodWithQuantity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__FoodWithQuantity__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_12__FoodWithQuantity__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_12__FoodWithQuantity__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__FoodWithStats__ = __webpack_require__("../../../../../src/app/remote/model/FoodWithStats.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__FoodWithStats___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__FoodWithStats__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_13__FoodWithStats__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_13__FoodWithStats__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__FoodsPage__ = __webpack_require__("../../../../../src/app/remote/model/FoodsPage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__FoodsPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__FoodsPage__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_14__FoodsPage__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_14__FoodsPage__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__GlobalSettings__ = __webpack_require__("../../../../../src/app/remote/model/GlobalSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__GlobalSettings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__GlobalSettings__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_15__GlobalSettings__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_15__GlobalSettings__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__LastEdit__ = __webpack_require__("../../../../../src/app/remote/model/LastEdit.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__LastEdit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__LastEdit__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_16__LastEdit__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_16__LastEdit__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Login__ = __webpack_require__("../../../../../src/app/remote/model/Login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__Login__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_17__Login__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_17__Login__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Message__ = __webpack_require__("../../../../../src/app/remote/model/Message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__Message__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_18__Message__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_18__Message__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ModelError__ = __webpack_require__("../../../../../src/app/remote/model/ModelError.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ModelError___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__ModelError__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_19__ModelError__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_19__ModelError__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__NewDailyMenu__ = __webpack_require__("../../../../../src/app/remote/model/NewDailyMenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__NewDailyMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__NewDailyMenu__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_20__NewDailyMenu__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_20__NewDailyMenu__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Order__ = __webpack_require__("../../../../../src/app/remote/model/Order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Order___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__Order__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_21__Order__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_21__Order__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__OrderItem__ = __webpack_require__("../../../../../src/app/remote/model/OrderItem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__OrderItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__OrderItem__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_22__OrderItem__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_22__OrderItem__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ResetPwd__ = __webpack_require__("../../../../../src/app/remote/model/ResetPwd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ResetPwd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__ResetPwd__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_23__ResetPwd__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_23__ResetPwd__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Settings__ = __webpack_require__("../../../../../src/app/remote/model/Settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Settings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__Settings__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_24__Settings__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_24__Settings__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Statistic__ = __webpack_require__("../../../../../src/app/remote/model/Statistic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Statistic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__Statistic__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_25__Statistic__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_25__Statistic__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Token__ = __webpack_require__("../../../../../src/app/remote/model/Token.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__Token__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_26__Token__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_26__Token__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__UpdateOrderItems__ = __webpack_require__("../../../../../src/app/remote/model/UpdateOrderItems.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__UpdateOrderItems___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__UpdateOrderItems__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_27__UpdateOrderItems__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_27__UpdateOrderItems__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__User__ = __webpack_require__("../../../../../src/app/remote/model/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__User___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__User__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_28__User__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_28__User__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__UserOrder__ = __webpack_require__("../../../../../src/app/remote/model/UserOrder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__UserOrder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__UserOrder__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_29__UserOrder__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_29__UserOrder__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__UserReg__ = __webpack_require__("../../../../../src/app/remote/model/UserReg.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__UserReg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__UserReg__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_30__UserReg__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_30__UserReg__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__UserSettings__ = __webpack_require__("../../../../../src/app/remote/model/UserSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__UserSettings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__UserSettings__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_31__UserSettings__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_31__UserSettings__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__UsersPage__ = __webpack_require__("../../../../../src/app/remote/model/UsersPage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__UsersPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__UsersPage__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_32__UsersPage__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_32__UsersPage__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ConcurrentOrderDeletion__ = __webpack_require__("../../../../../src/app/remote/model/ConcurrentOrderDeletion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ConcurrentOrderDeletion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33__ConcurrentOrderDeletion__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_33__ConcurrentOrderDeletion__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_33__ConcurrentOrderDeletion__[key]; }) }(__WEBPACK_IMPORT_KEY__));


































//# sourceMappingURL=models.js.map

/***/ }),

/***/ "../../../../../src/app/remote/variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COLLECTION_FORMATS; });

var BASE_PATH = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('basePath');
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};
//# sourceMappingURL=variables.js.map

/***/ }),

/***/ "../../../../../src/app/shared/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var localStorageItem = "currentUser4";
var AuthenticationService = (function () {
    function AuthenticationService(authService, conf, lowerCase) {
        this.authService = authService;
        this.conf = conf;
        this.lowerCase = lowerCase;
        this.changes = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
    }
    AuthenticationService.prototype.login = function (username, password) {
        // on successful login:
        // - stores the user details (firstName, lastName, id, role and token)
        // in a private object of the component.
        // - sets this.conf.apiKey
        // - persists the user details in localStorage
        var _this = this;
        var creds = { email: username, password: password };
        return this.authService.authLoginPost(creds).map(function (token) {
            // login successful if there's a jwt token in the response
            if (token.token) {
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem(localStorageItem, JSON.stringify({ username: username, token: token }));
                _this.user = token.user;
                _this.token = token.token;
                _this.conf.apiKey = "Bearer " + token.token;
                // return true to indicate successful login
                return token.user.role;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error);
        });
    };
    AuthenticationService.prototype.getLoggedInUser = function () {
        return this.user;
    };
    AuthenticationService.prototype.isLogged = function () {
        return (this.conf.apiKey !== undefined && this.token !== null);
    };
    AuthenticationService.prototype.bootstrapUser = function () {
        // - loads user details from localStorage
        // - sets this.conf.apiKey
        // - retrieves the latest user details from backend. <--***************
        //    once received:
        //    - persists the new user details in localStorage
        //    - stores the new user details in the private object of the component
        var currentUser = JSON.parse(localStorage.getItem(localStorageItem));
        this.user = currentUser && currentUser.token.user;
        var token = currentUser && currentUser.token.token;
        if (token !== "") {
            this.token = token;
            this.conf.apiKey = "Bearer " + token;
        }
    };
    AuthenticationService.prototype.getToken = function () {
        return this.user ? this.token : null;
    };
    AuthenticationService.prototype.getObservableChange = function () {
        return this.changes;
    };
    AuthenticationService.prototype.getLoggedInRole = function () {
        return this.user ? this.lowerCase.transform(this.user.role) : null;
    };
    AuthenticationService.prototype.updateUserDetailsHasPicture = function (hasPic) {
        this.user.hasPicture = hasPic;
        this.user.role.toLowerCase();
        this.changes.next(Math.random().toString(36).substring(7));
        localStorage.setItem(localStorageItem, JSON.stringify({ username: this.user.email, token: { token: this.token, user: this.user } }));
    };
    AuthenticationService.prototype.updateUserDetails = function (newUserDetails) {
        // takes an object with firstName and lastName
        // this method is called when the user goes to /settings page and after PUT is successful
        // we need to change the user details of the loggedIn user
        // - updates firstName and lastName of the private object in the component
        // - persists the user details in localStorage
        this.user = newUserDetails;
        this.user.role.toLowerCase();
        var currentUser = JSON.parse(localStorage.getItem(localStorageItem));
        currentUser.token.user = this.user;
        this.changes.next(Math.random().toString(36).substring(7));
        localStorage.setItem(localStorageItem, JSON.stringify({ username: this.user.email, token: { token: this.token, user: this.user } }));
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        // removes the localStorage item
        // removes the apiKey in conf
        // removes the private object in the component storing the user details.
        localStorage.removeItem(localStorageItem);
        this.conf.apiKey = undefined;
        this.user = undefined;
        this.token = undefined;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_6__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__remote__).AuthApi) === "function" && _a || Object, typeof (_b = (typeof __WEBPACK_IMPORTED_MODULE_6__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__remote__).Configuration) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["LowerCasePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["LowerCasePipe"]) === "function" && _c || Object])
], AuthenticationService);

var _a, _b, _c;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = " <div fxLayout=\"row\">\r\n  <div fxFlex=\"30\">\r\n    <p><span (click)=\"openDialog(0)\">Terms and  Conditions</span> | <span (click)=\"openDialog(1)\">Privacy Policy</span></p>\r\n  </div>\r\n  <div fxFlex=\"70\">\r\n    <p class=\"right\">\r\n      &copy;<a href=\"http://www.jrtechnologies.com/\" target=\"_blank\" class=\"footerLink\" >JR Technologies</a>\r\n      2017 - <a href=\"https://github.com/jrtdev/yum\" target=\"_blank\"  class=\"footerLink\">Open source GPLv3 on GitHub</a>\r\n       - Developped by JRT Training Bootcamp 2017\r\n    </p>\r\n  </div>\r\n </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  font-size: 0.8em; }\n\nspan:hover {\n  text-decoration: underline;\n  cursor: pointer; }\n\n.right {\n  float: right; }\n\n.footerLink {\n  color: #000;\n  text-decoration: none; }\n\na:hover.footerLink {\n  text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TermsDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(dialog) {
        this.dialog = dialog;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.openDialog = function (tabNumber) {
        var dialogRef = this.dialog.open(TermsDialog);
        var instance = dialogRef.componentInstance; // This instance pass data to dialog.
        instance.tabNumber = tabNumber;
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdDialog */]) === "function" && _a || Object])
], FooterComponent);

// Terms Dialog.
var TermsDialog = (function () {
    function TermsDialog(dialogRef) {
        this.dialogRef = dialogRef;
        this.tabNumber = 0;
    }
    return TermsDialog;
}());
TermsDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-terms-dialog',
        template: __webpack_require__("../../../../../src/app/shared/footer/terms-dialog.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdDialogRef */]) === "function" && _b || Object])
], TermsDialog);

var _a, _b;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<md-tab-group class=\"tabGroup\" [selectedIndex]=\"selectedTab\">\r\n  <md-tab label=\"Terms and  Conditions\">\r\n    <!--<h1>Terms and  Conditions</h1>-->\r\n    <div [innerHTML]=\"terms | async\" class=\"tabContent\"></div>\r\n  </md-tab>\r\n  <md-tab label=\"Privacy policy\">\r\n    <!--<h1>Privacy Policy</h1>-->\r\n    <div [innerHTML]=\"policy | async\" class=\"tabContent\"></div>\r\n  </md-tab>\r\n</md-tab-group>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/tabs/tabs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global_settings_service_service__ = __webpack_require__("../../../../../src/app/shared/services/global-settings-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = (function () {
    function TabsComponent(globalSettingsService) {
        this.globalSettingsService = globalSettingsService;
    }
    TabsComponent.prototype.ngOnInit = function () {
        this.policy = this.globalSettingsService.getPolicy();
        this.terms = this.globalSettingsService.getTerms();
    };
    return TabsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], TabsComponent.prototype, "selectedTab", void 0);
TabsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__("../../../../../src/app/shared/footer/tabs/tabs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/footer/tabs/tabs.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_global_settings_service_service__["a" /* GlobalSettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_global_settings_service_service__["a" /* GlobalSettingsService */]) === "function" && _a || Object])
], TabsComponent);

var _a;
//# sourceMappingURL=tabs.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/terms-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"termsDialog\">\r\n  <div fxLayout=\"row\" class=\"termsHeader\">\r\n    <div fxFlex=\"95\" class=\"right-no-pad\">\r\n      <!--<h1 md-dialog-title style=\"text-align:center;\">Terms and  Conditions / Privacy Policy</h1>-->\r\n     &nbsp;\r\n    </div>\r\n    <div fxFlex=\"5\">\r\n      <button md-raised-button (click)=\"dialogRef.close('No')\" color=\"accent\" style=\"min-width: 40px;\">X</button>\r\n    </div>\r\n  </div>\r\n  <div md-dialog-content class=\"termsContent\">\r\n    <app-tabs [selectedTab]=\"tabNumber\"></app-tabs>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"is-flex topHeader \">\r\n  <div id=\"logo\"> <a href=\"/\"><img src=\"/assets/img/Yum-logo.png\" alt=\"logo\"></a></div>\r\n  <div class=\"is-flex relative\">\r\n    <div>\r\n      <i *ngIf=\"!user.hasPicture\" class=\"material-icons face\">face</i>\r\n      <img *ngIf=\"user.hasPicture\" class=\"img-circle smallImage \" src=\"{{userPicture}}\" />\r\n    </div>\r\n    <div class=\"red\">\r\n      <div>{{getUser().firstName}}</div>\r\n      <div>{{getUser().lastName}}</div>\r\n    </div>\r\n    <div class=\"\">\r\n       <button md-icon-button  md-raised-button [ngClass]=\"{'isOpen': trigger.menuOpen}\" (click)=\"triggerMenu()\" ><i class=\"material-icons md-32\">keyboard_arrow_down</i></button>\r\n\r\n    </div>\r\n    <div class=\"menuDrawerButton\">\r\n\r\n      <button md-icon-button  class=\"hidden \"   md-raised-button [mdMenuTriggerFor]=\"menu\" ><i class=\"material-icons md-32\">keyboard_arrow_down</i></button>\r\n\r\n      <md-menu #menu=\"mdMenu\" [classList]=\"testClass\" xPosition=\"before\" class=\"menuDrawer\"  aria-label=\"Open settings menu\">\r\n          <div class=\"is-flex menuDrawerContent\">\r\n\r\n              <!--<div class=\"inline smallPad\">\r\n                    <button md-raised-button color=\"accent\" routerLink=\"/\"  [routerLinkActiveOptions]=\"{ exact: true }\" routerLinkActive  #rlaHungry=\"routerLinkActive\" [disabled]='rlaHungry.isActive' routerLinkActive=\"active\"><i class=\"material-icons\">home</i></button>\r\n              </div>-->\r\n\r\n              <div class=\"inline smallPad\">\r\n                <button  md-raised-button color=\"accent\"\r\n                routerLink=\"/settings\"\r\n      routerLinkActive  #rlaSettings=\"routerLinkActive\" [disabled]='rlaSettings.isActive' routerLinkActive=\"active\"\r\n                >Account settings</button>\r\n              </div>\r\n\r\n              <div class=\"inline smallPad\">\r\n                <button (click)=\"logOff()\" title=\"Sign out\" md-icon-button  md-raised-button><i class=\"material-icons md-32\"><i class=\"material-icons\">power_settings_new</i></i></button>\r\n              </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"smallPad marginTop\" *ngIf=\"role=='admin' || role=='chef'\">\r\n                <!--<md-select [(ngModel)]=\"homepage\" #selectHome=\"ngModel\" class=\"responsive\" placeholder=\"Go to page\" >\r\n                  <md-option *ngFor=\"let homepage of homepages\" [value]='homepage'  (click)=\"goToHomepage(homepage)\">\r\n                    {{ homepage.display }}\r\n                  </md-option>\r\n                </md-select>-->\r\n\r\n                <button  md-raised-button color=\"accent\"\r\n                routerLink=\"/hungry\"\r\n      routerLinkActive  #rlaHungryHome=\"routerLinkActive\" [disabled]='rlaHungryHome.isActive' routerLinkActive=\"active\"\r\n                >Hungry</button>\r\n\r\n\r\n                <button   *ngIf=\"role=='admin' || role=='chef'\" md-raised-button color=\"accent\"\r\n                routerLink=\"/chef\"\r\n      routerLinkActive  #rlaChefHome=\"routerLinkActive\" [disabled]='rlaChefHome.isActive' routerLinkActive=\"active\"\r\n                >Chef</button>\r\n\r\n                <button   *ngIf=\"role=='admin'\" md-raised-button color=\"accent\"\r\n                routerLink=\"/admin\"\r\n      routerLinkActive  #rlaAdminHome=\"routerLinkActive\" [disabled]='rlaAdminHome.isActive' routerLinkActive=\"active\"\r\n                >Admin</button>\r\n\r\n\r\n          </div>\r\n\r\n      </md-menu>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".topHeader {\n  height: 80px;\n  padding: 10px 20px;\n  background-color: #fff; }\n\n.topHeader > div {\n  height: 100%; }\n\n.topHeader img {\n  max-height: 100%;\n  width: auto; }\n\n.topHeader > div > div {\n  padding: 12px; }\n\n.face {\n  font-size: 50px;\n  color: #F44336;\n  margin-top: 10px; }\n\n.marginTop {\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__remote_variables__ = __webpack_require__("../../../../../src/app/remote/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HeaderComponent = (function () {
    function HeaderComponent(authenticationService, baseUrl, router) {
        this.authenticationService = authenticationService;
        this.baseUrl = baseUrl;
        this.router = router;
        this.testClass = "MytestClass";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authenticationService.getLoggedInUser();
        this.role = this.authenticationService.getLoggedInRole();
        this.userPicture = this.baseUrl + '/settings/picture/token?token=' + this.authenticationService.getToken();
        this.authenticationService.getObservableChange().subscribe(function (value) {
            _this.userPicture = _this.baseUrl + '/settings/picture/token?token=' + _this.authenticationService.getToken() + "&change=" + value;
            _this.user = _this.authenticationService.getLoggedInUser();
        });
        //this.userPicture = this.baseUrl + '/settings/picture/token?token='+this.authenticationService.getToken();
        // setPositionClasses
        this.setDestinations();
        this.isOpen = this.trigger.menuOpen;
    };
    HeaderComponent.prototype.getUser = function () {
        return this.user;
    };
    HeaderComponent.prototype.logOff = function () {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    };
    HeaderComponent.prototype.triggerMenu = function () {
        this.trigger.openMenu();
    };
    HeaderComponent.prototype.setDestinations = function () {
        if (this.user.role == 'admin') {
            this.homepages = [{ display: "Hungry home page", destination: "hungry" },
                { display: "Chef home page", destination: "chef" },
                { display: "Admin home page", destination: "admin" }
            ];
        }
        else if (this.user.role == 'chef') {
            this.homepages = [{ display: "Hungry home page", destination: "hungry" },
                { display: "Chef home page", destination: "chef" }
            ];
        }
    };
    HeaderComponent.prototype.goToHomepage = function (homepage) {
        if (homepage != null) {
            switch (homepage.destination) {
                case 'admin':
                    this.router.navigate(['admin']);
                    break;
                case 'hungry':
                    this.router.navigate(['hungry']);
                    break;
                case 'chef':
                    this.router.navigate(['chef']);
                    break;
            }
        }
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdMenuTrigger */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdMenuTrigger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdMenuTrigger */]) === "function" && _a || Object)
], HeaderComponent.prototype, "trigger", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/shared/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/header/header.component.scss")]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__remote_variables__["a" /* BASE_PATH */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, String, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/header/month-nav/month-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inline\">\r\n  <div class=\"is-flex\">\r\n\r\n    <!--<span class=\"navMonth fixedWidth\">{{  getMonthStr() }} </span>-->\r\n    <span class=\"navMonth fixedWidth\">{{  viewDate | date:'MMMM '  }} </span>\r\n    <span class=\"navMonth\">{{  viewDate | date:'y '  }} </span>\r\n    <div>\r\n      <button md-icon-button (click)=\"monthBefore()\" >  <i class=\"material-icons md-48\">keyboard_arrow_up</i> </button>\r\n      <!--<button md-icon-button (click)=\"monthThis()\">  <i class=\"material-icons md-48\">clear_all</i></button>-->\r\n      <button md-icon-button (click)=\"monthNext()\">  <i class=\"material-icons md-48\">keyboard_arrow_down</i></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/header/month-nav/month-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".is-flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/month-nav/month-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MonthNavComponent = (function () {
    function MonthNavComponent(datePipe) {
        this.datePipe = datePipe;
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.monthViewDate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.viewDate = new Date();
    }
    MonthNavComponent.prototype.ngOnInit = function () {
    };
    MonthNavComponent.prototype.ngOnChanges = function (changes) {
        //Catch changes from outside component
        if (changes.viewDate !== undefined) {
            if (!changes.viewDate.isFirstChange()) {
                console.log("MonthNavComponent Changes:");
                console.log('Outside changed month nav date:', changes.viewDate);
            }
        }
    };
    MonthNavComponent.prototype.ngDoCheck = function () {
        //Catch changes from inside component
        if (this.viewDate !== this.oldViewDate) {
            this.oldViewDate = this.viewDate;
            //this.emitDate();
            console.log('changed month nav date:', this.viewDate);
        }
    };
    MonthNavComponent.prototype.getMonthStr = function () {
        return this.datePipe.transform(this.viewDate, 'MMMM y');
    };
    MonthNavComponent.prototype.monthBefore = function () {
        var dt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfMonth"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["subDays"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfMonth"])(this.viewDate), 1));
        this.viewDate = this.nextMondayOfWeekend(dt);
        this.emitDate();
    };
    MonthNavComponent.prototype.monthThis = function () {
        this.viewDate = new Date();
        this.emitDate();
    };
    MonthNavComponent.prototype.monthNext = function () {
        var dt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["addDays"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["endOfMonth"])(this.viewDate), 1);
        this.viewDate = this.nextMondayOfWeekend(dt);
        this.emitDate();
    };
    //
    MonthNavComponent.prototype.emitDate = function () {
        this.viewDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["setHours"])(this.viewDate, 12);
        this.monthViewDate.emit(this.viewDate);
        this.viewDateChange.emit(this.viewDate);
    };
    MonthNavComponent.prototype.nextMondayOfWeekend = function (dt) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSaturday"])(dt)) {
            dt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["addDays"])(dt, 2);
        }
        else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSunday"])(dt)) {
            dt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_date_fns__["addDays"])(dt, 1);
        }
        return dt;
    };
    return MonthNavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MonthNavComponent.prototype, "viewDate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MonthNavComponent.prototype, "viewDateChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MonthNavComponent.prototype, "monthViewDate", void 0);
MonthNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-month-nav',
        template: __webpack_require__("../../../../../src/app/shared/header/month-nav/month-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/header/month-nav/month-nav.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]) === "function" && _a || Object])
], MonthNavComponent);

var _a;
//# sourceMappingURL=month-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/logged/logged.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content main\">\r\n  <div class=\"yum-content\">\r\n    <app-header> </app-header>\r\n    <div class=\"yum-content\">\r\n      <router-outlet></router-outlet>\r\n\r\n\r\n      <app-footer></app-footer>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/logged/logged.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/logged/logged.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggedComponent = (function () {
    function LoggedComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    LoggedComponent.prototype.ngOnInit = function () {
        this.user = this.authenticationService.getLoggedInUser();
    };
    LoggedComponent.prototype.getUser = function () {
        return this.user;
    };
    return LoggedComponent;
}());
LoggedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logged',
        template: __webpack_require__("../../../../../src/app/shared/logged/logged.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/logged/logged.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], LoggedComponent);

var _a;
//# sourceMappingURL=logged.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n  <div class=\"main-div\">\r\n    <a href=\"/\"><img src=\"./../../../assets/img/Yum-logo-small.png\" alt=\"logo\"></a>\r\n    <div class=\"text-not-found\">\r\n      <h3>(404)Page not found</h3>\r\n      <p>The requested URL was not found on this server.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/not-found/not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\n  background-image: url(\"/assets/img/empty-plate.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100vh;\n  position: relative; }\n\n.main-div {\n  font-family: 'Roboto Slab', serif;\n  position: relative;\n  background: rgba(255, 255, 255, 0.8);\n  top: 28%;\n  left: 19%;\n  -webkit-transform: translate(-80%, -80%);\n          transform: translate(-80%, -80%);\n  padding: 41px;\n  text-align: center;\n  width: 287px; }\n\nh3 p {\n  text-align: center;\n  width: 200px; }\n\n.text-not-found {\n  margin-top: 35px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/shared/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/not-found/not-found.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pages && pages.length\" class=\"right-pg\">\r\n  <button md-raised-button color=\"accent\" [ngClass]=\"{disabled:currentPage === 1}\" [disabled]=\"currentPage === 1\" (click)=\"pageChanger(1)\">First\r\n                </button>\r\n  <button md-raised-button color=\"accent\" [ngClass]=\"{disabled:currentPage === 1}\" [disabled]=\"currentPage === 1\" (click)=\"pageChanger(currentPage - 1)\">Previous\r\n                </button>\r\n  <button md-raised-button class=\"page-btn\" *ngFor=\"let page of pages\" [color]=\"currentPage === page? 'primary':'accent'\" [disabled]=\"currentPage === page\"\r\n    [ngClass]=\"{active:currentPage === page}\" (click)=\"pageChanger(page)\">\r\n                    {{page}}\r\n                </button>\r\n  <button md-raised-button color=\"accent\" [ngClass]=\"{disabled:currentPage === totalPages}\" [disabled]=\"currentPage === totalPages\"\r\n    (click)=\"pageChanger(currentPage + 1)\">Next\r\n                </button>\r\n  <button md-raised-button color=\"accent\" [ngClass]=\"{disabled:currentPage === totalPages}\" [disabled]=\"currentPage === totalPages\"\r\n    (click)=\"pageChanger(totalPages)\">Last\r\n                </button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/pagination/pagination.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-raised-button {\n  min-width: 10px; }\n\n.right-pg {\n  float: right; }\n\n.page-btn {\n  margin-left: 1px;\n  margin-right: 1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = (function () {
    function PaginationComponent() {
        this.totalItems = 0;
        this.currentPage = 1;
        this.pageSize = 10;
        this.totalPages = 0;
        this.changePage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.pager();
    };
    PaginationComponent.prototype.pager = function () {
        // calculate total pages
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
        var startPage, endPage;
        if (isNaN(this.totalPages)) {
            // if no items yet
            startPage = 1;
            endPage = 1;
        }
        else if (this.totalPages <= 5) {
            // less than 5 total pages so show all
            startPage = 1;
            endPage = this.totalPages;
        }
        else {
            // more than 5 total pages so calculate start and end pages
            if (this.currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            }
            else if (this.currentPage + 2 >= this.totalPages) {
                startPage = this.totalPages - 4;
                endPage = this.totalPages;
            }
            else {
                startPage = this.currentPage - 2;
                endPage = this.currentPage + 2;
            }
        }
        // calculate start and end item indexes
        var startIndex = (this.currentPage - 1) * this.pageSize;
        var endIndex = Math.min(startIndex + this.pageSize - 1, this.totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        this.pages = __WEBPACK_IMPORTED_MODULE_1_underscore__["range"](startPage, endPage + 1);
    };
    // reload the pager method on inputs changes
    PaginationComponent.prototype.ngOnChanges = function (changes) {
        this.pager();
    };
    // callback function on page buttons
    PaginationComponent.prototype.pageChanger = function (page) {
        this.changePage.emit(page);
    };
    return PaginationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "totalItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "currentPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "pageSize", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "changePage", void 0);
PaginationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pagination',
        template: __webpack_require__("../../../../../src/app/shared/pagination/pagination.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/pagination/pagination.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PaginationComponent);

//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/profile/delete-picture-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title class=\"centered\"></h1>\r\n<md-dialog-content class=\"centered\">\r\n  <div>Do you want to delete the profile picture? </div>\r\n</md-dialog-content>\r\n<md-dialog-actions>\r\n  <div class=\"is-flex width100\">\r\n    <button md-button  md-raised-button color=\"accent\" (click)=\"dialogRef.close('Yes')\">Yes</button>\r\n    <button md-button  md-raised-button color=\"accent\" (click)=\"dialogRef.close('No')\">No</button>\r\n  </div>\r\n</md-dialog-actions>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"showForm && user\" novalidate [formGroup]=\"profileGroup\">\r\n  <md-grid-list cols=\"7\" rowHeight=\"100px\">\r\n    <md-grid-tile colspan=\"2\" rowspan=\"3\">\r\n      <i *ngIf=\"!user.hasPicture\" class=\"material-icons face\">face</i>\r\n      <img class=\"profile-image\" *ngIf=\"user.hasPicture\" src=\"{{userPicture}}\" />\r\n    </md-grid-tile>\r\n    <md-grid-tile colspan=\"1\" rowspan=\"1\" class=\"left-no-pad\">\r\n      <div>Change picture</div>\r\n      <button md-icon-button color=\"accent\" (click)=\"fileInput.click()\"><i class=\"material-icons\">add_circle</i></button>\r\n      <input #fileInput type=\"file\" ng2FileSelect [uploader]=\"uploader\" hidden=true/>\r\n    </md-grid-tile>\r\n    <md-grid-tile colspan=\"4\" rowspan=\"3\">\r\n      <md-progress-bar *ngIf=\"progress\" role=\"progressbar\" mode=\"indeterminate\"></md-progress-bar>\r\n    </md-grid-tile>\r\n    <md-grid-tile class=\"image-rules\" colspan=\"{{admin?'1':'1'}}\" rowspan=\"1\">\r\n      You have to upload an image at least 180px by 180px, jpg, .gif, or .png. Max file size 700K.\r\n    </md-grid-tile>\r\n     <md-grid-tile *ngIf=\"user.hasPicture\" colspan=\"1\" rowspan=\"1\" class=\"left-no-pad\">\r\n      Delete picture\r\n      <button md-icon-button color=\"accent\" (click)=\"deletePicture()\"><i class=\"material-icons\">delete_forever</i></button>\r\n    </md-grid-tile>\r\n  </md-grid-list>\r\n  <md-grid-list cols=\"{{admin?'9':'7'}}\" rowHeight=\"100px\">\r\n    <md-grid-tile *ngIf=\"admin && user.id !==1\" [colspan]=\"2\" class=\"left\">\r\n      <md-select placeholder=\"User role\" formControlName=\"role\">\r\n        <md-option *ngFor=\"let role of roles\" [value]=\"role.value\">\r\n          {{ role.viewValue }}\r\n        </md-option>\r\n      </md-select>\r\n    </md-grid-tile>\r\n\r\n\r\n    <md-grid-tile [colspan]=\"2\" class=\"left-no-pad\">\r\n      <md-input-container class=\"input-extra-width\">\r\n        <input mdInput type=\"text\" placeholder=\"First name\" formControlName=\"firstName\">\r\n\r\n\r\n        <md-error *ngIf=\"profileGroup.get('firstName').touched && profileGroup.get('firstName').hasError('required')\">\r\n          First Name is required\r\n        </md-error>\r\n        <md-error *ngIf=\"profileGroup.get('firstName').touched && profileGroup.get('firstName').hasError('minlength')\">\r\n          Minimum of 2 characters\r\n        </md-error>\r\n      </md-input-container>\r\n    </md-grid-tile>\r\n    <md-grid-tile [colspan]=\"2\">\r\n      <md-input-container class=\"input-extra-width\">\r\n        <input mdInput type=\"text\" placeholder=\"Last name\" formControlName=\"lastName\">\r\n\r\n        <md-error *ngIf=\"profileGroup.get('lastName').touched && profileGroup.get('lastName').hasError('required')\">\r\n          Last Name is required\r\n        </md-error>\r\n        <md-error *ngIf=\"profileGroup.get('lastName').touched && profileGroup.get('lastName').hasError('minlength')\">\r\n          Minimum of 2 characters\r\n        </md-error>\r\n      </md-input-container>\r\n    </md-grid-tile>\r\n    <md-grid-tile [colspan]=\"3\" class=\"right\">\r\n      <md-input-container class=\"input-extra-width\">\r\n        <input mdInput type=\"email\" placeholder=\"User email address\" formControlName=\"email\">\r\n\r\n        <md-error *ngIf=\"profileGroup.get('email').hasError('required') && profileGroup.get('email').touched\">\r\n          Email is required\r\n        </md-error>\r\n      </md-input-container>\r\n    </md-grid-tile>\r\n\r\n  </md-grid-list>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".face {\n  font-size: 200px;\n  color: #F44336; }\n\n.image-rules {\n  font-style: italic;\n  font-size: 13px; }\n\n.profile-image {\n  border-radius: 50%; }\n\n.left-inside {\n  float: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__remote_variables__ = __webpack_require__("../../../../../src/app/remote/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletePictureDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







//const URL = 'http://localhost:8082/api/settings/picture';
var ProfileComponent = (function () {
    function ProfileComponent(fb, auth, adminService, hungryService, dialog, snackBar, baseUrl) {
        this.fb = fb;
        this.auth = auth;
        this.adminService = adminService;
        this.hungryService = hungryService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.baseUrl = baseUrl;
        this.admin = false;
        //@Output() userChanged = new EventEmitter();
        this.invalidProfileForm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateVersion = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showForm = true;
        this.progress = false;
        this.URLadmin = this.baseUrl + '/users/';
        this.URL = this.baseUrl + "/settings/picture";
        // Options for roles Select
        this.roles = [
            { value: 'hungry', viewValue: 'Hungry' },
            { value: 'chef', viewValue: 'Chef' },
            { value: 'admin', viewValue: 'Admin' }
        ];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userPicture = this.baseUrl + '/settings/picture/token?token=' + this.auth.getToken();
        if (this.admin) {
            this.URLadmin = this.URLadmin + this.user.id + '/picture';
            this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({ url: this.URLadmin, autoUpload: true, removeAfterUpload: true, authToken: 'Bearer ' + this.auth.getToken() });
            this.userPicture = this.baseUrl + '/users/' + this.user.id + '/picture/token?token=' + this.auth.getToken() + '&random=';
            console.log('this.userPicture: ', this.userPicture);
        }
        else {
            this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({ url: this.URL, autoUpload: true, removeAfterUpload: true, authToken: 'Bearer ' + this.auth.getToken() });
            this.userPicture = this.baseUrl + '/settings/picture/token?token=' + this.auth.getToken() + '&random=';
        }
        // Create Form group, form controls, validators
        this.profileGroup = this.fb.group({
            role: [this.user.role],
            firstName: [this.user.firstName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(1)]],
            lastName: [this.user.lastName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(1)]],
            email: [this.user.email, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(2),
                    // tslint:disable-next-line:max-line-length
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                ]
            ]
        });
        this.profileGroup.valueChanges.subscribe(function (controlsData) {
            _this.user.firstName = controlsData.firstName;
            _this.user.lastName = controlsData.lastName;
            _this.user.email = controlsData.email;
            _this.user.role = controlsData.role;
            if (_this.profileGroup.invalid) {
                console.log('invalid1', _this.profileGroup.invalid);
                _this.invalidProfileForm.emit('invalid');
            }
            else {
                _this.invalidProfileForm.emit('valid');
            }
            //this.auth.updateUserDetails(this.user);
        });
        this.uploader.onAfterAddingFile = function () {
            _this.progress = true;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.progress = false;
            if (status === 200) {
                _this.openSnackBar('Image uploaded', 'ok', 1);
                // this.snackBar.open("Image uploaded", "ok", {
                //   duration: 5000,
                //   extraClasses: ['success-snack-bar']
                // });
                //this.userPicture = this.userPicture +  Math.random();
                _this.user.hasPicture = true;
                _this.userPicture = _this.userPicture + '1';
                //this.user.lastEdit.version += 1;
                _this.updateVersion.emit();
                _this.auth.updateUserDetailsHasPicture(_this.user.hasPicture);
            }
            else {
                _this.openSnackBar('An error occured', 'ok', 3);
                // this.snackBar.open("An error occured", "ok", {
                //   extraClasses: ['error-snack-bar']
                // });
            }
        };
    };
    // status -> 1:success , 2:warning, 3:error
    ProfileComponent.prototype.openSnackBar = function (message, action, status) {
        switch (status) {
            case 1:
                this.snackBar.open(message, action, {
                    duration: 5000,
                    extraClasses: ['success-snack-bar']
                });
                break;
            case 2:
                this.snackBar.open(message, action, {
                    extraClasses: ['warning-snack-bar']
                });
                break;
            case 3:
                this.snackBar.open(message, action, {
                    extraClasses: ['error-snack-bar']
                });
                break;
        }
    };
    ProfileComponent.prototype.deletePicture = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DeletePictureDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'Yes') {
                if (_this.admin) {
                    _this.adminService.usersIdPictureDelete(_this.user.id)
                        .subscribe(function (value) {
                        _this.userPicture = _this.baseUrl + '/users/' + _this.user.id + '/picture/token?token=' + _this.auth.getToken() + '&random=';
                        _this.user.hasPicture = false;
                        _this.updateVersion.emit();
                        _this.openSnackBar('Picture deleted', 'ok', 1);
                    }, function (error) {
                        console.log(error);
                        _this.openSnackBar('Picture cannot be deleted', 'ok', 3);
                    });
                }
                else {
                    // hungry service  delete picture
                    _this.hungryService.settingsPictureDelete()
                        .subscribe(function (value) {
                        _this.userPicture = _this.baseUrl + '/settings/picture/token?token=' + _this.auth.getToken() + '&random=';
                        _this.user.hasPicture = false;
                        _this.updateVersion.emit();
                        _this.openSnackBar('Picture deleted', 'ok', 1);
                        _this.auth.updateUserDetailsHasPicture(_this.user.hasPicture);
                    }, function (error) {
                        console.log(error);
                        _this.openSnackBar('Picture cannot be deleted', 'ok', 3);
                    });
                }
            }
        });
    };
    ProfileComponent.prototype.ngOnChanges = function (changes) {
        if (this.profileGroup != null) {
            //console.log('onChanges1', this.profileGroup);
            this.profileGroup.patchValue({ role: this.user.role, firstName: this.user.firstName, lastName: this.user.lastName, email: this.user.email });
        }
    };
    return ProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_6__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__remote__).User) === "function" && _a || Object)
], ProfileComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ProfileComponent.prototype, "change", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "admin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "invalidProfileForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "updateVersion", void 0);
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/shared/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/profile/profile.component.scss")],
    }),
    __param(6, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__remote_variables__["a" /* BASE_PATH */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = (typeof __WEBPACK_IMPORTED_MODULE_6__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__remote__).AdminApi) === "function" && _d || Object, typeof (_e = (typeof __WEBPACK_IMPORTED_MODULE_6__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__remote__).HungryApi) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MdDialog */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdSnackBar */]) === "function" && _g || Object, String])
], ProfileComponent);

var DeletePictureDialog = (function () {
    function DeletePictureDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return DeletePictureDialog;
}());
DeletePictureDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-delete-picture-dialog',
        template: __webpack_require__("../../../../../src/app/shared/profile/delete-picture-dialog.html"),
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MdDialogRef */]) === "function" && _h || Object])
], DeletePictureDialog);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/global-settings-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalSettingsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalSettingsService = (function () {
    function GlobalSettingsService(settingsService) {
        this.settingsService = settingsService;
    }
    GlobalSettingsService.prototype.getSettings = function () {
        var _this = this;
        if (this.observable === undefined) {
            this.observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].defer(function () { return _this.settingsService.globalsettingsGet(); })
                .publishReplay(1, 10)
                .refCount()
                .take(1);
        }
        return this.observable;
    };
    GlobalSettingsService.prototype.getDeadLine = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"](function (observer) {
            _this.getSettings().subscribe(function (settings) {
                var d = Date.parse("2000-1-1 " + settings.deadline);
                observer.next(d);
                observer.complete();
            });
        });
    };
    GlobalSettingsService.prototype.getCurrency = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"](function (observer) {
            _this.getSettings().subscribe(function (settings) {
                observer.next(settings.currency);
                observer.complete();
            });
        });
    };
    GlobalSettingsService.prototype.getTerms = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"](function (observer) {
            _this.getSettings().subscribe(function (settings) {
                observer.next(settings.tos);
                observer.complete();
            });
        });
    };
    GlobalSettingsService.prototype.getPolicy = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"](function (observer) {
            _this.getSettings().subscribe(function (settings) {
                observer.next(settings.policy);
                observer.complete();
            });
        });
    };
    GlobalSettingsService.prototype.getNotes = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"](function (observer) {
            _this.getSettings().subscribe(function (settings) {
                observer.next(settings.notes);
                observer.complete();
            });
        });
    };
    return GlobalSettingsService;
}());
GlobalSettingsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_2__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__remote__).AdminApi) === "function" && _a || Object])
], GlobalSettingsService);

var _a;
//# sourceMappingURL=global-settings-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/settings/settings-route.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsRouteGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsRouteGuard = (function () {
    function SettingsRouteGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    SettingsRouteGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.isLogged()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
        }
    };
    return SettingsRouteGuard;
}());
SettingsRouteGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SettingsRouteGuard);

var _a, _b;
//# sourceMappingURL=settings-route.guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content main\">\r\n\r\n  <app-header> </app-header>\r\n\r\n  <h1>\r\n    Account settings\r\n  </h1>\r\n\r\n\r\n  <md-card>\r\n    <md-grid-list cols=\"6\" rowHeight=\"50px\" class=\"divider\">\r\n      <md-grid-tile colspan=\"3\" class=\"left-no-pad\">\r\n        <div>\r\n          <div class=\"heading\">Profile details</div>\r\n        </div>\r\n      </md-grid-tile>\r\n      <md-grid-tile colspan=\"3\" class=\"right-no-pad\">\r\n        <div class=\"heading\">\r\n          You are <span *ngIf=\"user!=null && user.role==='ADMIN'\">an </span><span *ngIf=\"user!=null && user.role!=='ADMIN'\">a</span>\r\n          <span *ngIf=\"user!=null\">{{displayRole()}}</span>\r\n        </div>\r\n      </md-grid-tile>\r\n    </md-grid-list>\r\n\r\n    <app-profile *ngIf=\"user\" [(user)]=\"user\" [change]=\"change\" [admin]=\"false\" (invalidProfileForm)=\"handleInvalidProfileForm($event)\" (updateVersion)=\"handleUpdateVersion($event)\">\r\n    </app-profile>\r\n    <div class=\"divider heading sec\">\r\n      <div class=\"heading\">Change Password <small>(Leave it empty if you don't want to change your password)</small></div>\r\n    </div>\r\n    <form [formGroup]=\"profileGroup\" autocomplete=\"off\">\r\n      <md-grid-list cols=\"6\" rowHeight=\"160px\">\r\n        <md-grid-tile colspan=\"2\" class=\"left\">\r\n          <md-input-container>\r\n\r\n            <input mdInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" (keyup)=\"onPasswordChange()\">\r\n            <md-hint *ngIf=\"profileGroup.get('password').value===null ||profileGroup.get('password').value.length<6\" >Password should be at least 6 characters (space not allowed) </md-hint>\r\n            <md-error *ngIf=\"profileGroup.get('password').hasError('required') && profileGroup.get('password').touched\">\r\n              Password is required\r\n            </md-error>\r\n\r\n            <md-error *ngIf=\"profileGroup.get('password').hasError('pattern') && profileGroup.get('password').touched\">\r\n              Password should be at least 6 characters (space not allowed)\r\n            </md-error>\r\n\r\n          </md-input-container>\r\n        </md-grid-tile>\r\n        <md-grid-tile colspan=\"2\">\r\n          <md-input-container>\r\n            <input mdInput type=\"password\" placeholder=\"Confirm Password\" formControlName=\"confirm\">\r\n            <md-error *ngIf=\"profileGroup.get('confirm').hasError('required') && profileGroup.get('confirm').touched\">\r\n              Password Confirming is required\r\n            </md-error>\r\n          </md-input-container>\r\n        </md-grid-tile>\r\n        <md-grid-tile colspan=\"1\">\r\n          <button md-raised-button color=\"accent\" type=\"button\" (click)=\"cancelEditing()\">Cancel</button>\r\n        </md-grid-tile>\r\n        <md-grid-tile colspan=\"1\" class=\"right\">\r\n          <button md-raised-button color=\"accent\" type=\"button\" (click)=\"updateUser()\" [disabled]=\"(profileGroup.invalid)||(!detectChanges())||showSpinner||invalid\">Save changes</button>\r\n          <img *ngIf=\"showSpinner\" src=\"../../../assets/img/spinner.gif\">\r\n        </md-grid-tile>\r\n      </md-grid-list>\r\n    </form>\r\n  </md-card>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".divider {\n  border-bottom: 1px solid #F44336; }\n\n.sec {\n  padding-bottom: 10px; }\n\n.heading {\n  font-family: 'Roboto Slab', Arial;\n  font-weight: bold;\n  font-size: 26px; }\n\n.heading small {\n  font-family: Arial;\n  font-size: 14px; }\n\nmd-card {\n  margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsComponent = (function () {
    function SettingsComponent(authService, hungryService, fb, snackBar, router) {
        this.authService = authService;
        this.hungryService = hungryService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.router = router;
        this.userId = this.authService.getLoggedInUser().id;
        this.initialLastName = ''; //: string;
        // private initialRole: string;
        // Flag for refreshing inputs after 409 error
        this.change = false;
        // spinner
        this.showSpinner = false;
        this.invalid = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // load user
        this.loadUser();
        // Create formGroup
        this.profileGroup = this.fb.group({
            // role: [''],
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].minLength(1)]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].minLength(1)]],
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                ]
            ],
            password: ['', [
                    //Validators.required,
                    // tslint:disable-next-line:max-line-length
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].pattern(/^(?=.*[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|])[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|]{6,}$/)
                ]],
            confirm: ['', [
                    //Validators.required,
                    // tslint:disable-next-line:max-line-length
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* Validators */].pattern(/^(?=.*[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|])[A-Za-z\d$@!%*#?&\^\-\_\=\+\<\>\(\)\{\}\[\]\\\\\/\.\,~`|]{6,}$/),
                    this.validateEqual
                ],
            ],
        });
    };
    // Custom validator for password and confirm password
    SettingsComponent.prototype.validateEqual = function (control) {
        if (control.parent != null) {
            return (control.parent.value.password === control.value) ? null : { 'confirmError': true };
        }
        else {
            return { 'confirmError': true };
        }
    };
    // trigger confirm password validator
    SettingsComponent.prototype.onPasswordChange = function () {
        this.profileGroup.controls.confirm.updateValueAndValidity();
    };
    SettingsComponent.prototype.loadUser = function () {
        var _this = this;
        this.hungryService.settingsGet(this.userId).subscribe(function (user) {
            _this.user = user;
            _this.initialEmail = user.email;
            _this.initialFirstName = user.firstName;
            _this.initialLastName = user.lastName;
            // this.initialRole = user.role;
            // this.profileGroup.controls.role.patchValue(user.role);
            _this.profileGroup.controls.firstName.patchValue(user.firstName);
            _this.profileGroup.controls.lastName.patchValue(user.lastName);
            _this.profileGroup.controls.email.patchValue(user.email);
            _this.profileGroup.get('password');
        }, function (error) { }); //console.log(error));
    };
    SettingsComponent.prototype.displayRole = function () {
        switch (this.user.role) {
            case 'HUNGRY':
                return 'Hungry';
            case 'CHEF':
                return 'Chef';
            case 'ADMIN':
                return 'Admin';
            case 'hungry':
                return 'Hungry';
            case 'chef':
                return 'Chef';
            case 'admin':
                return 'Admin';
        }
    };
    // if changes of initial values enable 'Save changes' button
    SettingsComponent.prototype.detectChanges = function () {
        if ((this.user.firstName !== this.initialFirstName) || (this.user.lastName !== this.initialLastName) ||
            (this.user.email !== this.initialEmail) || (this.profileGroup.controls.password.value !== '')) {
            return true;
        }
        else {
            return false;
        }
    };
    // status -> 1:success , 2:warning, 3:error
    SettingsComponent.prototype.openSnackBar = function (message, action, status) {
        switch (status) {
            case 1:
                this.snackBar.open(message, action, {
                    duration: 5000,
                    extraClasses: ['success-snack-bar']
                });
                break;
            case 2:
                this.snackBar.open(message, action, {
                    extraClasses: ['warning-snack-bar']
                });
                break;
            case 3:
                this.snackBar.open(message, action, {
                    extraClasses: ['error-snack-bar']
                });
                break;
        }
    };
    SettingsComponent.prototype.updateUser = function () {
        var _this = this;
        var userSettings = {};
        userSettings.firstName = this.user.firstName;
        userSettings.lastName = this.user.lastName;
        // userSettings.role = this.user.role;
        this.user.role.toLowerCase();
        userSettings.email = this.user.email;
        userSettings.lastEdit = this.user.lastEdit;
        userSettings.password = this.profileGroup.controls.password.value;
        this.showSpinner = true;
        this.hungryService.settingsPut(userSettings)
            .subscribe(function (result) {
            _this.showSpinner = false;
            _this.user.role.toLowerCase();
            _this.authService.updateUserDetails(_this.user);
            _this.openSnackBar('You succefully modified your settings!', 'ok', 1);
            _this.router.navigate(['/' + _this.user.role.toLowerCase() + '/']);
        }, function (error) {
            _this.showSpinner = false;
            switch (error.status) {
                // User has both final and non-final orders. Can be force disapproved
                case 400:
                    _this.openSnackBar('User can not be modified! Some data are invalid', 'ok', 3);
                    break;
                // User has only non-final orders. Can be force deleted
                case 409:
                    var newUserVersion = JSON.parse(error._body);
                    _this.user.lastName = newUserVersion.lastName;
                    _this.user.firstName = newUserVersion.firstName;
                    _this.user.email = newUserVersion.email;
                    _this.user.role = newUserVersion.role.toLowerCase();
                    _this.user.approved = newUserVersion.approved;
                    _this.user.lastEdit.version = newUserVersion.lastEdit.version;
                    //Refresh initial values
                    _this.initialEmail = newUserVersion.email;
                    _this.initialFirstName = newUserVersion.firstName;
                    _this.initialLastName = newUserVersion.lastName;
                    // this.initialRole = newUserVersion.role.toLowerCase();
                    _this.change = !_this.change;
                    _this.openSnackBar('Your settings have been previously modified. The newest version is now displayed in the form', 'ok', 2);
                    break;
                // User has only final orders. Can be disapproved
                case 500:
                    _this.openSnackBar('User can not be modified!', 'ok', 3);
                    break;
                default:
            }
            //console.log(error);
        });
    };
    SettingsComponent.prototype.cancelEditing = function () {
        this.router.navigate(['/' + this.user.role.toLowerCase() + '/']);
    };
    // Callball after invalid data in form from profile component
    SettingsComponent.prototype.handleInvalidProfileForm = function (validFlag) {
        if (validFlag === "invalid") {
            this.invalid = true;
        }
        else {
            this.invalid = false;
        }
    };
    // Update user version after profile picture change
    SettingsComponent.prototype.handleUpdateVersion = function () {
        this.user.lastEdit.version += 1;
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/shared/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/settings/settings.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = (typeof __WEBPACK_IMPORTED_MODULE_1__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__remote__).HungryApi) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _e || Object])
], SettingsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/shared/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logged_logged_component__ = __webpack_require__("../../../../../src/app/shared/logged/logged.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__remote_configuration__ = __webpack_require__("../../../../../src/app/remote/configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_month_nav_month_nav_component__ = __webpack_require__("../../../../../src/app/shared/header/month-nav/month-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pagination_pagination_component__ = __webpack_require__("../../../../../src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__slide_toggle_slide_toggle_component__ = __webpack_require__("../../../../../src/app/shared/slide-toggle/slide-toggle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__ = __webpack_require__("../../../../../src/app/shared/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_global_settings_service_service__ = __webpack_require__("../../../../../src/app/shared/services/global-settings-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__settings_settings_component__ = __webpack_require__("../../../../../src/app/shared/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__header_header_component__ = __webpack_require__("../../../../../src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__footer_tabs_tabs_component__ = __webpack_require__("../../../../../src/app/shared/footer/tabs/tabs.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_21_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["l" /* MdTabsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["n" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["p" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["q" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular_calendar__["a" /* CalendarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["DecimalPipe"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["LowerCasePipe"],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["r" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_13__header_month_nav_month_nav_component__["a" /* MonthNavComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pagination_pagination_component__["a" /* PaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_15__slide_toggle_slide_toggle_component__["a" /* SlideToggleComponent */],
            __WEBPACK_IMPORTED_MODULE_15__slide_toggle_slide_toggle_component__["b" /* UserDisapproveDialog */],
            __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* DeletePictureDialog */],
            __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["b" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_3__logged_logged_component__["a" /* LoggedComponent */],
            __WEBPACK_IMPORTED_MODULE_13__header_month_nav_month_nav_component__["a" /* MonthNavComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pagination_pagination_component__["a" /* PaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_15__slide_toggle_slide_toggle_component__["a" /* SlideToggleComponent */],
            __WEBPACK_IMPORTED_MODULE_15__slide_toggle_slide_toggle_component__["b" /* UserDisapproveDialog */],
            __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* DeletePictureDialog */],
            __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["b" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_18__settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__["b" /* TermsDialog */],
            __WEBPACK_IMPORTED_MODULE_22__footer_tabs_tabs_component__["a" /* TabsComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_12__remote_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["DecimalPipe"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_17__services_global_settings_service_service__["a" /* GlobalSettingsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["LowerCasePipe"]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__slide_toggle_slide_toggle_component__["b" /* UserDisapproveDialog */],
            __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* DeletePictureDialog */],
            __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__["b" /* TermsDialog */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/slide-toggle/slide-toggle.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<md-slide-toggle class=\"example-margin\" color=\"accent\" [checked]=\"user.approved\" (change)=\"approve($event, !user.approved)\"\r\n  [disabled]=\"user.id===1||user.id===userId\">\r\n  <!--{{approvedText}} -->\r\n  <span *ngIf=\"user.approved\">User approved</span>\r\n  <span *ngIf=\"!user.approved\">User not approved</span>\r\n</md-slide-toggle>\r\n<!--<md-slide-toggle>\r\n</md-slide-toggle>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/slide-toggle/slide-toggle.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/slide-toggle/slide-toggle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remote__ = __webpack_require__("../../../../../src/app/remote/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideToggleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserDisapproveDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SlideToggleComponent = (function () {
    function SlideToggleComponent(adminService, authService, dialog) {
        this.adminService = adminService;
        this.authService = authService;
        this.dialog = dialog;
        this.updateVersion = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userId = this.authService.getLoggedInUser().id;
    }
    SlideToggleComponent.prototype.ngOnInit = function () {
        // if (this.user.approved) {
        //   this.approvedText = 'User approved';
        // } else {
        //   this.approvedText = 'User not approved';
        // }
    };
    SlideToggleComponent.prototype.forceDisapprove = function () {
        var _this = this;
        this.adminService.usersIdApprovePut(this.user.id, false, true)
            .subscribe(function (value) {
            _this.user.approved = false;
            _this.updateVersion.emit();
        }, function (error) { return console.log(error); });
    };
    SlideToggleComponent.prototype.approve = function (event, aprv) {
        var _this = this;
        if (aprv) {
            this.adminService.usersIdApprovePut(this.user.id, aprv)
                .subscribe(function (value) {
                _this.user.approved = true;
                _this.updateVersion.emit();
            }, function (error) { return console.log(error); });
        }
        else {
            this.adminService.usersIdApprovePut(this.user.id, aprv, false)
                .subscribe(function (value) {
                _this.user.approved = false;
                _this.updateVersion.emit();
            }, function (error) {
                console.log(error);
                if (error.status === 400) {
                    event.source.checked = true;
                }
                else if (error.status === 409) {
                    event.source.checked = true;
                    var dialogRef = _this.dialog.open(UserDisapproveDialog, {});
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            _this.forceDisapprove();
                        }
                        //  else {
                        // //  this.approvedText = 'User approved';
                        // }
                    });
                }
            });
        }
    };
    return SlideToggleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_1__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__remote__).User) === "function" && _a || Object)
], SlideToggleComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SlideToggleComponent.prototype, "updateVersion", void 0);
SlideToggleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-slide-toggle-component',
        template: __webpack_require__("../../../../../src/app/shared/slide-toggle/slide-toggle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/slide-toggle/slide-toggle.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = (typeof __WEBPACK_IMPORTED_MODULE_1__remote__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__remote__).AdminApi) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MdDialog */]) === "function" && _d || Object])
], SlideToggleComponent);

var UserDisapproveDialog = (function () {
    function UserDisapproveDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return UserDisapproveDialog;
}());
UserDisapproveDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-disapprove-dialog',
        template: __webpack_require__("../../../../../src/app/shared/slide-toggle/user-disapprove-dialog.html"),
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdDialogRef */]) === "function" && _e || Object])
], UserDisapproveDialog);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=slide-toggle.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/slide-toggle/user-disapprove-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"centered\" md-dialog-title>Disapprove user</h1>\r\n<div class=\"dialog-content-size centered\" md-dialog-content>\r\n  <div>User has non final orders. </div>\r\n  <div>Do you want to delete the non final orders and disapprove the user?</div>\r\n</div>\r\n\r\n<md-grid-list cols=\"4\" rowHeight=\"50px\">\r\n  <md-grid-tile>\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n    <button md-raised-button color=\"accent\" (click)=\"dialogRef.close('Yes')\">Yes</button>\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n    <button md-raised-button color=\"accent\" (click)=\"dialogRef.close('No')\">No</button>\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map