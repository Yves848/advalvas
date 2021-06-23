(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/yves/git/advalvas/src/main.ts */"zUnb");


/***/ }),

/***/ "4zdL":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/main.service */ "c/rV");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");








function ToolbarComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.goCalendar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.goList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.signIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.mainService.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ToolbarComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.getTitle());
} }
function ToolbarComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "AdValvas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ToolbarComponent {
    constructor(mainService, auth, router) {
        this.mainService = mainService;
        this.auth = auth;
        this.router = router;
        this.items = [];
        this.title = '';
        this.getTitle = () => {
            if (this.mainService.user.displayName) {
                return `Advalvas - ${this.mainService.user.displayName}`;
            }
            else {
                return `Advalvas`;
            }
        };
    }
    ngOnInit() {
        this.mainService.checkLocalStorage();
        this.items = [{ label: 'Fichier' }];
    }
    signIn() {
        this.router.navigate(['signin']);
    }
    goCalendar() {
        this.router.navigate(['calendar']);
    }
    goList() {
        this.router.navigate(['list']);
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 12, vars: 7, consts: [[1, "p-toolbar-group-left"], ["pButton", "", "pRipple", "", "type", "button", "label", "Calendrier", "style", "width: 10rem;", "class", "p-button-rounded p-button-primary btn", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "label", "Liste", "style", "width: 10rem;", "class", "p-button-rounded p-button-primary btn", 3, "click", 4, "ngIf"], [1, "p-toolbar-group-right"], ["pButton", "", "pRipple", "", "type", "button", "label", "S'identifier", "class", "p-button-rounded p-button-warning btn", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "label", "Se D\u00E9connecter", "class", "p-button-rounded p-button-warning btn", 3, "click", 4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["userLoggedIn", ""], ["noUser", ""], ["pButton", "", "pRipple", "", "type", "button", "label", "Calendrier", 1, "p-button-rounded", "p-button-primary", "btn", 2, "width", "10rem", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Liste", 1, "p-button-rounded", "p-button-primary", "btn", 2, "width", "10rem", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "S'identifier", 1, "p-button-rounded", "p-button-warning", "btn", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Se D\u00E9connecter", 1, "p-button-rounded", "p-button-warning", "btn", 3, "click"], [2, "margin", "0px", "padding", "0px"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToolbarComponent_button_2_Template, 1, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToolbarComponent_button_3_Template, 1, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToolbarComponent_button_5_Template, 1, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ToolbarComponent_button_6_Template, 1, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ToolbarComponent_div_7_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ToolbarComponent_ng_template_8_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ToolbarComponent_ng_template_10_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainService.user !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainService.user !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainService.user === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainService.user !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainService.user)("ngIfThen", _r5)("ngIfElse", _r7);
    } }, directives: [primeng_toolbar__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], primeng_ripple__WEBPACK_IMPORTED_MODULE_7__["Ripple"]], styles: [".btn[_ngcontent-%COMP%] {\n  margin: 0px 10px 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGIiwiZmlsZSI6InRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMTBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "5Fl7":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/main.service */ "c/rV");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");






const _c0 = function () { return { "width": "200px", "text-align": "center" }; };
class SigninComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.email = '';
        this.password = '';
    }
    submit(event) {
        this.mainService.login(this.email, this.password);
    }
    ngOnInit() {
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 15, vars: 8, consts: [["header", "Sing-In"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-12", "p-md-6"], ["for", "email"], ["id", "email", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], ["for", "password"], ["id", "password", "type", "password", "pInputText", "", 3, "ngModel", "ngModelChange"], [1, "p-d-flex", "p-jc-center"], [1, "p-mr-2"], ["label", "Submit", 3, "onClick"], ["label", "Clear"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Adresse mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_5_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_9_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function SigninComponent_Template_p_button_onClick_12_listener($event) { return ctx.submit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_2__["Card"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["Button"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "7atc":
/*!***********************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.ts ***!
  \***********************************************************/
/*! exports provided: CalenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenComponent", function() { return CalenComponent; });
/* harmony import */ var _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/interfaces */ "IeiB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/main.service */ "c/rV");
/* harmony import */ var src_app_services_meals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/meals.service */ "eE3V");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/categories.service */ "ycII");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/overlaypanel */ "z8Lm");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ "jIHw");













