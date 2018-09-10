import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewHomeComponent } from './overview-home.component';

describe('OverviewHomeComponent', () => {
  let component: OverviewHomeComponent;
  let fixture: ComponentFixture<OverviewHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
