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
import { EventTermsConditionsFormComponent } from './event/event-terms-conditions-form/event-terms-conditions-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventLinkWithGeaComponent } from './event/event-link-with-gea/event-link-with-gea.component';
import { TranslationModule } from '../../common/translation/translation.module';


@NgModule({
  declarations: [EventDetailsComponent, EventSettingsComponent, EventTermsConditionsComponent, DashboardPageComponent, StatisticsPageComponent, DashboardMenuComponent, EventTermsConditionsFormComponent, EventLinkWithGeaComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslationModule
  ]
})
export class DashboardModule { }
