import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventDetailsPageComponent } from './event-details-page/event-details-page.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';


@NgModule({
  declarations: [EventDetailsPageComponent, BasicDetailsComponent],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
