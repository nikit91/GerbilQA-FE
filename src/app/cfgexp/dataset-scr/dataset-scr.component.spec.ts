import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetScrComponent } from './dataset-scr.component';

describe('DatasetScrComponent', () => {
  let component: DatasetScrComponent;
  let fixture: ComponentFixture<DatasetScrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetScrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetScrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
