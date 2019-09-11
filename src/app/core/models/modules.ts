import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "../core.module";
import { RecaptchaModule } from "ng-recaptcha";
import { RecaptchaFormsModule } from "ng-recaptcha/forms";
import { CommonModule } from "@angular/common";
import { MyDatePickerModule } from "mydatepicker";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const BASE_MODULES: any[] = [
  CoreModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  MyDatePickerModule,
  RecaptchaModule.forRoot(),
  RecaptchaFormsModule,
  TranslateModule.forChild({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  })
];
