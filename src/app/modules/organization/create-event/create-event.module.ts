import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../common/shared/shared.module';
import { SelectPackageComponent } from './select-package/select-package.component';
import { EventFormComponent } from './event-form/event-form.component';
import { CreateEventRoutingModule } from './create-event-routing.module';
import { CreateEventPageComponent } from './create-event-page/create-event-page.component';
import { TranslationModule } from '../../../common/translation/translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [SelectPackageComponent,EventFormComponent, CreateEventPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranslationModule,
    FormsModule,
    ReactiveFormsModule,
    CreateEventRoutingModule,
    MyDatePickerModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    AgmCoreModule
  ]
})
export class CreateEventModule { }
