import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { EventSettingsComponent } from './event/event-settings/event-settings.component';
import { EventTermsConditionsComponent } from './event/event-terms-conditions/event-terms-conditions.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StatisticsComponent } from './report/statistics/statistics.component';
import { StatisticsPageComponent } from './report/statistics-page/statistics-page.component';


@NgModule({
  declarations: [EventDetailsComponent, EventSettingsComponent, EventTermsConditionsComponent, DashboardPageComponent, StatisticsComponent, StatisticsPageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
