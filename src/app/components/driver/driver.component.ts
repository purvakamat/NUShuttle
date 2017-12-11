import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {DriverService} from '../../services/driver.service.client';
import {Ride} from '../../models/ride.model.client';
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-driver',
  templateUrl: 'driver.component.html',
  styleUrls: ['driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(private userService: UserService,
              private driverService: DriverService,
              private sharedService: SharedService) { }

  rides: Ride[];

  ngOnInit() {
    var userId = this.sharedService.user._id;
    this.driverService
      .findRidesByUser(userId)
      .subscribe((rides: Ride[]) => {
        this.rides = rides;
      });
  }
}
