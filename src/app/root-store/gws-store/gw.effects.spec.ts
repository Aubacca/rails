import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GwEffects } from './gw.effects';

describe('GwEffects', () => {
  let actions$: Observable<any>;
  let effects: GwEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GwEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(GwEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
