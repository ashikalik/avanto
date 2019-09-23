import { Component, OnInit, Input } from '@angular/core';
import { MyDatePickerOptions } from '../../../core/models/date-picker-object';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-select-ticket',
  templateUrl: './select-ticket.component.html',
  styleUrls: ['./select-ticket.component.scss']
})
export class SelectTicketComponent implements OnInit {
  @Input('buyTicketForm') buyTicketForm : FormGroup;
  
  public myDatePickerOptions =  MyDatePickerOptions;
  constructor() { }

  ngOnInit() {
  }

}
