(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yvesg\git\advalvas\src\main.ts */"zUnb");


/***/ }),

/***/ "3IGs":
/*!*********************************************************!*\
  !*** ./src/app/ads/components/newad/newad.component.ts ***!
  \*********************************************************/
/*! exports provided: NewadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewadComponent", function() { return NewadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NewadComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewadComponent.ɵfac = function NewadComponent_Factory(t) { return new (t || NewadComponent)(); };
NewadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewadComponent, selectors: [["app-newad"]], decls: 2, vars: 0, template: function NewadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "newad works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdhZC5jb21wb25lbnQuc2NzcyJ9 */"] });


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
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.goCalendar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.goList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.goPoids(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getTitle());
} }
function ToolbarComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "AdValvas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ToolbarComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.signIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.signUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.mainService.logout(); });
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
    signUp() {
        this.router.navigate(['signup']);
    }
    goCalendar() {
        this.router.navigate(['calendar']);
    }
    goList() {
        this.router.navigate(['list']);
    }
    goPoids() {
        this.router.navigate(['poids']);
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 14, vars: 9, consts: [[1, "p-toolbar-group-left"], ["pButton", "", "pRipple", "", "type", "button", "label", "Calendrier", "style", "width: 10rem;", "class", "p-button-rounded p-button-primary btn", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "label", "Liste", "style", "width: 10rem;", "class", "p-button-rounded p-button-primary btn", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "label", "Poids", "style", "width: 10rem;", "class", "p-button-rounded p-button-primary btn", 3, "click", 4, "ngIf"], [1, "p-toolbar-group-right"], ["userLoggedIn", ""], ["noUser", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], ["pButton", "", "pRipple", "", "type", "button", "label", "S'identifier", "class", "p-button-rounded p-button-warning btn", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "label", "S'enregistrer", "class", "p-button-rounded p-button-warning btn", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "label", "Se D\u00E9connecter", "class", "p-button-rounded p-button-warning btn", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "label", "Calendrier", 1, "p-button-rounded", "p-button-primary", "btn", 2, "width", "10rem", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Liste", 1, "p-button-rounded", "p-button-primary", "btn", 2, "width", "10rem", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Poids", 1, "p-button-rounded", "p-button-primary", "btn", 2, "width", "10rem", 3, "click"], [2, "margin", "0px", "padding", "0px", "color", "azure"], ["pButton", "", "pRipple", "", "type", "button", "label", "S'identifier", 1, "p-button-rounded", "p-button-warning", "btn", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "S'enregistrer", 1, "p-button-rounded", "p-button-warning", "btn", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Se D\u00E9connecter", 1, "p-button-rounded", "p-button-warning", "btn", 3, "click"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToolbarComponent_button_2_Template, 1, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToolbarComponent_button_3_Template, 1, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToolbarComponent_button_4_Template, 1, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ToolbarComponent_ng_template_6_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ToolbarComponent_ng_template_8_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ToolbarComponent_div_10_Template, 1, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ToolbarComponent_button_11_Template, 1, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ToolbarComponent_button_12_Template, 1, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ToolbarComponent_button_13_Template, 1, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainService.user !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainService.user !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainService.user !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainService.user)("ngIfThen", _r3)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainService.user === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainService.user === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainService.user !== null);
    } }, directives: [primeng_toolbar__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], primeng_ripple__WEBPACK_IMPORTED_MODULE_7__["Ripple"]], styles: [".btn[_ngcontent-%COMP%] {\n  margin: 0px 10px 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGIiwiZmlsZSI6InRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICBtYXJnaW46IDBweCAxMHB4IDBweCAxMHB4O1xyXG59XHJcbiJdfQ== */"] });


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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r2.mealService.hours)("ngModel", ctx_r2.selectedHour)("showClear", true);
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
        this.filteredHours = [];
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
            this.mealService.updateMeal(this.id, this.aMeal);
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
            this.mealService.removeMeal(this.id);
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
        this.selectedHour = this.mealService.hours[this.mealService.getHourIndex(this.aMeal.moment)];
        console.log('this.selectedHour', this.selectedHour);
        (_b = this.op) === null || _b === void 0 ? void 0 : _b.toggle(arg.event, arg.el);
    }
    filterHour(event) {
        let filtered = [];
        let query = event.query;
        for (let i = 0; i < this.mealService.hours.length; i++) {
            let hour = this.mealService.hours[i];
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
        this.mealService.putMeal(aData);
    }
    eventAdd(addIndo) {
        console.log('eventAdd :', addIndo);
    }
    ngOnInit() {
        this.getMeals();
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
    } }, directives: [_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__["FullCalendarComponent"], primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_7__["OverlayPanel"], primeng_api__WEBPACK_IMPORTED_MODULE_8__["PrimeTemplate"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputText"], primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonDirective"]], styles: ["#repas[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.red[_ngcontent-%COMP%]   .fc-event-dot[_ngcontent-%COMP%] {\n  background-color: red;\n  border-color: red;\n  color: #FFF !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYWxlbmRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFlBQUE7QUFIRjs7QUFLQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUZGIiwiZmlsZSI6ImNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGdlbiB7XHJcblxyXG59XHJcblxyXG4jcmVwYXMge1xyXG4gIHdpZHRoOiAzMDBweFxyXG59XHJcbi5yZWQgLmZjLWV2ZW50LWRvdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/main.service */ "c/rV");
/* harmony import */ var _services_meals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/meals.service */ "eE3V");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/rating */ "Js94");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");















function ListeComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "col", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ListeComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Heure");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Repas");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Remarque");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { row_dejeuner: a0 }; };
function ListeComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListeComponent_ng_template_9_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const event_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.Edit(event_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListeComponent_ng_template_9_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const event_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.onMinusClick(event_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p-rating", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onRate", function ListeComponent_ng_template_9_Template_p_rating_onRate_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const event_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.rateChange($event, event_r3); })("onCancel", function ListeComponent_ng_template_9_Template_p_rating_onCancel_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const event_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.rateClean($event, event_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](16, _c0, event_r3.moment === "08:00:00"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](18, _c0, event_r3.moment === "08:00:00"))("width", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](20, _c0, event_r3.moment === "08:00:00"))("width", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", event_r3.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](22, _c0, event_r3.moment === "08:00:00"))("width", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", event_r3.moment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](24, _c0, event_r3.moment === "08:00:00"))("width", 800);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", event_r3.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](26, _c0, event_r3.moment === "08:00:00"))("width", 800);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", event_r3.remarque, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", event_r3.rating);
} }
class ListeComponent {
    constructor(ws, mealService, dialogService, messageService) {
        this.ws = ws;
        this.mealService = mealService;
        this.dialogService = dialogService;
        this.messageService = messageService;
        this.EVENTS = [];
        this.visibleSidebar2 = true;
        this.findEvent = (id) => {
            console.log('findevent', this.EVENTS);
            const index = this.EVENTS.map(event => event.id).indexOf(id);
            return index;
        };
        this.onMinusClick = (id) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('minusclick', id);
            const index = this.findEvent(id);
            console.log(this.EVENTS[index].content);
            this.EVENTS.splice(index, 1);
            this.mealService.removeMeal(id);
        });
        this.asyncForEach = (anArray, callbak) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('for');
            for (var i = 0; i <= anArray.length - 1; i++) {
                yield callbak(anArray[i]);
            }
        });
        this.rateChange = (event, aMeal) => {
            aMeal.rating = event.value;
            this.mealService.updateMeal(aMeal.id, aMeal);
        };
        this.rateClean = (event, aMeal) => {
            aMeal.rating = 0;
            this.mealService.updateMeal(aMeal.id, aMeal);
        };
        this.addevent = (event) => {
        };
        this.getMeals = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log('getMeals');
            const tempEvents = [];
            const events = yield this.mealService.getMeals2();
            console.log('res', events);
            yield this.asyncForEach(events, (element) => {
                tempEvents.push(element);
            });
            this.EVENTS = tempEvents.sort((meal1, meal2) => {
                const t1 = `${meal1.date}T${meal1.moment}`;
                const t2 = `${meal2.date}T${meal2.moment}`;
                if (t1 >= t2)
                    return 1;
                else
                    return -1;
            });
        });
    }
    ngOnDestroy() {
        if (this.ref) {
            this.ref.close();
        }
    }
    Edit(event) {
        console.log('edit', event);
        const ref = this.dialogService.open(_addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_2__["AddmealComponent"], {
            data: { mode: 1, aMeal: event },
            header: 'Editer un repas',
            width: '60rem',
            contentStyle: { 'max-height': '1100px', overflow: 'auto' },
            baseZIndex: 10000,
        });
        ref.onClose.subscribe((data) => {
            if (data) {
                if (data)
                    console.log('data', data);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Modification du repas',
                    detail: data.content,
                });
            }
        });
    }
    Add() {
        this.ref = this.dialogService.open(_addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_2__["AddmealComponent"], {
            data: { mode: 0 },
            header: 'Ajouter un repas',
            width: '60rem',
            contentStyle: { 'max-height': '1000px', overflow: 'auto' },
            baseZIndex: 10000,
        });
        this.ref.onClose.subscribe((data) => {
            if (data) {
                this.getMeals();
                const mode = data.mode;
                console.log('data', data);
                console.log('id', data.id);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Ajout du repas',
                    detail: data.content,
                });
            }
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getMeals();
            //console.log('init');
        });
    }
}
ListeComponent.ɵfac = function ListeComponent_Factory(t) { return new (t || ListeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_meals_service__WEBPACK_IMPORTED_MODULE_6__["MealsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); };
ListeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ListeComponent, selectors: [["app-liste"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])], decls: 10, vars: 2, consts: [[1, "p-grid"], [1, "p-col-1", "divbtn"], [2, "margin-top", "15px"], ["type", "button", "pButton", "", "label", "Ajouter", 1, "p-button-rounded", "p-button-outlined", 2, "width", "100%", "text-align", "center", 3, "click"], [1, "p-col"], ["scrollHeight", "80vh", 3, "value", "scrollable"], ["pTemplate", "colgroup"], ["pTemplate", "header"], ["pTemplate", "body"], [2, "width", "68px"], [2, "width", "11%"], [2, "width", "10%"], [2, "width", "30%"], [2, "width", "17%"], [3, "ngClass"], [3, "ngClass", "width"], [1, "pi", "pi-pencil", "myIcon", 3, "click"], [1, "pi", "pi-minus-circle", "myIcon", 3, "click"], [3, "ngModel", "onRate", "onCancel"]], template: function ListeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListeComponent_Template_button_click_4_listener() { return ctx.Add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ListeComponent_ng_template_7_Template, 7, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ListeComponent_ng_template_8_Template, 12, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ListeComponent_ng_template_9_Template, 14, 28, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.EVENTS)("scrollable", true);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_7__["Toast"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"], primeng_table__WEBPACK_IMPORTED_MODULE_9__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], primeng_rating__WEBPACK_IMPORTED_MODULE_11__["Rating"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"]], styles: [".myIcon[_ngcontent-%COMP%] {\n  padding: 0px 2px 0px 0px;\n}\n\n[_nghost-%COMP%]     .row_dejeuner {\n  background-color: dimgrey;\n  color: aqua;\n}\n\n.divbtn[_ngcontent-%COMP%] {\n  align-content: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsaXN0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNBLHFCQUFBO0FBQ0E7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoibGlzdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlJY29uIHtcclxuICBwYWRkaW5nOiAwcHggMnB4IDBweCAwcHhcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5yb3dfZGVqZXVuZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRpbWdyZXk7XHJcbiAgY29sb3I6IGFxdWE7XHJcbn1cclxuXHJcbi5kaXZidG4ge1xyXG5hbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "9Zhj":
/*!*********************************************************!*\
  !*** ./src/app/ads/components/index/index.component.ts ***!
  \*********************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 1, vars: 0, template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "test\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! @fullcalendar/daygrid */ "PN1e");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! @fullcalendar/interaction */ "ogxq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! @angular/core */ "fXoL");























































































 // a plugin
 // a plugin

_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_27__["FullCalendarModule"].registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_87__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_88__["default"]
]);
class PrimeComponentsModule {
}
PrimeComponentsModule.ɵfac = function PrimeComponentsModule_Factory(t) { return new (t || PrimeComponentsModule)(); };
PrimeComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_89__["ɵɵdefineNgModule"]({ type: PrimeComponentsModule });
PrimeComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_89__["ɵɵdefineInjector"]({ imports: [primeng_autocomplete__WEBPACK_IMPORTED_MODULE_0__["AutoCompleteModule"],
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
        primeng_ripple__WEBPACK_IMPORTED_MODULE_85__["RippleModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_86__["ToastModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_89__["ɵɵsetNgModuleScope"](PrimeComponentsModule, { exports: [primeng_autocomplete__WEBPACK_IMPORTED_MODULE_0__["AutoCompleteModule"],
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
        primeng_ripple__WEBPACK_IMPORTED_MODULE_85__["RippleModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_86__["ToastModule"]] }); })();


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

/***/ "GkTa":
/*!****************************************************!*\
  !*** ./src/app/ads/services/categories.service.ts ***!
  \****************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CategoriesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.categs = [];
        this.getCategs = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.categs = yield this.httpClient.get("assets/data/categories.json").toPromise();
            console.log(this.categs);
        });
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IRMR":
/*!*****************************************************************!*\
  !*** ./src/app/ads/components/categlist/categlist.component.ts ***!
  \*****************************************************************/
/*! exports provided: CateglistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateglistComponent", function() { return CateglistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_ads_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ads/services/categories.service */ "GkTa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "jIHw");





function CateglistComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CateglistComponent_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const categ_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.showSub2(categ_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categ_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", categ_r1.name);
} }
class CateglistComponent {
    constructor(CS) {
        this.CS = CS;
        this.items = [];
        this.home = { icon: 'pi pi-home', routerLink: '/categories' };
        this.categs = [];
        this.id = 0;
        this.asyncForEach = (array, callback) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (let index = 0; index < array.length; index++) {
                yield callback(array[index], index, array);
            }
        });
        this.findCateg = (id) => {
            var i;
            console.log(id);
            const labels = this.CS.categs.map((categ) => {
                return categ.id;
            });
            i = labels.indexOf(id);
            return this.CS.categs[i].name;
        };
        this.findRoute = (id) => {
            var tempKeys;
            // splitter la clé par blocs de 3 chiffres (avec RegEx)
            var re = /(\d{3})/;
            // filtrer les clés "vides"
            tempKeys = id.split(re).filter((item) => {
                return item.length > 0;
            });
            var i = 0;
            var tempKey = '';
            this.items = [];
            while (i <= tempKeys.length - 1) {
                tempKey = tempKey.concat(tempKeys[i]);
                const label = this.findCateg(tempKey);
                this.items.push({
                    label: label,
                });
                i++;
            }
        };
        this.showSub2 = (pCateg) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var lenKey = 3;
            var tempCategs = [];
            const categs = this.CS.categs;
            if (pCateg) {
                this.findRoute(pCateg.id);
            }
            tempCategs = categs.filter((categ) => {
                if (pCateg) {
                    lenKey = pCateg.id.length + 3;
                }
                var isIncluded = lenKey === categ.id.length;
                if (isIncluded && pCateg) {
                    isIncluded =
                        isIncluded && categ.id.substr(0, pCateg.id.length) === pCateg.id;
                }
                return isIncluded;
            });
            if (tempCategs.length === 0) {
                // Plus de sous-catégorie.
            }
            else {
                this.categs = tempCategs;
                if (pCateg && pCateg.id.length >= 3) {
                    this.categs.splice(0, 0, {
                        id: pCateg.id.substr(0, pCateg.id.length - 3),
                        name: 'Précédent',
                    });
                }
            }
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.CS.getCategs();
            yield this.showSub2();
        });
    }
}
CateglistComponent.ɵfac = function CateglistComponent_Factory(t) { return new (t || CateglistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_ads_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"])); };
CateglistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CateglistComponent, selectors: [["app-categlist"]], decls: 2, vars: 1, consts: [[1, "p-d-flex", "p-flex-column"], ["class", "p-mb-2", 4, "ngFor", "ngForOf"], [1, "p-mb-2"], ["pButton", "", 1, "p-button-sm", "p-button-success", "btn", 3, "label", "click"]], template: function CateglistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CateglistComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"]], styles: [".badge[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 17rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2F0ZWdsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJjYXRlZ2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFkZ2Uge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICB3aWR0aDogMTdyZW07XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces/interfaces */ "IeiB");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/main.service */ "c/rV");
/* harmony import */ var src_app_services_meals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/meals.service */ "eE3V");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "jIHw");












const _c0 = ["content"];
class AddmealComponent {
    constructor(mainService, mealService, ref, config) {
        this.mainService = mainService;
        this.mealService = mealService;
        this.ref = ref;
        this.config = config;
        this.text1 = "";
        this.selectedHour = this.mealService.hours[0];
        this.filteredHours = [];
        this.aMeal = {
            date: '',
            content: '',
            moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_1__["mealType"].Dejeuner,
            remarque: '',
        };
        this.dateRepas = new Date();
        this.selectedValue = '';
        this.getHourIndex = (amoment) => {
            const index = this.mealService.hours
                .map((hour) => {
                return hour.moment;
            })
                .indexOf(amoment);
            return index;
        };
        this.close = () => {
            this.ref.close(undefined);
        };
        this.saveMeal = (event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { data } = this.config;
            const jour = this.dateRepas.getDate().toString().padStart(2, '0');
            const mois = (this.dateRepas.getMonth() + 1).toString().padStart(2, '0');
            const annee = this.dateRepas.getFullYear().toString();
            const sdate = `${annee}-${mois}-${jour}`;
            console.log('date:', sdate);
            this.aMeal = {
                date: sdate,
                moment: this.selectedHour.moment,
                content: this.aMeal.content,
                remarque: this.aMeal.remarque
            };
            if (data.mode === 0) {
                const id = yield this.mealService.putMeal(this.aMeal);
            }
            else {
                console.log('id ', data.aMeal.id);
                yield this.mealService.updateMeal(data.aMeal.id, this.aMeal);
            }
            this.ref.close({ mode: data.mode, aMeal: this.aMeal });
        });
    }
    ngOnInit() {
        console.log('config ', this.config.data);
        const { data } = this.config;
        if (data.aMeal) {
            this.selectedHour = this.mealService.hours[this.getHourIndex(data.aMeal.moment)];
            this.dateRepas = new Date(data.aMeal.date);
            this.aMeal = data.aMeal;
            if (!this.aMeal.remarque) {
                this.aMeal.remarque = "";
            }
        }
        setTimeout(() => {
            var _a;
            // this will make the execution after the above boolean has changed
            (_a = this.content) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
        }, 0);
    }
}
AddmealComponent.ɵfac = function AddmealComponent_Factory(t) { return new (t || AddmealComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_meals_service__WEBPACK_IMPORTED_MODULE_5__["MealsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__["DynamicDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__["DynamicDialogConfig"])); };
AddmealComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddmealComponent, selectors: [["app-addmeal"]], viewQuery: function AddmealComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])], decls: 28, vars: 9, consts: [[1, "p-d-flex", "p-flex-column", "addMealDialog"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-12", "p-md-6"], ["for", "Hour"], ["dateFormat", "dd/mm/yy", 3, "ngModel", "inline", "autoZIndex", "firstDayOfWeek", "ngModelChange"], [1, "p-d-flex", "p-flex-column"], [1, "p-mb-2"], ["optionLabel", "name", 3, "options", "ngModel", "showClear", "ngModelChange"], [1, "p-mb-2", 2, "margin-top", "10px"], ["for", "repas"], ["id", "repas", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], ["content", ""], ["for", "remarque"], ["id", "remarque", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], ["remarque", ""], [1, "p-mt-auto"], [1, "p-d-flex", "p-jc-center"], [1, "p-mr-2"], ["type", "text", "pButton", "", "label", "Abandon", 3, "click"], ["type", "text", "pButton", "", "label", "Sauver", 3, "click"]], template: function AddmealComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p-calendar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddmealComponent_Template_p_calendar_ngModelChange_5_listener($event) { return ctx.dateRepas = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Heure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddmealComponent_Template_p_dropdown_ngModelChange_11_listener($event) { return ctx.selectedHour = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Repas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddmealComponent_Template_input_ngModelChange_15_listener($event) { return ctx.aMeal.content = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Remarque");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddmealComponent_Template_input_ngModelChange_20_listener($event) { return ctx.aMeal.remarque = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddmealComponent_Template_button_click_25_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddmealComponent_Template_button_click_27_listener($event) { return ctx.saveMeal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.dateRepas)("inline", true)("autoZIndex", true)("firstDayOfWeek", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.mealService.hours)("ngModel", ctx.selectedHour)("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.aMeal.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.aMeal.remarque);
    } }, directives: [primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["Calendar"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputText"], primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonDirective"]], styles: [".addMealDialog[_ngcontent-%COMP%] {\n  height: 32rem;\n}\n\n.custom-height[_ngcontent-%COMP%] {\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGRtZWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6ImFkZG1lYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkTWVhbERpYWxvZyB7XHJcbiAgaGVpZ2h0OiAzMnJlbTtcclxufVxyXG5cclxuLmN1c3RvbS1oZWlnaHQge1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "S+1V":
/*!*****************************************************!*\
  !*** ./src/app/components/poids/poids.component.ts ***!
  \*****************************************************/
/*! exports provided: PoidsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoidsComponent", function() { return PoidsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var _add_weights_add_weights_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-weights/add-weights.component */ "gPk2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_poids_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/poids.service */ "Yzea");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function PoidsComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PoidsComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Mesure");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Remarque");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Diff\u00E9rence");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { row_dejeuner: a0 }; };
function PoidsComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PoidsComponent_ng_template_8_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const event_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.Edit(event_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PoidsComponent_ng_template_8_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const event_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.onDelete(event_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c0, event_r3.moment === "08:00:00"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c0, event_r3.moment === "08:00:00"))("width", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c0, event_r3.moment === "08:00:00"))("width", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", event_r3.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c0, event_r3.moment === "08:00:00"))("width", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", event_r3.poids, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c0, event_r3.moment === "08:00:00"))("width", 800);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", event_r3.remarque, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](25, _c0, event_r3.moment === "08:00:00"))("width", 800);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", event_r3.difference, " ");
} }
class PoidsComponent {
    constructor(poidService, dialogService) {
        this.poidService = poidService;
        this.dialogService = dialogService;
        this.Weights = [];
        this.differenceTotale = 0;
        this.dimensions = {
            width: 0,
            height: 0
        };
        this.asyncForEach = (anArray, callbak) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('for');
            for (var i = 0; i <= anArray.length - 1; i++) {
                yield callbak(anArray[i], i);
            }
        });
        this.getWeights = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let tempWeights = [];
            const weights = yield this.poidService.getWeights();
            yield this.asyncForEach(weights, (element, i) => {
                tempWeights.push(element);
            });
            this.Weights = tempWeights.sort((poids1, poids2) => {
                if (poids1.date >= poids2.date)
                    return 1;
                else
                    return -1;
            });
            tempWeights = [];
            let oldPoids = 0;
            yield this.asyncForEach(this.Weights, (element, i) => {
                let difference = 0;
                if (i === 0) {
                    oldPoids = element.poids;
                    difference = 0;
                }
                else {
                    oldPoids = this.Weights[i - 1].poids;
                    difference = parseFloat((oldPoids - element.poids).toFixed(2)) * -1;
                }
                this.differenceTotale = this.differenceTotale + difference;
                tempWeights.push({
                    date: element.date,
                    poids: element.poids,
                    difference: difference,
                    remarque: element.remarque
                });
            });
            this.differenceTotale = parseFloat(this.differenceTotale.toFixed(2));
            this.Weights = tempWeights;
        });
    }
    onResize(event) {
        this.getDimensions();
    }
    getDimensions() {
        this.dimensions = {
            width: document.body.offsetWidth,
            height: document.body.offsetHeight
        };
        console.log('dimensions', this.dimensions);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getWeights();
        });
    }
    Add() {
        this.ref = this.dialogService.open(_add_weights_add_weights_component__WEBPACK_IMPORTED_MODULE_2__["AddWeightsComponent"], {
            data: { mode: 0 },
            header: 'Ajouter une mesure',
            width: '60rem',
            contentStyle: { 'max-height': '1000px', overflow: 'auto' },
            baseZIndex: 10000,
        });
    }
    Edit(event) {
    }
    onDelete(Id) {
    }
}
PoidsComponent.ɵfac = function PoidsComponent_Factory(t) { return new (t || PoidsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_poids_service__WEBPACK_IMPORTED_MODULE_4__["PoidsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"])); };
PoidsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PoidsComponent, selectors: [["app-poids"]], hostBindings: function PoidsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function PoidsComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]])], decls: 11, vars: 3, consts: [[1, "p-grid"], [1, "p-col-1", "divbtn"], [2, "margin-top", "15px"], ["type", "button", "pButton", "", "label", "Ajouter", 1, "p-button-rounded", "p-button-outlined", 2, "width", "100%", "text-align", "center", 3, "click"], [1, "p-col"], ["scrollHeight", "80vh", 3, "value", "scrollable"], ["pTemplate", "colgroup"], ["pTemplate", "header"], ["pTemplate", "body"], [2, "color", "white"], [2, "width", "90px"], [2, "width", "11%"], [2, "width", "10%"], [2, "width", "30%"], [3, "ngClass"], [3, "ngClass", "width"], [1, "pi", "pi-pencil", "myIcon", 3, "click"], [1, "pi", "pi-minus-circle", "myIcon", 3, "click"]], template: function PoidsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PoidsComponent_Template_button_click_3_listener() { return ctx.Add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PoidsComponent_ng_template_6_Template, 6, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PoidsComponent_ng_template_7_Template, 10, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, PoidsComponent_ng_template_8_Template, 12, 27, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.Weights)("scrollable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Diff\u00E9rence totale : ", ctx.differenceTotale, "");
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonDirective"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], primeng_card__WEBPACK_IMPORTED_MODULE_8__["Card"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2lkcy5jb21wb25lbnQuc2NzcyJ9 */"] });


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
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_2__["Card"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["Button"]], styles: [".btn[_ngcontent-%COMP%] {\n  width: 300px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "4zdL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".maincard[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluY2FyZCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var src_app_services_meals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/meals.service */ "eE3V");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ "QIUk");



class CategorydetailComponent {
    constructor(mealService) {
        this.mealService = mealService;
    }
    ngOnInit() {
    }
}
CategorydetailComponent.ɵfac = function CategorydetailComponent_Factory(t) { return new (t || CategorydetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_meals_service__WEBPACK_IMPORTED_MODULE_1__["MealsService"])); };
CategorydetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategorydetailComponent, selectors: [["app-categorydetail"]], decls: 2, vars: 0, template: function CategorydetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\ntest\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_2__["Card"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Yzea":
/*!*******************************************!*\
  !*** ./src/app/services/poids.service.ts ***!
  \*******************************************/
/*! exports provided: PoidsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoidsService", function() { return PoidsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



class PoidsService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getWeights() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var weights = [];
            var ref = this.firestore.collection('weights');
            var data = yield ref.get().toPromise().then(snapshot => {
                snapshot.forEach(doc => {
                    let item = doc.data();
                    item.id = doc.id;
                    weights.push(item);
                });
            });
            return weights;
        });
    }
    putWeight(aData) {
        return new Promise((resolve, reject) => {
            this.firestore.collection("weights").add(aData).then(res => {
                console.log('Résultat : ', res);
                resolve(res.id);
            }, err => reject(err));
        });
    }
}
PoidsService.ɵfac = function PoidsService_Factory(t) { return new (t || PoidsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
PoidsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PoidsService, factory: PoidsService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _ads_components_index_index_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ads/components/index/index.component */ "9Zhj");
/* harmony import */ var _ads_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ads/components/categories/categories.component */ "bJhT");
/* harmony import */ var _ads_components_mainads_mainads_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ads/components/mainads/mainads.component */ "yfNK");
/* harmony import */ var _ads_components_categlist_categlist_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ads/components/categlist/categlist.component */ "IRMR");
/* harmony import */ var _ads_components_newad_newad_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ads/components/newad/newad.component */ "3IGs");
/* harmony import */ var _components_poids_poids_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/poids/poids.component */ "S+1V");
/* harmony import */ var _components_add_weights_add_weights_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/add-weights/add-weights.component */ "gPk2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "fXoL");














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
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _app_primeComponents__WEBPACK_IMPORTED_MODULE_2__["PrimeComponentsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_14__["FullCalendarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
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
        _components_flextest_flextest_component__WEBPACK_IMPORTED_MODULE_20__["FlextestComponent"],
        _ads_components_index_index_component__WEBPACK_IMPORTED_MODULE_21__["IndexComponent"],
        _ads_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_22__["CategoryComponent"],
        _ads_components_mainads_mainads_component__WEBPACK_IMPORTED_MODULE_23__["MainadsComponent"],
        _ads_components_categlist_categlist_component__WEBPACK_IMPORTED_MODULE_24__["CateglistComponent"],
        _ads_components_newad_newad_component__WEBPACK_IMPORTED_MODULE_25__["NewadComponent"],
        _components_poids_poids_component__WEBPACK_IMPORTED_MODULE_26__["PoidsComponent"],
        _components_add_weights_add_weights_component__WEBPACK_IMPORTED_MODULE_27__["AddWeightsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _app_primeComponents__WEBPACK_IMPORTED_MODULE_2__["PrimeComponentsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_14__["FullCalendarModule"]] }); })();


