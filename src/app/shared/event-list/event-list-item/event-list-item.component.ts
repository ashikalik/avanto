import { Component, OnInit, Input } from "@angular/core";
import { LatestEvent } from "../../../core/models/latest-event";

@Component({
  selector: "app-event-list-item",
  templateUrl: "./event-list-item.component.html",
  styleUrls: ["./event-list-item.component.scss"]
})
export class EventListItemComponent implements OnInit {
  @Input("eventItem") eventItem: LatestEvent;
  constructor() {}

  ngOnInit() {}
}
