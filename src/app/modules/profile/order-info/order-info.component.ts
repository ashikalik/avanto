import { Component, OnInit, Input } from '@angular/core';
import {Invoice} from "../../../core/model/invoice/invoice";

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {
  @Input() invoice: Invoice;

  constructor() { }

  ngOnInit() {
  }

}
