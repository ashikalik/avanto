import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { EventService } from "../../../../core/api-services/event.service";
import { EventList } from "../../../../core/model/event/event-list";

@Component({
  selector: 'app-organization-events',
  templateUrl: './organization-events.component.html',
  styleUrls: ['./organization-events.component.scss']
})
export class OrganizationEventsComponent implements OnInit {
  public organizationEventList: EventList;
  public limit: number;
  public page: number;

  constructor(public eventService: EventService,
    public title: Title,
    public meta: Meta,
    public router: Router) {

    this.limit = 20;
    this.page = 1;

  }

  ngOnInit() {
    this.title.setTitle('فعالياتي');
    this.meta.addTag({ name: "description", content: 'فعالياتي' })
    this.getMyEvents();
  }




  public getMyEvents() {
    this.eventService.getMyEvents(this.limit, this.page).subscribe(res => {
      this.organizationEventList = res;
    }, err => {
    });
  }


  public onCreateEvent() {
    this.router.navigate(['/organization/create-event'])
  }

  public onEvent(event_ket: string) {
    this.router.navigate(['/organization/event/' + event_ket])
  }



  goToPage(n: number): void {
    this.page = n;
    this.getMyEvents();
  }

  onNext(): void {
    this.page++;
    this.getMyEvents();
  }

  onPrev(): void {
    this.page--;
    this.getMyEvents();
  }

}
