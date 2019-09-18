import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register-banner',
  templateUrl: './register-banner.component.html',
  styleUrls: ['./register-banner.component.scss']
})
export class RegisterBannerComponent implements OnInit {
  @Input('bannerFor') bannerFor:string;
  constructor() { 
  }

  ngOnInit() {
    
  }

}
