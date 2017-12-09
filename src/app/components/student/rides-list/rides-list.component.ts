import { Component, OnInit } from '@angular/core';
import {Ride} from "../../../models/ride.model.client";
import {RideService} from "../../../services/ride.service.client";

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html',
  styleUrls: ['./rides-list.component.css']
})
export class RidesListComponent implements OnInit {

  rides: Ride[];

  constructor(private rideService: RideService) { }

  ngOnInit() {
    this.rideService.getAllRides(10)
      .subscribe((rideList) => {
        this.rides = rideList;
      });
  }

}
