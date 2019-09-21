import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import {Location} from '@angular/common';
import { AuthService } from "../../../core/api-services/auth.service";
import { Router } from "@angular/router";
import { Meta, Title } from "@angular/platform-browser";
import { ServerError } from 'src/app/core/model/common/server-error';

@Component({
  selector: 'app-register-member-form',
  templateUrl: './register-member-form.component.html',
  styleUrls: ['./register-member-form.component.scss']
})
export class RegisterMemberFormComponent implements OnInit {
  public signupForm: FormGroup;
  public registrationError:ServerError;
  constructor(public formBuilder: FormBuilder,
     private location: Location,
          private authService:AuthService,
          private router:Router
    ) {
    this.initMemberForm();
  }

  ngOnInit() {}

  onCancelButton() {
    this.location.back();
  }

  onRegisterButton(form: any) {
    const body = {
      first_name: form.value.first_name,
      last_name: form.value.last_name,
      email: form.value.email,
      mobile: form.value.mobile,
      password: form.value.password,
      confirm_password: form.value.confirm_password,
      user_type: 5,
      gender: form.value.gender,
      recaptcha: form.value.recaptcha
    };
    console.log(body);
    //this.registerClick.emit(body);
    this.signup(body);
  }

  public signup(form: any) {
    this.registrationError = null;
    this.authService.signup(form).subscribe(
      res => {
        //this.isSignupCompleted = true;
         this.router.navigate(['/home']);
      },
      err => {
        this.signupForm.get("recaptcha").setValue(null);
        this.registrationError = err.value.error;
      }
    );
  }


  public initMemberForm() {
    this.signupForm = this.formBuilder.group(
      {
        first_name: [
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(40)
          ])
        ],
        last_name: [
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(40)
          ])
        ],
        gender: ["1", Validators.compose([Validators.required])],
        email: [
          "",
          Validators.compose([
            Validators.required,
            Validators.email,
            Validators.minLength(3)
          ])
        ],
        confirm_email: [
          "",
          Validators.compose([
            Validators.required,
            Validators.email,
            Validators.minLength(3)
          ])
        ],
        mobile: [
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10)
          ])
        ],
        password: [
          "",
          Validators.compose([Validators.required, Validators.minLength(6)])
        ],
        confirm_password: [
          "",
          Validators.compose([Validators.required, Validators.minLength(6)])
        ],
        recaptcha: ["", Validators.compose([Validators.required])],
        agreementChecked: [false, Validators.pattern("true")]
      },
      {
        validator: this.confirmPasswordValidator
      }
    );
  }

  public confirmPasswordValidator(AC: AbstractControl): { invalid: boolean } {
    if (AC.get("password").value !== AC.get("confirm_password").value) {
      return { invalid: true };
    }
  }
}


