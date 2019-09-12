import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RecaptchaModule } from "ng-recaptcha";
import { RecaptchaFormsModule } from "ng-recaptcha/forms";

import { ContactUsRoutingModule } from "./contact-us-routing.module";
import { ContactUsPageComponent } from "./contact-us-page/contact-us-page.component";
import { ContactUsFormComponent } from "./contact-us-form/contact-us-form.component";
import { TranslationModule } from "../../shared/translation/translation.module";

@NgModule({
  declarations: [ContactUsPageComponent, ContactUsFormComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslationModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ]
})
export class ContactUsModule {}
