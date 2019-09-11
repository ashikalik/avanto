import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  private eventRegion;
  private eventType;
  private eventName;
  constructor(private route: ActivatedRoute) { 
    this.eventRegion = null;
    this.eventType = null;
    this.eventName = null;
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      if(params.has('region')) {
        this.eventRegion = params.get('region');
      }
      if(params.has('type')) {
        this.eventType = params.get('type');
      }
      if(params.has('name')) {
        this.eventName = params.get('name');
      }
      //debugger;
      console.log(this.eventRegion);
      console.log(this.eventType);
      console.log(this.eventName);
      
    });
  }

}
