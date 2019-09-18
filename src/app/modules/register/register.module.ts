import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterBannerComponent } from './register-banner/register-banner.component';
import { RegisterGetStartedComponent } from './register-get-started/register-get-started.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslationModule } from 'src/app/common/translation/translation.module';


@NgModule({
  declarations: [RegisterPageComponent, RegisterBannerComponent, RegisterGetStartedComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslationModule
  ]
})
export class RegisterModule { }
