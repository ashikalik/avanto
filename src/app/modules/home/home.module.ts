import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LatestEventsComponent } from './latest-events/latest-events.component';
import { PartnersComponent } from './partners/partners.component';
import { FormsModule } from '@angular/forms';
import { CreateEventComponent } from './create-event/create-event.component';
import { SearchEventModule } from '../../common/search-event/search-event.module';
import { EventListModule } from '../../common/event-list/event-list.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [
    HomePageComponent,
    LatestEventsComponent,
    PartnersComponent,
    CreateEventComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SearchEventModule,
    EventListModule,
    CoreModule
  ]
})
export class HomeModule { }
