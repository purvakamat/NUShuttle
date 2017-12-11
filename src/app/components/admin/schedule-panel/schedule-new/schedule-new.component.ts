import {Component, OnInit} from '@angular/core';
import {Ride} from '../../../../models/ride.model.client';
import {RideService} from '../../../../services/ride.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../models/user.model.client';
import {DriverService} from '../../../../services/driver.service.client';
import {UserService} from '../../../../services/user.service.client';

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
  errorFlag: boolean;
  errorMsg: String;

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

  fetchDrivers() {
    return this.drivers;
  }
}
