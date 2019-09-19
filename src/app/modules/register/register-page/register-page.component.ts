import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.scss"]
})
export class RegisterPageComponent implements OnInit {
  public registerAs: string = "member";

  constructor(private router: Router) {}

  ngOnInit() {}
  onRegisterAsValueChange($event) {
    this.registerAs = $event.registerAs;
  }
  onNextButtonClick($event) {
    this.router.navigate(["/register/" + $event.registerAs]);
  }
}
