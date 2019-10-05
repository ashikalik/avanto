import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTermsConditionsComponent } from './event-terms-conditions.component';

describe('EventTermsConditionsComponent', () => {
  let component: EventTermsConditionsComponent;
  let fixture: ComponentFixture<EventTermsConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTermsConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTermsConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
