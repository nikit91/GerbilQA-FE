import {Component, OnInit, ViewChild} from '@angular/core';
import {DatasetScrComponent} from "../../cfgexp/dataset-scr/dataset-scr.component";

@Component({
  selector: 'app-configure-exp',
  templateUrl: './configure-exp.component.html',
  styleUrls: ['./configure-exp.component.css']
})
export class ConfigureExpComponent implements OnInit {
  datasetList: Dataset[] = [
    { name: 'Dataset A' },
    { name: 'Dataset B' },
    { name: 'Dataset C' },
    { name: 'Dataset D' },
    { name: 'Dataset E' },
    { name: 'Dataset F' },
    { name: 'Dataset G' },
    { name: 'Dataset H' },
    { name: 'Dataset I' },
    { name: 'Dataset J' },
    { name: 'Dataset K' },
    { name: 'Dataset L' },
    { name: 'Dataset M' }
  ];
  systemList: QASystem[] = [
    { name: 'System A' },
    { name: 'System B' },
    { name: 'System C' },
    { name: 'System D' },
    { name: 'System E' },
    { name: 'System F' },
    { name: 'System G' },
    { name: 'System H' },
    { name: 'System I' },
    { name: 'System J' },
    { name: 'System K' },
    { name: 'System L' },
    { name: 'System M' }
  ];
  @ViewChild(DatasetScrComponent) dsComp;

  getModifiedDataset(): Dataset[] {
    return this.datasetList.concat(this.dsComp.uploadedDatasets);
  }
  constructor() { }

  ngOnInit() {
    // todo: fetch the initial lists
  }

}

export interface Dataset {
  name: string;
  filePath?: string;
}

export interface QASystem {
  name: string;
  uri?: string;
  file?: File;
  datasetName?: string;
}
