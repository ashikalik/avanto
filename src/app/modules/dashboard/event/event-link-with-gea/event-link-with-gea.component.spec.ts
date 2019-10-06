import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLinkWithGeaComponent } from './event-link-with-gea.component';

describe('EventLinkWithGeaComponent', () => {
  let component: EventLinkWithGeaComponent;
  let fixture: ComponentFixture<EventLinkWithGeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventLinkWithGeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLinkWithGeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
