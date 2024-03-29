import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { RegionList } from "../../../core/model/common/region-list";
import { EventTypeList } from "../../../core/model/event/event-type-list";
import { SearchEventFormDataService } from "../../../core/service/search-event-form-data.service";

@Component({
  selector: "app-search-event-form",
  templateUrl: "./search-event-form.component.html",
  styleUrls: ["./search-event-form.component.scss"]
})
export class SearchEventFormComponent implements OnInit {
  @Input("regionList") regionList: RegionList;
  @Input("eventTypeList") eventTypeList: EventTypeList;
  @Output() findButtonClick: EventEmitter<any> = new EventEmitter();
  @Output() seeAllEventsButtonClick: EventEmitter<any> = new EventEmitter();

  constructor(public searchEventFormDataService: SearchEventFormDataService) {}

  ngOnInit() {}

  handleFindButtonClick() {
    this.findButtonClick.emit();
  }
  handleSeeAllEventsButtonClick() {
    this.seeAllEventsButtonClick.emit();
  }
}
