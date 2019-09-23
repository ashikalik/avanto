import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-buy-ticket-page",
  templateUrl: "./buy-ticket-page.component.html",
  styleUrls: ["./buy-ticket-page.component.scss"]
})
export class BuyTicketPageComponent implements OnInit {
  public currentStep: number;
  public buyTicketForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.currentStep = 1;
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
}
