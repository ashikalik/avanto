import { Component, OnInit, Input } from '@angular/core';
import {Invoice} from "../../../core/model/invoice/invoice";

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.scss']
})
export class OrderReviewComponent implements OnInit {
  @Input() invoice: Invoice;

  constructor() { }

  ngOnInit() {
  }

}
