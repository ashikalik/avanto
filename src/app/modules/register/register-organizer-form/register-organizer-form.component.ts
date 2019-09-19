import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { Location } from "@angular/common";
import { CommonService } from "../../../core/api-services/common.service";
import { RegionList } from "../../../core/model/common/region-list";
import { CityList } from "../../../core/model/common/city-list";
import { City } from "../../../core/model/common/city";

import { Router } from "@angular/router";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-register-organizer-form",
  templateUrl: "./register-organizer-form.component.html",
  styleUrls: ["./register-organizer-form.component.scss"]
})
export class RegisterOrganizerFormComponent implements OnInit {
  public signupForm: FormGroup;
  public cityList: CityList;
  public regionList: RegionList;
  public updatedCityList:City[];

  constructor(
    public formBuilder: FormBuilder,
    private location: Location,
    private commonService: CommonService
  ) {
    this.initOrganizerForm();
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
      city_id: form.value.city_id,
      email: form.value.email,
      mobile: form.value.mobile,
      password: form.value.password,
      confirm_password: form.value.confirm_password,
      user_type: 1,
      gender: form.value.gender,
      recaptcha: form.value.recaptcha
    };
    console.log(body);
    //this.registerClick.emit(body);
  }

  public initOrganizerForm() {
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

  public onChangeRegion(event) {
    this.updatedCityList = this.cityList.data.filter(
      item => item.region_id == event
    );
    this.signupForm.get("city_id").setValue("");
  }

  //   public initCompanyForm() {
  //     this.signupForm = this.formBuilder.group(
  //         {
  //             'first_name': ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
  //             'last_name': ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
  //             'company_name': ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
  //             'address': ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
  //             'region_id': ['', Validators.compose([Validators.required])],
  //             'city_id': ['', Validators.compose([Validators.required])],
  //             'gender': ['', Validators.compose([Validators.required])],
  //             'email': ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(3)])],
  //             'confirm_email': ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(3)])],
  //             'mobile': ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
  //             'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
  //             'confirm_password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
  //             'agreementChecked': [false, Validators.pattern('true')],
  //             'recaptcha': ['', Validators.compose([Validators.required])],

  //         },
  //         {
  //             validator: [this.confirmPasswordValidator, this.confirmEmailValidator]
  //         });
  // }

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
