import { Component, OnInit, Input } from '@angular/core';
import { EventList } from "../../../core/model/event/event-list";

@Component({
  selector: 'app-latest-events',
  templateUrl: './latest-events.component.html',
  styleUrls: ['./latest-events.component.scss']
})
export class LatestEventsComponent implements OnInit {
  @Input('latestEventList') latestEventList: EventList;
  constructor() {
    
   }

  ngOnInit() {
  }
  onSearch() {
  }

}
