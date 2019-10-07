import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Supervisor } from '../../../../../core/model/supervisor/supervisor';
@Component({
  selector: 'app-supervisor-form',
  templateUrl: './supervisor-form.component.html',
  styleUrls: ['./supervisor-form.component.scss']
})
export class SupervisorFormComponent implements OnInit {
  public supervisorForm: FormGroup;
  @Input() supervisor: Supervisor;

  @Output() saveButtonClick: EventEmitter<any> = new EventEmitter();
  @Output() cancelButtonClick: EventEmitter<any> = new EventEmitter();

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initSupervisorForm();
  }

  public initSupervisorForm() {
    this.supervisorForm = this.formBuilder.group(
        {
            'first_name': [this.supervisor.first_name, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
            'last_name': [this.supervisor.last_name, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
            'mobile': [ this.supervisor.mobile, Validators.compose([Validators.required, Validators.pattern('^(05)([0-9]{8})$')])],
            'gender': [this.supervisor.gender, Validators.compose([Validators.required])],
            'requests': [this.supervisor.requests, Validators.compose([Validators.required])],
            'sellers': [this.supervisor.sellers, Validators.compose([Validators.required])],
            'mail': [this.supervisor.mail, Validators.compose([Validators.required, Validators.email])],
            'status_id': [this.supervisor.status_id, Validators.compose([Validators.required])]
        });

}


handleSaveButtonClick() {
  this.saveButtonClick.emit(this.supervisorForm);
}
handleCancelButtonClick() {
  this.cancelButtonClick.emit();
}

}
