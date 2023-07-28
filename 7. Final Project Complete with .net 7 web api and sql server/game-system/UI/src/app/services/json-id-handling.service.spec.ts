import { TestBed } from '@angular/core/testing';

import { JsonIdHandlingService } from './json-id-handling.service';

describe('JsonIdHandlingService', () => {
  let service: JsonIdHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonIdHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
