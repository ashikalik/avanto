import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DateTimeHelperService {
  constructor() {}

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
