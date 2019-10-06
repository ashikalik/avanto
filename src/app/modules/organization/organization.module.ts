import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../common/shared/shared.module';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationEventsComponent } from './events/organization-events/organization-events.component';
import { OrganizationPageComponent } from './events/organization-page/organization-page.component';
import { OrganizationEventListItemHeaderComponent } from './events/organization-event-list-item-header/organization-event-list-item-header.component';
import { OrganizationEventListItemComponent } from './events/organization-event-list-item/organization-event-list-item.component';
import { OrganizationEventSettingsComponent } from './events/organization-event-settings/organization-event-settings.component';


@NgModule({
  declarations: [OrganizationEventsComponent, OrganizationPageComponent, OrganizationEventListItemHeaderComponent, OrganizationEventListItemComponent, OrganizationEventSettingsComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    SharedModule,
  ]
})
export class OrganizationModule { }
