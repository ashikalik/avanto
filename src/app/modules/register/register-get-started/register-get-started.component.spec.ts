import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGetStartedComponent } from './register-get-started.component';

describe('RegisterGetStartedComponent', () => {
  let component: RegisterGetStartedComponent;
  let fixture: ComponentFixture<RegisterGetStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterGetStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
