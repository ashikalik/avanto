import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyTicketRoutingModule } from './buy-ticket-routing.module';
import { BuyTicketPageComponent } from './buy-ticket-page/buy-ticket-page.component';


@NgModule({
  declarations: [BuyTicketPageComponent],
  imports: [
    CommonModule,
    BuyTicketRoutingModule
  ]
})
export class BuyTicketModule { }
