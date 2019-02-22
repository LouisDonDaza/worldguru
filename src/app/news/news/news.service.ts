import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class NewsService {
   constructor(private httpClient: HttpClient){}
   getLatestNews(code: string, category: string){
      return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=${code}&apiKey=6bd56e83c0ea461cb628d4552ec82a57&category=${category}`)
   }
}
/*
egypt, cuba, greece, morocco - ma,saudi arabia, venezuela
-----------------------------------------------------
Get cities
"location_suggestions": [
    {
      "id": 63,
      "name": "Metro Manila",
      "country_id": 162,
      "country_name": "Philippines",
      "country_flag_url": "https://b.zmtcdn.com/images/countries/flags/country_162.png",
      "should_experiment_with": 0,
      "discovery_enabled": 0,
      "has_new_ad_format": 1,
      "is_state": 0,
      "state_id": 0,
      "state_name": "",
      "state_code": ""
    },
    {
      "id": 4219,
      "name": "Manila, AR",
      "country_id": 216,
      "country_name": "United States",
      "country_flag_url": "https://b.zmtcdn.com/images/countries/flags/country_216.png",
      "should_experiment_with": 0,
      "discovery_enabled": 0,
      "has_new_ad_format": 0,
      "is_state": 0,
      "state_id": 71,
      "state_name": "Arkansas",
      "state_code": "AR"
    }
  ],
  "status": "success",
  "has_more": 0,
  "has_total": 0
------------------------------------------
*/