import { TestBed, inject } from '@angular/core/testing';

import { LocoFormServiceService } from './loco-form-service.service';

describe('LocoFormServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocoFormServiceService]
    });
  });

  it('should be created', inject([LocoFormServiceService], (service: LocoFormServiceService) => {
    expect(service).toBeTruthy();
  }));
});
