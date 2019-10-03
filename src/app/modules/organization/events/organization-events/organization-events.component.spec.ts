import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationEventsComponent } from './organization-events.component';

describe('OrganizationEventsComponent', () => {
  let component: OrganizationEventsComponent;
  let fixture: ComponentFixture<OrganizationEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
