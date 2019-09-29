import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Package } from "../../../core/model/package/package";
import { EventDetailsResponse } from "../../../core/model/event/event-details-response";

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.scss']
})
export class OrderReviewComponent implements OnInit {
  public totalWithoutVat: number;
  public totalWithVAT: number;
  public VAT: number;
  public selectedPackage: Package;

  @Input('eventDetails') eventDetails: EventDetailsResponse;

  @Input('buyTicketForm') buyTicketForm: FormGroup;
  // @Output() nextButtonClick: EventEmitter<any> = new EventEmitter();
  // @Output() backButtonClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    let package_id = this.buyTicketForm.get('package_id').value;
    this.selectedPackage = this.eventDetails.data.packages.find(x => x.package_id == package_id); 
    this.calculatTotal();
  }

  public calculatTotal() {
    this.totalWithoutVat = (this.buyTicketForm.get('num_ticket').value * this.selectedPackage.price);
    this.VAT = this.totalWithoutVat * 0.05;
    this.totalWithVAT = (this.buyTicketForm.get('num_ticket').value * this.selectedPackage.price) * 1.05;
  }

  // handleNextButtonClick() {
  //   this.nextButtonClick.emit();
  // }

  // handleBackButtonClick() {
  //   this.backButtonClick.emit();
  // }

}
