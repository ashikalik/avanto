import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() directionChanged = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  handleLTRClick():void {

    this.directionChanged.emit('LTR');
  }
  handleRTLClick():void {

    this.directionChanged.emit('RTL');
  }

}
