import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorListItemContentComponent } from './supervisor-list-item-content.component';

describe('SupervisorListItemContentComponent', () => {
  let component: SupervisorListItemContentComponent;
  let fixture: ComponentFixture<SupervisorListItemContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorListItemContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorListItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
