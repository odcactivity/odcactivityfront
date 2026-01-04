import { TestBed } from '@angular/core/testing';

import { SupportactivityService } from '@core/service/supportactivity.service';

describe('SupportactivityService', () => {
  let service: SupportactivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportactivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
