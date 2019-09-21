import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { RegisterBannerComponent } from "./register-banner/register-banner.component";
import { RegisterGetStartedComponent } from "./register-get-started/register-get-started.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslationModule } from "src/app/common/translation/translation.module";
import { RegisterMemberComponent } from "./register-member/register-member.component";
import { RegisterOrganizerComponent } from "./register-organizer/register-organizer.component";
import { RegisterOrganizationComponent } from "./register-organization/register-organization.component";
import { RecaptchaModule } from "ng-recaptcha";
import { RecaptchaFormsModule } from "ng-recaptcha/forms";
import { RegisterOrganizationFormComponent } from "./register-organization-form/register-organization-form.component";
import { RegisterOrganizerFormComponent } from "./register-organizer-form/register-organizer-form.component";
import { RegisterMemberFormComponent } from "./register-member-form/register-member-form.component";
import { SharedModule } from 'src/app/common/shared/shared.module';

@NgModule({
  declarations: [
    RegisterPageComponent,
    RegisterBannerComponent,
    RegisterGetStartedComponent,
    RegisterMemberComponent,
    RegisterOrganizerComponent,
    RegisterOrganizationComponent,
    RegisterOrganizationFormComponent,
    RegisterOrganizerFormComponent,
    RegisterMemberFormComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslationModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    SharedModule
  ]
})
export class RegisterModule {}
