import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchEventFormComponent } from './search-event-form/search-event-form.component';



@NgModule({
  declarations: [SearchEventFormComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SearchEventFormComponent
  ]
})
export class SearchEventModule { }
