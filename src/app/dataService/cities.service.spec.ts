import {TestBed} from '@angular/core/testing';

import {CitiesService} from './cities.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../environments/environment';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

describe('CitiesService', () => {
  let service: CitiesService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting(),
      {
        teardown: { destroyAfterEach: true }
      }
    );
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpTestingController]
    });
    service = TestBed.inject(CitiesService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should cities listed', function () {
    service.list().subscribe((cities: Array<any>) => {
      expect(cities.length).toBe(2);
    })
    const request = controller.expectOne('http://customers.dominus/api/people');
    expect(request.request.method).toBe('GET')
    request.flush([{id: 1}, {id: 2}, {id: 4}])
  });
});
