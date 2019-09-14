import { Component, OnInit, Input } from '@angular/core';
import { EventDetails } from "../../../core/model/event/event-details";
import { DateTimeHelperService } from '../../../core/service/date-time-helper.service';
import { Duration } from '../../../core/model/common/duration';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements OnInit {
  @Input('eventDetails') eventDetails: EventDetails;
  public startDay = '';
  public startMonth = '';
  public startsIn:Duration;
  constructor(private dateTimeHelperService:DateTimeHelperService) { 

  }

  ngOnInit() {
    this.formatEventStartData();
  }

  private formatEventStartData() : void {
    this.startDay = this.dateTimeHelperService.getDay(this.eventDetails.from_date);
    this.startMonth = this.dateTimeHelperService.getMonth(this.eventDetails.from_date);

    //console.log(startin);
    // let startDate = moment(this.eventDetails.from_date + "T" + this.eventDetails.from_time).format('YYYY-MM-DDTHH:mm:ss');
    // console.log(startDate);
  }

}
