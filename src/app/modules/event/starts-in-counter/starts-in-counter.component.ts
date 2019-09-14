import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { DateTimeHelperService } from "../../../core/service/date-time-helper.service";
import { Duration } from "../../../core/model/common/duration";

@Component({
  selector: "app-starts-in-counter",
  templateUrl: "./starts-in-counter.component.html",
  styleUrls: ["./starts-in-counter.component.scss"]
})
export class StartsInCounterComponent implements OnInit, OnDestroy {
  @Input("startDate") startDate: string;
  @Input("startTime") startTime: string;
  public startsIn: Duration;
  private timerInterval: any;

  constructor(private dateTimeHelperService: DateTimeHelperService) {}

  ngOnInit() {
    this.startsIn = this.dateTimeHelperService.getStartsIn(
      this.startDate,
      this.startTime
    );
    this.startTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.startsIn = this.dateTimeHelperService.getStartsIn(
        this.startDate,
        this.startTime
      );
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }
}
