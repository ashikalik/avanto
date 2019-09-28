import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ContactUsService} from '../../../core/api-services/contact-us.service';
import {ServerError} from "../../../core/model/common/server-error";

@Component({
  selector: "app-contact-us-form",
  templateUrl: "./contact-us-form.component.html",
  styleUrls: ["./contact-us-form.component.scss"]
})
export class ContactUsFormComponent implements OnInit {
  public questionForm: FormGroup;
  public sendQuestionSuccess: any;
  public contactError: ServerError;
  constructor(public formBuilder: FormBuilder,
    public contactUsService: ContactUsService) {}

  ngOnInit() {
    this.initForm();
  }
  public initForm() {
    this.questionForm = this.formBuilder.group({
      name: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ])
      ],
      subject: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(200)
        ])
      ],
      message: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(400)
        ])
      ],
      mobile: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("^(05)[0-9]{8}$")
        ])
      ],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email])
      ],
      recaptcha: [null, Validators.compose([Validators.required])]
    });
  }

  public sendQuestion(form: any) {
    this.sendQuestionSuccess = null;

    this.contactUsService.contactUs(form.value).subscribe(
      res => {
        this.sendQuestionSuccess = res.meta.message;
        this.questionForm.reset();
      },
      err => {
        this.contactError = err.value.error;
      }
    );
  }
}
