import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { TranslationModule } from 'src/app/common/translation/translation.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/common/shared/shared.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketHeaderComponent } from './invoice-header/invoice-header.component';

@NgModule({
  declarations: [ProfilePageComponent, PersonalInfoComponent, UpdatePasswordComponent, InvoiceComponent, InvoiceListComponent, OrderInfoComponent, TicketComponent, TicketHeaderComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslationModule
  ]
})
export class ProfileModule { }
