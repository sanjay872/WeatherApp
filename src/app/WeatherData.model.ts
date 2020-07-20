export class WeatherData{
  IsDayTime:boolean;
  Temperature:{celsius:number,fahrenheit:number};
  WeatherIcon:number;
  WeatherText:string;
  constructor(IsDayTime:boolean,Temperature:{celsius:number,fahrenheit:number},WeatherIcon:number,WeatherText:string){
    this.IsDayTime=IsDayTime;
    this.Temperature=Temperature;
    this.WeatherIcon=WeatherIcon;
    this.WeatherText=WeatherText;
  }
}
