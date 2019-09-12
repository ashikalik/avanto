import { Component, OnInit, Input } from "@angular/core";
import { RegionList } from "../../../core/model/common/region-list";
import { EventTypeList } from "../../../core/model/event/event-type-list";
import { SearchEventFormData } from "../../../core/model/search/search-event-form-data";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-event-form",
  templateUrl: "./search-event-form.component.html",
  styleUrls: ["./search-event-form.component.scss"]
})
export class SearchEventFormComponent implements OnInit {
  @Input("regionList") regionList: RegionList;
  @Input("eventTypeList") eventTypeList: EventTypeList;
  @Input("searchEventFormData") searchEventFormData: SearchEventFormData;  

  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  handleFindButtonClick() {
    console.log(this.searchEventFormData.event_region)
    console.log(this.searchEventFormData.event_type)
    console.log(this.searchEventFormData.event_name)

    // this.router.navigate(["/search"], {
    //   queryParams: { region: this.eventRegionModel, "event-type": this.eventTypeModel, name: this.eventNameModel }
    // });
  }
  handleSeeAllEventsButtonClick() {
    //this.router.navigate(["/search"]);
  }
}
