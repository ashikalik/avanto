import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-terms-conditions',
  templateUrl: './event-terms-conditions.component.html',
  styleUrls: ['./event-terms-conditions.component.scss']
})
export class EventTermsConditionsComponent implements OnInit {
  private showForm:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  handleAddNewButtonClick() {
    this.showForm = true;
  }

  handleDeleteButtonClick(term){

  }

  handleEditButtonClick(term){
    this.showForm = true;
  }

  onCancelButtonClick(){
    this.showForm = false;
  }

  onSaveButtonClick(){
    this.showForm = false;
  }

}
