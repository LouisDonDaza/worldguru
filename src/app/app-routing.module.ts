import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherComponent } from './weather/weather/weather.component';
import { NewsComponent } from './news/news/news.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './core/home/home.component';
import { CountryComponent } from './weather/weather/country/country.component';
import { CollectionsComponent } from './restaurants/collections/collections.component';
import { InfoComponent } from './restaurants/info/info.component';
const routes: Routes = [
	{path: '', component: HomeComponent, pathMatch: 'full'},
	{path: 'news', component: NewsComponent},
	{path: 'restaurants', component: RestaurantsComponent, children: [
		{path: 'collections', component: CollectionsComponent},
		{path: 'info', component: InfoComponent}
	]},
	{path: 'weather', component: WeatherComponent, children: [
		{path: '', pathMatch: 'full', component: CountryComponent}
	]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
