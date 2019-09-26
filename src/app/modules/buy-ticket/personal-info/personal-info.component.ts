import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MyDatePickerOptions } from '../../../core/models/date-picker-object';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  @Input('buyTicketForm') buyTicketForm : FormGroup;
  public myDatePickerOptions = MyDatePickerOptions;

  constructor() { }

  ngOnInit() {
  }
  onChangeDateBirth(ev){
    
  }
  selectedPackage(){

  }

}
