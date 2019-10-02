import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-organization-event-list-item-header',
  templateUrl: './organization-event-list-item-header.component.html',
  styleUrls: ['./organization-event-list-item-header.component.scss']
})
export class OrganizationEventListItemHeaderComponent implements OnInit {

  @Input("event") event: Event;
  
  @Input("eventIndex") eventIndex: number;

  public tagClasses = [
    ['tag-0','tag-1','tag-2','tag-3'],
    ['tag-1','tag-2','tag-3','tag-0'],
    ['tag-2','tag-3','tag-0','tag-1'],
    ['tag-3','tag-0','tag-1','tag-2']
  ]
  constructor() { }

  ngOnInit() {
  }

}