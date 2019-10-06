import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  public lat: any;
  public lng: any;
  constructor() { }

  ngOnInit() {
    this.lat = 24.7136;
    this.lng = 46.6753;
  }

}
