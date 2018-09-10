import { TestBed, inject } from '@angular/core/testing';

import { LokosService } from './lokos.service';

describe('LokosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LokosService]
    });
  });

  it('should be created', inject([LokosService], (service: LokosService) => {
    expect(service).toBeTruthy();
  }));
});
