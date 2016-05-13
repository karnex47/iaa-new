/*
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var home_1 = require('./home');
var about_1 = require('./about');
var dojos_1 = require('./dojos');
var change_lang_component_1 = require('./common/components/change-lang/change-lang.component');
var app_service_1 = require('./app.service');
var router_active_1 = require('./router-active');
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var ng2_translate_1 = require("ng2-translate/ng2-translate");
var bowser = require('bowser');
var classNames = require('classnames');
var _ = require('lodash');
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(router, appState, translate) {
        this.router = router;
        this.appState = appState;
        this.scrolled = false;
        this.lastScrolledPosition = 0;
        this.classes = classNames(_.pick(bowser, 'mobile', 'chrome', 'firefox', 'msie', 'msedge', 'android', 'ios', 'safari', 'opera', 'mac', 'windows', 'windowsphone', 'linux', 'chromeos'));
        var lang = navigator.language.split('-')[0];
        lang = /(en|es)/gi.test(lang) ? lang : 'en';
        translate.setDefaultLang('en');
        translate.use(lang);
    }
    App.prototype.ngOnInit = function () {
        this.appState.set('lang', 'en_US');
    };
    App.prototype.isActive = function (instruction) {
        return this.router.isRouteActive(this.router.generate(instruction));
    };
    App.prototype.isScrolled = function () {
        return this.scrolled;
    };
    App.prototype.onScroll = function (event) {
        if (window.scrollY > this.lastScrolledPosition) {
            this.scrolled = true;
        }
        else {
            this.scrolled = false;
        }
        this.lastScrolledPosition = window.scrollY;
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [router_active_1.RouterActive, ng2_bootstrap_1.DROPDOWN_DIRECTIVES, change_lang_component_1.ChangeLang],
            pipes: [ng2_translate_1.TranslatePipe],
            styles: [require('./app.scss')],
            template: require('./app.html'),
            encapsulation: core_1.ViewEncapsulation.None
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', component: home_1.Home, name: 'Home' },
            { path: '/about', component: about_1.About, name: 'About' },
            { path: '/dojos', component: dojos_1.Dojos, name: 'Dojos' }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, app_service_1.AppState, ng2_translate_1.TranslateService])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=app.component.js.map