import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventDetailsPageComponent } from './event-details-page/event-details-page.component';


@NgModule({
  declarations: [EventDetailsPageComponent],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
