// import { Component, OnInit, Input } from '@angular/core';
// import { MyDatePickerOptions } from '../../../core/models/date-picker-object';
// import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

// @Component({
//   selector: 'app-select-ticket',
//   templateUrl: './select-ticket.component.html',
//   styleUrls: ['./select-ticket.component.scss']
// })
// export class SelectTicketComponent implements OnInit {
//   @Input('buyTicketForm') buyTicketForm : FormGroup;
  
//   public myDatePickerOptions =  MyDatePickerOptions;
//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Observable } from "rxjs";
import { EventDetailsResponse } from "../../../core/model/event/event-details-response";
import { Package } from "../../../core/model/package/package";import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuyTicketService } from '../../../core/api-services/buy-ticket.service';
import { MyDatePickerOptions } from '../../../core/model/common/date-picker-options';
// import { DisableDateUntilPipe } from '../../../common/shared/disable-date-until.pipe';
// import { DisableDateSincePipe } from '../../../common/shared/disable-date-since.pipe';
import { ServerError } from '../../../core/model/common/server-error';

@Component({
  selector: 'app-select-ticket',
  templateUrl: './select-ticket.component.html',
  styleUrls: ['./select-ticket.component.scss']
})
export class SelectTicketComponent implements OnInit {

    @Input('eventDetails') eventDetails: EventDetailsResponse;
    @Input('buyTicketForm') buyTicketForm : FormGroup;
    @Output() nextButtonClick: EventEmitter<any> = new EventEmitter();
    @Output() backButtonClick: EventEmitter<any> = new EventEmitter();
    @Output() selectedPackage: EventEmitter<any> = new EventEmitter();

    public visitors: FormArray;
    public errorsValidatePackage: ServerError;    

    public myDatePickerOptions = MyDatePickerOptions;

    public isSoldOut: boolean = false;
    public isLessThanFive:boolean = false;
    public isDateRequired: boolean;
    public package: Package;
    public validatePackageRes: any;
    public total: number;
    public numbOfTickets: number;


    public cosmosOffer: boolean;

    constructor(private buyTicketService: BuyTicketService,
        public formBuilder: FormBuilder) {
            this.cosmosOffer = false;

    }

    ngOnInit() {

    }



    onChangePackage(event) {

        this.buyTicketForm.get('maleCount').setValue(''); 
        this.buyTicketForm.get('femaleCount').setValue(''); 
        this.buyTicketForm.get('childCount').setValue(''); 
        this.buyTicketForm.get('num_ticket').setValue(''); 
        this.buyTicketForm.get('access_date').setValue(null);
        this.buyTicketForm.updateValueAndValidity();
        
        this.package = this.eventDetails.data.packages.find(x => x.package_id == event);

        //this.myDatePickerOptions.disableUntil = new DisableDateUntilPipe().transform(this.eventDetails.data.details.from_date);
        //this.myDatePickerOptions.disableSince = new DisableDateSincePipe().transform(this.eventDetails.data.details.end_date);

        this.isDateRequired = this.buyTicketService.isDateRequired(this.package);


        if(this.isDateRequired){
            this.buyTicketForm.get('access_date').setValidators([Validators.required]);                        
        }else{
            this.buyTicketForm.get('access_date').clearValidators();
            this.buyTicketForm.get('access_date').setValue(null);
            this.validatePackage(null, this.package.package_id);            
            
        }
        
        this.calcuateTotal();

        //emitter for the root component
        this.selectedPackage.emit(this.package);

    }

    onChangeDate(event) {
        this.buyTicketForm.get('access_date').setValue(event.formatted);
        this.validatePackage(event.formatted, this.package.package_id)
    }



    onChangeNumOfTickets(event) {
        this.numbOfTickets = Number(this.buyTicketForm.get('maleCount').value) + Number(this.buyTicketForm.get('femaleCount').value) + Number(this.buyTicketForm.get('childCount').value);
        this.buyTicketForm.get('num_ticket').setValue(this.numbOfTickets);
        this.calcuateTotal();
        this.buyTicketForm.setControl('visitors', new FormArray([]));
        for (let i = 0; i < this.numbOfTickets; i++) {
            this.visitors = this.buyTicketForm.get('visitors') as FormArray;
            this.visitors.push(this.createVisitor());
        }
    }


    public createVisitor() {
        return this.formBuilder.group({
            first_name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
            last_name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])]
        });
    }

    calcuateTotal() {
        this.numbOfTickets = this.buyTicketForm.get('num_ticket').value;
        this.total = this.numbOfTickets * this.package.price;
    }


    public validatePackage(access_date: any, selectedPackage: any) {
        //to rest this value once this value is changed
        this.validatePackageRes = null;
        this.errorsValidatePackage = null;
        this.isLessThanFive = false;
        this.isSoldOut = false;


        const body = {
            event_key: this.eventDetails.data.details.event_key,
            package_id: selectedPackage,
            access_date: access_date
        }
        this.buyTicketService.validatePackage(body).subscribe(res => {
            this.validatePackageRes = res.data;
            if (this.validatePackageRes.left <= 0) {
                this.isSoldOut = true;
            }
            if (this.validatePackageRes.left <= 5 && this.validatePackageRes.left >= 1) {
                this.isLessThanFive = true;
            }
        }, err => {
            this.errorsValidatePackage = err.value.error;
        })
    }

    handleNextButtonClick() {
        this.nextButtonClick.emit();
    }

    handleBackButtonClick() {
        this.backButtonClick.emit();
    }

}

