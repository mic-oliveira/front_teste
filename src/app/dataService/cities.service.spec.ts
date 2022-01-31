import { TestBed } from '@angular/core/testing';

import { CitiesService } from './cities.service';
import {arrayLength} from 'ngx-custom-validators/src/app/array-length/validator';

describe('CitiesService', () => {
  let service: CitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should cities listed', function () {
    expect(service.list).toBe(arrayLength(2))
  });
});
