import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpOverviewComponent } from './exp-overview.component';

describe('ExpOverviewComponent', () => {
  let component: ExpOverviewComponent;
  let fixture: ComponentFixture<ExpOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
