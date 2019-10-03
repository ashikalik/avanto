import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-organization-event-list-item',
  templateUrl: './organization-event-list-item.component.html',
  styleUrls: ['./organization-event-list-item.component.scss']
})
export class OrganizationEventListItemComponent implements OnInit {
  @Input("event") event: Event;
  @Input("eventIndex") eventIndex: number;
  constructor() { }

  ngOnInit() {
  }

}
