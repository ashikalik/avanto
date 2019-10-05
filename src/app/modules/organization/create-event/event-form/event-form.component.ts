import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DateTimeValidatorService } from 'src/app/core/service/date-time-validator.service';
import {Location} from '@angular/common';
import { MyDatePickerOptions } from '../../../../core/model/common/date-picker-options';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  public createEventForm: FormGroup;
  public lat: any;
  public lng: any;
  public myDatePickerOptions = MyDatePickerOptions;

  constructor(
    public formBuilder: FormBuilder,
    public dateTimeValidatorService: DateTimeValidatorService,
    private location: Location
    ) { }

  ngOnInit() {
    this.lat = 24.7136;
    this.lng = 46.6753;
    this.initForm();
  }

  public initForm() {
    this.createEventForm = this.formBuilder.group(
      {
        'name': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
        'city_id': ['', Validators.compose([Validators.required])],
        'region': ['', Validators.compose([Validators.required])],
        'audience_gender': ['', Validators.compose([Validators.required])],
        'maximum_capacity': ['', Validators.compose([Validators.required, Validators.min(1)])],
        'minimum_age': ['', Validators.compose([Validators.required, Validators.min(0)])],
        'details': ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])],
        'from_date': [null, Validators.compose([Validators.required])],
        'end_date': [null, Validators.compose([Validators.required])],
        'from_time': ['', Validators.compose([Validators.required, Validators.pattern('(0[0-9]|1[0-2]):[0-5][0-9]$')])],
        'from_time_type': ['', Validators.compose([Validators.required])],
        'end_time': ['', Validators.compose([Validators.required, Validators.pattern('(0[0-9]|1[0-2]):[0-5][0-9]$')])],
        'end_time_type': ['', Validators.compose([Validators.required])],
        'type_id': ['', Validators.compose([Validators.required])],
        'lat': [this.lat, Validators.compose([])],
        'lng': [this.lng, Validators.compose([])],
        'address': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(1000)])],
        'recaptcha': [null, Validators.compose([Validators.required])],
        'agreementChecked': [false, Validators.pattern('true')],
      }, {
      validator: [this.dateTimeValidatorService.checkTime, this.dateTimeValidatorService.checkDate]

    });



  }

  public addEvent(submittedForm: FormGroup) {
    console.log(submittedForm);

    // this.error = null;

    // this.eventService.addEvent(form.value, this.imageURL).subscribe(
    //   res => {
    //     this.onCancel();
    //   },
    //   err => {
    //     this.error = err.value.error;
    //     this.form.get('recaptcha').reset();
    //   }
    // );
  }

  public onCancel() {
    this.location.back();
  }



}
