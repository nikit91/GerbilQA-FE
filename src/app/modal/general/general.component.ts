import {Component, Inject, OnInit} from '@angular/core';
import {ExpTypeDescComponent} from '../exp-type-desc/exp-type-desc.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ActnBtn} from '../../model/actn-btn';
import {GeneralDialogConfig} from '../../model/general-dialog-config';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  actnBtns: ActnBtn[] = [];
  msg = '';

  constructor(public dialogRef: MatDialogRef<ExpTypeDescComponent>,
              @Inject(MAT_DIALOG_DATA) public data: GeneralDialogConfig) {
    this.msg = data.content;
    this.actnBtns = data.actnbtns;
  }

  ngOnInit() {
  }

  actnBtnClick(btn: ActnBtn) {
    this.dialogRef.close(btn.value);
  }

}
