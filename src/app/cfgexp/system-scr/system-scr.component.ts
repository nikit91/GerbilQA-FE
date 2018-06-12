import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from '../../service/modal.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Dataset, QASystem} from '../../main/configure-exp/configure-exp.component';

@Component({
  selector: 'app-system-scr',
  templateUrl: './system-scr.component.html',
  styleUrls: ['./system-scr.component.css']
})
export class SystemScrComponent implements OnInit {

  extypeList = [{name: 'QA'}];
  extypeVar = 'QA';
  @Input() qsysList: QASystem[];
  @Input() modDSList: Dataset[];
  selectedSystems: QASystem[] = [];
  chosenSystems: QASystem[];
  displayedColumns = ['position', 'name', 'delete'];
  firstFormGroup: FormGroup;
  uploadedDatasets: Dataset[] = [];

  constructor(private _formBuilder: FormBuilder, public modalservice: ModalService) {
  }

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
    this.chosenSystems = this.selectedSystems.concat(this.uploadedDatasets);
    return this.chosenSystems;
  }

  public fileChange(event) {
    const fileList: FileList = event.target.files;
    const givenName = this.firstFormGroup.value.curName;
    // todo: popup if no name
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const temp = {
        name: givenName ? givenName + ' (' + file.name + ')' : file.name,
        filePath: file.name
      };
      this.uploadedDatasets.push(temp);
      this.modalservice.openInfoDialog('\"' + givenName + '\" has been added.', this.logUserClick);
      this.firstFormGroup.reset();
    }
  }

  public logUserClick(val: any) {
    console.log('User clicked on button with value: ' + val);
  }

  public removeFromChosen(row: Dataset) {
    const index = this.selectedSystems.indexOf(row);
    if (index > -1) {
      this.selectedSystems = this.selectedSystems.filter(item => item !== row);
    } else {
      this.uploadedDatasets = this.uploadedDatasets.filter(item => item !== row);
    }

  }
}
