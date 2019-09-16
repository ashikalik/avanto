import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DateTimeHelperService } from '../../../core/service/date-time-helper.service';
import { Duration } from '../../../core/model/common/duration';
import { EventData } from 'src/app/core/model/event/event-data';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements OnInit {
  @Input('eventData') eventData: EventData;
  @Output() registerOrganizerClick: EventEmitter<any> = new EventEmitter();

  public startDay = '';
  public startMonth = '';
  public startsIn:Duration;
  constructor(private dateTimeHelperService:DateTimeHelperService) { 

  }

  ngOnInit() {
    this.formatEventStartData();
  }

  private formatEventStartData() : void {
    this.startDay = this.dateTimeHelperService.getDay(this.eventData.details.from_date);
    this.startMonth = this.dateTimeHelperService.getMonth(this.eventData.details.from_date);

    //console.log(startin);
    // let startDate = moment(this.eventDetails.from_date + "T" + this.eventDetails.from_time).format('YYYY-MM-DDTHH:mm:ss');
    // console.log(startDate);
  }

  public handleApplyOrganizerClick() {
    this.registerOrganizerClick.emit();
  }

}
