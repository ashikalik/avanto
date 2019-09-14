import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  RECAPTCHA_SETTINGS,
  RecaptchaSettings,
  RECAPTCHA_LANGUAGE
} from "ng-recaptcha";

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AgmCoreModule } from '@agm/core';

import { GlobalModule } from "./global/global.module";
import { CoreModule } from "./core/core.module";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBF36FxPdKs1lbLJUJ_krEwT3uyjK1_1cM"
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    GlobalModule,
    CoreModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: "6LfoDokUAAAAABirpPJC2G6akcdZ6N9jwXPrYvid"
      } as RecaptchaSettings
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
