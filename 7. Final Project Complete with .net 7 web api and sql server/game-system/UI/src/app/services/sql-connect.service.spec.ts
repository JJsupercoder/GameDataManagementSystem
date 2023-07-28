import { TestBed } from '@angular/core/testing';

import { SqlConnectService } from './sql-connect.service';

describe('SqlConnectService', () => {
  let service: SqlConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
