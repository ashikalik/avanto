import { Component, OnInit, Input } from '@angular/core';
import { LatestEvents } from "../../../core/models/latest-event";

@Component({
  selector: 'app-latest-events',
  templateUrl: './latest-events.component.html',
  styleUrls: ['./latest-events.component.scss']
})
export class LatestEventsComponent implements OnInit {
  @Input('latestEvents') latestEvents: LatestEvents;
  constructor() {
    
   }

  ngOnInit() {
  }

}