const _c0 = ["calendar"];
const _c1 = ["op"];
function CalenComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Heure");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p-dropdown", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CalenComponent_ng_template_9_Template_p_dropdown_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.selectedHour = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Repas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CalenComponent_ng_template_9_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.aMeal.content = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalenComponent_ng_template_9_Template_button_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.deleteEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalenComponent_ng_template_9_Template_button_click_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.saveMeal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r2.hours)("ngModel", ctx_r2.selectedHour)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.aMeal.content);
} }
class CalenComponent {
    constructor(mainService, mealService, categService, router) {
        this.mainService = mainService;
        this.mealService = mealService;
        this.categService = categService;
        this.router = router;
        this.id = '';
        this.aMeal = { date: "", content: "", moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].Dejeuner };
        this.rHours = new Map();
        this.hours = [
            { moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].Dejeuner, name: 'Déjeuner', color: 'green' },
            { moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].DixHeure, name: '10h', color: 'red' },
            { moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].Diner, name: 'Dîner', color: 'yellow' },
            { moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].SeizeHeure, name: '16h', color: 'blue' },
            { moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].Souper, name: 'Souper', color: 'teal' },
        ];
        this.filteredHours = [];
        this.getHourIndex = (amoment) => {
            const index = this.hours.map(hour => { return hour.moment; }).indexOf(amoment);
            return index;
        };
        this.getHourColor = (aMoment) => {
            return this.hours[this.getHourIndex(aMoment)].color;
        };
        this.eventChange = (updateInfo) => {
            console.log('eventChange ', updateInfo);
        };
        this.saveMeal = (event) => {
            var _a, _b;
            const eventObj = (_a = this.calendar) === null || _a === void 0 ? void 0 : _a.getApi().getEventById(this.id);
            console.log('saveMeal [moment]', this.selectedHour);
            console.log("saveMeal [eventObj]", eventObj);
            const anEvent = this.anEvent;
            this.aMeal = {
                date: this.aMeal.date,
                moment: this.selectedHour.moment,
                content: this.aMeal.content
            };
            this.mainService.EVENTS.push({
                id: this.id,
                start: `${this.aMeal.date}T${this.selectedHour.moment}`,
                title: this.aMeal.content,
                meal: this.aMeal,
            });
            console.log("saveMeal [this.aMeal]", this.aMeal);
            eventObj === null || eventObj === void 0 ? void 0 : eventObj.setStart(`${this.aMeal.date}T${this.selectedHour.moment}`);
            eventObj === null || eventObj === void 0 ? void 0 : eventObj.setExtendedProp('meal', this.aMeal);
            eventObj === null || eventObj === void 0 ? void 0 : eventObj.setProp('title', this.aMeal.content);
            this.categService.updateMeal(this.id, this.aMeal);
            (_b = this.op) === null || _b === void 0 ? void 0 : _b.toggle(anEvent.event, anEvent.el);
        };
        this.getMeals = () => {
            console.log('getMeals');
            this.mealService.getMeals().subscribe((res) => {
                var _a;
                this.mainService.EVENTS = [];
                (_a = this.calendar) === null || _a === void 0 ? void 0 : _a.getApi().removeAllEvents();
                res.forEach((element) => {
                    var _a;
                    const aMeal = element.payload.doc.data();
                    const anApi = (_a = this.calendar) === null || _a === void 0 ? void 0 : _a.getApi().addEvent({
                        id: element.payload.doc.id,
                        start: `${aMeal.date}T${aMeal.moment}`,
                        title: aMeal.content,
                        meal: aMeal,
                        className: 'red'
                    });
                });
            });
        };
        this.checkID = (el) => {
            return el.id === this.id;
        };
        this.listClick = () => {
            console.log('listClick');
            this.router.navigate(['list']);
        };
        this.deleteEvent = (event) => {
            var _a, _b;
            const eventObj = (_a = this.calendar) === null || _a === void 0 ? void 0 : _a.getApi().getEventById(this.id);
            const anEvent = this.anEvent;
            (_b = this.op) === null || _b === void 0 ? void 0 : _b.toggle(anEvent.event, anEvent.el);
            eventObj === null || eventObj === void 0 ? void 0 : eventObj.remove();
            this.categService.removeMeal(this.id);
        };
        this.addEvent = () => {
            console.log('addEvent');
        };
        this.calendarOptions = {
            initialView: 'dayGridMonth',
            locale: 'fr',
            buttonText: {
                today: "Aujourd'hui",
            },
            editable: true,
            height: '80vh',
            eventChange: this.eventChange,
            //eventMouseEnter: this.onHover.bind(this),
            //eventMouseLeave: this.onLeave.bind(this),
            eventClick: this.onClick.bind(this),
            dateClick: this.onDateClick.bind(this),
            events: this.mainService.EVENTS,
            headerToolbar: {
                left: 'title dayGridMonth,dayGridWeek,timeGridDay',
                center: 'today',
                right: 'prev,next',
            },
        };
    }
    onClick(arg) {
        var _a, _b;
        const el = (_a = this.calendar) === null || _a === void 0 ? void 0 : _a.getApi().getEventById(arg.event.id);
        this.id = arg.event.id;
        this.anEvent = arg;
        this.aMeal = arg.event.extendedProps.meal;
        console.log('aMeal', this.aMeal);
        //this.selectedHour = this.rHours.get(this.aMeal.moment);
        this.selectedHour = this.hours[this.getHourIndex(this.aMeal.moment)];
        console.log('this.selectedHour', this.selectedHour);
        (_b = this.op) === null || _b === void 0 ? void 0 : _b.toggle(arg.event, arg.el);
    }
    filterHour(event) {
        let filtered = [];
        let query = event.query;
        for (let i = 0; i < this.hours.length; i++) {
            let hour = this.hours[i];
            if (hour.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(hour);
            }
        }
        this.filteredHours = filtered;
    }
    onDateClick(args) {
        const aData = {
            date: `${args.dateStr}`,
            moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].Dejeuner,
            content: `${args.dateStr} Event`,
        };
        this.categService.putMeal(aData);
    }
    eventAdd(addIndo) {
        console.log('eventAdd :', addIndo);
    }
    ngOnInit() {
        this.getMeals();
        this.rHours.set(_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].Dejeuner, "Déjeuner");
        this.rHours.set(_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].DixHeure, "10h");
        this.rHours.set(_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].Diner, "Dîner");
        this.rHours.set(_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].SeizeHeure, "16h");
        this.rHours.set(_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].Souper, "Souper");
    }
}
CalenComponent.ɵfac = function CalenComponent_Factory(t) { return new (t || CalenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_meals_service__WEBPACK_IMPORTED_MODULE_3__["MealsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CalenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CalenComponent, selectors: [["app-calendar"]], viewQuery: function CalenComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.calendar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.op = _t.first);
    } }, decls: 10, vars: 1, consts: [[1, "calgen"], [1, "p-grid"], [1, "p-col-2"], [1, "p-col"], [3, "options"], ["calendar", ""], ["op", ""], ["pTemplate", ""], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col"], ["for", "Hour"], ["optionLabel", "name", 3, "options", "ngModel", "showClear", "ngModelChange"], ["for", "repas"], ["id", "repas", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], [1, "p-fluid", "p-grid"], ["type", "text", "pButton", "", "label", "Delete", 3, "click"], ["type", "text", "pButton", "", "label", "Save", 3, "click"]], template: function CalenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "full-calendar", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p-overlayPanel", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CalenComponent_ng_template_9_Template, 16, 4, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.calendarOptions);
    } }, directives: [_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__["FullCalendarComponent"], primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_7__["OverlayPanel"], primeng_api__WEBPACK_IMPORTED_MODULE_8__["PrimeTemplate"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputText"], primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonDirective"]], styles: ["#repas[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.red[_ngcontent-%COMP%]   .fc-event-dot[_ngcontent-%COMP%] {\n  background-color: red;\n  border-color: red;\n  color: #FFF !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsWUFBQTtBQUhGOztBQUtBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBRkYiLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsZ2VuIHtcblxufVxuXG4jcmVwYXMge1xuICB3aWR0aDogMzAwcHhcbn1cbi5yZWQgLmZjLWV2ZW50LWRvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ "9X1/":
/*!*****************************************************!*\
  !*** ./src/app/components/liste/liste.component.ts ***!
  \*****************************************************/
/*! exports provided: ListeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeComponent", function() { return ListeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var _addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addmeal/addmeal.component */ "OMAV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/main.service */ "c/rV");
/* harmony import */ var _services_meals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/meals.service */ "eE3V");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/categories.service */ "ycII");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












function ListeComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Heure");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Repas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 100);
} }
const _c0 = function (a0) { return { row_dejeuner: a0 }; };
function ListeComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListeComponent_ng_template_7_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const event_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.onMinusClick(event_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, event_r2.moment === "08:00:00"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c0, event_r2.moment === "08:00:00"))("width", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c0, event_r2.moment === "08:00:00"))("width", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", event_r2.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c0, event_r2.moment === "08:00:00"))("width", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", event_r2.moment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c0, event_r2.moment === "08:00:00"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", event_r2.content, " ");
} }
class ListeComponent {
    constructor(ws, mealService, categService, dialogService) {
        this.ws = ws;
        this.mealService = mealService;
        this.categService = categService;
        this.dialogService = dialogService;
        this.EVENTS = [];
        this.visibleSidebar2 = true;
        this.onPlusClick = (id) => {
            console.log('click', id);
        };
        this.onMinusClick = (id) => {
            console.log('minusclick', id);
            this.categService.removeMeal(id);
            this.getMeals();
        };
        this.asyncForEach = (anArray, callbak) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('for');
            for (var i = 0; i <= anArray.length - 1; i++) {
                yield callbak(anArray[i]);
            }
        });
        this.getMeals = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('getMeals');
            const tempEvents = [];
            var aRes = [];
            this.mealService.getMeals().subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                aRes = res;
                console.log('res', aRes);
                this.EVENTS = [];
                yield this.asyncForEach(aRes, (element) => {
                    const aMeal = element.payload.doc.data();
                    aMeal.id = element.payload.doc.id;
                    console.log('foreach ', aMeal.id, aMeal.date);
                    const pos = tempEvents
                        .map(function (e) {
                        return e.id;
                    })
                        .indexOf(aMeal.id);
                    if (pos === -1) {
                        tempEvents.push(aMeal);
                    }
                });
                this.EVENTS = tempEvents.sort((meal1, meal2) => {
                    const t1 = `${meal1.date}T${meal1.moment}`;
                    const t2 = `${meal2.date}T${meal2.moment}`;
                    if (t1 >= t2)
                        return 1;
                    else
                        return -1;
                });
            }));
        });
    }
    ngOnDestroy() {
        if (this.ref) {
            this.ref.close();
        }
    }
    show() {
        this.ref = this.dialogService.open(_addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_2__["AddmealComponent"], {
            header: "Ajouter un repas",
            width: '80%',
            contentStyle: { "max-height": "1000px", "overflow": "auto" },
            baseZIndex: 10000
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getMeals();
            console.log('init');
        });
    }
}
ListeComponent.ɵfac = function ListeComponent_Factory(t) { return new (t || ListeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_meals_service__WEBPACK_IMPORTED_MODULE_5__["MealsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"])); };
ListeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ListeComponent, selectors: [["app-liste"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]])], decls: 8, vars: 2, consts: [[1, "p-grid"], [1, "p-col-2", "divbtn"], [2, "margin-top", "15px"], ["type", "button", "pButton", "", "label", "Ajouter", 1, "p-button-rounded", "p-button-outlined", 2, "width", "100%", "text-align", "center", 3, "click"], [1, "p-col"], ["scrollHeight", "80vh", 3, "value", "scrollable"], ["pTemplate", "header"], ["pTemplate", "body"], [3, "width"], [3, "ngClass"], [3, "ngClass", "width"], [1, "pi", "pi-pencil", "myIcon"], [1, "pi", "pi-minus-circle", "myIcon", 3, "click"]], template: function ListeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListeComponent_Template_button_click_3_listener() { return ctx.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ListeComponent_ng_template_6_Template, 8, 3, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ListeComponent_ng_template_7_Template, 10, 21, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.EVENTS)("scrollable", true);
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]], styles: [".myIcon[_ngcontent-%COMP%] {\n  padding: 0px 2px 0px 0px;\n}\n\n[_nghost-%COMP%]     .row_dejeuner {\n  background-color: dimgrey;\n  color: aqua;\n}\n\n.divbtn[_ngcontent-%COMP%] {\n  align-content: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpc3RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0EscUJBQUE7QUFDQTs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJsaXN0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teUljb24ge1xuICBwYWRkaW5nOiAwcHggMnB4IDBweCAwcHhcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5yb3dfZGVqZXVuZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5O1xuICBjb2xvcjogYXF1YTtcbn1cblxuLmRpdmJ0biB7XG5hbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMjAwcHg7XG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "AbNe":
/*!************************************!*\
  !*** ./src/app/primeComponents.ts ***!
  \************************************/
/*! exports provided: PrimeComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeComponentsModule", function() { return PrimeComponentsModule; });
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/autocomplete */ "V5BG");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/cascadeselect */ "A1Di");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/chips */ "RGqm");
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/colorpicker */ "bv7W");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/editor */ "dgC2");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputmask */ "CwEU");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputswitch */ "rLzU");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_knob__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/knob */ "EbAv");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/keyfilter */ "sKUQ");
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/listbox */ "+07z");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/multiselect */ "lVkt");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/password */ "+YxP");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/radiobutton */ "LuMj");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/rating */ "Js94");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/slider */ "+la4");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/selectbutton */ "5o1E");
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/togglebutton */ "Y+ZO");
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/tristatecheckbox */ "rph/");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/splitbutton */ "Wq6t");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/dataview */ "8CEF");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var primeng_gmap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/gmap */ "QRRn");
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/orderlist */ "cQJI");
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/organizationchart */ "dQiQ");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/paginator */ "6t4m");
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/picklist */ "iHf9");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/timeline */ "mgTN");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/tree */ "g9iH");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/treetable */ "EVgl");
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/virtualscroller */ "+/m8");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/accordion */ "7LiV");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/divider */ "lUkA");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/fieldset */ "fk4S");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/panel */ "7CaW");
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/splitter */ "ZZi9");
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/scrollpanel */ "SSqW");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/tabview */ "dPl2");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! primeng/confirmpopup */ "RTT/");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! primeng/overlaypanel */ "z8Lm");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! primeng/sidebar */ "jLSX");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! primeng/fileupload */ "NCSE");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! primeng/menu */ "1SLH");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! primeng/breadcrumb */ "URcr");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! primeng/contextmenu */ "yNBN");
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! primeng/megamenu */ "BAkx");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! primeng/panelmenu */ "kSmT");
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! primeng/slidemenu */ "3k5r");
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! primeng/steps */ "KcHJ");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! primeng/tabmenu */ "c+7h");
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! primeng/tieredmenu */ "B16f");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! primeng/chart */ "I5S5");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! primeng/messages */ "dts7");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! primeng/message */ "FMpt");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! primeng/carousel */ "LwO5");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! primeng/galleria */ "2art");
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! primeng/dragdrop */ "TjhJ");
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! primeng/avatar */ "+F6F");
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! primeng/avatargroup */ "sKsN");
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! primeng/badge */ "fqaE");
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! primeng/blockui */ "0LTx");
/* harmony import */ var primeng_captcha__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! primeng/captcha */ "bcVJ");
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! primeng/chip */ "wxlm");
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! primeng/inplace */ "QvPt");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! primeng/progressbar */ "+DzE");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! primeng/scrolltop */ "JD6B");
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! primeng/skeleton */ "jeV5");
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! primeng/tag */ "hYoW");
/* harmony import */ var primeng_terminal__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! primeng/terminal */ "6s7b");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! @fullcalendar/daygrid */ "PN1e");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! @fullcalendar/interaction */ "ogxq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! @angular/core */ "fXoL");






















































































 // a plugin
 // a plugin

