var core_1 = require('@angular/core');
var utils_1 = require('../utils/utils');
var core_2 = require("@angular/core");
var app_service_1 = require("../../app.service");
var core_3 = require("@angular/core");
var _ = require('lodash');
var TranslatePipe = (function () {
    function TranslatePipe(appState, zone) {
        this.appState = appState;
        this.zone = zone;
    }
    TranslatePipe.prototype.transform = function (key, args) {
        var _this = this;
        if (this.currentLang !== this.appState.get('lang')) {
            this.currentLang = _.isEmpty(this.appState.get('lang')) ? 'en_US' : this.appState.get('lang');
            utils_1.getTranslations(this.currentLang)
                .then(function (translations) {
                _this.translations = translations;
                _this.zone.run(function () { });
            });
        }
        if (this.translations) {
            return _.get(this.translations, key, key);
        }
    };
    TranslatePipe = __decorate([
        core_2.Injectable(),
        core_1.Pipe({
            name: 'translate',
            pure: false
        }), 
        __metadata('design:paramtypes', [app_service_1.AppState, core_3.NgZone])
    ], TranslatePipe);
    return TranslatePipe;
})();
exports.TranslatePipe = TranslatePipe;
//# sourceMappingURL=translate-pipe.js.map