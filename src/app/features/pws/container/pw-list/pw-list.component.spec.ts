import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwListComponent } from './pw-list.component';

describe('PwListComponent', () => {
  let component: PwListComponent;
  let fixture: ComponentFixture<PwListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PwListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
