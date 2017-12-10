import {Component, OnInit} from '@angular/core';
import {Ride} from '../../../../models/ride.model.client';
import {RideService} from '../../../../services/ride.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from "../../../../models/user.model.client";
import {DriverService} from "../../../../services/driver.service.client";
import {UserService} from "../../../../services/user.service.client";

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
  driver: User;
  selectedValue: String;

  constructor(private userService: UserService,
              private driverService: DriverService,
              private rideService: RideService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.seatCount = 9;
      this.blockedCount = 0;
      this.origin = '360 Huntington Ave, Boston, MA 02115';
      this.destination = '360 Huntington Ave, Boston, MA 02115';
      this.rideService.getAllRides(100)
        .subscribe((rides: Ride[]) => {
          this.rides = rides;
        });
      this.driverService.findAllDrivers()
        .subscribe((drivers: User[]) => {
          this.drivers = drivers;
        });
    });
  }

  createRide(departureTime, selectedValue, vehicleNo, seatCount, blockedCount, origin, destination) {
    const ride = new Ride('', departureTime, selectedValue, '');
    ride.seat_count = seatCount;
    ride.blocked_seats = blockedCount;
    ride.delay = 0;
    ride.origin = origin;
    ride.destination = destination;
    ride.status = 'On Time';
    ride.vehicle_no = vehicleNo;
    this.userService.findUserById(selectedValue)
      .subscribe((user) => {
        ride.driver_name = user.firstName + ' ' + user.lastName;
        this.rideService.createRide(ride)
          .subscribe((ride1) => {
            if (ride1) {
              this.router.navigate(['/admin-schedules']);
            }
          });
      });

  }

  fetchDrivers() {
    return this.drivers;
  }
}
