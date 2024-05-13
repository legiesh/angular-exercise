import { TestBed } from '@angular/core/testing';

import { OfficersServiceService } from './officers-service.service';

describe('OfficersServiceService', () => {
  let service: OfficersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
