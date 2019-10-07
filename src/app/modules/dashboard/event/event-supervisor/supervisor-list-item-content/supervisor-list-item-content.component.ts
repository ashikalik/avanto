import { Component, OnInit } from '@angular/core';
import { Supervisor } from 'src/app/core/model/supervisor/supervisor';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-supervisor-list-item-content',
  templateUrl: './supervisor-list-item-content.component.html',
  styleUrls: ['./supervisor-list-item-content.component.scss']
})
export class SupervisorListItemContentComponent implements OnInit {
  public showEditForm: boolean = false;
  public modelSupervisor: Supervisor;
  constructor() { }

  ngOnInit() {
    this.modelSupervisor = {} as Supervisor;
  }

  onEditButtonClick(supervisor: Supervisor) {
    this.modelSupervisor = supervisor;
    this.showEditForm = true;
  }
  onDeleteButtonClick(supervisor: Supervisor) {

  }
  onSaveButtonClick(supervisorForm: FormGroup) {
   
  }
  onCancelButtonClick(supervisor: Supervisor) {
    this.showEditForm = false;
  }

}
