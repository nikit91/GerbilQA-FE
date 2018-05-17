import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mainScr  = MainScreen;
  activeScreen = MainScreen.Home;
  changeScreen(val) {
    this.activeScreen = val;
  }
}
enum MainScreen {
  Home,
  CfgExp,
  ExpOvrvw,
  AbtUs,
}
