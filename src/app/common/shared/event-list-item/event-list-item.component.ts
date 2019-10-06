import { Component, OnInit, Input } from "@angular/core";
import { Event } from "../../../core/model/event/event";

@Component({
  selector: "app-event-list-item",
  templateUrl: "./event-list-item.component.html",
  styleUrls: ["./event-list-item.component.scss"]
})
export class EventListItemComponent implements OnInit {
  @Input("event") event: Event;
  @Input("eventIndex") eventIndex: number;
  public tagClasses = [
    ['tag-0','tag-1','tag-2','tag-3'],
    ['tag-1','tag-2','tag-3','tag-0'],
    ['tag-2','tag-3','tag-0','tag-1'],
    ['tag-3','tag-0','tag-1','tag-2']
  ]
  constructor() {}

  ngOnInit() {}
}
