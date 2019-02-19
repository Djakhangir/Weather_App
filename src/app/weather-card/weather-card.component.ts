import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';
import { UIService } from '../ui.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit, OnDestroy {
  condition:string;
  currentTemp:number;
  maxTemp:number;
  minTemp:number;
  darkMode:boolean;

  constructor(
    public weather:WeatherService,
    public router:Router,
    public ui:UIService
  ) { 

  }

  ngOnInit() {
    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode=isDark;
    });

    this.weather.getWeatherState('New York').subscribe((data:string)=>{
      this.condition=data;
    });

    this.weather.getCurrentTemp('New York').subscribe((data:number)=>{
      this.currentTemp=data;
    });

    this.weather.getMinTemp('New York').subscribe((data:number)=>{
      this.minTemp=data;
    });

    this.weather.getMaxTemp('New York').subscribe((data:number)=>{
      this.maxTemp=data;
    });
}

ngOnDestroy(){

}

openDetails(){
  this.router.navigateByUrl('/details/New York');
  }

  
}
