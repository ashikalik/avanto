import { Component, OnInit, Input } from "@angular/core";
import { Region } from "../../../core/models/region";
import { EventType } from "../../../core/models/event-type";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-event-form",
  templateUrl: "./search-event-form.component.html",
  styleUrls: ["./search-event-form.component.scss"]
})
export class SearchEventFormComponent implements OnInit {
  @Input("region") region: Region;
  @Input("eventType") eventType: EventType;
  
  private eventRegionModel = '';
  private eventTypeModel = '';
  private eventNameModel = '';

  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  handleFindButtonClick() {
    this.router.navigate(["/search"], {
      queryParams: { region: this.eventRegionModel, "event-type": this.eventTypeModel, name: this.eventNameModel }
    });
  }
  handleSeeAllEventsButtonClick() {
    this.router.navigate(["/search"]);
  }
}
