import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-exp-type-desc',
  templateUrl: './exp-type-desc.component.html',
  styleUrls: ['./exp-type-desc.component.css']
})
export class ExpTypeDescComponent implements OnInit {
  msg = '';
  constructor(public dialogRef: MatDialogRef<ExpTypeDescComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.msg = data.msg;
  }

  ngOnInit() {
  }

}
