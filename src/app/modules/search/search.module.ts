import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchRoutingModule } from "./search-routing.module";
import { SearchPageComponent } from "./search-page/search-page.component";
import { SharedModule } from '../../common/shared/shared.module';


@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule {}
