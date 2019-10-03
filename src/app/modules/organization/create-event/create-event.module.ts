import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../common/shared/shared.module';
import { SelectPackageComponent } from './select-package/select-package.component';
import { EventFormComponent } from './event-form/event-form.component';
import { CreateEventRoutingModule } from './create-event-routing.module';
import { CreateEventPageComponent } from './create-event-page/create-event-page.component';

@NgModule({
  declarations: [SelectPackageComponent,EventFormComponent, CreateEventPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    CreateEventRoutingModule
  ]
})
export class CreateEventModule { }
