import { TestBed } from '@angular/core/testing';

import { HospitalityProviderService } from './hospitality-provider.service';

describe('HospitalityProviderService', () => {
  let service: HospitalityProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalityProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
