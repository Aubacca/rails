import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocoDetailsComponent } from './loco-details.component';

describe('LocoDetailsComponent', () => {
  let component: LocoDetailsComponent;
  let fixture: ComponentFixture<LocoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
