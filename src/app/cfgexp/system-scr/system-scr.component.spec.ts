import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemScrComponent } from './system-scr.component';

describe('SystemScrComponent', () => {
  let component: SystemScrComponent;
  let fixture: ComponentFixture<SystemScrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemScrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemScrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
