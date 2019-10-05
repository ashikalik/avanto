import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-select-package',
  templateUrl: './select-package.component.html',
  styleUrls: ['./select-package.component.scss']
})
export class SelectPackageComponent implements OnInit {

  public  packages = ["1","2","3"];
  public  selectedPackage = 1;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  handleSelectButtonClick(index){
    this.selectedPackage = index;
    //this.router.navigate(["/organization/create-event/event-details"]);
    //console.log(index);
  }
  handleContinueButtonClick(index){
    
    this.router.navigate(["/organization/create-event/event-details"]);
    console.log(index);
  }
}
