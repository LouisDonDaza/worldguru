import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../restaurants.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  cityEntered: string = "";
  cityID: number = 0;
  errMsg: string = "";
  constructor(private resService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.queryParams.subscribe(
  		(params: Params)=>{
  			this.cityID = +params['cityID'] || 0;
  		}
  		)
  }
  onEnterCity(event){
  	if(event.keyCode === 13){
  		this.cityEntered = event.target.value;
  		this.resService.getCitySuggestions(event.target.value)
  		.subscribe((response)=>{
  			if(response['location_suggestions'].length){
  				this.querySuggestions = response['location_suggestions'];
  				this.errMsg = "";
  			}else{
  				this.errMsg = `No results found for ${event.target.value}`;
  			}
  			
  		})
  	}
  }
  onSelectCity(cityId: string){
  	this.resService.getCityCollections(+cityId).subscribe(
  		(response)=>{
  			if(response['collections']){
  				this.collections = response['collections'];
  			}
  		}
  		)
  }
  collections: Object[] = [
    {
      "collection": {
        "collection_id": 1,
        "res_count": 26,
        "image_url": "https://b.zmtcdn.com/data/collections/b53772a204429cb9b42313d6dc22bf3c_1535469399.jpg",
        "url": "https://www.zomato.com/new-york-city/top-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "title": "Trending This Week",
        "description": "Most popular restaurants in town this week",
        "share_url": "http://www.zoma.to/c-281/1"
      }
    },
    {
      "collection": {
        "collection_id": 45,
        "res_count": 15,
        "image_url": "https://b.zmtcdn.com/data/collections/84dc27311ac4e82075d3c1ce0a9da27b_1442320692_l.jpg",
        "url": "https://www.zomato.com/new-york-city/gluten-free-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "title": "Gluten-free",
        "description": "Places serving the best gluten-free food.",
        "share_url": "http://www.zoma.to/c-281/45"
      }
    },
    {
      "collection": {
        "collection_id": 462,
        "res_count": 22,
        "image_url": "https://b.zmtcdn.com/data/collections/e0a7a9c526381b715443c1a6528ec110_1436777634_l.jpg",
        "url": "https://www.zomato.com/new-york-city/food-trucks?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "title": "Truckin' awesome",
        "description": "Find the best places for a little meals on wheels action",
        "share_url": "http://www.zoma.to/c-281/462"
      }
    }
  ];
  querySuggestions: Object[] =[];
}
