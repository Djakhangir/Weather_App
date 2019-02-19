import { Component, OnInit } from '@angular/core';
import { UIService } from './ui.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showMenu=false;
  darkModeActive:boolean;

constructor (public ui:UIService) {
  
}

ngOnInit() {
  this.ui.darkModeState.subscribe((value) => {
    this.darkModeActive=value;
  });
}
toggleMenu() {
  this.showMenu=!this.showMenu;
}

modeToggleSwitch() {
  this.ui.darkModeState.next(!this.darkModeActive);
  }
}

