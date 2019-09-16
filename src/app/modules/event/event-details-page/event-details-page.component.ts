import { Component, OnInit } from "@angular/core";
import { EventService } from "../../../core/api-services/event.service";
import { ActivatedRoute, Router } from "@angular/router";
import { EventDetailsResponseData } from "../../../core/model/event/event-details-reponse";
import { Meta, Title } from "@angular/platform-browser";
import { EventoError } from "../../../core/models/error";

@Component({
  selector: "app-event-details-page",
  templateUrl: "./event-details-page.component.html",
  styleUrls: ["./event-details-page.component.scss"]
})
export class EventDetailsPageComponent implements OnInit {
  public eventKey: string;
  public eventData: EventDetailsResponseData;
  public lat: number = 51.678418;
  public lng: number = 7.809007;

  public errorSubmitRequest: EventoError;

  constructor(
    public eventService: EventService,
    public activatedRout: ActivatedRoute,
    public title: Title,
    public meta: Meta,
    public router: Router
  ) {
    this.activatedRout.params.subscribe(params => {
      this.eventKey = params["id"];
    });
  }

  ngOnInit() {
    this.errorSubmitRequest = null;
    this.getEventDetail();
  }

  public getEventDetail() {
    this.eventService.getEventDetail(this.eventKey).subscribe(
      res => {
        if (res.data.details == null) this.router.navigate(["/home"]);
        this.eventData = res.data;
        console.log(this.eventData);
        // this.title.setTitle(this.eventDetail.data.details.name);
        // this.meta.addTag({
        //   name: "description",
        //   content: this.eventDetail.data.details.details
        // });
      },
      err => {
        this.router.navigate(["/home"]);
      }
    );
  }

  public handleBuyTicketButtonClick() {
    if (this.eventKey != "214611584") {
      this.router.navigate(["/buy-ticket/" + this.eventKey]);
    } else {
      this.router.navigate(["/cosmos/" + this.eventKey]);
    }
  }

  public submitRequest() {
    this.errorSubmitRequest = null;
    this.eventService.submitRequest(this.eventKey).subscribe(
      res => {
        this.getEventDetail();
      },
      err => {
        this.errorSubmitRequest = err.value.error;
      }
    );
  }
}
