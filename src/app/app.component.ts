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
  private direction: string;


  constructor(dir: Directionality) {
    this.direction = 'ltr';
    this.isRtl = dir.value === 'rtl';
  }

  onDirectionChanged(newDirecion: string) {
   
    console.log(newDirecion);
    this.direction = newDirecion;
  }

}
