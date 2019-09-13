import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDateTimeComponent } from './event-date-time.component';

describe('EventDateTimeComponent', () => {
  let component: EventDateTimeComponent;
  let fixture: ComponentFixture<EventDateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
