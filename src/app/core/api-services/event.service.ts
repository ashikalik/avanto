import { DateTimeHelperService } from "../service/date-time-helper.service";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { NetworkConfig } from "../config/network.config";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LatestEvent } from "../models/latest-event";
import { EventDetails } from "../models/event-details";
import { SearchEvents } from "../models/search-events";

@Injectable({
  providedIn: "root"
})
export class EventService {
  constructor(
    private httpClient: HttpClient,
    private dateTimeHelperService: DateTimeHelperService
  ) {}

  public getLatestEvent(): Observable<LatestEvent> {
    const url = environment.BASE_URL + NetworkConfig.LATEST_EVENTS;
    return this.httpClient.get<LatestEvent>(url);
  }

  public getEventDetail(eventKey: string): Observable<EventDetails> {
    const url = environment.BASE_URL + NetworkConfig.VIEW_EVENT + eventKey;
    return this.httpClient.get<EventDetails>(url);
  }

  public search(
    limit: number,
    page: number,
    name: any,
    type_id: any,
    region: any,
    need_vol: any
  ): Observable<SearchEvents> {
    let url =
      environment.BASE_URL +
      NetworkConfig.SEARCH +
      "?limit=" +
      limit +
      "&page=" +
      page;

    if (name != null && name !== "") {
      url = url + "&name=" + name;
    }

    if (type_id != null && type_id !== "") {
      url = url + "&type_id=" + type_id;
    }

    if (region != null && region !== "") {
      url = url + "&region=" + region;
    }

    if (need_vol != null && need_vol !== "") {
      url = url + "&need_vol=" + need_vol;
    }

    return this.httpClient.get<SearchEvents>(url);
  }

  public getMyEvents(limit: number, page: number): Observable<LatestEvent> {
    const url =
      environment.BASE_URL +
      NetworkConfig.EVENT +
      "?limit=" +
      limit +
      "&page=" +
      page;
    return this.httpClient.get<LatestEvent>(url);
  }

  public submitRequest(event_key: string): any {
    const url = environment.BASE_URL + NetworkConfig.SUBMIT_REQUEST + event_key;
    return this.httpClient.post<any>(url, {});
  }

  public addEvent(form: any, imageURL: any): any {
    let body = {
      name: form.name,
      city_id: form.city_id,
      details: form.details,
      img: null,
      from_date: form.from_date.formatted,
      end_date: form.end_date.formatted,
      from_time: form.from_time,
      end_time: form.end_time,
      type_id: form.type_id,
      lat: form.lat,
      lng: form.lng,
      address: form.address,
      maximum_capacity: form.maximum_capacity,
      minimum_age: form.minimum_age,
      region: form.region,
      audience_gender: form.audience_gender,
      recaptcha: form.recaptcha
    };

    body.from_time = this.dateTimeHelperService.get24HourTime(
      body.from_time,
      form.from_time_type
    );
    body.end_time = this.dateTimeHelperService.get24HourTime(
      body.end_time,
      form.end_time_type
    );

    if (imageURL) {
      body.img = imageURL;
    } else {
      delete body.img;
    }

    const url = environment.BASE_URL + NetworkConfig.EVENT;
    return this.httpClient.post<any>(url, body);
  }
}
