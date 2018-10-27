import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwListComponent } from './gw-list.component';

describe('GwListComponent', () => {
  let component: GwListComponent;
  let fixture: ComponentFixture<GwListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GwListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
