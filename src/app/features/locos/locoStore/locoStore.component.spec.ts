import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocoStoreComponent } from './locoStore.component';

describe('LocoStoreComponent', () => {
  let component: LocoStoreComponent;
  let fixture: ComponentFixture<LocoStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocoStoreComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocoStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
