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

  rides: Ride[];
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
      this.rideService.getAllRides(100)
        .subscribe((rides: Ride[]) => {
          this.rides = rides;
        });
    });
  }

  fetchRides() {
    return this.rides;
  }
}
