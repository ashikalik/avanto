import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchEventModule } from '../../shared/search-event/search-event.module';
import { EventListModule } from '../../shared/event-list/event-list.module';
import { SearchEventResultComponent } from './search-event-result/search-event-result.component';
import { SearchEventComponent } from './search-event/search-event.component';


@NgModule({
  declarations: [SearchPageComponent, SearchEventResultComponent, SearchEventComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SearchEventModule,
    EventListModule
  ]
})
export class SearchModule { }
