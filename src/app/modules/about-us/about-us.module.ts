import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JoinUsComponent } from './join-us/join-us.component';



@NgModule({
  declarations: [AboutUsPageComponent, WhoWeAreComponent, OurVisionComponent, OurServicesComponent, ContactUsComponent, JoinUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
