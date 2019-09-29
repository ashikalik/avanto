import { Component, OnInit, Renderer2 } from '@angular/core';
import { EventService } from "../../../core/api-services/event.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { EventDetailsResponse } from "../../../core/model/event/event-details-response";
import { Package } from "../../../core/model/package/package";
import { BuyTicketService } from '../../../core/api-services/buy-ticket.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerError } from '../../../core/model/common/server-error';
import { Meta, Title } from "@angular/platform-browser";
import { environment } from '../../../../environments/environment';

//import { NetworkConfig } from '../../network-layer/network.config';

declare var Checkout: any;

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
    public meta: Meta, private renderer: Renderer2) {

    this.currentStep = 1;
    this.completedPayment = false;
    this.isPaymentOpened = false;

    this.activatedRout.params.subscribe(params => {
        this.eventKey = params['id'];
    });

    this.getEventDetail();

  }

  ngOnInit() {
   
    this.addJsToElement(environment.MERCHANT_JS).onload = () => {
      //this.showSubmit = true;
      console.log("merchant js loaded")
    } 

    this.initBuyTicketForm();

  }

  handlePillClick(step: number) {
    this.currentStep = step;
  }
  handleNextButtonClick(step: number) {
    this.currentStep++;
  }
  handleBackButtonClick(step: number) {
    this.currentStep--;
  }
  handlePayNowButtonClick() {
    console.log(this.buyTicketForm);
    this.buyTicket();
  }

  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }


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

public buyTicket() {
  this.buyTicketError = null;

  this.buyTicketService.createInvoice(this.buyTicketForm.value, this.eventDetailsResponse.data.details.event_key).subscribe(
      res => {
          
        debugger;

          // this is for free ticket to show success payment
          if (res.data.price == 0 && res.data.total_with_vat == 0) {
              this.completedPayment = true;
              this.router.navigate(['/validate-payment/' + res.data.reference])
          } else {
              // this.completedPayment = false;
              // this.changeStepForward(null);
              Checkout.configure({
                  merchant: environment.MERCHANT_ID,
                  order: {
                      amount: res.data.total_with_vat,
                      currency: 'SAR',
                      description: res.data.event_name,
                      id: res.data.reference
                  },
                  session: {
                      id: res.data.session
                  },
                  interaction: {
                      merchant: {
                          name: 'Evento ايفينتو',
                          logo: 'https://i.ibb.co/BGDvmqs/Logo-PNG-1-copy.png'
                      },
                      locale: 'ar_SA',
                      theme: 'default',
                      displayControl: {
                          billingAddress: 'HIDE',
                          customerEmail: 'HIDE',
                          orderSummary: 'HIDE',
                          shipping: 'HIDE'
                      }
                  }
              });

              Checkout.showPaymentPage()

          }




      }, err => {
          this.buyTicketError = err.value.error;
      })
}


}
