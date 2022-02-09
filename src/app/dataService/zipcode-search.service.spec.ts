import { TestBed } from '@angular/core/testing';

import { ZipcodeSearchService } from './zipcode-search.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ZipcodeSearchService', () => {
  let service: ZipcodeSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ZipcodeSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
