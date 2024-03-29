import { Component, OnInit, Input } from '@angular/core';
import { Package } from '../../../core/model/package/package';

@Component({
  selector: 'app-ticket-list-item',
  templateUrl: './ticket-list-item.component.html',
  styleUrls: ['./ticket-list-item.component.scss']
})
export class TicketListItemComponent implements OnInit {
  @Input('package') package:Package;
  public showComplete:Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public handleshowMoreLessClick() {
    this.showComplete = !this.showComplete;
  }

}
