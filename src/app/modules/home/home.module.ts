import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchEventComponent } from './search-event/search-event.component';
import { LatestEventsComponent } from './latest-events/latest-events.component';
import { PartnersComponent } from './partners/partners.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomePageComponent, SearchEventComponent, LatestEventsComponent, PartnersComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
