import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";
import { CommonService } from "../../../core/api-services/common.service";
import { RegionList } from '../../../core/model/common/region-list';
import { CityList } from '../../../core/model/common/city-list';

@Component({
  selector: "app-register-member",
  templateUrl: "./register-member.component.html",
  styleUrls: ["./register-member.component.scss"]
})
export class RegisterMemberComponent implements OnInit {
  public signupForm: FormGroup;
  public cityList: CityList;
  public regionList: RegionList;

  constructor(
    public formBuilder: FormBuilder,
    public commonService: CommonService
  ) {}

  ngOnInit() {}

  public initFormMemeber() {
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
        recaptcha: ["", Validators.compose([Validators.required])],
        agreementChecked: [false, Validators.pattern("true")]
      },
      {
        validator: this.passwordConfirm
      }
    );
  }

  getCity() {
    this.commonService.getCityList().subscribe(
      res => {
        this.cityList = res;
      },
      err => {}
    );
  }

  getRegion() {
    this.commonService.getRegionList().subscribe(
      res => {
        this.regionList = res;
      },
      err => {}
    );
  }

  public passwordConfirm(AC: AbstractControl): { invalid: boolean } {
    if (AC.get("password").value !== AC.get("confirm_password").value) {
      return { invalid: true };
    }
  }

  public emailConfirm(AC: AbstractControl): { invalid: boolean } {
    if (AC.get("email").value !== AC.get("confirm_email").value) {
      return { invalid: true };
    }
  }
}
