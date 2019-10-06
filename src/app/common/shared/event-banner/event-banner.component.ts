import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-banner',
  templateUrl: './event-banner.component.html',
  styleUrls: ['./event-banner.component.scss']
})
export class EventBannerComponent implements OnInit {
  @Input('bannerImage') bannerImage : string;
  constructor() { }

  ngOnInit() {
  }

}
