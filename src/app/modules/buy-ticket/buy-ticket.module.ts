import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyTicketRoutingModule } from './buy-ticket-routing.module';
import { BuyTicketPageComponent } from './buy-ticket-page/buy-ticket-page.component';
import { SelectTicketComponent } from './select-ticket/select-ticket.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MyDatePickerModule } from 'mydatepicker';
import { TranslationModule } from 'src/app/common/translation/translation.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/common/shared/shared.module';

@NgModule({
  declarations: [BuyTicketPageComponent, SelectTicketComponent, PersonalInfoComponent, PaymentInfoComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    BuyTicketRoutingModule,
    MyDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslationModule
  ]
})
export class BuyTicketModule { }
