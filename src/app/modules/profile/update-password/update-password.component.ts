import { Component, OnInit, Input } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { ServerError } from "src/app/core/model/common/server-error";
import { ProfileService } from "../../../core/api-services/profile.service";
import { UserAuthService } from "src/app/core/service/user-auth.service";
import { UpdatePasswordRequest } from 'src/app/core/model/user/update-password-request';
import { UserProfileData } from "../../../core/model/user/user-profile-data";


@Component({
  selector: "app-update-password",
  templateUrl: "./update-password.component.html",
  styleUrls: ["./update-password.component.scss"]
})
export class UpdatePasswordComponent implements OnInit {

  @Input() userProfileData: UserProfileData;

  public passwordForm: FormGroup;
  public passwordError: ServerError;
  public passwordSuccess: boolean;

  constructor(
    public formBuilder: FormBuilder,
    public profileService: ProfileService,
    public userAuthService: UserAuthService
  ) {}

  ngOnInit() {
    this.initPasswordForm();
  }

  public initPasswordForm() {
    this.passwordForm = this.formBuilder.group(
      {
        current_password: ["", Validators.compose([Validators.required])],
        new_password: [
          "",
          Validators.compose([Validators.required, Validators.minLength(6)])
        ],
        confirm_password: [
          "",
          Validators.compose([Validators.required, Validators.minLength(6)])
        ]
      },
      {
        validator: this.passwordConfirm
      }
    );
  }

  public passwordConfirm(AC: AbstractControl): { invalid: boolean } {
    if (AC.get("new_password").value !== AC.get("confirm_password").value) {
      return { invalid: true };
    }
  }

  public updatePassword(form: FormGroup) {
    let body: UpdatePasswordRequest = form.value;
    this.passwordError = null;
    this.passwordSuccess = false;
    this.profileService.updatePassword(body, this.userProfileData.data.user_id).subscribe(res => {
        this.userAuthService.setToken(res.token);
        this.passwordSuccess = true;
    }, err => {
        this.passwordError = err.value.error;
    });
}


}
