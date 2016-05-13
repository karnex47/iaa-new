/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';

import {Home} from './home';
import {About} from './about';
import {Dojos} from './dojos';
import {ChangeLang} from './common/components/change-lang/change-lang.component'
import {AppState} from './app.service';
import {RouterActive} from './router-active';
import {DROPDOWN_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {TranslatePipe, TranslateService} from "ng2-translate/ng2-translate";

const bowser = require('bowser');
const classNames = require('classnames');
const _ = require('lodash');

/*
 * App Component
 * Top Level Component
 */

@Component({
  selector: 'app',
  directives: [ RouterActive, DROPDOWN_DIRECTIVES, ChangeLang ],
  pipes: [TranslatePipe],
  styles: [require('./app.scss')],
  template: require('./app.html'),
  encapsulation: ViewEncapsulation.None
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/dojos', component: Dojos, name: 'Dojos'}
])
export class App {
  scrolled = false;
  lastScrolledPosition = 0;
  classes = classNames(_.pick(bowser, 'mobile', 'chrome', 'firefox', 'msie', 'msedge', 'android', 'ios', 'safari', 'opera', 'mac', 'windows', 'windowsphone', 'linux', 'chromeos'));
  constructor(public router: Router, public appState: AppState, translate: TranslateService) {
    let lang = navigator.language.split('-')[0];
    lang = /(en|es)/gi.test(lang) ? lang : 'en';
    translate.setDefaultLang('en');
    translate.use(lang);
  }

  ngOnInit() {
    this.appState.set('lang', 'en_US');
  }

  isActive(instruction: any[]): boolean {
    return this.router.isRouteActive(this.router.generate(instruction));
  }

  isScrolled(): boolean {
    return this.scrolled;
  }

  onScroll(event) {
    if(window.scrollY > this.lastScrolledPosition) {
      this.scrolled = true;
    }
    else {
      this.scrolled = false;
    }
    this.lastScrolledPosition = window.scrollY;
  }
}
