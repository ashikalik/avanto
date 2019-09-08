import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Directionality} from '@angular/cdk/bidi';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() languageChanged = new EventEmitter<String>();

  constructor(public direction: Directionality) { 

  }

  ngOnInit() {
  }

  handleEnglishClick():void {

    this.languageChanged.emit('en');
  }
  handleArabicClick():void {

    this.languageChanged.emit('ar');
  }

}
