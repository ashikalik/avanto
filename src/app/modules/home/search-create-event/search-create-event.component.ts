import { Component, OnInit, Input } from '@angular/core';
import { Region } from "../../../core/models/region";
import { EventType } from "../../../core/models/event-type";

@Component({
  selector: 'app-search-create-event',
  templateUrl: './search-create-event.component.html',
  styleUrls: ['./search-create-event.component.scss']
})
export class SearchCreateEventComponent implements OnInit {

  @Input('region') region: Region;
  @Input('eventType') eventType: EventType;

  constructor() { }

  ngOnInit() {
  }

}
