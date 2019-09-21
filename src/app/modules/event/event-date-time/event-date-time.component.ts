import { Component, OnInit, Input } from "@angular/core";
import { EventDetails } from "../../../core/model/event/event-details";
import { DateTimeHelperService } from "../../../core/service/date-time-helper.service";

@Component({
  selector: "app-event-date-time",
  templateUrl: "./event-date-time.component.html",
  styleUrls: ["./event-date-time.component.scss"]
})
export class EventDateTimeComponent implements OnInit {
  @Input("eventDetails") eventDetails: EventDetails;
  public eventTiming;
  constructor(private dateTimeHelperService: DateTimeHelperService) {}

  ngOnInit() {
    this.formatEventTiming();
  }

  private formatEventTiming() {
    this.eventTiming = this.dateTimeHelperService.getEventTiming(
      this.eventDetails.from_date,
      this.eventDetails.end_date,
      this.eventDetails.from_time,
      this.eventDetails.end_time
    );
    //let start = this.eventDetails.from_date 
    //this.eventTiming.push()
    // this.eventTiming.forEach(aDateString => {
    //   aDateString =
    //     aDateString +
    //     " " +
    //     this.eventDetails.from_time +
    //     " " +
    //     this.eventDetails.end_time;
    // });
    console.log(this.eventTiming);
  }
}
