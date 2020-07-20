import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { WeatherData } from '../WeatherData.model';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {
  weatherData:WeatherData;
  timeImg:string;
  weatherIcon:string;
  constructor(private appService:AppService) { }
  ngOnInit(): void {
    this.appService.weatherData.subscribe(data=>{
      this.weatherData=data;
      this.changeLayout();
    })
  }
  changeLayout(){
    this.timeImg=this.weatherData.IsDayTime? "../../assets/img/day.svg":"../../assets/img/night.svg";
    this.weatherIcon="../../assets/img/icons/"+this.weatherData.WeatherIcon+".svg";
  }
}
