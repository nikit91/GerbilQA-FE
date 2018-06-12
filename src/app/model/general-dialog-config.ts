import {ActnBtn} from './actn-btn';

export class GeneralDialogConfig {
  public content: string;
  public actnbtns: ActnBtn[];

  constructor(content: string, actnbtns: ActnBtn[]) {
    this.content = content;
    this.actnbtns = actnbtns;
  }
}
