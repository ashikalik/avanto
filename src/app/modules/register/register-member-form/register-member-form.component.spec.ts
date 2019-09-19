import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMemberFormComponent } from './register-member-form.component';

describe('RegisterMemberFormComponent', () => {
  let component: RegisterMemberFormComponent;
  let fixture: ComponentFixture<RegisterMemberFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMemberFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMemberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
