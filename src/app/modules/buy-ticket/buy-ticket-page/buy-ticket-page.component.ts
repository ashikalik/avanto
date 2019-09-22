import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-ticket-page',
  templateUrl: './buy-ticket-page.component.html',
  styleUrls: ['./buy-ticket-page.component.scss']
})
export class BuyTicketPageComponent implements OnInit {

  public currentStep:number;
  constructor() { 
    this.currentStep = 1;
  }

  ngOnInit() {
  }

  handlePillClick(step:number){
    this.currentStep = step;
  }
  handleNextButtonClick(step:number){

  }
  handlePreviosButtonClick(step:number){

  }

}
