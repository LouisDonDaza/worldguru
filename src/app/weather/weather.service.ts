import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class WeatherService {
	constructor(private httpClient: HttpClient){}
	key: string = "sY9uqr9pEPukpHWWS";
	stateOptions = new Subject<Object[]>();
  	stateSelected: Object[];
  	getStatefromCountry(country:string){
  		return this.httpClient.get(`https://api.airvisual.com/v2/states?country=${country}&key=${this.key}`);
  	}
  	getCityfromState(state: string, country: string){
  		return this.httpClient.get(`https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${this.key}`);
  	}
  	getData(city: string, state: string, country: string){
  		return this.httpClient.get(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${this.key}`);
  	}
  	countries: Object[] = [
    {name: "Afghanistan", url: "https://cdn.airvisual.net/flags/afghanistan.jpg"},
	{name: "Andorra", url: "https://cdn.airvisual.net/flags/andorra.jpg"},
	{name: "Angola", url: "https://cdn.airvisual.net/flags/angola.jpg"},
	{name: "Argentina", url: "https://cdn.airvisual.net/flags/argentina.jpg"},
	{name: "Armenia", url: "https://cdn.airvisual.net/flags/armenia.jpg"},
	{name: "Australia", url: "https://cdn.airvisual.net/flags/australia.jpg"},
	{name: "Austria", url: "https://cdn.airvisual.net/flags/austria.jpg"},
	{name: "Bahamas", url: "https://cdn.airvisual.net/flags/bahamas.jpg"},
	{name: "Bahrain", url: "https://cdn.airvisual.net/flags/bahrain.jpg"},
	{name: "Bangladesh", url: "https://cdn.airvisual.net/flags/bangladesh.jpg"},
	{name: "Belgium", url: "https://cdn.airvisual.net/flags/belgium.jpg"},
	{name: "Benin", url: "https://cdn.airvisual.net/flags/benin.jpg"},
	{name: "Bonaire, Saint Eustatius and Saba", url: "https://cdn.airvisual.net/flags/bonaire-saint-eustatius-and-saba.jpg"},
	{name: "Bosnia Herzegovina", url: "https://cdn.airvisual.net/flags/bosnia-herzegovina.jpg"},
	{name: "Brazil", url: "https://cdn.airvisual.net/flags/brazil.jpg"},
	{name: "Brunei", url: "https://cdn.airvisual.net/flags/brunei.jpg"},
	{name: "Bulgaria", url: "https://cdn.airvisual.net/flags/bulgaria.jpg"},
	{name: "Cambodia", url: "https://cdn.airvisual.net/flags/cambodia.jpg"},
	{name: "Canada", url: "https://cdn.airvisual.net/flags/canada.jpg"},
	{name: "Chile", url: "https://cdn.airvisual.net/flags/chile.jpg"},
	{name: "China", url: "https://cdn.airvisual.net/flags/china.jpg"},
	{name: "Colombia", url: "https://cdn.airvisual.net/flags/colombia.jpg"},
	{name: "Costa Rica", url: "https://cdn.airvisual.net/flags/costa-rica.jpg"},
	{name: "Croatia", url: "https://cdn.airvisual.net/flags/croatia.jpg"},
	{name: "Curacao", url: "https://cdn.airvisual.net/flags/curacao.jpg"},
	{name: "Cyprus", url: "https://cdn.airvisual.net/flags/cyprus.jpg"},
	{name: "Czech Republic", url: "https://cdn.airvisual.net/flags/czech-republic.jpg"},
	{name: "Democratic Republic of the Congo", url: "https://cdn.airvisual.net/flags/democratic-republic-of-the-congo.jpg"},
	{name: "Denmark", url: "https://cdn.airvisual.net/flags/denmark.jpg"},
	{name: "Ecuador", url: "https://cdn.airvisual.net/flags/ecuador.jpg"},
	{name: "Ethiopia", url: "https://cdn.airvisual.net/flags/ethiopia.jpg"},
	{name: "Finland", url: "https://cdn.airvisual.net/flags/finland.jpg"},
	{name: "France", url: "https://cdn.airvisual.net/flags/france.jpg"},
	{name: "Germany", url: "https://cdn.airvisual.net/flags/germany.jpg"},
	{name: "Ghana", url: "https://cdn.airvisual.net/flags/ghana.jpg"},
	{name: "Guatemala", url: "https://cdn.airvisual.net/flags/guatemala.jpg"},
	{name: "Hong Kong", url: "https://cdn.airvisual.net/flags/hong-kong.jpg"},
	{name: "Hungary", url: "https://cdn.airvisual.net/flags/hungary.jpg"},
	{name: "India", url: "https://cdn.airvisual.net/flags/india.jpg"},
	{name: "Indonesia", url: "https://cdn.airvisual.net/flags/indonesia.jpg"},
	{name: "Iran", url: "https://cdn.airvisual.net/flags/iran.jpg"},
	{name: "Ireland", url: "https://cdn.airvisual.net/flags/ireland.jpg"},
	{name: "Israel", url: "https://cdn.airvisual.net/flags/israel.jpg"},
	{name: "Italy", url: "https://cdn.airvisual.net/flags/italy.jpg"},
	{name: "Ivory Coast", url: "https://cdn.airvisual.net/flags/ivory-coast.jpg"},
	{name: "Jamaica", url: "https://cdn.airvisual.net/flags/jamaica.jpg"},
	{name: "Japan", url: "https://cdn.airvisual.net/flags/japan.jpg"},
	{name: "Kazakhstan", url: "https://cdn.airvisual.net/flags/kazakhstan.jpg"},
	{name: "Kosovo", url: "https://cdn.airvisual.net/flags/kosovo.jpg"},
	{name: "Kuwait", url: "https://cdn.airvisual.net/flags/kuwait.jpg"},
	{name: "Kyrgyzstan", url: "https://cdn.airvisual.net/flags/kyrgyzstan.jpg"},
	{name: "Latvia", url: "https://cdn.airvisual.net/flags/latvia.jpg"},
	{name: "Lithuania", url: "https://cdn.airvisual.net/flags/lithuania.jpg"},
	{name: "Luxembourg", url: "https://cdn.airvisual.net/flags/luxembourg.jpg"},
	{name: "Macao", url: "https://cdn.airvisual.net/flags/macao.jpg"},
	{name: "Macedonia", url: "https://cdn.airvisual.net/flags/macedonia.jpg"},
	{name: "Malaysia", url: "https://cdn.airvisual.net/flags/malaysia.jpg"},
	{name: "Malta", url: "https://cdn.airvisual.net/flags/malta.jpg"},
	{name: "Mexico", url: "https://cdn.airvisual.net/flags/mexico.jpg"},
	{name: "Mongolia", url: "https://cdn.airvisual.net/flags/mongolia.jpg"},
	{name: "Myanmar", url: "https://cdn.airvisual.net/flags/myanmar.jpg"},
	{name: "Nepal", url: "https://cdn.airvisual.net/flags/nepal.jpg"},
	{name: "Netherlands", url: "https://cdn.airvisual.net/flags/netherlands.jpg"},
	{name: "New Zealand", url: "https://cdn.airvisual.net/flags/new-zealand.jpg"},
	{name: "Nigeria", url: "https://cdn.airvisual.net/flags/nigeria.jpg"},
	{name: "Norway", url: "https://cdn.airvisual.net/flags/norway.jpg"},
	{name: "Pakistan", url: "https://cdn.airvisual.net/flags/pakistan.jpg"},
	{name: "Peru", url: "https://cdn.airvisual.net/flags/peru.jpg"},
	{name: "Philippines", url: "https://cdn.airvisual.net/flags/philippines.jpg"},
	{name: "Poland", url: "https://cdn.airvisual.net/flags/poland.jpg"},
	{name: "Portugal", url: "https://cdn.airvisual.net/flags/portugal.jpg"},
	{name: "Puerto Rico", url: "https://cdn.airvisual.net/flags/puerto-rico.jpg"},
	{name: "Romania", url: "https://cdn.airvisual.net/flags/romania.jpg"},
	{name: "Russia", url: "https://cdn.airvisual.net/flags/russia.jpg"},
	{name: "Serbia", url: "https://cdn.airvisual.net/flags/serbia.jpg"},
	{name: "Singapore", url: "https://cdn.airvisual.net/flags/singapore.jpg"},
	{name: "Slovakia", url: "https://cdn.airvisual.net/flags/slovakia.jpg"},
	{name: "Slovenia", url: "https://cdn.airvisual.net/flags/slovenia.jpg"},
	{name: "South Africa", url: "https://cdn.airvisual.net/flags/south-africa.jpg"},
	{name: "South Korea", url: "https://cdn.airvisual.net/flags/south-korea.jpg"},
	{name: "Spain", url: "https://cdn.airvisual.net/flags/spain.jpg"},
	{name: "Sri Lanka", url: "https://cdn.airvisual.net/flags/sri-lanka.jpg"},
	{name: "Sweden", url: "https://cdn.airvisual.net/flags/sweden.jpg"},
	{name: "Switzerland", url: "https://cdn.airvisual.net/flags/switzerland.jpg"},
	{name: "Syria", url: "https://cdn.airvisual.net/flags/syria.jpg"},
	{name: "Taiwan", url: "https://cdn.airvisual.net/flags/taiwan.jpg"},
	{name: "Thailand", url: "https://cdn.airvisual.net/flags/thailand.jpg"},
	{name: "Turkey", url: "https://cdn.airvisual.net/flags/turkey.jpg"},
	{name: "U.S. Virgin Islands", url: "https://cdn.airvisual.net/flags/u-s-virgin-islands.jpg"},
	{name: "USA", url: "https://cdn.airvisual.net/flags/usa.jpg"},
	{name: "Uganda", url: "https://cdn.airvisual.net/flags/uganda.jpg"},
	{name: "Ukraine", url: "https://cdn.airvisual.net/flags/ukraine.jpg"},
	{name: "United Arab Emirates", url: "https://cdn.airvisual.net/flags/united-arab-emirates.jpg"},
	{name: "United Kingdom", url: "https://cdn.airvisual.net/flags/uk.jpg"},
	{name: "Uzbekistan", url: "https://cdn.airvisual.net/flags/uzbekistan.jpg"},
	{name: "Vietnam", url: "https://cdn.airvisual.net/flags/vietnam.jpg"}
  ];
}
/*
   src="https://cdn.airvisual.net/flags/india.jpg" alt="Kolkata, India"
*/
