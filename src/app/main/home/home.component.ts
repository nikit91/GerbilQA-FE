import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../service/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public modalservice: ModalService) {
  }

  ngOnInit() {
  }


}
