import { Component, Inject } from "@angular/core";
import { Directionality } from "@angular/cdk/bidi";
import { TranslateService } from "@ngx-translate/core";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "evento";
  private isRtl: boolean;
  public direction: string;
  public language: string;
  private translate;

  constructor(dir: Directionality, translateService: TranslateService, @Inject(DOCUMENT) private document: Document) {
    this.translate = translateService;
    this.translate.setDefaultLang('ar');
    this.onLanguageChanged('ar');
  }

  onLanguageChanged(newLanguage: string) {
    console.log(newLanguage);
    this.language = newLanguage;

    if (this.language === 'ar') {
      this.translate.use('ar');
      this.direction = 'rtl';
      this.document.documentElement.lang = 'ar'; 
    } else {
      this.translate.use('en');
      this.direction = 'ltr';
      this.document.documentElement.lang = 'en'; 
    }
    

  }
}
