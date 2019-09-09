import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEventResultComponent } from './search-event-result.component';

describe('SearchEventResultComponent', () => {
  let component: SearchEventResultComponent;
  let fixture: ComponentFixture<SearchEventResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEventResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEventResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
