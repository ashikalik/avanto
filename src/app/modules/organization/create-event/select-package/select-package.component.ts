import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-package',
  templateUrl: './select-package.component.html',
  styleUrls: ['./select-package.component.scss']
})
export class SelectPackageComponent implements OnInit {

  public  packages = ["1","2","3"];
  public  selectedPackage = 1;
  constructor() { }

  ngOnInit() {
  }

  handlePackageClick(index){
    this.selectedPackage = index;
  }
}
