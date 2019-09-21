import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListItemComponent } from './event-list-item/event-list-item.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EventListItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    EventListItemComponent
  ]
})
export class EventListModule { }
