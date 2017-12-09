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

  rides: Ride[];
  carouselTile: NgxCarousel;

  constructor(private rideService: RideService) { }

  ngOnInit() {
    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 2,
      animation: 'lazy',
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      easing: 'ease',
      loop: false
    }

    this.rideService.getAllRides(10)
      .subscribe((rideList) => {
        this.rides = rideList;
      });
  }

}
