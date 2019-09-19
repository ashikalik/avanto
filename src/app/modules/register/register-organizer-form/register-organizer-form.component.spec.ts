import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOrganizerFormComponent } from './register-organizer-form.component';

describe('RegisterOrganizerFormComponent', () => {
  let component: RegisterOrganizerFormComponent;
  let fixture: ComponentFixture<RegisterOrganizerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterOrganizerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterOrganizerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
