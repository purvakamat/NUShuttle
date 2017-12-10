import {Component, OnInit} from '@angular/core';
import {Ride} from '../../../../models/ride.model.client';
import {RideService} from '../../../../services/ride.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../../../../services/user.service.client";
import {User} from "../../../../models/user.model.client";

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
  driver: User;

  constructor(private userService: UserService,
              private rideService: RideService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.rideService.getAllRides(100)
        .subscribe((rides: Ride[]) => {
          this.rides = rides;
        });
    });
  }

  fetchRides() {
    return this.rides;
  }

/*  fetchDriverName(ride: Ride) {
      console.log('I am being called');
      this._driver = ride._driver;
      this.userService.findUserById(this._driver)
        .subscribe((user) => {
        this.driver = user;
        this.firstName = this.driver.firstName;
        });
    }*/
}
