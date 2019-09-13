import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListItemComponent } from './event-list-item/event-list-item.component';


@NgModule({
  declarations: [EventListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EventListItemComponent
  ]
})
export class EventListModule { }
