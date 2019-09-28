import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { NetworkConfig } from "../config/network.config";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UpdateInformationRequest } from "../model/user/update-information-request";
import { UpdatePasswordRequest } from "../model/user/update-password-request";
import { InvoiceResponse } from "../model/invoice/invoice-response";
import { TicketResponse } from "../model/ticket/ticket-response";
import { CvResponse } from "../model/cv/cv-response";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  public updateInfo(body: UpdateInformationRequest, userID: number): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.USERS + "/" + userID;
    return this.httpClient.put<any>(url, body);
  }

  public updatePassword(body: UpdatePasswordRequest, userID: number): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.USERS + "/" + userID;
    return this.httpClient.put<any>(url, body);
  }

  public getInvoices(limit: number, page: number): Observable<InvoiceResponse> {
    const url =
      environment.BASE_URL +
      NetworkConfig.LIST_INVOCICE +
      "?page=" +
      page +
      "&limit=" +
      limit;
    return this.httpClient.get<InvoiceResponse>(url);
  }

  public getTickets(body: any): Observable<TicketResponse> {
    const url = environment.BASE_URL + NetworkConfig.LIST_TICKETS_OF_INVOCE;
    return this.httpClient.post<TicketResponse>(url, body);
  }

  public getCV(): Observable<CvResponse> {
    const url = environment.BASE_URL + NetworkConfig.CV;
    return this.httpClient.get<CvResponse>(url);
  }

  public createCV(body: any): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.CV;
    return this.httpClient.post<any>(url, body);
  }

  public updateCV(form: any): Observable<any> {
    var body = {
      bio: form.bio,
      nationality_id: form.nationality_id,
      birthday: form.birthday.formatted
    };
    const url = environment.BASE_URL + NetworkConfig.CV;
    return this.httpClient.put<any>(url, body);
  }

  public createEducation(body: any): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.QUALIFICATION;
    return this.httpClient.post<any>(url, body);
  }

  public updateEducation(form: any, eq_id: number): Observable<any> {
    var body = {
      eq_id: eq_id,
      name: form.name,
      from_date: form.from_date.formatted,
      end_date: form.end_date.formatted,
      education_id: form.education_id
    };
    const url = environment.BASE_URL + NetworkConfig.QUALIFICATION;
    return this.httpClient.put<any>(url, body);
  }

  public createExperience(body: any): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.EXPERIENCE;
    return this.httpClient.post<any>(url, body);
  }

  public updateExperience(form: any, experience_id: number): Observable<any> {
    var body = {
      id: experience_id,
      company_name: form.company_name,
      role: form.role,
      from_date: form.from_date.formatted,
      end_date: form.end_date.formatted
    };
    const url = environment.BASE_URL + NetworkConfig.EXPERIENCE;
    return this.httpClient.put<any>(url, body);
  }

  public createSkill(body: any): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.SKILLS;
    return this.httpClient.post<any>(url, body);
  }

  public updateSkill(body: any): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.SKILLS;
    return this.httpClient.put<any>(url, body);
  }

  public deleteEducation(body: any): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.DELETE_QUALIFICATION;
    return this.httpClient.post<any>(url, body);
  }

  public deleteExperience(body: any): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.DELETE_EXPERIENCE;
    return this.httpClient.post<any>(url, body);
  }

  public deleteSkill(body: any): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.DELETE_SKILLS;
    return this.httpClient.post<any>(url, body);
  }
}
