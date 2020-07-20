import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private appService:AppService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
      this.appService.getCityKey(form.value.cityName);
  }
}
