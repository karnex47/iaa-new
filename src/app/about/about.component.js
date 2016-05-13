var core_1 = require('@angular/core');
var translate_pipe_1 = require("../common/directives/translate-pipe");
var auto_collapse_directive_1 = require("./directives/auto-collapse.directive");
var paragraph_transform_pipe_1 = require("./pipes/paragraph-transform.pipe");
var About = (function () {
    function About() {
    }
    About = __decorate([
        core_1.Component({
            selector: 'about',
            styles: [require('./about.scss')],
            template: require('./about.html'),
            pipes: [translate_pipe_1.TranslatePipe, paragraph_transform_pipe_1.ParagraphTransform],
            directives: [auto_collapse_directive_1.AutoCollapse]
        }), 
        __metadata('design:paramtypes', [])
    ], About);
    return About;
})();
exports.About = About;
//# sourceMappingURL=about.component.js.map