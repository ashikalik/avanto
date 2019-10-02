import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../common/shared/shared.module';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationEventsComponent } from './organization-events/organization-events.component';
import { OrganizationPageComponent } from './organization-page/organization-page.component';
import { OrganizationEventListItemHeaderComponent } from './organization-event-list-item-header/organization-event-list-item-header.component';
import { OrganizationEventListItemComponent } from './organization-event-list-item/organization-event-list-item.component';


@NgModule({
  declarations: [OrganizationEventsComponent, OrganizationPageComponent, OrganizationEventListItemHeaderComponent, OrganizationEventListItemComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    SharedModule
  ]
})
export class OrganizationModule { }
