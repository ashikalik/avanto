import { Component, OnInit } from "@angular/core";
import { EventService } from "../../../core/api-services/event.service";
import { CommonService } from "../../../core/api-services/common.service";

import { Region } from "../../../core/models/region";
import { EventType } from "../../../core/models/event-type";
import { LatestEvents } from "../../../core/models/latest-event";

import { forkJoin } from "rxjs";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  public region: Region;
  public eventType: EventType;
  public latestEvents: LatestEvents;

  constructor(
    private eventService: EventService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    forkJoin(
      this.commonService.getRegion(),
      this.commonService.getEventType(),
      this.eventService.getLatestEvent()
    ).subscribe(res => {
      this.region = res[0];
      this.eventType = res[1];
      this.latestEvents = res[2];
      console.log(this.region);
      console.log(this.eventType);
      console.log(this.latestEvents);
    }, err => {
      console.log(err);
    });
  }

}
