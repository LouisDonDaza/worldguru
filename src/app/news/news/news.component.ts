import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NewsService } from './news.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, AfterContentInit {
  country: string = "us";
  countryName: string = "USA";
  category: string = "general";
  numOfNewsShown: number = 10;
  editMode: boolean = true;
  filteredCountries: string = "";
  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params)=>{
        this.country = params['code'] || "us";
        this.countryName = params['country'] || "USA";
        this.category = params['category'] || "general";
      }
      );
  }
  ngAfterContentInit(){
    this.setupNews();
  }
  showMoreNews(){
  		this.numOfNewsShown += 4;
  }
  showLessNews(){
  		this.numOfNewsShown -= 4;
  }
  selectCountry(choice){
    this.country = choice.code;
    this.countryName = choice.name;
    this.setupNews();
  }
  selectCategory(choice){
    this.category = choice;
    this.setupNews();
  }
  setupNews(){
    this.newsService.getLatestNews(this.country, this.category).subscribe(
      (response)=>{
        this.latestNews = response['articles'];
      }
      );
  }	
  latestNews: Object[] = [
      ];
  categories: string[] =['business', 'entertainment', 'health', 'science', 'sports', 'technology'];
  countries: Object[] = [
   {name: "Argentina", url: "https://cdn.airvisual.net/flags/argentina.jpg", code: 'ar'},
   {name: "Australia", url: "https://cdn.airvisual.net/flags/australia.jpg", code: 'au'},
   {name: "Austria", url: "https://cdn.airvisual.net/flags/austria.jpg", code: 'at'},
   {name: "Belgium", url: "https://cdn.airvisual.net/flags/belgium.jpg", code: 'be'},
   {name: "Brazil", url: "https://cdn.airvisual.net/flags/brazil.jpg", code: 'br'},
   {name: "Bulgaria", url: "https://cdn.airvisual.net/flags/bulgaria.jpg", code: 'bg'},
   {name: "Canada", url: "https://cdn.airvisual.net/flags/canada.jpg", code: 'ca'},
   {name: "China", url: "https://cdn.airvisual.net/flags/china.jpg", code: 'cn'},
   {name: "Colombia", url: "https://cdn.airvisual.net/flags/colombia.jpg", code:'co'},
   {name: "Czech Republic", url: "https://cdn.airvisual.net/flags/czech-republic.jpg", code: 'cz'},
   {name: "France", url: "https://cdn.airvisual.net/flags/france.jpg", code: 'fr'},
   {name: "Germany", url: "https://cdn.airvisual.net/flags/germany.jpg", code: 'de'},
   {name: "Hong Kong", url: "https://cdn.airvisual.net/flags/hong-kong.jpg", code: 'hk'},
   {name: "Hungary", url: "https://cdn.airvisual.net/flags/hungary.jpg", code: 'hu'},
   {name: "India", url: "https://cdn.airvisual.net/flags/india.jpg", code: 'in'},
   {name: "Indonesia", url: "https://cdn.airvisual.net/flags/indonesia.jpg", code: 'id'},
   {name: "Ireland", url: "https://cdn.airvisual.net/flags/ireland.jpg", code: 'ie'},
   {name: "Israel", url: "https://cdn.airvisual.net/flags/israel.jpg", code:'il'},
   {name: "Italy", url: "https://cdn.airvisual.net/flags/italy.jpg", code:'it'},
   {name: "Japan", url: "https://cdn.airvisual.net/flags/japan.jpg", code: 'jp'},
   {name: "Latvia", url: "https://cdn.airvisual.net/flags/latvia.jpg", code: 'lv'},
   {name: "Lithuania", url: "https://cdn.airvisual.net/flags/lithuania.jpg", code: 'lt'},
   {name: "Malaysia", url: "https://cdn.airvisual.net/flags/malaysia.jpg", code: 'my'},
   {name: "Mexico", url: "https://cdn.airvisual.net/flags/mexico.jpg", code: 'mx'},
   {name: "Netherlands", url: "https://cdn.airvisual.net/flags/netherlands.jpg", code:'nl'},
   {name: "Nigeria", url: "https://cdn.airvisual.net/flags/nigeria.jpg", code:'ng'},
   {name: "Norway", url: "https://cdn.airvisual.net/flags/norway.jpg", code:'no'},
   {name: "Philippines", url: "https://cdn.airvisual.net/flags/philippines.jpg", code: 'ph'},
   {name: "Poland", url: "https://cdn.airvisual.net/flags/poland.jpg", code: 'pl'},
   {name: "Portugal", url: "https://cdn.airvisual.net/flags/portugal.jpg", code: 'pt'},
   {name: "Romania", url: "https://cdn.airvisual.net/flags/romania.jpg", code: 'ro'},
   {name: "Russia", url: "https://cdn.airvisual.net/flags/russia.jpg", code: 'ru'},
   {name: "Serbia", url: "https://cdn.airvisual.net/flags/serbia.jpg", code: 'rs'},
   {name: "Singapore", url: "https://cdn.airvisual.net/flags/singapore.jpg", code: 'sg'},
   {name: "Slovakia", url: "https://cdn.airvisual.net/flags/slovakia.jpg", code: 'sk'},
   {name: "Slovenia", url: "https://cdn.airvisual.net/flags/slovenia.jpg", code: 'si'},
   {name: "South Africa", url: "https://cdn.airvisual.net/flags/south-africa.jpg", code:'za'},
   {name: "South Korea", url: "https://cdn.airvisual.net/flags/south-korea.jpg", code: 'kr'},
   {name: "Sweden", url: "https://cdn.airvisual.net/flags/sweden.jpg", code: 'se'},
   {name: "Switzerland", url: "https://cdn.airvisual.net/flags/switzerland.jpg", code: 'ch'},
   {name: "Taiwan", url: "https://cdn.airvisual.net/flags/taiwan.jpg", code: 'tw'},
   {name: "Thailand", url: "https://cdn.airvisual.net/flags/thailand.jpg", code:'th'},
   {name: "Turkey", url: "https://cdn.airvisual.net/flags/turkey.jpg", code: 'tr'},
   {name: "USA", url: "https://cdn.airvisual.net/flags/usa.jpg", code: 'us'},
   {name: "Ukraine", url: "https://cdn.airvisual.net/flags/ukraine.jpg", code: 'ua'},
   {name: "United Arab Emirates", url: "https://cdn.airvisual.net/flags/united-arab-emirates.jpg", code: 'ae'},
   {name: "United Kingdom", url: "https://cdn.airvisual.net/flags/uk.jpg", code: 'gb'}
  ];
}
