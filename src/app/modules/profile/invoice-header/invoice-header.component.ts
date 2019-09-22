import { Component, OnInit, Input } from '@angular/core';
import {Invoice} from "../../../core/model/invoice/invoice";

@Component({
  selector: 'app-invoice-header',
  templateUrl: './invoice-header.component.html',
  styleUrls: ['./invoice-header.component.scss']
})
export class TicketHeaderComponent implements OnInit {
  @Input() invoice: Invoice;

  constructor() { }

  ngOnInit() {
  }

}
