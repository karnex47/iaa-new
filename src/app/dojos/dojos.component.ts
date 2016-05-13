import {Component} from '@angular/core';
import {TranslatePipe} from "../common/directives/translate-pipe";

@Component({
  selector: 'dojo',
  pipes: [TranslatePipe],
  styles: [require('./dojos.scss')],
  template: require('./dojos.html')
})

export class Dojos {

}
