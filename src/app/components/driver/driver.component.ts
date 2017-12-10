import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service.client';
import {DriverService} from '../../services/driver.service.client';
import {Ride} from '../../models/ride.model.client';

@Component({
  selector: 'app-driver',
  templateUrl: 'driver.component.html',
  styleUrls: ['driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(private userService: UserService,
              private driverService: DriverService,
              private route: ActivatedRoute) { }

  userId: String;
  rides: Ride[];
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.driverService
        .findRidesByUser(this.userId)
        .subscribe((rides: Ride[]) => {
          console.log(rides);
          this.rides = rides;
        });
    });
  }
}
