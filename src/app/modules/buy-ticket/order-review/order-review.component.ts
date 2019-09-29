import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.scss']
})
export class OrderReviewComponent implements OnInit {
  @Input('buyTicketForm') buyTicketForm : FormGroup;
  @Output() nextButtonClick: EventEmitter<any> = new EventEmitter();
  @Output() backButtonClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  handleNextButtonClick() {
    this.nextButtonClick.emit();
  }

  handleBackButtonClick() {
    this.backButtonClick.emit();
  }

}
