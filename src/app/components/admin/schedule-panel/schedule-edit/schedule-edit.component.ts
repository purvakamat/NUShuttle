import {Component, OnInit} from '@angular/core';
import {Ride} from '../../../../models/ride.model.client';
import {RideService} from '../../../../services/ride.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../models/user.model.client';
import {DriverService} from '../../../../services/driver.service.client';
import {UserService} from '../../../../services/user.service.client';
import {connectableObservableDescriptor} from 'rxjs/observable/ConnectableObservable';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css']
})
export class ScheduleEditComponent implements OnInit {
  userId: String;
  rides: Ride[];
  departureTime: Date;
  driverName: String;
  vehicleNo: String;
  seatCount: Number;
  blockedCount: Number;
  ride: Ride;
  rideId: String;
  origin: String;
  destination: String;
  drivers: User[];
  driver: User;
  _driver: String;
  selectedValue: String;

  constructor(private driverService: DriverService,
              private userService: UserService,
              private rideService: RideService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.rideId = params['rid'];
      this.rideService.findRideById(this.rideId)
        .subscribe((ride) => {
          this.ride = ride;
          this.departureTime = this.ride.departure_time;
          this._driver = this.ride._driver;
          this.selectedValue = this.ride._driver;
          this.seatCount = this.ride.seat_count;
          this.blockedCount = this.ride.blocked_seats;
          this.vehicleNo = this.ride.vehicle_no;
          this.origin = this.ride.origin;
          this.destination = this.ride.destination;
        });
      this.rideService.getAllRides(100)
        .subscribe((rides: Ride[]) => {
          this.rides = rides;
          console.log(rides);
        });
      this.userService.findUserById(this._driver)
        .subscribe((user) => {
          this.driver = user;
        });
      this.driverService.findAllDrivers()
        .subscribe((drivers: User[]) => {
          this.drivers = drivers;
        });
    });
  }

  updateRide(departureTime, selectedValue, vehicleNo, seatCount, blockedCount, origin, destination) {
    const ride = new Ride(this.rideId, departureTime, selectedValue, '');
    ride.seat_count = seatCount;
    ride.blocked_seats = blockedCount;
    ride.delay = 0;
    ride.origin = origin;
    ride.status = 'On Time';
    ride.destination = destination;
    ride.vehicle_no = vehicleNo;
    this.userService.findUserById(selectedValue)
      .subscribe((user) => {
        if (user) {
          ride.driver_name = user.firstName + ' ' + user.lastName;
        }
        this.rideService.updateRide(this.rideId, ride)
          .subscribe((ride1) => {
            this.router.navigate(['/user', this.userId, 'admin', 'schedules']);
          });
      });
  }

  deleteRide() {
    this.rideService.deleteRide(this.rideId)
      .subscribe((rides) => {
        this.rides = rides;
        this.router.navigate(['/user', this.userId, 'admin', 'schedules']);
      });
  }

  fetchDrivers() {
    return this.drivers;
  }

}
