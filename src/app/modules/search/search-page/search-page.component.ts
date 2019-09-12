import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RegionList } from "../../../core/model/common/region-list";
import { EventTypeList } from "../../../core/model/event/event-type-list";
import { EventList } from "../../../core/model/event/event-list";
import { SearchEventFormData } from "../../../core/model/search/search-event-form-data";

import { EventService } from "../../../core/api-services/event.service";
import { CommonService } from "../../../core/api-services/common.service";

import { forkJoin } from "rxjs";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.scss"]
})
export class SearchPageComponent implements OnInit {
  public regionList: RegionList;
  public eventTypeList: EventTypeList;
  public latestEventList: EventList;
  public searchEventFormData: SearchEventFormData;
  public limit: number;
  public page: number;
  public searchResult;

  constructor(
    private eventService: EventService,
    private commonService: CommonService,
    private route: ActivatedRoute
  ) {
    this.searchEventFormData = {} as SearchEventFormData;

    this.searchEventFormData.event_name = "";
    this.searchEventFormData.event_region = 0;
    this.searchEventFormData.event_type = 0;
  }

  ngOnInit() {
    this.resetSearch();
    this.route.queryParamMap.subscribe(params => {
      if (params.has("region")) {
        this.searchEventFormData.event_region = +params.get("region");
      }
      if (params.has("type")) {
        this.searchEventFormData.event_type = +params.get("type");
      }
      if (params.has("name")) {
        this.searchEventFormData.event_name = params.get("name");
      }
    });
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
      },
      err => {
        console.log(err);
      }
    );
  }

  onFindButtonClick($event) {
    this.search();
    console.log($event);
    // queryParams: {
    //   region: $event.event_region,
    //   type: $event.event_type,
    //   name: $event.event_name
    // }
  }
  onSeeAllEventsButtonClick($event) {
    this.searchAll();
    console.log($event);
  }

  goToPage(n: number): void {
    this.page = n;
    this.search();
  }

  onNext(): void {
    this.page++;
    this.search();
  }

  onPrev(): void {
    this.page--;
    this.search();
  }

  resetSearch() {
    if (!this.searchEventFormData.event_name)
      this.searchEventFormData.event_name = "";
    // if (!this.searchService.need_vol)
    //     this.searchService.need_vol = '';
    if (!this.searchEventFormData.event_type)
      this.searchEventFormData.event_type = 0;
    if (!this.searchEventFormData.event_region)
      this.searchEventFormData.event_region = 0;
    this.limit = 20;
    this.page = 1;
  }

  public searchAll() {
    this.resetSearch();
    this.searchEventFormData.event_name = "";
    //this.searchService.need_vol = '';
    this.searchEventFormData.event_type = 0;
    this.searchEventFormData.event_region = 0;
    debugger;
    this.search();
  }

  private search() {
    debugger;
    this.eventService
      .search(
        this.limit,
        this.page,
        this.searchEventFormData.event_name,
        this.searchEventFormData.event_type,
        this.searchEventFormData.event_region,
        ""
      )
      .subscribe(
        res => {
          this.searchResult = res;
          console.log(this.searchResult);
        },
        err => {}
      );
  }
}
