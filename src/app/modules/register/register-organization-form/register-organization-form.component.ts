import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { Location } from "@angular/common";
import { CommonService } from "../../../core/api-services/common.service";
import { AuthService } from "../../../core/api-services/auth.service";
import { RegionList } from "../../../core/model/common/region-list";
import { CityList } from "../../../core/model/common/city-list";
import { City } from "../../../core/model/common/city";

import { Router } from "@angular/router";
import { Meta, Title } from "@angular/platform-browser";
import { ServerError } from 'src/app/core/model/common/server-error';

@Component({
  selector: "app-register-organization-form",
  templateUrl: "./register-organization-form.component.html",
  styleUrls: ["./register-organization-form.component.scss"]
})
export class RegisterOrganizationFormComponent implements OnInit {
  public signupForm: FormGroup;
  public cityList: CityList;
  public regionList: RegionList;
  public updatedCityList: City[];
  public registrationError:ServerError;

  constructor(
    public formBuilder: FormBuilder,
    private location: Location,
    private commonService: CommonService,
    private authService:AuthService,
    private router:Router
  ) {
    this.initOrganizationForm();
    this.getCityList();
    this.getRegionList();
  }

  ngOnInit() {}

  onCancelButton() {
    this.location.back();
  }

  onRegisterButton(form: any) {
    const body = {
      first_name: form.value.first_name,
      last_name: form.value.last_name,
      company_name: form.value.company_name,
      address: form.value.address,
      city_id: form.value.city_id,
      email: form.value.email,
      mobile: form.value.mobile,
      password: form.value.password,
      confirm_password: form.value.confirm_password,
      user_type: 2,
      gender: form.value.gender,
      recaptcha: form.value.recaptcha
    };
    console.log(body);
    this.signup(body);
    //this.registerClick.emit(body);
  }

  getCityList() {
    this.commonService.getCityList().subscribe(
      res => {
        this.cityList = res;
      },
      err => {}
    );
  }

  getRegionList() {
    this.commonService.getRegionList().subscribe(
      res => {
        this.regionList = res;
      },
      err => {}
    );
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

  public onChangeRegion(event) {
    this.updatedCityList = this.cityList.data.filter(
      item => item.region_id == event
    );
    this.signupForm.get("city_id").setValue("");
  }

  public initOrganizationForm() {
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
        company_name: [
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(40)
          ])
        ],
        address: [
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(40)
          ])
        ],
        region_id: ["", Validators.compose([Validators.required])],
        city_id: ["", Validators.compose([Validators.required])],
        gender: ["", Validators.compose([Validators.required])],
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
        agreementChecked: [false, Validators.pattern("true")],
        recaptcha: ["", Validators.compose([Validators.required])]
      },
      {
        validator: [this.confirmPasswordValidator, this.confirmEmailValidator]
      }
    );
  }

  public confirmPasswordValidator(AC: AbstractControl): { invalid: boolean } {
    if (AC.get("password").value !== AC.get("confirm_password").value) {
      return { invalid: true };
    }
  }

  public confirmEmailValidator(AC: AbstractControl): { invalid: boolean } {
    if (AC.get("email").value !== AC.get("confirm_email").value) {
      return { invalid: true };
    }
  }
}
