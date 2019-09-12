import { Component, OnInit, Input } from '@angular/core';
import { RegionList } from "../../../core/model/common/region-list";
import { EventTypeList } from "../../../core/model/event/event-type-list";

@Component({
  selector: 'app-search-create-event',
  templateUrl: './search-create-event.component.html',
  styleUrls: ['./search-create-event.component.scss']
})
export class SearchCreateEventComponent implements OnInit {

  @Input('regionList') regionList: RegionList;
  @Input('eventTypeList') eventTypeList: EventTypeList;

  constructor() { }

  ngOnInit() {
  }

}
