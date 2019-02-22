import { Component, OnInit, AfterContentInit } from '@angular/core';
import {ActivatedRoute,Params, Router} from '@angular/router';
import {RestaurantsService} from '../restaurants.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, AfterContentInit {
  collectionID: string = "";
  resID: number = 0;
  cityID: string = "";
  resultsFound: number = 0;
  errMsg: string = "";
  resultsDisplayed: number = 0;
  constructor(private route: ActivatedRoute, private router: Router, private resService: RestaurantsService) { }

  ngOnInit() {
  	this.route.queryParams.subscribe((params: Params)=>{
  		this.collectionID = params['collectionID'] || "";
  		this.resID = +params['resID'];
  		this.cityID = params['cityID'] || "";
  	})
  }
  ngAfterContentInit(){
  	if(!this.collectionID.length || !this.cityID.length){
  		this.router.navigate(['/restaurants/collections']);
  	}else{
  		this.resService.getRestaurants(this.collectionID, this.cityID).subscribe(
  			(response)=>{
  				if(response['restaurants'].length){
  				this.resultsFound = response['results_found'];
  				//set resultsDisplayed to enable/disable more button
  				this.resultsDisplayed = response['results_shown'];
  				this.restaurants = response['restaurants'];
  				}else{
  					this.errMsg = "No results found. Page will reset in 5 seconds";
  					setTimeout(()=>{
  						this.router.navigate(['/restaurants/collections']);
  					}, 5000);
  				}
  			}
  			)
  	}
  }
  fetchMoreRestaurants(){
  	this.resService.getMoreRestaurants(this.collectionID, this.cityID, this.resultsDisplayed)
  	.subscribe((response)=>{
  		this.resultsDisplayed += response['results_shown'];
  		this.restaurants.push(...response['restaurants']);
  	})
  }
  restaurants: Object[]= [
    {
      "restaurant": {
        "R": {
          "res_id": 16834356
        },
        "apikey": "6f99fd5ecdbd166c72dded453ee5aa69",
        "id": "16834356",
        "name": "Café Dulcé",
        "url": "https://www.zomato.com/los-angeles/café-dulcé-little-tokyo?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "134 Japanese Village Plz, Los Angeles 90012",
          "locality": "Japanese Village Plaza Mall, Little Tokyo",
          "city": "Los Angeles",
          "city_id": 281,
          "latitude": "34.0489250000",
          "longitude": "-118.2397570000",
          "zipcode": "90012",
          "country_id": 216,
          "locality_verbose": "Japanese Village Plaza Mall, Little Tokyo, Los Angeles"
        },
        "switch_to_order_menu": 0,
        "cuisines": "Japanese",
        "average_cost_for_two": 0,
        "price_range": 1,
        "currency": "$",
        "offers": [],
        "opentable_support": 0,
        "is_zomato_book_res": 0,
        "mezzo_provider": "OTHER",
        "is_book_form_web_view": 0,
        "book_form_web_view_url": "",
        "book_again_url": "",
        "thumb": "",
        "user_rating": {
          "aggregate_rating": "3.7",
          "rating_text": "Good",
          "rating_color": "9ACD32",
          "votes": "37"
        },
        "photos_url": "https://www.zomato.com/los-angeles/café-dulcé-little-tokyo/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/los-angeles/café-dulcé-little-tokyo/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "include_bogo_offers": true,
        "deeplink": "zomato://restaurant/16834356",
        "is_table_reservation_supported": 0,
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/los-angeles/café-dulcé-little-tokyo/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "establishment_types": []
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 16808358
        },
        "apikey": "6f99fd5ecdbd166c72dded453ee5aa69",
        "id": "16808358",
        "name": "Bob's Coffee & Doughnuts",
        "url": "https://www.zomato.com/los-angeles/bobs-coffee-doughnuts-park-la-brea?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "6333 W 3rd St, Los Angeles 90036",
          "locality": "West 3rd Street, Park La Brea",
          "city": "Los Angeles",
          "city_id": 281,
          "latitude": "34.0718372000",
          "longitude": "-118.3604292000",
          "zipcode": "90036",
          "country_id": 216,
          "locality_verbose": "West 3rd Street, Park La Brea, Los Angeles"
        },
        "switch_to_order_menu": 0,
        "cuisines": "Coffee and Tea",
        "average_cost_for_two": 10,
        "price_range": 1,
        "currency": "$",
        "offers": [],
        "opentable_support": 0,
        "is_zomato_book_res": 0,
        "mezzo_provider": "OTHER",
        "is_book_form_web_view": 0,
        "book_form_web_view_url": "",
        "book_again_url": "",
        "thumb": "",
        "user_rating": {
          "aggregate_rating": "3.9",
          "rating_text": "Good",
          "rating_color": "9ACD32",
          "votes": "36"
        },
        "photos_url": "https://www.zomato.com/los-angeles/bobs-coffee-doughnuts-park-la-brea/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/los-angeles/bobs-coffee-doughnuts-park-la-brea/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "include_bogo_offers": true,
        "deeplink": "zomato://restaurant/16808358",
        "is_table_reservation_supported": 0,
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/los-angeles/bobs-coffee-doughnuts-park-la-brea/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "establishment_types": []
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 16834654
        },
        "apikey": "6f99fd5ecdbd166c72dded453ee5aa69",
        "id": "16834654",
        "name": "(Fōnuts)",
        "url": "https://www.zomato.com/los-angeles/fōnuts-carthay?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "8104 W 3rd St, Los Angeles 90048",
          "locality": "West 3rd Street, Carthay",
          "city": "Los Angeles",
          "city_id": 281,
          "latitude": "34.0719699000",
          "longitude": "-118.3661049000",
          "zipcode": "90048",
          "country_id": 216,
          "locality_verbose": "West 3rd Street, Carthay, Los Angeles"
        },
        "switch_to_order_menu": 0,
        "cuisines": "",
        "average_cost_for_two": 0,
        "price_range": 1,
        "currency": "$",
        "offers": [],
        "opentable_support": 0,
        "is_zomato_book_res": 0,
        "mezzo_provider": "OTHER",
        "is_book_form_web_view": 0,
        "book_form_web_view_url": "",
        "book_again_url": "",
        "thumb": "",
        "user_rating": {
          "aggregate_rating": "3.7",
          "rating_text": "Good",
          "rating_color": "9ACD32",
          "votes": "39"
        },
        "photos_url": "https://www.zomato.com/los-angeles/fōnuts-carthay/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/los-angeles/fōnuts-carthay/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "include_bogo_offers": true,
        "deeplink": "zomato://restaurant/16834654",
        "is_table_reservation_supported": 0,
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/los-angeles/fōnuts-carthay/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "establishment_types": []
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 16809187
        },
        "apikey": "6f99fd5ecdbd166c72dded453ee5aa69",
        "id": "16809187",
        "name": "California Donut",
        "url": "https://www.zomato.com/los-angeles/california-donut-little-bangladesh?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "3540 W 3rd St, Los Angeles 90020",
          "locality": "West 3rd Street, Little Bangladesh",
          "city": "Los Angeles",
          "city_id": 281,
          "latitude": "34.0687776000",
          "longitude": "-118.2930862000",
          "zipcode": "90020",
          "country_id": 216,
          "locality_verbose": "West 3rd Street, Little Bangladesh, Los Angeles"
        },
        "switch_to_order_menu": 0,
        "cuisines": "Donuts",
        "average_cost_for_two": 0,
        "price_range": 1,
        "currency": "$",
        "offers": [],
        "opentable_support": 0,
        "is_zomato_book_res": 0,
        "mezzo_provider": "OTHER",
        "is_book_form_web_view": 0,
        "book_form_web_view_url": "",
        "book_again_url": "",
        "thumb": "",
        "user_rating": {
          "aggregate_rating": "3.9",
          "rating_text": "Good",
          "rating_color": "9ACD32",
          "votes": "28"
        },
        "photos_url": "https://www.zomato.com/los-angeles/california-donut-little-bangladesh/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/los-angeles/california-donut-little-bangladesh/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "include_bogo_offers": true,
        "deeplink": "zomato://restaurant/16809187",
        "is_table_reservation_supported": 0,
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/los-angeles/california-donut-little-bangladesh/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "establishment_types": []
      }
    }];
}
