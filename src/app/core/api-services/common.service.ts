import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { NetworkConfig } from "../config/network.config";
// / import { City } from "../models/city";
// import { EventType } from "../models/event-type";
// import { Nationality } from "../models/nationality";
// import { Educations } from "../models/educations";
// import { Audiences } from "../models/audience";
/******************************* */
import { RegionList } from "../model/common/region-list";
import { CityList } from "../model/common/city-list";
import { EventTypeList } from "../model/event/event-type-list";
import { EducationList } from "../model/common/education-list";
import { AudienceList } from "../model/common/audience-list";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Returns Observable of RegionList by calling web service
   * @returns Observable<RegionList>
   */
  getRegionList(): Observable<RegionList> {
    const url = environment.BASE_URL + NetworkConfig.REGION_LIST;
    return this.httpClient.get<RegionList>(url);
  }

  /**
   * Returns Observable of EventTypeList by calling web service
   * @returns Observable<EventTypeList>
   */
  getEventTypeList(): Observable<EventTypeList> {
    const url = environment.BASE_URL + NetworkConfig.EVENT_TYPE;
    return this.httpClient.get<EventTypeList>(url);
  }

 /**
   * Returns Observable of CityList by calling web service
   * @returns Observable<CityList>
   */
  getCityList(): Observable<CityList> {
    const url = environment.BASE_URL + NetworkConfig.CITY_LIST;
    return this.httpClient.get<CityList>(url);
  }

   /**
   * Returns Observable of CityList by calling web service
   * @returns Observable<CityList>
   */
   getEducations(): Observable<EducationList> {
    const url = environment.BASE_URL + NetworkConfig.EDUCATIONS;
    return this.httpClient.get<EducationList>(url);
  }

  getAudiance(): Observable<AudienceList> {
    const url = environment.BASE_URL + NetworkConfig.AUDIANCE_LIST;
    return this.httpClient.get<AudienceList>(url);
  }

/****************** */

  // getCity(): Observable<City> {
  //   const url = environment.BASE_URL + NetworkConfig.CITY_LIST;
  //   return this.httpClient.get<City>(url);
  // }

  // getRegion(): Observable<City> {
  //   const url = environment.BASE_URL + NetworkConfig.REGION_LIST;
  //   return this.httpClient.get<City>(url);
  // }

  // getEventType(): Observable<EventType> {
  //   const url = environment.BASE_URL + NetworkConfig.EVENT_TYPE;
  //   return this.httpClient.get<EventType>(url);
  // }

  // getNationality(): Observable<Nationality> {
  //   const url = environment.BASE_URL + NetworkConfig.NATIONALITIES;
  //   return this.httpClient.get<Nationality>(url);
  // }

  // getEducations(): Observable<Educations> {
  //   const url = environment.BASE_URL + NetworkConfig.EDUCATIONS;
  //   return this.httpClient.get<Educations>(url);
  // }

  // getAudiance(): Observable<Audiences> {
  //   const url = environment.BASE_URL + NetworkConfig.AUDIANCE_LIST;
  //   return this.httpClient.get<Audiences>(url);
  // }
}
