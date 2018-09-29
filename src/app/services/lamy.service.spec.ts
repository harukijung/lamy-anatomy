import { TestBed, inject } from '@angular/core/testing';

import { LamyService } from './lamy.service';

describe('LamyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LamyService]
    });
  });

  it('should be created', inject([LamyService], (service: LamyService) => {
    expect(service).toBeTruthy();
  }));
});
