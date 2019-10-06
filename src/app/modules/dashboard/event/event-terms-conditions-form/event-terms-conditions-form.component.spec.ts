import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTermsConditionsFormComponent } from './event-terms-conditions-form.component';

describe('EventTermsConditionsFormComponent', () => {
  let component: EventTermsConditionsFormComponent;
  let fixture: ComponentFixture<EventTermsConditionsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTermsConditionsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTermsConditionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
