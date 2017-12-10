import {Component, OnInit} from '@angular/core';
import {Ride} from '../../../../models/ride.model.client';
import {RideService} from '../../../../services/ride.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from "../../../../models/user.model.client";
import {DriverService} from "../../../../services/driver.service.client";

@Component({
  selector: 'app-schedule-new',
  templateUrl: './schedule-new.component.html',
  styleUrls: ['./schedule-new.component.css']
})
export class ScheduleNewComponent implements OnInit {
  origin: String;
  destination: String;
  userId: String;
  rides: Ride[];
  departureTime: Date;
  _driver: String;
  vehicleNo: String;
  seatCount: Number;
  blockedCount: Number;
  ride: Ride;
  drivers: User[];

  constructor(private driverService: DriverService,
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
          console.log(rides);
        });
      this.driverService.findAllDrivers()
        .subscribe((drivers: User[]) => {
          this.drivers = drivers;
        });
    });
  }

  createRide(departureTime, _driver, vehicleNo, seatCount, blockedCount, origin, destination) {
    const ride = new Ride('', departureTime, _driver);
    ride.seat_count = seatCount;
    ride.blocked_seats = blockedCount;
    ride._driver = 'driver_id';
    ride.delay = 0;
    ride.origin = origin;
    ride.status = 'On Time';
    ride.destination = destination;
    ride.vehicle_no = vehicleNo;
    this.rideService.createRide(ride)
      .subscribe((ride1) => {
        if (ride1) {
          this.router.navigate(['/user', this.userId, 'admin', 'schedules']);
        }
      });
  }

  fetchDrivers() {
    return this.drivers;
  }
}
