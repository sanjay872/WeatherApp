import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from './WeatherData.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn:'root'
})
export class AppService{
  constructor(private http:HttpClient){}
  weatherData=new Subject<WeatherData>();
  cityName=new Subject<string>();
  getCityKey(cityName:string){
    this.http.get("http://dataservice.accuweather.com/locations/v1/cities/search?apikey="+environment.key+"&q="+cityName).subscribe(key=>{
      this.getWeather(key[0].Key);
    });
  }
  getWeather(cityKey:string){
    this.http.get("http://dataservice.accuweather.com/currentconditions/v1/"+cityKey+"?apikey="+environment.key)
    .subscribe(weather=>{
      var data=new WeatherData(
        weather[0].IsDayTime
        ,{celsius:weather[0].Temperature.Imperial.Value,fahrenheit:weather[0].Temperature.Metric.Value},
        weather[0].WeatherIcon
        ,weather[0].WeatherText);
        this.weatherData.next(data);
      });
  }
}
