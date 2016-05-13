var core_1 = require('@angular/core');
var _ = require('lodash');
var ParagraphTransform = (function () {
    function ParagraphTransform() {
    }
    ParagraphTransform.prototype.transform = function (value, args) {
        return _.reduce(value, function (memo, para) {
            return memo += '<p>' + para + '</p>';
        }, '');
    };
    ParagraphTransform = __decorate([
        core_1.Pipe({
            name: 'paragraphTransform',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], ParagraphTransform);
    return ParagraphTransform;
})();
exports.ParagraphTransform = ParagraphTransform;
//# sourceMappingURL=paragraph-transform.pipe.js.map