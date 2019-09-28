import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { NetworkConfig } from "../config/network.config";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginRequest } from "../model/user/login-request";
import { LoginResponse } from "../model/user/login-response";
import { ForgotPasswordResponse } from "../model/user/forgot-password-response";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  public signup(body: any): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.USERS;
    return this.httpClient.post<any>(url, body);
  }

  public login(body: LoginRequest): Observable<LoginResponse> {
    const url = environment.BASE_URL + NetworkConfig.LOGIN_URL;
    return this.httpClient.post<LoginResponse>(url, body);
  }

  public logout(): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.LOGOUT_URL;
    return this.httpClient.get<any>(url);
  }

  public forgetPassword(body: any): Observable<ForgotPasswordResponse> {
    const url = environment.BASE_URL + NetworkConfig.FORGET_PASSWORD;
    return this.httpClient.post<ForgotPasswordResponse>(url, body);
  }

  public reactivateEmail(body: any): Observable<ForgotPasswordResponse> {
    const url = environment.BASE_URL + NetworkConfig.REACTIVATE;
    return this.httpClient.post<any>(url, body);
  }

  public resetPassword(form: any, token: any): Observable<any> {
    let body = {
      new_password: form.new_password,
      confirm_password: form.confirm_password
    };
    const url = environment.BASE_URL + NetworkConfig.RESET_PASSWORD + token;
    return this.httpClient.post<any>(url, body);
  }

  public checkResetPasswordToken(token: any): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.RESET_PASSWORD + token;
    return this.httpClient.get<any>(url);
  }

  public activateAccount(token: any): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.ACTIVATE_ACCOUNT + token;
    return this.httpClient.get<any>(url);
  }

  public getUserDetials(): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.LOGIN_URL;
    return this.httpClient.get<any>(url);
  }
}
