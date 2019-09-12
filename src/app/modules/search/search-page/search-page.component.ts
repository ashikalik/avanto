import { Component, OnInit } from "@angular/core";
import { RegionList } from "../../../core/model/common/region-list";
import { EventTypeList } from "../../../core/model/event/event-type-list";
import { EventList } from "../../../core/model/event/event-list";
import { EventService } from "../../../core/api-services/event.service";
import { CommonService } from "../../../core/api-services/common.service";
import { SearchEventFormDataService } from "../../../core/service/search-event-form-data.service";
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
  public limit: number;
  public page: number;
  public searchResultEventList;

  constructor(
    private eventService: EventService,
    private commonService: CommonService,
    private searchEventFormDataService: SearchEventFormDataService
  ) {}

  ngOnInit() {
    this.resetSearch();
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
  }
  onSeeAllEventsButtonClick($event) {
    this.searchAll();
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
    if (!this.searchEventFormDataService.name)
      this.searchEventFormDataService.name = "";
    if (!this.searchEventFormDataService.need_vol)
      this.searchEventFormDataService.need_vol = "";
    if (!this.searchEventFormDataService.type)
      this.searchEventFormDataService.type = "";
    if (!this.searchEventFormDataService.region)
      this.searchEventFormDataService.region = "";
    this.limit = 20;
    this.page = 1;
  }

  public searchAll() {
    this.resetSearch();
    this.searchEventFormDataService.name = "";
    this.searchEventFormDataService.need_vol = "";
    this.searchEventFormDataService.type = "";
    this.searchEventFormDataService.region = "";
    this.search();
  }

  private search() {
    this.eventService
      .search(
        this.limit,
        this.page,
        this.searchEventFormDataService.name,
        this.searchEventFormDataService.need_vol,
        this.searchEventFormDataService.type,
        this.searchEventFormDataService.region
      )
      .subscribe(
        res => {
          this.searchResultEventList = res;
          console.log(this.searchResult);
        },
        err => {}
      );
  }
}
