import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';

/**
 * LanguageSettingService service class
 * Stores the current language in local storage
 */
@Injectable({
  providedIn: "root"
})
export class LanguageSettingService {
  /** The key for language */
  private languageKey: string;
  private directionKey: string;
  private startDirectionKey: string;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.languageKey = "CURRENT_LANGUAGE";
    this.directionKey = "CURRENT_DIRECTION";
    this.startDirectionKey = "START_DIRECTION";
  }

  // public getLanguage() {
  //   return "ar";
  // }

  /**
   * Store language in local storage
   * @param { string } language - The language
   * @return { void }
   */
  public setLanguage(language: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.languageKey, language);
    }
  }

  /**
   * Retrieve language from local storage
   * @param { none }
   * @return { String } - The language
   */
  public getLanguage() {
    if (isPlatformBrowser(this.platformId)) {
      const language: string = localStorage.getItem(this.languageKey);
      if (language) {
        return language;
      }
    }

    this.setLanguage("ar");
    return "ar";

  }

  /**
   * Remove language from local storage
   * @param { none }
   * @return { void }
   */
  public removeLanguage() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.languageKey);
    }
  }

}
