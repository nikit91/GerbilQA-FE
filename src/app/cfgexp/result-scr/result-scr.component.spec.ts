import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultScrComponent } from './result-scr.component';

describe('ResultScrComponent', () => {
  let component: ResultScrComponent;
  let fixture: ComponentFixture<ResultScrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultScrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultScrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
