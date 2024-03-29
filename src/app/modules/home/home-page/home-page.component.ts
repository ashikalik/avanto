import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { RegionList } from "../../../core/model/common/region-list";
import { EventTypeList } from "../../../core/model/event/event-type-list";
import { EventList } from "../../../core/model/event/event-list";
import { EventService } from "../../../core/api-services/event.service";
import { CommonService } from "../../../core/api-services/common.service";
import { SearchEventFormDataService } from "../../../core/service/search-event-form-data.service";

import { forkJoin } from "rxjs";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  public regionList: RegionList;
  public eventTypeList: EventTypeList;
  public latestEventList: EventList;

  constructor(
    private eventService: EventService,
    private commonService: CommonService,
    private searchEventFormDataService: SearchEventFormDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    forkJoin(
      this.commonService.getRegionList(),
      this.commonService.getEventTypeList(),
      this.eventService.getLatestEventList()
    ).subscribe(
      res => {
        this.regionList = res[0];
        this.eventTypeList = res[1];
        this.latestEventList = res[2];
        console.log(this.regionList);
        console.log(this.eventTypeList);
        console.log(this.latestEventList);
      },
      err => {
        console.log(err);
      }
    );
  }

  onFindButtonClick($event) {
    this.router.navigate(["/search"]);
  }

  onSeeAllEventsButtonClick($event) {
    this.searchEventFormDataService.name = "";
    this.searchEventFormDataService.region = "";
    this.searchEventFormDataService.type = "";
    this.searchEventFormDataService.need_vol = "";
    this.router.navigate(["/search"]);
  }
}
