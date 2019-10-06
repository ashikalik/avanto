import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LatestEventsComponent } from './latest-events/latest-events.component';
import { PartnersComponent } from './partners/partners.component';
import { FormsModule } from '@angular/forms';
import { CreateEventComponent } from './create-event/create-event.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../common/shared/shared.module';


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
    CoreModule,
    SharedModule
  ]
})
export class HomeModule { }