/***/ }),

/***/ "bJhT":
/*!*******************************************************************!*\
  !*** ./src/app/ads/components/categories/categories.component.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_ads_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ads/services/categories.service */ "GkTa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/badge */ "fqaE");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");






function CategoryComponent_p_badge_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-badge", 3);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r2.label);
} }
function CategoryComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryComponent_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const categ_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.showSub2(categ_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categ_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", categ_r3.name);
} }
class CategoryComponent {
    constructor(CS) {
        this.CS = CS;
        this.items = [];
        this.home = { icon: 'pi pi-home', routerLink: '/categories' };
        this.categs = [];
        this.id = 0;
        this.asyncForEach = (array, callback) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (let index = 0; index < array.length; index++) {
                yield callback(array[index], index, array);
            }
        });
        this.findCateg = (id) => {
            var i;
            console.log(id);
            const labels = this.CS.categs.map((categ) => {
                return categ.id;
            });
            i = labels.indexOf(id);
            return this.CS.categs[i].name;
        };
        this.findRoute = (id) => {
            var tempKeys;
            // splitter la clé par blocs de 3 chiffres (avec RegEx)
            var re = /(\d{3})/;
            // filtrer les clés "vides"
            tempKeys = id.split(re).filter((item) => {
                return item.length > 0;
            });
            var i = 0;
            var tempKey = '';
            this.items = [];
            while (i <= tempKeys.length - 1) {
                tempKey = tempKey.concat(tempKeys[i]);
                const label = this.findCateg(tempKey);
                this.items.push({
                    label: label,
                });
                i++;
            }
        };
        this.showSub2 = (pCateg) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var lenKey = 3;
            var tempCategs = [];
            const categs = this.CS.categs;
            if (pCateg) {
                this.findRoute(pCateg.id);
            }
            tempCategs = categs.filter((categ) => {
                if (pCateg) {
                    lenKey = pCateg.id.length + 3;
                }
                var isIncluded = lenKey === categ.id.length;
                if (isIncluded && pCateg) {
                    isIncluded =
                        isIncluded && categ.id.substr(0, pCateg.id.length) === pCateg.id;
                }
                return isIncluded;
            });
            if (tempCategs.length === 0) {
                // Plus de sous-catégorie.
            }
            else {
                this.categs = tempCategs;
                if (pCateg && pCateg.id.length >= 3) {
                    this.categs.splice(0, 0, {
                        id: pCateg.id.substr(0, pCateg.id.length - 3),
                        name: 'Précédent',
                    });
                }
            }
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.CS.getCategs();
            yield this.showSub2();
        });
    }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_ads_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"])); };
CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["app-categories"]], decls: 4, vars: 2, consts: [["class", "badge", 3, "value", 4, "ngFor", "ngForOf"], [1, "p-d-flex", "p-flex-column"], ["class", "p-mb-2", 4, "ngFor", "ngForOf"], [1, "badge", 3, "value"], [1, "p-mb-2"], ["pButton", "", 1, "p-button-rounded", "p-button-success", "btn", 3, "label", "click"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CategoryComponent_p_badge_1_Template, 1, 1, "p-badge", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CategoryComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], primeng_badge__WEBPACK_IMPORTED_MODULE_4__["Badge"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonDirective"]], styles: [".badge[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 17rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoiY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWRnZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiAxN3JlbTtcclxufVxyXG4iXX0= */"] });


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
                this.router.navigate(['poids']);
            }
        };
    }
    createNewUser(email, password, displayName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.afAuth
                .createUserWithEmailAndPassword(email, password)
                .then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                //console.log('result : ', result);
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
                this.router.navigate(['poids']);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/interfaces */ "IeiB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");




class MealsService {
    constructor(firestore) {
        this.firestore = firestore;
        this.rHours = new Map();
        this.hours = [
            { moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_1__["mealType"].Dejeuner, name: 'Déjeuner', color: 'green' },
            { moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_1__["mealType"].DixHeure, name: '10h', color: 'red' },
            { moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_1__["mealType"].Diner, name: 'Dîner', color: 'yellow' },
            { moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_1__["mealType"].SeizeHeure, name: '16h', color: 'blue' },
            { moment: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_1__["mealType"].Souper, name: 'Souper', color: 'teal' },
        ];
        this.getHourIndex = (amoment) => {
            const index = this.hours.map(hour => { return hour.moment; }).indexOf(amoment);
            return index;
        };
    }
    getMeals() {
        return this.firestore.collection('meals').snapshotChanges();
    }
    getMeals2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var meals = [];
            var ref = this.firestore.collection('meals');
            var data = yield ref.get().toPromise().then(snapshot => {
                snapshot.forEach(doc => {
                    let item = doc.data();
                    item.id = doc.id;
                    meals.push(item);
                    //console.log(doc.data());
                });
            });
            return meals;
        });
    }
    putMeal(aData) {
        return new Promise((resolve, reject) => {
            this.firestore.collection("meals").add(aData).then(res => {
                console.log('Résultat : ', res);
                resolve(res.id);
            }, err => reject(err));
        });
    }
    removeMeal(mealId) {
        this.firestore.collection('meals').doc(mealId).delete();
    }
    updateMeal(id, aData) {
        this.firestore.collection('meals').doc(id).update(aData);
    }
}
MealsService.ɵfac = function MealsService_Factory(t) { return new (t || MealsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"])); };
MealsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MealsService, factory: MealsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "gPk2":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-weights/add-weights.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddWeightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWeightsComponent", function() { return AddWeightsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_poids_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/poids.service */ "Yzea");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");








class AddWeightsComponent {
    constructor(poidsService, ref, config) {
        this.poidsService = poidsService;
        this.ref = ref;
        this.config = config;
        this.dateMesure = new Date();
        this.scheduleOptions = {
            firstDay: '0',
            dateFormat: 'dd/mm/yyyy'
        };
        this.aWeight = {
            date: "",
            poids: 0,
            remarque: ""
        };
        this.close = () => {
            this.ref.close(undefined);
        };
        this.saveWeight = (event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { data } = this.config;
            const jour = this.dateMesure.getDate().toString().padStart(2, '0');
            const mois = (this.dateMesure.getMonth() + 1).toString().padStart(2, '0');
            const annee = this.dateMesure.getFullYear().toString();
            const sdate = `${annee}-${mois}-${jour}`;
            this.aWeight = {
                date: sdate,
                poids: this.aWeight.poids,
                remarque: this.aWeight.remarque
            };
            this.poidsService.putWeight(this.aWeight);
            this.ref.close({ mode: data.mode, aWeight: this.aWeight });
        });
    }
    ngOnInit() {
    }
}
AddWeightsComponent.ɵfac = function AddWeightsComponent_Factory(t) { return new (t || AddWeightsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_poids_service__WEBPACK_IMPORTED_MODULE_2__["PoidsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogConfig"])); };
AddWeightsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddWeightsComponent, selectors: [["app-add-weights"]], decls: 26, vars: 5, consts: [[1, "p-d-flex", "p-flex-column", "addMealDialog"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-12", "p-md-6"], ["for", "Hour"], ["dateFormat", "dd/mm/yy", 3, "ngModel", "showIcon", "firstDayOfWeek", "ngModelChange"], [1, "p-d-flex", "p-flex-column"], [1, "p-mb-2"], [1, "p-mb-2", 2, "margin-top", "10px"], ["for", "repas"], ["id", "mesure", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], ["content", ""], ["for", "remarque"], ["rows", "17", "cols", "30", "id", "remarque", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], ["remarque", ""], [1, "p-mt-auto"], [1, "p-d-flex", "p-jc-center"], [1, "p-mr-2"], ["type", "text", "pButton", "", "label", "Abandon", 3, "click"], ["type", "text", "pButton", "", "label", "Sauver", 3, "click"]], template: function AddWeightsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Date Mesure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-calendar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddWeightsComponent_Template_p_calendar_ngModelChange_5_listener($event) { return ctx.dateMesure = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Mesure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddWeightsComponent_Template_input_ngModelChange_12_listener($event) { return ctx.aWeight.poids = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Remarque");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "textarea", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddWeightsComponent_Template_textarea_ngModelChange_17_listener($event) { return ctx.aWeight.remarque = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddWeightsComponent_Template_button_click_23_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddWeightsComponent_Template_button_click_25_listener($event) { return ctx.saveWeight($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dateMesure)("showIcon", true)("firstDayOfWeek", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.aWeight.poids);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.aWeight.remarque);
    } }, directives: [primeng_calendar__WEBPACK_IMPORTED_MODULE_4__["Calendar"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtd2VpZ2h0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var src_app_services_meals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/meals.service */ "eE3V");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ "QIUk");



