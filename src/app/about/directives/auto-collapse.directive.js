var core_1 = require('@angular/core');
var AutoCollapse = (function () {
    function AutoCollapse(element, renderer) {
        this.element = element.nativeElement;
    }
    AutoCollapse = __decorate([
        core_1.Directive({
            selector: '[auto-collapse]',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], AutoCollapse);
    return AutoCollapse;
})();
exports.AutoCollapse = AutoCollapse;
//# sourceMappingURL=auto-collapse.directive.js.map