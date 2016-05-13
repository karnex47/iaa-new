function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// App
var ng2_translate_1 = require("ng2-translate/ng2-translate");
__export(require('./app.component'));
__export(require('./app.service'));
var app_service_2 = require('./app.service');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var ng2_translate_2 = require("ng2-translate/ng2-translate");
var ng2_translate_3 = require("ng2-translate/ng2-translate");
// Application wide providers
exports.APP_PROVIDERS = [
    app_service_2.AppState,
    core_1.provide(ng2_translate_1.TranslateLoader, {
        useFactory: function (http) { return new ng2_translate_2.TranslateStaticLoader(http, 'assets/data/translations', '.json'); },
        deps: [http_1.Http]
    }),
    ng2_translate_3.TranslateService
];
//# sourceMappingURL=index.js.map