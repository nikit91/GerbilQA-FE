import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {Dataset} from '../../main/configure-exp/configure-exp.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dataset-scr',
  templateUrl: './dataset-scr.component.html',
  styleUrls: ['./dataset-scr.component.css']
})
export class DatasetScrComponent implements OnInit {
  extypeList = [{name: 'QA'}];
  extypeVar = 'QA';
  @Input() dsList: Dataset[];
  selectedDatasets: Dataset[] = [];
  chosenDatasets: Dataset[];
  displayedColumns = ['position', 'name', 'delete'];
  firstFormGroup: FormGroup;
  uploadedDatasets: Dataset[] = [];
  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      curName: '',
      extype: this.extypeVar
    });
  }
  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1 === c2 : c1 === c2;
  }
  getSelectedDatasets(): Dataset[] {
    this.chosenDatasets = this.selectedDatasets.concat(this.uploadedDatasets);
    return this.chosenDatasets;
  }
}
