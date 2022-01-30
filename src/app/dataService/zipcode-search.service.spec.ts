import { TestBed } from '@angular/core/testing';

import { ZipcodeSearchService } from './zipcode-search.service';

describe('ZipcodeSearchService', () => {
  let service: ZipcodeSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZipcodeSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
