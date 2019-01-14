import { TestBed } from '@angular/core/testing';

import { StampDutyService } from './stamp-duty.service';

describe('StampDutyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StampDutyService = TestBed.get(StampDutyService);
    expect(service).toBeTruthy();
  });
});
