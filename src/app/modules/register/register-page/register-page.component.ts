import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public registerAs:string = 'member';
  constructor() { }

  ngOnInit() {
  }

  onRegisterAsValueChange($event) {
    this.registerAs = $event.registerAs;
    console.log($event);
  }
}
