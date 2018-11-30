import { TestBed, inject } from '@angular/core/testing';

import { LocoFormService } from './loco-form-service.service';

describe('LocoFormServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocoFormService]
    });
  });

  it('should be created', inject(
    [LocoFormService],
    (service: LocoFormService) => {
      expect(service).toBeTruthy();
    }
  ));
});
