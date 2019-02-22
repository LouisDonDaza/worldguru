import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { WeatherComponent } from './weather/weather/weather.component';
import { NewsComponent } from './news/news/news.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './core/home/home.component';
import { CountryComponent } from './weather/weather/country/country.component';
import {WeatherService} from './weather/weather.service';
import { FilterPipe } from './weather/filter.pipe';
import {NewsService} from './news/news/news.service';
import { CollectionsComponent } from './restaurants/collections/collections.component';
import { InfoComponent } from './restaurants/info/info.component';
import {RestaurantsService} from './restaurants/restaurants.service';
import { FooterComponent } from './core/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherComponent,
    NewsComponent,
    RestaurantsComponent,
    HomeComponent,
    CountryComponent,
    FilterPipe,
    CollectionsComponent,
    InfoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService, NewsService, RestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
