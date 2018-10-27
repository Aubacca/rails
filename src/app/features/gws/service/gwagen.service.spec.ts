import { TestBed, inject } from '@angular/core/testing';

import { GwagenService } from './gwagen.service';

describe('GwagenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GwagenService]
    });
  });

  it('should be created', inject([GwagenService], (service: GwagenService) => {
    expect(service).toBeTruthy();
  }));
});
