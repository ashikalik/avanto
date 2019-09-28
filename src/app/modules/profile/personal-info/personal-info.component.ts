import { Component, OnInit, Input } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { ServerError } from "../../../core/model/common/server-error";
import { UserProfileData } from "../../../core/model/user/user-profile-data";
import { UpdateInformationRequest } from "../../../core/model/user/update-information-request";
import { ProfileService } from "../../../core/api-services/profile.service";
import { UserAuthService } from '../../../core/service/user-auth.service';

@Component({
  selector: "app-personal-info",
  templateUrl: "./personal-info.component.html",
  styleUrls: ["./personal-info.component.scss"]
})
export class PersonalInfoComponent implements OnInit {
  @Input() userProfileData: UserProfileData;

  public personalInfoForm: FormGroup;
  public personalInfoError: ServerError;
  public personalInfoSuccess: boolean;

  constructor(
    public formBuilder: FormBuilder,
    public profileService: ProfileService,
    public userAuthService: UserAuthService
  ) {}

  ngOnInit() {
    this.initInfoForm();
  }

  public initInfoForm() {
    this.personalInfoForm = this.formBuilder.group({
      first_name: [
        this.userProfileData.data.first_name,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40)
        ])
      ],
      last_name: [
        this.userProfileData.data.last_name,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40)
        ])
      ],
      email: [
        {
          value: this.userProfileData.data.email,
          disabled: true
        },
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3)
        ])
      ],
      mobile: [
        this.userProfileData.data.mobile,
        Validators.compose([
          Validators.required,
          Validators.pattern("^(05)[0-9]{8}$")
        ])
      ]
    });
  }

  public updatePersonalInfo(form: FormGroup) {
    let body: UpdateInformationRequest = form.value;
    this.personalInfoError = null;
    this.personalInfoSuccess = false;
    this.profileService
      .updateInfo(body, this.userProfileData.data.user_id)
      .subscribe(
        res => {
          this.userAuthService.setToken(res.token);
          this.personalInfoSuccess = true;
        },
        err => {
          this.personalInfoError = err.value.error;
        }
      );
  }
}
