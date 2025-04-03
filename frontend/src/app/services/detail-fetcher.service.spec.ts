import { TestBed } from '@angular/core/testing';

import { DetailFetcherService } from './detail-fetcher.service';

describe('DetailFetcherService', () => {
  let service: DetailFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
