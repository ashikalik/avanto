import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCreateEventComponent } from './search-create-event.component';

describe('SearchCreateEventComponent', () => {
  let component: SearchCreateEventComponent;
  let fixture: ComponentFixture<SearchCreateEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCreateEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
