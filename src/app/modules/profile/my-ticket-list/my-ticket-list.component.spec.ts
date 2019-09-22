import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTicketListComponent } from './my-ticket-list.component';

describe('MyTicketListComponent', () => {
  let component: MyTicketListComponent;
  let fixture: ComponentFixture<MyTicketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTicketListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
