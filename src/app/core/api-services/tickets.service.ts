import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { NetworkConfig } from "../config/network.config";
import { City } from "../models/city";

@Injectable({
  providedIn: "root"
})
export class TicketsService {
  constructor(private httpClient: HttpClient) {}

  public getTicketList(
    page: number,
    event_key: string,
    searchInput: any
  ): Observable<any> {
    let url =
      environment.BASE_URL +
      NetworkConfig.TICKET_LIST +
      event_key +
      "?page=" +
      page;

    if (searchInput) {
      url = url + "&search=" + searchInput;
    }
    return this.httpClient.get<City>(url);
  }

  public getTicketDetails(invoic_id: any, event_key: string): Observable<any> {
    let url =
      environment.BASE_URL +
      NetworkConfig.TICKET_DETAILS +
      event_key +
      "/" +
      invoic_id;
    return this.httpClient.get<City>(url);
  }

  public refund(invoic_id: any, event_key: string): Observable<any> {
    let body = {
      invoice_id: invoic_id
    };
    let url =
      environment.BASE_URL + NetworkConfig.REFUND + event_key + "/" + invoic_id;
    return this.httpClient.put<any>(url, body);
  }
}
