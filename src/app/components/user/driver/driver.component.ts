import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Ride} from '../../../models/ride.model.client';
import {DriverService} from '../../../services/driver.service.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
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
          const newRide = new Ride('123', new Date(new Date().getTime() - 2000000), '200');
          const newRide1 = new Ride('456', new Date() , '100');
          this.rides = rides;
          this.rides.push(newRide);
          this.rides.push(newRide1);
        });
    });
  }
}
