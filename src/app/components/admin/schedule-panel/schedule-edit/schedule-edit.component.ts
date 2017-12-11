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

  rides: Ride[];
  departureTime: Date;
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
  errorMsg: String;
  errorFlag: boolean;

  constructor(private driverService: DriverService,
              private userService: UserService,
              private rideService: RideService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
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
    if (this.validateVehicleNo(vehicleNo) === false) {
      this.errorMsg = 'Vehicle number cannot be empty!';
      this.errorFlag = true;
      return;
    }
    if (this.validateSelectedValue(selectedValue) === false) {
      this.errorMsg = 'Please select a driver!';
      this.errorFlag = true;
      return;
    }
    if (this.validateDepartureTime(departureTime) === false) {
      this.errorMsg = 'Please enter departure time!';
      this.errorFlag = true;
      return;
    }
    if (this.validateSeatCount(seatCount) === false) {
      this.errorMsg = 'Seat Number has to be from 1 to 10!';
      this.errorFlag = true;
      return;
    }
    if (this.validateBlockedCount(blockedCount, seatCount) === false) {
      this.errorMsg = 'Please enter valid number for Blocked seats!';
      this.errorFlag = true;
      return;
    }
    console.log(departureTime);
    console.log(this.departureTime);
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
            this.router.navigate(['/admin-schedules']);
          });
      });
  }

  deleteRide() {
    this.rideService.deleteRide(this.rideId)
      .subscribe((rides) => {
        this.rides = rides;
        this.router.navigate(['/admin-schedules']);
      });
  }

  fetchDrivers() {
    return this.drivers;
  }

  validateVehicleNo(vehicleNo) {
    if ((vehicleNo === '') || (vehicleNo === null) || (vehicleNo === undefined)) {
      return false;
    } else {
      return true;
    }
  }

  validateSelectedValue(selectedValue) {
    if ((selectedValue === '') || (selectedValue === null) || (selectedValue === undefined)) {
      return false;
    } else {
      return true;
    }
  }

  validateDepartureTime(departureTime) {
    if ((departureTime === '') || (departureTime === null) || (departureTime === undefined)) {
      return false;
    } else {
      return true;
    }
  }

  validateSeatCount(seatCount) {
    if ((seatCount < 1) || (seatCount > 10)) {
      return false;
    } else {
      return true;
    }
  }

  validateBlockedCount(blockedCount, seatCount) {
    if ((blockedCount > seatCount) || (blockedCount < 0)) {
      return false;
    } else {
      return true;
    }
  }

}
