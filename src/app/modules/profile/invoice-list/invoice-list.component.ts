import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../../core/api-services/profile.service";
import {InvoiceResponse} from "../../../core/model/invoice/invoice-response";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

    public invoiceResponse: InvoiceResponse;
    public limit: number;
    public page: number;


    constructor(public profileService: ProfileService) { }

    ngOnInit() {
        this.limit = 20;
        this.page = 1;
        this.getInvoices();
    }


    public getInvoices() {
        this.profileService.getInvoices(this.limit, this.page).subscribe(res => {
            this.invoiceResponse = res;
        } , err => {
        })
    }

    goToPage(n: number): void {
        this.page = n;
        this.getInvoices();
      }
      
      onNext(): void {
        this.page++;
        this.getInvoices();
      }
      
      onPrev(): void {
        this.page--;
        this.getInvoices();
      }

}

