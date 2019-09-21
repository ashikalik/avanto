import { Injectable } from '@angular/core';
import { EventData } from 'src/app/core/model/event/event-data';

@Injectable()
export class EventDisplayHelperService {

  constructor() { }

  getPackageRateRange(eventData:EventData) {

    if(!eventData.packages)
    return null;
    
    return {min:0, max:500};
    
  }

}
