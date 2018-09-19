import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loco2Component } from './loco2.component';

describe('Loco2Component', () => {
  let component: Loco2Component;
  let fixture: ComponentFixture<Loco2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loco2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loco2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
