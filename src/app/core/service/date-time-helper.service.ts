import { Injectable } from "@angular/core";
import { Duration } from '../model/common/duration';

import * as moment from "moment";

@Injectable({
  providedIn: "root"
})
export class DateTimeHelperService {
  private dateFormat = "YYYY-MM-DDTHH:mm:ss";

  constructor() {}

  public getDay(date: string): string {
    let momentDate = moment(date + "T00:00:00", this.dateFormat);
    return momentDate.format("DD");
  }

  public getMonth(date: string): string {
    let momentDate = moment(date + "T00:00:00", this.dateFormat);
    return momentDate.format("MMM");
  }

  public getStartsIn(date: string, time: string): Duration {

    var now = moment();
    var end = moment(date + "T" + time, this.dateFormat);

    var duration = moment.duration(end.diff(now));

    var days = duration.days();
    duration.subtract(moment.duration(days, "days"));

    var hours = duration.hours();
    duration.subtract(moment.duration(hours, "hours"));

    var minutes = duration.minutes();
    duration.subtract(moment.duration(minutes, "minutes"));

    var seconds = duration.seconds();

    let startsIn = {
      days: days > 0 ? days : 0,
      hours: hours > 0 ? hours : 0,
      minutes: minutes > 0 ? minutes : 0,
      seconds: seconds > 0 ? seconds : 0
    };

    let startsInStr  = {
      days: startsIn.days > 9 ? ""+startsIn.days : "0"+startsIn.days,
      hours: startsIn.hours > 9 ? ""+startsIn.hours : "0"+startsIn.hours,
      minutes: startsIn.minutes > 9 ? ""+startsIn.minutes : "0"+startsIn.minutes,
      seconds: startsIn.seconds > 9 ? ""+startsIn.seconds : "0"+startsIn.seconds
    } as Duration;

    return startsInStr;
  }

  public getMomentDate(date: string, time: string): any {
    let momentDate = moment(date + "T" + time, this.dateFormat).format(
      "YYYY-MM-DDTHH:mm:ss"
    );
    return momentDate;
  }

  public getAmPm(time: any): any {
    let hour = time.split(":")[0];
    let part = hour > 12 ? "pm" : "am";
    return part;
  }

  get24HourTime(time: any, type: any): any {
    let hour = time.split(":")[0];
    let min = time.split(":")[1];

    if (type === "pm") {
      hour = parseInt(hour) + 12;
      if (hour === 24) {
        hour = "00";
        min = "01";
      }
    }

    return hour + ":" + min;
  }
}
