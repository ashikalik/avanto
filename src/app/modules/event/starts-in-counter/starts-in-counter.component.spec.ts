import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartsInCounterComponent } from './starts-in-counter.component';

describe('StartsInCounterComponent', () => {
  let component: StartsInCounterComponent;
  let fixture: ComponentFixture<StartsInCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartsInCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartsInCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
