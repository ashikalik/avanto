// import { Component, OnInit } from "@angular/core";

// @Component({
//   selector: "app-login-page",
//   templateUrl: "./login-page.component.html",
//   styleUrls: ["./login-page.component.scss"]
// })
// export class LoginPageComponent implements OnInit {
//   constructor() {}

//   ngOnInit() {}
// }

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginRequest } from "../../../core/model/user/login-request";
import { LoginResponse } from "../../../core/model/user/login-response";
import { AuthService } from "../../../core/api-services/auth.service";
import { UserAuthService } from "../../../core/service/user-auth.service";
import { UserProfileData } from "../../../core/model/user/user-profile-data";
import { Router } from "@angular/router";
import { ServerError } from "../../../core/model/common/server-error";


// import { Router } from "@angular/router";
// import { AuthService } from "../../api-services/auth.service";
// import { UserAuthService } from "../../core/user-auth.service";
// import { LoginBody, LoginResponse } from "../../models/login";
// import { EventoError } from "../../models/error";
// import { UserProfile } from "../../models/user-profile";
// import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup;
  public login: LoginResponse;
  public loginError: ServerError;
  public userProfileData: UserProfileData;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public userAuthService: UserAuthService,
    public router: Router
    // public title: Title,
    // public meta: Meta,
    // public router: Router
  ) {}

  ngOnInit() {
    // this.title.setTitle("تسجيل الدخول");
    // this.meta.addTag({
    //   name: "description",
    //   content: "تسجيل الدخول في حسابك في ايفينتو"
    // });
    this.initForm();
  }

  public initForm() {
    this.loginForm = this.formBuilder.group({
      username: [
        "",
        Validators.compose([Validators.required,Validators.email, Validators.minLength(3)])
      ],
      password: ["", Validators.compose([Validators.required])]
    });
  }

  public onlogin(form: any) {
    const body: LoginRequest = {
      username: form.value.username,
      password: form.value.password
    };

    console.log(body);

    this.authService.login(body).subscribe(
      res => {
        this.userAuthService.setToken(res.token);
        this.userProfileData = this.userAuthService.getUserProfile();
        if (this.userProfileData.data.user_type == 4) {
          this.router.navigate(["/seller/tickets"]);
        } else {
          this.router.navigate(["/home"]);
        }
      },
      err => {
        this.loginError = err.value.error;
      }
    );
  }
}