_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_27__["FullCalendarModule"].registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_86__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_87__["default"]
]);
class PrimeComponentsModule {
}
PrimeComponentsModule.ɵfac = function PrimeComponentsModule_Factory(t) { return new (t || PrimeComponentsModule)(); };
PrimeComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_88__["ɵɵdefineNgModule"]({ type: PrimeComponentsModule });
PrimeComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_88__["ɵɵdefineInjector"]({ imports: [primeng_autocomplete__WEBPACK_IMPORTED_MODULE_0__["AutoCompleteModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_1__["ButtonModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModule"],
        primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_3__["CascadeSelectModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
        primeng_chips__WEBPACK_IMPORTED_MODULE_5__["ChipsModule"],
        primeng_colorpicker__WEBPACK_IMPORTED_MODULE_6__["ColorPickerModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
        primeng_editor__WEBPACK_IMPORTED_MODULE_8__["EditorModule"],
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_9__["InputMaskModule"],
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_10__["InputSwitchModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputTextModule"],
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__["InputTextareaModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__["InputNumberModule"],
        primeng_knob__WEBPACK_IMPORTED_MODULE_14__["KnobModule"],
        primeng_keyfilter__WEBPACK_IMPORTED_MODULE_15__["KeyFilterModule"],
        primeng_listbox__WEBPACK_IMPORTED_MODULE_16__["ListboxModule"],
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_17__["MultiSelectModule"],
        primeng_password__WEBPACK_IMPORTED_MODULE_18__["PasswordModule"],
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_19__["RadioButtonModule"],
        primeng_rating__WEBPACK_IMPORTED_MODULE_20__["RatingModule"],
        primeng_slider__WEBPACK_IMPORTED_MODULE_21__["SliderModule"],
        primeng_selectbutton__WEBPACK_IMPORTED_MODULE_22__["SelectButtonModule"],
        primeng_togglebutton__WEBPACK_IMPORTED_MODULE_23__["ToggleButtonModule"],
        primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_24__["TriStateCheckboxModule"],
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_25__["SplitButtonModule"],
        primeng_dataview__WEBPACK_IMPORTED_MODULE_26__["DataViewModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_27__["FullCalendarModule"],
        primeng_gmap__WEBPACK_IMPORTED_MODULE_28__["GMapModule"],
        primeng_orderlist__WEBPACK_IMPORTED_MODULE_29__["OrderListModule"],
        primeng_organizationchart__WEBPACK_IMPORTED_MODULE_30__["OrganizationChartModule"],
        primeng_paginator__WEBPACK_IMPORTED_MODULE_31__["PaginatorModule"],
        primeng_picklist__WEBPACK_IMPORTED_MODULE_32__["PickListModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_33__["TableModule"],
        primeng_timeline__WEBPACK_IMPORTED_MODULE_34__["TimelineModule"],
        primeng_tree__WEBPACK_IMPORTED_MODULE_35__["TreeModule"],
        primeng_treetable__WEBPACK_IMPORTED_MODULE_36__["TreeTableModule"],
        primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_37__["VirtualScrollerModule"],
        primeng_accordion__WEBPACK_IMPORTED_MODULE_38__["AccordionModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_39__["CardModule"],
        primeng_divider__WEBPACK_IMPORTED_MODULE_40__["DividerModule"],
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_41__["FieldsetModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_42__["PanelModule"],
        primeng_splitter__WEBPACK_IMPORTED_MODULE_43__["SplitterModule"],
        primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_44__["ScrollPanelModule"],
        primeng_tabview__WEBPACK_IMPORTED_MODULE_45__["TabViewModule"],
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_46__["ToolbarModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_47__["ConfirmDialogModule"],
        primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_48__["ConfirmPopupModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_49__["DialogModule"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_50__["DynamicDialogModule"],
        primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_51__["OverlayPanelModule"],
        primeng_sidebar__WEBPACK_IMPORTED_MODULE_52__["SidebarModule"],
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_53__["TooltipModule"],
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_54__["FileUploadModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_55__["HttpClientModule"],
        primeng_menu__WEBPACK_IMPORTED_MODULE_56__["MenuModule"],
        primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_57__["BreadcrumbModule"],
        primeng_contextmenu__WEBPACK_IMPORTED_MODULE_58__["ContextMenuModule"],
        primeng_megamenu__WEBPACK_IMPORTED_MODULE_59__["MegaMenuModule"],
        primeng_menubar__WEBPACK_IMPORTED_MODULE_60__["MenubarModule"],
        primeng_panelmenu__WEBPACK_IMPORTED_MODULE_61__["PanelMenuModule"],
        primeng_slidemenu__WEBPACK_IMPORTED_MODULE_62__["SlideMenuModule"],
        primeng_steps__WEBPACK_IMPORTED_MODULE_63__["StepsModule"],
        primeng_tabmenu__WEBPACK_IMPORTED_MODULE_64__["TabMenuModule"],
        primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_65__["TieredMenuModule"],
        primeng_chart__WEBPACK_IMPORTED_MODULE_66__["ChartModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_67__["MessagesModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_68__["MessageModule"],
        primeng_carousel__WEBPACK_IMPORTED_MODULE_69__["CarouselModule"],
        primeng_galleria__WEBPACK_IMPORTED_MODULE_70__["GalleriaModule"],
        primeng_dragdrop__WEBPACK_IMPORTED_MODULE_71__["DragDropModule"],
        primeng_avatar__WEBPACK_IMPORTED_MODULE_72__["AvatarModule"],
        primeng_avatargroup__WEBPACK_IMPORTED_MODULE_73__["AvatarGroupModule"],
        primeng_badge__WEBPACK_IMPORTED_MODULE_74__["BadgeModule"],
        primeng_blockui__WEBPACK_IMPORTED_MODULE_75__["BlockUIModule"],
        primeng_captcha__WEBPACK_IMPORTED_MODULE_76__["CaptchaModule"],
        primeng_chip__WEBPACK_IMPORTED_MODULE_77__["ChipModule"],
        primeng_inplace__WEBPACK_IMPORTED_MODULE_78__["InplaceModule"],
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_79__["ProgressBarModule"],
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_80__["ProgressSpinnerModule"],
        primeng_scrolltop__WEBPACK_IMPORTED_MODULE_81__["ScrollTopModule"],
        primeng_skeleton__WEBPACK_IMPORTED_MODULE_82__["SkeletonModule"],
        primeng_tag__WEBPACK_IMPORTED_MODULE_83__["TagModule"],
        primeng_terminal__WEBPACK_IMPORTED_MODULE_84__["TerminalModule"],
        primeng_ripple__WEBPACK_IMPORTED_MODULE_85__["RippleModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_88__["ɵɵsetNgModuleScope"](PrimeComponentsModule, { exports: [primeng_autocomplete__WEBPACK_IMPORTED_MODULE_0__["AutoCompleteModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_1__["ButtonModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModule"],
        primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_3__["CascadeSelectModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
        primeng_chips__WEBPACK_IMPORTED_MODULE_5__["ChipsModule"],
        primeng_colorpicker__WEBPACK_IMPORTED_MODULE_6__["ColorPickerModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
        primeng_editor__WEBPACK_IMPORTED_MODULE_8__["EditorModule"],
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_9__["InputMaskModule"],
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_10__["InputSwitchModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputTextModule"],
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__["InputTextareaModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__["InputNumberModule"],
        primeng_knob__WEBPACK_IMPORTED_MODULE_14__["KnobModule"],
        primeng_keyfilter__WEBPACK_IMPORTED_MODULE_15__["KeyFilterModule"],
        primeng_listbox__WEBPACK_IMPORTED_MODULE_16__["ListboxModule"],
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_17__["MultiSelectModule"],
        primeng_password__WEBPACK_IMPORTED_MODULE_18__["PasswordModule"],
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_19__["RadioButtonModule"],
        primeng_rating__WEBPACK_IMPORTED_MODULE_20__["RatingModule"],
        primeng_slider__WEBPACK_IMPORTED_MODULE_21__["SliderModule"],
        primeng_selectbutton__WEBPACK_IMPORTED_MODULE_22__["SelectButtonModule"],
        primeng_togglebutton__WEBPACK_IMPORTED_MODULE_23__["ToggleButtonModule"],
        primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_24__["TriStateCheckboxModule"],
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_25__["SplitButtonModule"],
        primeng_dataview__WEBPACK_IMPORTED_MODULE_26__["DataViewModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_27__["FullCalendarModule"],
        primeng_gmap__WEBPACK_IMPORTED_MODULE_28__["GMapModule"],
        primeng_orderlist__WEBPACK_IMPORTED_MODULE_29__["OrderListModule"],
        primeng_organizationchart__WEBPACK_IMPORTED_MODULE_30__["OrganizationChartModule"],
        primeng_paginator__WEBPACK_IMPORTED_MODULE_31__["PaginatorModule"],
        primeng_picklist__WEBPACK_IMPORTED_MODULE_32__["PickListModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_33__["TableModule"],
        primeng_timeline__WEBPACK_IMPORTED_MODULE_34__["TimelineModule"],
        primeng_tree__WEBPACK_IMPORTED_MODULE_35__["TreeModule"],
        primeng_treetable__WEBPACK_IMPORTED_MODULE_36__["TreeTableModule"],
        primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_37__["VirtualScrollerModule"],
        primeng_accordion__WEBPACK_IMPORTED_MODULE_38__["AccordionModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_39__["CardModule"],
        primeng_divider__WEBPACK_IMPORTED_MODULE_40__["DividerModule"],
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_41__["FieldsetModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_42__["PanelModule"],
        primeng_splitter__WEBPACK_IMPORTED_MODULE_43__["SplitterModule"],
        primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_44__["ScrollPanelModule"],
        primeng_tabview__WEBPACK_IMPORTED_MODULE_45__["TabViewModule"],
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_46__["ToolbarModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_47__["ConfirmDialogModule"],
        primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_48__["ConfirmPopupModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_49__["DialogModule"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_50__["DynamicDialogModule"],
        primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_51__["OverlayPanelModule"],
        primeng_sidebar__WEBPACK_IMPORTED_MODULE_52__["SidebarModule"],
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_53__["TooltipModule"],
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_54__["FileUploadModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_55__["HttpClientModule"],
        primeng_menu__WEBPACK_IMPORTED_MODULE_56__["MenuModule"],
        primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_57__["BreadcrumbModule"],
        primeng_contextmenu__WEBPACK_IMPORTED_MODULE_58__["ContextMenuModule"],
        primeng_megamenu__WEBPACK_IMPORTED_MODULE_59__["MegaMenuModule"],
        primeng_menubar__WEBPACK_IMPORTED_MODULE_60__["MenubarModule"],
        primeng_panelmenu__WEBPACK_IMPORTED_MODULE_61__["PanelMenuModule"],
        primeng_slidemenu__WEBPACK_IMPORTED_MODULE_62__["SlideMenuModule"],
        primeng_steps__WEBPACK_IMPORTED_MODULE_63__["StepsModule"],
        primeng_tabmenu__WEBPACK_IMPORTED_MODULE_64__["TabMenuModule"],
        primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_65__["TieredMenuModule"],
        primeng_chart__WEBPACK_IMPORTED_MODULE_66__["ChartModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_67__["MessagesModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_68__["MessageModule"],
        primeng_carousel__WEBPACK_IMPORTED_MODULE_69__["CarouselModule"],
        primeng_galleria__WEBPACK_IMPORTED_MODULE_70__["GalleriaModule"],
        primeng_dragdrop__WEBPACK_IMPORTED_MODULE_71__["DragDropModule"],
        primeng_avatar__WEBPACK_IMPORTED_MODULE_72__["AvatarModule"],
        primeng_avatargroup__WEBPACK_IMPORTED_MODULE_73__["AvatarGroupModule"],
        primeng_badge__WEBPACK_IMPORTED_MODULE_74__["BadgeModule"],
        primeng_blockui__WEBPACK_IMPORTED_MODULE_75__["BlockUIModule"],
        primeng_captcha__WEBPACK_IMPORTED_MODULE_76__["CaptchaModule"],
        primeng_chip__WEBPACK_IMPORTED_MODULE_77__["ChipModule"],
        primeng_inplace__WEBPACK_IMPORTED_MODULE_78__["InplaceModule"],
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_79__["ProgressBarModule"],
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_80__["ProgressSpinnerModule"],
        primeng_scrolltop__WEBPACK_IMPORTED_MODULE_81__["ScrollTopModule"],
        primeng_skeleton__WEBPACK_IMPORTED_MODULE_82__["SkeletonModule"],
        primeng_tag__WEBPACK_IMPORTED_MODULE_83__["TagModule"],
        primeng_terminal__WEBPACK_IMPORTED_MODULE_84__["TerminalModule"],
        primeng_ripple__WEBPACK_IMPORTED_MODULE_85__["RippleModule"]] }); })();


/***/ }),

/***/ "AytR":
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
    firebaseConfig: {
        apiKey: "AIzaSyCStfnn7PHRt3I_fynHGoKMtucbqcLFNT8",
        authDomain: "advalvas-4ddf0.firebaseapp.com",
        projectId: "advalvas-4ddf0",
        storageBucket: "advalvas-4ddf0.appspot.com",
        messagingSenderId: "604799176014",
        databaseURL: "https://advalvas-4ddf0-default-rtdb.europe-west1.firebasedatabase.app",
        appId: "1:604799176014:web:63f8b3a6b4fa4aad87a21f"
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

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MainComponent {
    constructor() { }
    ngOnInit() { }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 0, vars: 0, template: function MainComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "IeiB":
/*!******************************************!*\
  !*** ./src/app/interfaces/interfaces.ts ***!
  \******************************************/
/*! exports provided: mealType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mealType", function() { return mealType; });
var mealType;
(function (mealType) {
    mealType["Dejeuner"] = "08:00:00";
    mealType["DixHeure"] = "10:00:00";
    mealType["Diner"] = "12:00:00";
    mealType["SeizeHeure"] = "16:00:00";
    mealType["Souper"] = "18:00:00";
})(mealType || (mealType = {}));


/***/ }),

/***/ "OMAV":
/*!*********************************************************!*\
  !*** ./src/app/components/addmeal/addmeal.component.ts ***!
  \*********************************************************/
/*! exports provided: AddmealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmealComponent", function() { return AddmealComponent; });
/* harmony import */ var _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/interfaces */ "IeiB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/main.service */ "c/rV");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");








class AddmealComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.rHours = new Map();
        this.hours = [
            { moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].Dejeuner, name: 'Déjeuner', color: 'green' },
            { moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].DixHeure, name: '10h', color: 'red' },
            { moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].Diner, name: 'Dîner', color: 'yellow' },
            { moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].SeizeHeure, name: '16h', color: 'blue' },
            { moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].Souper, name: 'Souper', color: 'teal' },
        ];
        this.filteredHours = [];
        this.aMeal = {
            date: '',
            content: '',
            moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].Dejeuner,
        };
        this.dateRepas = new Date();
        this.selectedValue = '';
        this.saveMeal = (event) => {
            this.aMeal = {
                date: this.aMeal.date,
                moment: this.selectedHour.moment,
                content: this.aMeal.content,
            };
            this.mainService.EVENTS.push({
                //id: this.id,
                start: `${this.aMeal.date}T${this.selectedHour.moment}`,
                title: this.aMeal.content,
                meal: this.aMeal,
            });
            console.log('saveMeal [this.aMeal]', this.aMeal);
        };
    }
    ngOnInit() {
        this.rHours.set(_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].Dejeuner, 'Déjeuner');
        this.rHours.set(_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].DixHeure, '10h');
        this.rHours.set(_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].Diner, 'Dîner');
        this.rHours.set(_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].SeizeHeure, '16h');
        this.rHours.set(_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__["mealType"].Souper, 'Souper');
    }
}
AddmealComponent.ɵfac = function AddmealComponent_Factory(t) { return new (t || AddmealComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"])); };
AddmealComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddmealComponent, selectors: [["app-addmeal"]], decls: 22, vars: 7, consts: [[1, "p-d-flex", "p-flex-column", "addMealDialog"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-12", "p-md-6"], ["for", "Hour"], [3, "ngModel", "inline", "autoZIndex", "ngModelChange"], [1, "p-d-flex", "p-flex-column"], [1, "p-mb-2"], ["optionLabel", "name", 3, "options", "ngModel", "showClear", "ngModelChange"], [1, "p-mb-2", 2, "margin-top", "10px"], ["for", "repas"], ["id", "repas", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], [1, "p-mt-auto"], [1, "p-d-flex", "p-jc-center"], [1, "p-mr-2"], ["type", "text", "pButton", "", "label", "Abandon"], ["type", "text", "pButton", "", "label", "Sauver", 3, "click"]], template: function AddmealComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-calendar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddmealComponent_Template_p_calendar_ngModelChange_5_listener($event) { return ctx.dateRepas = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Heure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddmealComponent_Template_p_dropdown_ngModelChange_11_listener($event) { return ctx.selectedHour = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Repas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddmealComponent_Template_input_ngModelChange_15_listener($event) { return ctx.aMeal.content = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddmealComponent_Template_button_click_21_listener($event) { return ctx.saveMeal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dateRepas)("inline", true)("autoZIndex", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.hours)("ngModel", ctx.selectedHour)("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.aMeal.content);
    } }, directives: [primeng_calendar__WEBPACK_IMPORTED_MODULE_3__["Calendar"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"]], styles: [".addMealDialog[_ngcontent-%COMP%] {\n  height: 30rem;\n}\n\n.custom-height[_ngcontent-%COMP%] {\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkZG1lYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoiYWRkbWVhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRNZWFsRGlhbG9nIHtcbiAgaGVpZ2h0OiAzMHJlbTtcbn1cblxuLmN1c3RvbS1oZWlnaHQge1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "SBxm":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/main.service */ "c/rV");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");






const _c0 = function () { return { "width": "200px", "text-align": "center" }; };
class SignupComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.displayName = '';
        this.email = '';
        this.password = '';
    }
    ngOnInit() {
    }
    submit() {
        console.log('displayName: ', this.displayName);
        console.log('email: ', this.email);
        console.log('password: ', this.password);
        this.mainService.createNewUser(this.email, this.password, this.displayName);
    }
    clear() {
        this.displayName = '';
        this.email = '';
        this.password = '';
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 19, vars: 9, consts: [["header", "Sing-Up"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-12"], ["for", "displayName"], ["id", "displayName", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], [1, "p-field", "p-col-12", "p-md-6"], ["for", "email"], ["id", "email", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], ["for", "password"], ["id", "password", "type", "password", "pInputText", "", 3, "ngModel", "ngModelChange"], [1, "p-d-flex", "p-jc-center"], [1, "p-mr-2"], ["label", "Submit", 3, "onClick"], ["label", "Clear", 3, "onClick"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_5_listener($event) { return ctx.displayName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Adresse mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_9_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_13_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function SignupComponent_Template_p_button_onClick_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function SignupComponent_Template_p_button_onClick_18_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_2__["Card"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["Button"]], styles: [".btn[_ngcontent-%COMP%] {\n  width: 300px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG57XG4gIHdpZHRoOiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "4zdL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(primengConfig) {
        this.primengConfig = primengConfig;
        this.title = 'advalvas';
    }
    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeNGConfig"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_2__["Card"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "X1AG":
/*!**********************************************************************!*\
  !*** ./src/app/component/categorydetail/categorydetail.component.ts ***!
  \**********************************************************************/
/*! exports provided: CategorydetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorydetailComponent", function() { return CategorydetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ "QIUk");



class CategorydetailComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    ngOnInit() {
    }
}
CategorydetailComponent.ɵfac = function CategorydetailComponent_Factory(t) { return new (t || CategorydetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"])); };
CategorydetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategorydetailComponent, selectors: [["app-categorydetail"]], decls: 2, vars: 1, template: function CategorydetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.categoryService.selectedCategory.label, "\n");
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_2__["Card"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_primeComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/primeComponents */ "AbNe");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/signup/signup.component */ "SBxm");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/signin/signin.component */ "5Fl7");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/categories/categories.component */ "hREP");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "4zdL");
/* harmony import */ var _component_categorydetail_categorydetail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/categorydetail/categorydetail.component */ "X1AG");
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/calendar/calendar.component */ "7atc");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fullcalendar/daygrid */ "PN1e");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fullcalendar/timegrid */ "PjKf");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fullcalendar/interaction */ "ogxq");
/* harmony import */ var _components_addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/addmeal/addmeal.component */ "OMAV");
/* harmony import */ var _components_liste_liste_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/liste/liste.component */ "9X1/");
/* harmony import */ var _components_flextest_flextest_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/flextest/flextest.component */ "jfH0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");














 // the main connector. must go first
 // a plugin




 // a plugin


