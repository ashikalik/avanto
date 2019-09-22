import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-ticket',
  templateUrl: './my-ticket.component.html',
  styleUrls: ['./my-ticket.component.scss']
})
export class MyTicketComponent implements OnInit {
@Input('ticket') ticket:number;
  constructor() { }

  ngOnInit() {
  }

}
