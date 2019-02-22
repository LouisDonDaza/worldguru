import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
  	//this.router.navigate(['./restaurants/collections']);
  }
}
