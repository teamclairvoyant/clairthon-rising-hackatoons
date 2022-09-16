import { TestBed } from '@angular/core/testing';

import { CandidateRegistrationService } from './candidate-registration.service';

describe('CandidateRegistrationService', () => {
  let service: CandidateRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
