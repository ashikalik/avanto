import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: "root"
})
export class UserAuthService {
  /** The key for authentication token */
  private tokenKey: string;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.tokenKey = "AUTH_TOKEN";
  }

  /**
   * Store authentication token in local storage
   * @ param { string } token - The auth token
   * @ return { void }
   */
  public setToken(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.tokenKey, token);
    }
  }

  /**
   * Retrieve authentication token from local storage
   * @ param { none }
   * @ return { String } - The authentication token
   */
  public getToken() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.tokenKey);
    }
  }

  /**
   * Remove authentication token from local storage
   * @ param { none }
   * @ return { void }
   */
  public removeToken() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.tokenKey);
    }
  }

  public getUserProfile() {
    if (isPlatformBrowser(this.platformId)) {
      const token: string = localStorage.getItem(this.tokenKey);
      if (token) {
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(token);
        return decodedToken;
      }
    }

    return null;
  }

  public clearSession() {
    this.removeToken();
  }
}
