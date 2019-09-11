import { TestBed } from '@angular/core/testing';

import { DateTimeHelperService } from './date-time-helper.service';

describe('DateTimeHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateTimeHelperService = TestBed.get(DateTimeHelperService);
    expect(service).toBeTruthy();
  });
});
