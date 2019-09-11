import { Component, OnInit, Input } from '@angular/core';
import { Region } from "../../../core/models/region";
import { EventType } from "../../../core/models/event-type";

@Component({
  selector: 'app-search-event-form',
  templateUrl: './search-event-form.component.html',
  styleUrls: ['./search-event-form.component.scss']
})
export class SearchEventFormComponent implements OnInit {
  @Input('region') region: Region;
  @Input('eventType') eventType: EventType;
  constructor() { }

  ngOnInit() {
    console.log(this.eventType);
  }

}
