import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-link-with-gea',
  templateUrl: './event-link-with-gea.component.html',
  styleUrls: ['./event-link-with-gea.component.scss']
})
export class EventLinkWithGeaComponent implements OnInit {
  public linkWithGeaFrom: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initLinkWithGeaFrom()
  }

  initLinkWithGeaFrom() {
    this.linkWithGeaFrom = this.formBuilder.group(
      {
        'crNumber': [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('^\\d+$'),
            Validators.minLength(10),
            Validators.maxLength(10)
          ])],
      });
  }


}
