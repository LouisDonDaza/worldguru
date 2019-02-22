import { Component, OnInit, AfterContentInit } from '@angular/core';
import {HttpEvent} from '@angular/common/http';

import {ActivatedRoute, Params} from '@angular/router';

import {WeatherService} from '../../weather.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit, AfterContentInit {
  countries: Object [];
  states: Object[] = [{state: "Loading..."}, {state: "Loading..."}, {state:"Loading..."}];
  cities: Object[] = [{city: "Loading..."}, {city: "Loading..."}, {city: "Loading..."}];
  selectedCountry: string = "";
  selectedState: string = "";
  selectedCity: string = "";
  filteredCountries = '';
  filteredStates = '';
  filteredCities = '';
  cityData : Object = {"weather": {
                "ts": "2019-02-19T06:00:00.000Z",
                "hu": 42,
                "ic": "01n",
                "pr": 1019,
                "tp": 7,
                "wd": 0,
                "ws": 2.1
            },
            "pollution": {
                "ts": "2019-02-19T05:00:00.000Z",
                "aqius": 24,
                "mainus": "o3",
                "aqicn": 19,
                "maincn": "o3"
            }};
  errorMsg: string = "";
  constructor(private weatherService: WeatherService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.countries = this.weatherService.countries;
  	this.route.queryParams.subscribe(
  		(params: Params)=>{
  			this.selectedCountry = params['country'] || "";
  			this.selectedState = params['state'] || "";
  			this.selectedCity = params['city'] || "";
  		}
  		)
  }
  ngAfterContentInit(){
  	if(this.selectedCountry.length){
  		this.selectCountry(this.selectedCountry);
  		if(this.selectedState.length){
  			this.selectState(this.selectedState);
  			if(this.selectedCity.length){
  				this.selectCity(this.selectedCity);
  			}
  		}
  		
  	}
  }
  selectCountry(country: string){
  	this.weatherService.getStatefromCountry(country).subscribe(
  		(response)=>{
	  		this.states = response['data'];
  		})
  }
  selectState(state: string){
  	this.weatherService.getCityfromState(state, this.selectedCountry)
  	.subscribe((response)=>{
  		this.cities = response['data'];
  	})
  }
  selectCity(city: string){
  	this.weatherService.getData(city, this.selectedState, this.selectedCountry)
  	.subscribe(
  		(response)=>{
  			console.log('response is', response);
  			this.cityData = response['data']['current'];
  		}
  	)
  	console.log('City', this.cityData);
  }
  imageURL: Object = {
  	"01d":[
  		"https://images.pexels.com/photos/155529/pexels-photo-155529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  		"https://images.pexels.com/photos/414578/pexels-photo-414578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  		"https://images.pexels.com/photos/417046/pexels-photo-417046.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=500"
  	],
  	"01n": [
  		"https://images.pexels.com/photos/1567069/pexels-photo-1567069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  		"https://images.pexels.com/photos/577289/pexels-photo-577289.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  		"https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  	],
  	"02d":[
  		"https://images.pexels.com/photos/531972/pexels-photo-531972.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  		"https://images.pexels.com/photos/724963/pexels-photo-724963.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
  	],
  	"02n":[
  		"https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  		"https://images.pexels.com/photos/814449/pexels-photo-814449.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  	],
  	"03d":[
  		"https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  		"https://images.pexels.com/photos/533833/pexels-photo-533833.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  		"https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  	],
  	"04d":[
  		"https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  		"https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  	],
  	"09d":[
  		"https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  		"https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  		"https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  	],
  	"10d":[
  		"https://images.pexels.com/photos/268791/pexels-photo-268791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  		"https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  	],
  	"10n":[
  		"https://images.pexels.com/photos/1824270/pexels-photo-1824270.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  		"https://images.pexels.com/photos/457713/pexels-photo-457713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  	],
  	"11d":[
  		"https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  		"https://images.pexels.com/photos/53459/lightning-storm-weather-sky-53459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  	],
  	"13d":[
  		"https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  		"https://images.pexels.com/photos/839462/pexels-photo-839462.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  		"https://images.pexels.com/photos/833013/pexels-photo-833013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  	],
  	"50d":[
  		"https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  		"https://images.pexels.com/photos/327308/pexels-photo-327308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  		"https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  	]
  }
  getImgURL(icon: string){
  	const selectedIcon = this.imageURL[icon];
  	const rand = Math.floor(Math.random() * selectedIcon.length);
  	return selectedIcon[rand];
  }
}
