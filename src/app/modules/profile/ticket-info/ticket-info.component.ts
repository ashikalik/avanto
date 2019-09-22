import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.scss']
})
export class TicketInfoComponent implements OnInit {
  @Input('ticket') ticket:number;
  constructor() { }

  ngOnInit() {
  }

}
