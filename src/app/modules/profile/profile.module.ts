import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { TranslationModule } from 'src/app/common/translation/translation.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/common/shared/shared.module';
import { MyTicketComponent } from './my-ticket/my-ticket.component';
import { MyTicketListComponent } from './my-ticket-list/my-ticket-list.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { TicketInfoComponent } from './ticket-info/ticket-info.component';
import { TicketHeaderComponent } from './ticket-header/ticket-header.component';

@NgModule({
  declarations: [ProfilePageComponent, PersonalInfoComponent, UpdatePasswordComponent, MyTicketComponent, MyTicketListComponent, OrderInfoComponent, TicketInfoComponent, TicketHeaderComponent],
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
