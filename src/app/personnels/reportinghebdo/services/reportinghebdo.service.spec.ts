import { TestBed } from '@angular/core/testing';

import { ReportinghebdoService } from './reportinghebdo.service';

describe('ReportinghebdoService', () => {
  let service: ReportinghebdoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportinghebdoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
