import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterBannerComponent } from './register-banner/register-banner.component';
import { RegisterGetStartedComponent } from './register-get-started/register-get-started.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslationModule } from 'src/app/common/translation/translation.module';
import { RegisterMemberComponent } from './register-member/register-member.component';
import { RegisterOrganizerComponent } from './register-organizer/register-organizer.component';
import { RegisterOrganizationComponent } from './register-organization/register-organization.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { RecaptchaModule } from "ng-recaptcha";
import { RecaptchaFormsModule } from "ng-recaptcha/forms";

@NgModule({
  declarations: [RegisterPageComponent, RegisterBannerComponent, RegisterGetStartedComponent, RegisterMemberComponent, RegisterOrganizerComponent, RegisterOrganizationComponent, MemberFormComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslationModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ]
})
export class RegisterModule { }
