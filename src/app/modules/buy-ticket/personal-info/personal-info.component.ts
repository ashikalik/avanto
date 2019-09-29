import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MyDatePickerOptions } from '../../../core/model/common/date-picker-options';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  @Output() nextButtonClick: EventEmitter<any> = new EventEmitter();
  @Output() backButtonClick: EventEmitter<any> = new EventEmitter();
  @Input('buyTicketForm') buyTicketForm: FormGroup;
  public myDatePickerOptions = MyDatePickerOptions;

  constructor() { }

  ngOnInit() {
  }
  onChangeDateBirth(ev) {

  }
  selectedPackage() {

  }

  handleNextButtonClick() {
    this.nextButtonClick.emit();
  }

  handleBackButtonClick() {
    this.backButtonClick.emit();
  }

}
