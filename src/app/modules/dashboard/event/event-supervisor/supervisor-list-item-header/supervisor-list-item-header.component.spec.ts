import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorListItemHeaderComponent } from './supervisor-list-item-header.component';

describe('SupervisorListItemHeaderComponent', () => {
  let component: SupervisorListItemHeaderComponent;
  let fixture: ComponentFixture<SupervisorListItemHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorListItemHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorListItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
