import { Component, OnInit, Input } from "@angular/core";
import { Ticket } from "../../../core/model/ticket/ticket";

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.scss"]
})
export class TicketComponent implements OnInit {
  @Input("ticket") ticket: Ticket;
  constructor() {}

  ngOnInit() {}
}
