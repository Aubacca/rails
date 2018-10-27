import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { CompanyListComponent } from './company-list.component';

describe('CompanyListComponent', () => {
  let comp: CompanyListComponent;
  let fixture: ComponentFixture<CompanyListComponent>;

  beforeEach(() => {
    const storeStub = {
      pipe: () => ({}),
      dispatch: () => ({})
    };
    TestBed.configureTestingModule({
      declarations: [CompanyListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: Store, useValue: storeStub }]
    });
    fixture = TestBed.createComponent(CompanyListComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });
});
