import { Component, OnInit } from '@angular/core';
import { UIService } from '../ui.service'

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  darkMode:boolean;

  constructor(
    public ui:UIService
  ) { }

  ngOnInit() {
    this.ui.darkModeState.subscribe((isDark)=>{
      this.darkMode = isDark;
    });
  }

}
