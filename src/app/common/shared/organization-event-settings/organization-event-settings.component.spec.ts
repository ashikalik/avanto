import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationEventSettingsComponent } from './organization-event-settings.component';

describe('OrganizationEventSettingsComponent', () => {
  let component: OrganizationEventSettingsComponent;
  let fixture: ComponentFixture<OrganizationEventSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationEventSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationEventSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
