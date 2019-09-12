import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SearchEventFormDataService {
  public need_vol: any;
  public type: any;
  public name: any;
  public region: any;

  constructor() {
    this.need_vol = "";
    this.type = "";
    this.name = "";
    this.region = "";
  }
}
