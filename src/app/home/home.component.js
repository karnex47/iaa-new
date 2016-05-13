var core_1 = require('@angular/core');
var translate_pipe_1 = require("../common/directives/translate-pipe");
var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            providers: [],
            pipes: [translate_pipe_1.TranslatePipe],
            styles: [require('./home.scss')],
            template: require('./home.html')
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
})();
exports.Home = Home;
//# sourceMappingURL=home.component.js.map