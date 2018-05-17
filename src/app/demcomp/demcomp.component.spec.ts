import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemcompComponent } from './demcomp.component';

describe('DemcompComponent', () => {
  let component: DemcompComponent;
  let fixture: ComponentFixture<DemcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
