import { TestBed, inject } from '@angular/core/testing';

import { DngService } from './dng.service';

describe('DngService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DngService]
    });
  });

  it('should be created', inject([DngService], (service: DngService) => {
    expect(service).toBeTruthy();
  }));
});
