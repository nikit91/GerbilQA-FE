import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpTypeDescComponent } from './exp-type-desc.component';

describe('ExpTypeDescComponent', () => {
  let component: ExpTypeDescComponent;
  let fixture: ComponentFixture<ExpTypeDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpTypeDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpTypeDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
