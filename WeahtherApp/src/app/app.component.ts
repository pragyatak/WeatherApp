import { Component, OnInit } from '@angular/core';
import { AppService } from './app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public city: Array<Object> = [];
  public cityWeather: Array<Object> = [];
  constructor(private weatherService: AppService) {
    this.city = [
      {name: 'New York', id: '5128581'},
      {name: 'Chicago', id: '4887398'},
      {name: 'Boston', id: '4930956'},
      {name: 'Miami', id: '4164138'},
      {name: 'London', id: ''},
      {name: 'Mumbai', id: ''},
      {name: 'Dubai', id: ''},
      {name: 'Berlin', id: ''},
      {name: 'Atlanta', id: ''},
      {name: 'Amsterdam', id: ''}
    ];
this.cityWeather = ['New York', 'Chicago', 'Boston', 'Miami', 'London', 'Mumbai', 'Dubai', 'Atlanta'];

   }

  ngOnInit() {this.getWeatherForCity(); }

  getWeatherForCity(){
    this.weatherService
      .getWeather()
      .subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
      );
  }
}
