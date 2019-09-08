import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-events',
  templateUrl: './latest-events.component.html',
  styleUrls: ['./latest-events.component.scss']
})
export class LatestEventsComponent implements OnInit {
  public events;
  constructor() {
    this.events = [1,2,3,4]
   }

  ngOnInit() {
  }

}
