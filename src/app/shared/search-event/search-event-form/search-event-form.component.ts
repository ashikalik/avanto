import { Component, OnInit, Input } from "@angular/core";
import { RegionList } from "../../../core/model/common/region-list";
import { EventTypeList } from "../../../core/model/event/event-type-list";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-event-form",
  templateUrl: "./search-event-form.component.html",
  styleUrls: ["./search-event-form.component.scss"]
})
export class SearchEventFormComponent implements OnInit {
  @Input("regionList") regionList: RegionList;
  @Input("eventTypeList") eventTypeList: EventTypeList;
  
  private eventRegionModel = '';
  private eventTypeModel = '';
  private eventNameModel = '';

  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  handleFindButtonClick() {
    this.router.navigate(["/search"], {
      queryParams: { region: this.eventRegionModel, "event-type": this.eventTypeModel, name: this.eventNameModel }
    });
  }
  handleSeeAllEventsButtonClick() {
    this.router.navigate(["/search"]);
  }
}
