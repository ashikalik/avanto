import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';


@NgModule({
  declarations: [ContactUsPageComponent, ContactUsFormComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule { }
