import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.scss']
})
export class OrderReviewComponent implements OnInit {
  @Input('buyTicketForm') buyTicketForm : FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
