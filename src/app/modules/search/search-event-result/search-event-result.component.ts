import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-event-result',
  templateUrl: './search-event-result.component.html',
  styleUrls: ['./search-event-result.component.scss']
})
export class SearchEventResultComponent implements OnInit {
 public events;
  constructor() {
    this.events = [1,2,3,4]
   }

  ngOnInit() {
  }

}
