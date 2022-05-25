import { TestBed } from '@angular/core/testing';

import { GetMFAService } from './get-mfa.service';

describe('GetMFAService', () => {
  let service: GetMFAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMFAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
