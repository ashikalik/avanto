import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorListPageComponent } from './supervisor-list-page.component';

describe('SupervisorListPageComponent', () => {
  let component: SupervisorListPageComponent;
  let fixture: ComponentFixture<SupervisorListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
