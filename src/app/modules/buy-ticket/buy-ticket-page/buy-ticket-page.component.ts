import { Component, OnInit } from '@angular/core';
import { EventService } from "../../../core/api-services/event.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { EventDetailsResponse } from "../../../core/model/event/event-details-response";
import { Package } from "../../../core/model/package/package";
import { BuyTicketService } from '../../../core/api-services/buy-ticket.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerError } from '../../../core/model/common/server-error';
import { Meta, Title } from "@angular/platform-browser";
//import { NetworkConfig } from '../../network-layer/network.config';

@Component({
  selector: "app-buy-ticket-page",
  templateUrl: "./buy-ticket-page.component.html",
  styleUrls: ["./buy-ticket-page.component.scss"]
})
export class BuyTicketPageComponent implements OnInit {
  public currentStep: number;
  public buyTicketForm: FormGroup;

  public setps: boolean[];
    public eventKey: string;
    public eventDetailsResponse: EventDetailsResponse;
    public isPaymentOpened: boolean;

    public visitors: FormArray;
    public completedPayment: boolean;
    public selectedPackage: Package;

    public buyTicketError: ServerError;

  constructor(public eventService: EventService,
    public buyTicketService: BuyTicketService,
    public activatedRout: ActivatedRoute,
    public formBuilder: FormBuilder,
    public router: Router,
    public title: Title,
    public meta: Meta) {

    this.currentStep = 1;
    this.completedPayment = false;
    this.isPaymentOpened = false;

    this.activatedRout.params.subscribe(params => {
        this.eventKey = params['id'];
    });

    this.getEventDetail();

  }

  ngOnInit() {
   
    this.initBuyTicketForm();
  }

  handlePillClick(step: number) {
    this.currentStep = step;
  }
  handleNextButtonClick(step: number) {}
  handlePreviosButtonClick(step: number) {}

  public initBuyTicketForm() {
    this.buyTicketForm = this.formBuilder.group({
      first_name: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40)
        ])
      ],
      last_name: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40)
        ])
      ],
      mobile: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^(05)([0-9]{8})$")
        ])
      ],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      package_id: ["", Validators.compose([Validators.required])],
      num_ticket: ["", Validators.compose([Validators.required])],
      maleCount: ["",null],
      femaleCount: ["",null],
      childCount: ["",null],
      dateOfBirthGregorian: ["", Validators.compose([Validators.required])],
      audienceGender: ["", Validators.compose([Validators.required])],
      visitors: this.formBuilder.array([]),
      access_date: [null],
      recaptcha: [null, Validators.compose([Validators.required])]
    });
  }

  public getEventDetail() {
    this.eventService.getEventDetails(this.eventKey).subscribe(
        res => {
            this.eventDetailsResponse = res;
            // this.title.setTitle(this.eventDetail.data.details.name);
            // this.meta.addTag({ name: "description", content: this.eventDetail.data.details.details })


            //to check if the payment is opned or not
            // if (this.eventDetailsResponse.data.details.ticket_payment == 1) {
            //     this.isPaymentOpened = true;
            // } else {
            //     this.isPaymentOpened = false;
            //     this.router.navigate(['/event/' + this.eventKey]);
            // }
        }
    )
}

}
