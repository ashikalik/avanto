import { Component } from '@angular/core';
import {Directionality} from '@angular/cdk/bidi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'evento';
  private isRtl: boolean;


  constructor(dir: Directionality) {
    this.isRtl = dir.value === 'rtl';
    console.log(this.isRtl);
  }

}
