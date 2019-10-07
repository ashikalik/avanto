import { Component, OnInit, Output , EventEmitter, Input} from '@angular/core';
import { Supervisor } from '../../../../../core/model/supervisor/supervisor';

@Component({
  selector: 'app-supervisor-detail',
  templateUrl: './supervisor-detail.component.html',
  styleUrls: ['./supervisor-detail.component.scss']
})
export class SupervisorDetailComponent implements OnInit {
  @Input() supervisor: Supervisor;

  @Output() editButtonClick: EventEmitter<any> = new EventEmitter();
  @Output() deleteButtonClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleEditButtonClick() {
    this.editButtonClick.emit();
  }
  handleDeleteButtonClick() {
    this.deleteButtonClick.emit();
  }

}
