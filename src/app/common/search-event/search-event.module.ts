import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchEventFormComponent } from './search-event-form/search-event-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchEventFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchEventFormComponent
  ]
})
export class SearchEventModule { }
