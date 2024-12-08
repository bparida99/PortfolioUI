import { TestBed } from '@angular/core/testing';

import { PortfollioServiceService } from './portfollio-service.service';

describe('PortfollioServiceService', () => {
  let service: PortfollioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfollioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
