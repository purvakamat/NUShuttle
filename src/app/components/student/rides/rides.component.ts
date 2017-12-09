import { Component, OnInit } from '@angular/core';
import {Ride} from "../../../models/ride.model.client";
import { NgxCarousel } from 'ngx-carousel';
import {RideService} from "../../../services/ride.service.client";

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {

  carousel_rides: Ride[];
  rides: Ride[];
  carouselTile: NgxCarousel;

  constructor(private rideService: RideService) {
    this.carousel_rides = [];
  }

  ngOnInit() {
    this.carouselTile = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      animation: 'lazy',
      point: {
        visible: false
      },
      load: 1,
      touch: true,
      easing: 'ease',
      loop: false
    }

    this.rideService.getAllRides(10)
      .subscribe((rideList) => {
        this.rides = rideList;
        for (let i = 0; i < 4; i++) {
          this.carousel_rides.push(this.rides[i]);
        }
      });
  }
}