const firebaseConfig = {
    apiKey: "AIzaSyCStfnn7PHRt3I_fynHGoKMtucbqcLFNT8",
    authDomain: "advalvas-4ddf0.firebaseapp.com",
    projectId: "advalvas-4ddf0",
    storageBucket: "advalvas-4ddf0.appspot.com",
    messagingSenderId: "604799176014",
    databaseURL: "https://advalvas-4ddf0-default-rtdb.europe-west1.firebasedatabase.app",
    appId: "1:604799176014:web:63f8b3a6b4fa4aad87a21f"
};
_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_14__["FullCalendarModule"].registerPlugins([
    // register FullCalendar plugins
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_15__["default"],
    _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_16__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_17__["default"],
]);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _app_primeComponents__WEBPACK_IMPORTED_MODULE_2__["PrimeComponentsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_14__["FullCalendarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
        _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"],
        _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"],
        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["ToolbarComponent"],
        _component_categorydetail_categorydetail_component__WEBPACK_IMPORTED_MODULE_12__["CategorydetailComponent"],
        _component_categorydetail_categorydetail_component__WEBPACK_IMPORTED_MODULE_12__["CategorydetailComponent"],
        _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_13__["CalenComponent"],
        _components_addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_18__["AddmealComponent"],
        _components_liste_liste_component__WEBPACK_IMPORTED_MODULE_19__["ListeComponent"],
        _components_flextest_flextest_component__WEBPACK_IMPORTED_MODULE_20__["FlextestComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _app_primeComponents__WEBPACK_IMPORTED_MODULE_2__["PrimeComponentsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_14__["FullCalendarModule"]] }); })();


