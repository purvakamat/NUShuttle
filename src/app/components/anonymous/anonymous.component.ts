import { Component, OnInit } from '@angular/core';
import {RideService} from '../../services/ride.service.client';
import {Ride} from '../../models/ride.model.client';

@Component({
  selector: 'app-anonymous',
  templateUrl: './anonymous.component.html',
  styleUrls: ['./anonymous.component.css']
})
export class AnonymousComponent implements OnInit {
  rides: Ride[];
  constructor(private rideService: RideService) { }

  ngOnInit() {
    this.rideService.getAllRides(10)
      .subscribe((rideList) => {
        this.rides = rideList;
      });
  }

}
