import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ExpTypeDescComponent} from '../modal/exp-type-desc/exp-type-desc.component';
import {GeneralComponent} from '../modal/general/general.component';
import {ActnBtn} from '../model/actn-btn';
import {GeneralDialogConfig} from '../model/general-dialog-config';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public okBtn: ActnBtn = new ActnBtn(1, 'Ok', 'O');
  public closeBtn: ActnBtn = new ActnBtn(2, 'Close', 'C');

  constructor(public dialog: MatDialog) {
  }

  openDialog(data: GeneralDialogConfig): void {
    const dialogRef = this.dialog.open(GeneralComponent, {
      width: '250px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openInfoDialog(msg: string, subFn?: (value: any) => any): void {
    const genConf: GeneralDialogConfig = new GeneralDialogConfig(msg, [this.okBtn]);
    const dialogRef = this.dialog.open(GeneralComponent, {
      data: genConf
    });

    dialogRef.afterClosed().subscribe(result => {
      subFn(result);
    });
  }
}