/***/ }),

/***/ "c/rV":
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_meals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/meals.service */ "eE3V");





class MainService {
    constructor(afAuth, router, mealService) {
        this.afAuth = afAuth;
        this.router = router;
        this.mealService = mealService;
        this.user = null;
        this.EVENTS = [];
        this.checkLocalStorage = () => {
            var localS = localStorage.getItem('user');
            var local2 = '{}';
            if (localS) {
                local2 = localS;
            }
            const user = JSON.parse(local2);
            console.log('checkLocalStorage', user.displayName);
            if (user.displayName) {
                this.user = user;
                this.router.navigate(['list']);
            }
        };
    }
    createNewUser(email, password, displayName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.afAuth
                .createUserWithEmailAndPassword(email, password)
                .then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('result : ', result);
                this.user = yield this.afAuth.currentUser;
                this.user.updateProfile({ displayName: displayName });
                this.router.navigate(['']);
            }))
                .catch((error) => {
                console.error('error : ', error);
            });
        });
    }
    login(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.afAuth
                .signInWithEmailAndPassword(email, password)
                .then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.user = yield this.afAuth.currentUser;
                localStorage.setItem('user', JSON.stringify(this.user));
                this.router.navigate(['list']);
            }))
                .catch((error) => { });
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = null;
            localStorage.removeItem('user');
            this.router.navigate(['']);
        });
    }
}
MainService.ɵfac = function MainService_Factory(t) { return new (t || MainService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_meals_service__WEBPACK_IMPORTED_MODULE_4__["MealsService"])); };
MainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MainService, factory: MainService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eE3V":
/*!*******************************************!*\
  !*** ./src/app/services/meals.service.ts ***!
  \*******************************************/
