import { TestBed } from '@angular/core/testing';

import { ServiceFetcherService } from './service-fetcher.service';

describe('ServiceFetcherService', () => {
  let service: ServiceFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
