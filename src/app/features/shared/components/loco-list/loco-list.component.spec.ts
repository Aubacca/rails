import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocoListComponent } from './loco-list.component';

describe('LocoListComponent', () => {
  let component: LocoListComponent;
  let fixture: ComponentFixture<LocoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
