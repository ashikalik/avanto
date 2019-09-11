import { Component, OnInit } from "@angular/core";
import { EventService } from "../../../core/api-services/event.service";
import { CommonService } from "../../../core/api-services/common.service";

import {Region} from "../../../core/models/region";
import {EventType} from "../../../core/models/event-type";
import {LatestEvent} from "../../../core/models/latest-event";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {

  public region: Region;
  public eventTypes: EventType;
  public latestEvent: LatestEvent;

  constructor(
    private eventService: EventService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.getRegion();
    this.getEventType();
    this.getLatestEvent();
  }

  getRegion(): void {
    this.commonService.getRegion().subscribe(
      res => {
        this.region = res;
        console.log(this.region)
      },
      err => {}
    );
  }

  getEventType(): void {
    this.commonService.getEventType().subscribe(
      res => {
        this.eventTypes = res;
        console.log(this.eventTypes)
      },
      err => {}
    );
  }

  getLatestEvent(): void {
    this.eventService.getLatestEvent().subscribe(
      res => {
        this.latestEvent = res;
        console.log(this.latestEvent);
      },
      err => {}
    );
  }
}
