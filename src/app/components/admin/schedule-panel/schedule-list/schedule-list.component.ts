import { Component, OnInit } from '@angular/core';
import {Ride} from '../../../../models/ride.model.client';
import {RideService} from '../../../../services/ride.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../../../../services/user.service.client";

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
  userId: String;
  rides: Ride[];
  departureTime: Date;
  _driver: String;
  vehicleNo: String;
  seatCount: Number;
  blockedCount: Number;
  ride: Ride;
  rideId: String;
  firstName: String;
  lastName: String;

  constructor(private userService: UserService,
              private rideService: RideService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.rideService.getAllRides(100)
        .subscribe((rides: Ride[]) => {
          this.rides = rides;
          console.log(rides);
        });
    });
  }

  fetchRides() {
    return this.rides;
  }
  fetchDriverName(ride: Ride) {
    this._driver = ride._driver;
    this.userService.findUserById(this._driver)
      .subscribe((user) => {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        return (this.firstName);
      });
  }
}
