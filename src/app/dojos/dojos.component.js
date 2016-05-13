var core_1 = require('@angular/core');
var translate_pipe_1 = require("../common/directives/translate-pipe");
var Dojos = (function () {
    function Dojos() {
    }
    Dojos = __decorate([
        core_1.Component({
            selector: 'dojo',
            pipes: [translate_pipe_1.TranslatePipe],
            styles: [require('./dojos.scss')],
            template: require('./dojos.html')
        }), 
        __metadata('design:paramtypes', [])
    ], Dojos);
    return Dojos;
})();
exports.Dojos = Dojos;
//# sourceMappingURL=dojos.component.js.map