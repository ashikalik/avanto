import { Component, OnInit, Input } from '@angular/core';
import { Policy } from '../../../core/model/common/policy';

@Component({
  selector: 'app-event-rules',
  templateUrl: './event-rules.component.html',
  styleUrls: ['./event-rules.component.scss']
})
export class EventRulesComponent implements OnInit {
  @Input('rules') rules:Policy[];
  constructor() { }

  ngOnInit() {
  }

}
