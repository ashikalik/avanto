import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-register-get-started",
  templateUrl: "./register-get-started.component.html",
  styleUrls: ["./register-get-started.component.scss"]
})
export class RegisterGetStartedComponent implements OnInit {

  @Output() registerAsValueChange:EventEmitter<any> = new EventEmitter();

  private registerAs:string = 'member';
  registerAsForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.registerAsForm = fb.group({
      registerAs: [this.registerAs, Validators.required]
    });

  }

  ngOnInit() {
    this.registerAsValueChange.emit({  registerAs: this.registerAsForm.value.registerAs });

  }

  handleRegisterAsValueChange() {
    this.registerAsValueChange.emit({  registerAs: this.registerAsForm.value.registerAs });
  }

  handleNextButtonClick() {
    console.log(this.registerAsForm.value.registerAs);
  }
}
