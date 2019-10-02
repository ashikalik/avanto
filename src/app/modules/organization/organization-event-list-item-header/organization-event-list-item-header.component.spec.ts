import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationEventListItemHeaderComponent } from './organization-event-list-item-header.component';

describe('OrganizationEventListItemComponent', () => {
  let component: OrganizationEventListItemHeaderComponent;
  let fixture: ComponentFixture<OrganizationEventListItemHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationEventListItemHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationEventListItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