/*! exports provided: MealsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsService", function() { return MealsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


class MealsService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getMeals() {
        return this.firestore.collection('meals').snapshotChanges();
    }
}
MealsService.ɵfac = function MealsService_Factory(t) { return new (t || MealsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
MealsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MealsService, factory: MealsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hREP":
/*!***************************************************************!*\
  !*** ./src/app/components/categories/categories.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/tree */ "g9iH");
/* harmony import */ var _component_categorydetail_categorydetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/categorydetail/categorydetail.component */ "X1AG");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");






class CategoriesComponent {
    constructor(categService) {
        this.categService = categService;
        this.categories = [];
        this.selectedNode = {};
    }
    ngOnInit() {
        this.categService.getFiles().then((result) => {
            console.log(result);
            this.categories = result;
        }).catch((err) => {
        });
    }
    nodeSelect(event) {
        this.categService.selectedCategory = event.node;
        console.log(this.categService.selectedCategory);
    }
    export() {
        console.log('catégories : ', this.categories);
        const json = JSON.stringify(this.categories);
        console.log('catégories', json);
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"])); };
CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 14, vars: 3, consts: [[1, "p-grid"], [1, "p-col-3"], ["selectionMode", "single", 3, "value", "selection", "filter", "onNodeSelect", "onNodeExpand"], [1, "p-col"], ["label", "Edit"], ["label", "Add"], ["label", "Export", 3, "onClick"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-tree", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onNodeSelect", function CategoriesComponent_Template_p_tree_onNodeSelect_3_listener($event) { return ctx.nodeSelect($event); })("onNodeExpand", function CategoriesComponent_Template_p_tree_onNodeExpand_3_listener($event) { return ctx.nodeSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-categorydetail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function CategoriesComponent_Template_p_button_onClick_13_listener() { return ctx.export(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.categories)("selection", ctx.selectedNode)("filter", true);
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_2__["Card"], primeng_tree__WEBPACK_IMPORTED_MODULE_3__["Tree"], _component_categorydetail_categorydetail_component__WEBPACK_IMPORTED_MODULE_4__["CategorydetailComponent"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["Button"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "jfH0":
/*!***********************************************************!*\
  !*** ./src/app/components/flextest/flextest.component.ts ***!
  \***********************************************************/
/*! exports provided: FlextestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlextestComponent", function() { return FlextestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ "jIHw");



class FlextestComponent {
    constructor() { }
    ngOnInit() {
    }
}
FlextestComponent.ɵfac = function FlextestComponent_Factory(t) { return new (t || FlextestComponent)(); };
FlextestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlextestComponent, selectors: [["app-flextest"]], decls: 10, vars: 0, consts: [[1, "p-d-flex", "p-flex-column", 2, "height", "500px"], [1, "p-mt-auto"], [1, "p-d-flex", "p-jc-center"], [1, "p-mr-2"], ["label", "Sauver"], ["label", "Abandonner"]], template: function FlextestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_1__["Card"], primeng_button__WEBPACK_IMPORTED_MODULE_2__["Button"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbGV4dGVzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/signup/signup.component */ "SBxm");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/signin/signin.component */ "5Fl7");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/categories/categories.component */ "hREP");
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/calendar/calendar.component */ "7atc");
/* harmony import */ var _components_liste_liste_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/liste/liste.component */ "9X1/");
/* harmony import */ var _components_addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/addmeal/addmeal.component */ "OMAV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"] },
    { path: 'signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"] },
    { path: 'categories', component: _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"] },
    { path: 'calendar', component: _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__["CalenComponent"] },
    { path: 'list', component: _components_liste_liste_component__WEBPACK_IMPORTED_MODULE_6__["ListeComponent"] },
    { path: 'addmeal', component: _components_addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_7__["AddmealComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ycII":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



class CategoriesService {
    constructor(http, firestore) {
        this.http = http;
        this.firestore = firestore;
        this.selectedCategory = {};
    }
    putMeal(aData) {
        return new Promise((resolve, reject) => {
            this.firestore.collection("meals").add(aData).then(res => {
                console.log('Résultat : ', res);
                resolve(res);
            }, err => reject(err));
        });
    }
    removeMeal(mealId) {
        this.firestore.collection('meals').doc(mealId).delete();
    }
    updateMeal(id, aData) {
        this.firestore.collection('meals').doc(id).update(aData);
    }
    getFiles() {
        return this.http
            .get('../../assets/data/categories.json')
            .toPromise()
            .then((res) => res.data);
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map