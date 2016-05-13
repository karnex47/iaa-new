var core_1 = require('@angular/core');
var app_service_1 = require("../../../app.service");
var common_1 = require("@angular/common");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var translate_pipe_1 = require("../../directives/translate-pipe");
var _ = require('lodash');
var ChangeLang = (function () {
    function ChangeLang(appState) {
        this.appState = appState;
        this.currentLang = _.result(appState, "get('lang')", 'en_US');
    }
    ChangeLang.prototype.isActive = function (language) {
        return language.toLocaleLowerCase() === this.currentLang.toLocaleLowerCase();
    };
    ChangeLang.prototype.setLang = function (lang) {
        this.currentLang = lang;
        this.appState.set('lang', lang);
    };
    ChangeLang = __decorate([
        core_1.Component({
            selector: 'change-lang',
            styles: [require('./change-lang.scss')],
            template: require('./change-lang.html'),
            directives: [ng2_bootstrap_1.DROPDOWN_DIRECTIVES, common_1.CORE_DIRECTIVES],
            pipes: [translate_pipe_1.TranslatePipe]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppState])
    ], ChangeLang);
    return ChangeLang;
})();
exports.ChangeLang = ChangeLang;
//# sourceMappingURL=change-lang.component.js.map