import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListItemComponent } from './event-list-item/event-list-item.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [EventListItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    EventListItemComponent
  ]
})
export class EventListModule { }
