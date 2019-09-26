import {Component, Input, OnInit} from '@angular/core';
import {Invoice} from "../../../core/model/invoice/invoice";
import {ProfileService} from "../../../core/api-services/profile.service";
import { TicketResponse } from "../../../core/model/ticket/ticket-response";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  @Input() invoice: Invoice;
  @Input() ticket: number;
  public showMore: boolean;
  public ticketResponse: TicketResponse;

  constructor(public profileService: ProfileService) {
    this.showMore = false;
  }

  ngOnInit() {
  }

  public onShow() {
    if(!this.showMore) {
      let body = {
        invoice_id: this.invoice.invoice_id
      }
      this.profileService.getTickets(body).subscribe(res => {
        this.ticketResponse = res;
      }, err => {

      })
    }
    this.showMore = !this.showMore;
  }

}

