import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DateTimeHelperService } from "../../../core/service/date-time-helper.service";
import { Duration } from "../../../core/model/common/duration";
import { EventData } from "src/app/core/model/event/event-data";
import { EventDisplayHelperService } from "../event-display-helper.service";

@Component({
  selector: "app-basic-details",
  templateUrl: "./basic-details.component.html",
  styleUrls: ["./basic-details.component.scss"]
})
export class BasicDetailsComponent implements OnInit {
  @Input("eventData") eventData: EventData;
  @Output() registerOrganizerClick: EventEmitter<any> = new EventEmitter();

  public eventStarted = true;
  public startDay = "";
  public startMonth = "";
  public startsIn: Duration;
  public packageRateRange;
  constructor(
    private dateTimeHelperService: DateTimeHelperService,
    private eventDisplayHelperService: EventDisplayHelperService
  ) {}

  ngOnInit() {
    this.formatEventStartData();
    this.eventStarted = this.dateTimeHelperService.isEventStarted(
      this.eventData.details.from_date,
      this.eventData.details.from_time
    );
    this.packageRateRange = this.eventDisplayHelperService.getPackageRateRange(this.eventData);
  }

  private formatEventStartData(): void {
    this.startDay = this.dateTimeHelperService.getDay(
      this.eventData.details.from_date
    );
    this.startMonth = this.dateTimeHelperService.getMonth(
      this.eventData.details.from_date
    );
  }

  public handleApplyOrganizerClick() {
    this.registerOrganizerClick.emit();
  }
}