class CategoriesComponent {
    constructor(mealService) {
        this.mealService = mealService;
        this.categories = [];
        this.selectedNode = {};
    }
    ngOnInit() {
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_meals_service__WEBPACK_IMPORTED_MODULE_1__["MealsService"])); };
CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 1, vars: 0, template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-card");
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_2__["Card"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/calendar/calendar.component */ "7atc");
/* harmony import */ var _components_liste_liste_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/liste/liste.component */ "9X1/");
/* harmony import */ var _components_addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/addmeal/addmeal.component */ "OMAV");
/* harmony import */ var _ads_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ads/components/categories/categories.component */ "bJhT");
/* harmony import */ var _ads_components_mainads_mainads_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ads/components/mainads/mainads.component */ "yfNK");
/* harmony import */ var _ads_components_newad_newad_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ads/components/newad/newad.component */ "3IGs");
/* harmony import */ var _components_poids_poids_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/poids/poids.component */ "S+1V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const routes = [
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"] },
    { path: 'signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"] },
    { path: 'categories', component: _ads_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"] },
    { path: 'categories2', component: _ads_components_mainads_mainads_component__WEBPACK_IMPORTED_MODULE_8__["MainadsComponent"] },
    { path: 'calendar', component: _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalenComponent"] },
    { path: 'list', component: _components_liste_liste_component__WEBPACK_IMPORTED_MODULE_5__["ListeComponent"] },
    { path: 'addmeal', component: _components_addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_6__["AddmealComponent"] },
    { path: 'test', component: _ads_components_newad_newad_component__WEBPACK_IMPORTED_MODULE_9__["NewadComponent"] },
    { path: 'poids', component: _components_poids_poids_component__WEBPACK_IMPORTED_MODULE_10__["PoidsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "yfNK":
/*!*************************************************************!*\
  !*** ./src/app/ads/components/mainads/mainads.component.ts ***!
  \*************************************************************/
/*! exports provided: MainadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainadsComponent", function() { return MainadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _categlist_categlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../categlist/categlist.component */ "IRMR");




class MainadsComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainadsComponent.ɵfac = function MainadsComponent_Factory(t) { return new (t || MainadsComponent)(); };
MainadsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainadsComponent, selectors: [["app-mainads"]], decls: 13, vars: 0, consts: [[1, "main-frame"], [1, "p-d-flex", "title-frame"], [1, "toolbar"], [1, "p-toolbar-group-left"], ["label", "Ajouter", "icon", "pi pi-plus"], [1, "p-toolbar-group-right"], ["icon", "pi pi-search"], ["icon", "pi pi-calendar", "styleClass", "p-button-success"], ["icon", "pi pi-times", "styleClass", "p-button-danger"], [1, "p-d-flex", "working-frame", "p-shadow-3"], [1, "p-mb-2", "categ-frame"], [1, "p-mb-2", "ads-frame"]], template: function MainadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-categlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_toolbar__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], primeng_button__WEBPACK_IMPORTED_MODULE_2__["Button"], _categlist_categlist_component__WEBPACK_IMPORTED_MODULE_3__["CateglistComponent"]], styles: [".main-frame[_ngcontent-%COMP%] {\n  height: 70rem;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.title-frame[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.working-frame[_ngcontent-%COMP%] {\n  height: 98%;\n}\n\n.categ-frame[_ngcontent-%COMP%], .ads-frame[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.categ-frame[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n\n.ads-frame[_ngcontent-%COMP%] {\n  width: 140rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbmFkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFHQTtFQUVFLGlCQUFBO0VBQ0Esb0JBQUE7QUFERjs7QUFJQTtFQUVFLFdBQUE7QUFGRjs7QUFNQTtFQUVFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7QUFKRjs7QUFRQTtFQUNFLGFBQUE7QUFMRiIsImZpbGUiOiJtYWluYWRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZnJhbWUge1xyXG4gIC8vYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBoZWlnaHQ6IDcwcmVtO1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aXRsZS1mcmFtZSB7XHJcbiAgLy9ib3JkZXI6IDFweCBkYXNoZWQgcmVkO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ud29ya2luZy1mcmFtZSB7XHJcbiAgLy9ib3JkZXI6IDFweCBkb3R0ZWQgYmx1ZTtcclxuICBoZWlnaHQ6IDk4JVxyXG5cclxufVxyXG5cclxuLmNhdGVnLWZyYW1lLCAuYWRzLWZyYW1lIHtcclxuICAvL2JvcmRlcjogMXB4IGRvdWJsZSBncmVlbjtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2F0ZWctZnJhbWUge1xyXG4gIHdpZHRoOiAyMHJlbTtcclxuXHJcbn1cclxuXHJcbi5hZHMtZnJhbWUge1xyXG4gIHdpZHRoOiAxNDByZW07XHJcbn1cclxuIl19 */"] });


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