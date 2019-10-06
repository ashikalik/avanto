import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { EventSettingsComponent } from './event/event-settings/event-settings.component';
import { EventTermsConditionsComponent } from './event/event-terms-conditions/event-terms-conditions.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StatisticsPageComponent } from './report/statistics/statistics-page/statistics-page.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { SharedModule } from '../../common/shared/shared.module';


@NgModule({
  declarations: [EventDetailsComponent, EventSettingsComponent, EventTermsConditionsComponent, DashboardPageComponent, StatisticsPageComponent, DashboardMenuComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
    
  ]
})
export class DashboardModule { }
