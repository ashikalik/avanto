import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationEventListItemComponent } from './organization-event-list-item.component';

describe('OrganizationEventListItemComponent', () => {
  let component: OrganizationEventListItemComponent;
  let fixture: ComponentFixture<OrganizationEventListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationEventListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationEventListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
