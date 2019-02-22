import {HttpClient, HttpHeaders}from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class RestaurantsService {
	constructor(private httpClient: HttpClient){}
	citySelected: Object = {};
	getCitySuggestions(cityQuery: string){
		return this.httpClient.get(`https://developers.zomato.com/api/v2.1/cities?q=${cityQuery}`, {
			headers: new HttpHeaders().set('user-key', '6f99fd5ecdbd166c72dded453ee5aa69')
		})
	}
	getCityCollections(cityID: number){
		return this.httpClient.get(`https://developers.zomato.com/api/v2.1/collections?city_id=${cityID}`, {
			headers: new HttpHeaders().set('user-key', '6f99fd5ecdbd166c72dded453ee5aa69')
		})
	}
	getRestaurants(collectionID: string, cityID: string){
		return this.httpClient.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityID}&entity_type=city&collection_id=${collectionID}&sort=rating`, {
			headers: new HttpHeaders().set('user-key', '6f99fd5ecdbd166c72dded453ee5aa69')
		})
	}
	getMoreRestaurants(collectionID: string, cityID: string, start: number){
		return this.httpClient.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityID}&entity_type=city&collection_id=${collectionID}&sort=rating&start=${start}`, {
			headers: new HttpHeaders().set('user-key', '6f99fd5ecdbd166c72dded453ee5aa69')
		})
	}
}