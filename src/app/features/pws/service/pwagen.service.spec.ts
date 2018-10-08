import { TestBed, inject } from '@angular/core/testing';

import { PwagenService } from './pwagen.service';

describe('PwagenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PwagenService]
    });
  });

  it('should be created', inject([PwagenService], (service: PwagenService) => {
    expect(service).toBeTruthy();
  }));
});
