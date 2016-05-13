// App
import {TranslateLoader} from "ng2-translate/ng2-translate";
export * from './app.component';
export * from './app.service';

import {AppState} from './app.service';
import {provide} from '@angular/core';
import {Http} from '@angular/http';
import {TranslateStaticLoader} from "ng2-translate/ng2-translate";
import {TranslateService} from "ng2-translate/ng2-translate";

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  provide(TranslateLoader, {
    useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/data/translations', '.json'),
    deps: [Http]
  }),
  TranslateService
];
