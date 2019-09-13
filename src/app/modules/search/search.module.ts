import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchRoutingModule } from "./search-routing.module";
import { SearchPageComponent } from "./search-page/search-page.component";
import { SearchEventModule } from "../../common/search-event/search-event.module";
import { EventListModule } from "../../common/event-list/event-list.module";

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SearchEventModule,
    EventListModule
  ]
})
export class SearchModule {}
