import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-terms-conditions-form',
  templateUrl: './event-terms-conditions-form.component.html',
  styleUrls: ['./event-terms-conditions-form.component.scss']
})
export class EventTermsConditionsFormComponent implements OnInit {
  @Output() cancelButtonClick: EventEmitter<any> = new EventEmitter();
  @Output() saveButtonClick: EventEmitter<any> = new EventEmitter();
  public termsForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initCreateForm();
  }

  public initCreateForm() {
    this.termsForm = this.formBuilder.group(
      {
        'policy': ['', Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(500)])]
      });
  }

  handleCancelButtonClick(){
    this.cancelButtonClick.emit();
  }
  handleSaveButtonClick(){
    this.saveButtonClick.emit();
  }

}
