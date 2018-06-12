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
  uploadedSystems: QASystem[] = [];
  webSystems: QASystem[] = [];
  // combination of all
  chosenSystems: QASystem[] = [];
  displayedColumns = ['position', 'name', 'delete'];
  secondFormGroup: FormGroup;
  curTargetDS: string;

  constructor(private _formBuilder: FormBuilder, public modalservice: ModalService) {
    this.secondFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      curName: '',
      extype: this.extypeVar
    });
  }

  ngOnInit() {
    this.curTargetDS = this.modDSList[0].name;
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1 === c2 : c1 === c2;
  }

  getSelectedDatasets(): Dataset[] {
    this.chosenSystems = this.selectedSystems.concat(this.webSystems, this.uploadedSystems);
    return this.chosenSystems;
  }

  public logUserClick(val: any) {
    console.log('User clicked on button with value: ' + val);
  }

  public removeFromChosen(row: QASystem) {
    let index = this.selectedSystems.indexOf(row);
    if (index > -1) {
      this.selectedSystems = this.selectedSystems.filter(item => item !== row);
      return;
    }
    index = this.webSystems.indexOf(row);
    if (index > -1) {
      this.webSystems = this.webSystems.filter(item => item !== row);
    } else {
      this.uploadedSystems = this.uploadedSystems.filter(item => item !== row);
    }

  }

  addWebSystem(wsNameFld, wsURIFld) {
    const wsName = wsNameFld.value;
    const wsURI = wsURIFld.value;
    if (wsNameFld && wsURI) {
      const wsSystem: QASystem = {
        name: wsName,
        uri: wsURI
      };
      this.webSystems.push(wsSystem);
    }
    wsNameFld.value = null;
    wsURIFld.value = null;
  }

  public sysFileChange(sysNameFld, event) {
    const sysName = sysNameFld.value;
    const dsName = this.curTargetDS;
    const fileList: FileList = event.target.files;
    // todo: popup if no name
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const temp = {
        name: sysName ? sysName + ' (' + file.name + ')' : file.name,
        file: file,
        datasetName: dsName
      };
      this.uploadedSystems.push(temp);
      sysNameFld.value = null;
    }
  }
}
