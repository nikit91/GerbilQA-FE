import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureExpComponent } from './configure-exp.component';

describe('ConfigureExpComponent', () => {
  let component: ConfigureExpComponent;
  let fixture: ComponentFixture<ConfigureExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
