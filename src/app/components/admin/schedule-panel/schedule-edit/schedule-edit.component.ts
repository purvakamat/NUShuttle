import { Component, OnInit } from '@angular/core';
import {Ride} from '../../../../models/ride.model.client';
import {RideService} from '../../../../services/ride.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css']
})
export class ScheduleEditComponent implements OnInit {
  userId: String;
  rides: Ride[];
  departureTime: Date;
  _driver: String;
  vehicleNo: String;
  seatCount: Number;
  blockedCount: Number;
  ride: Ride;
  rideId: String;
  constructor(private rideService: RideService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.rideId = params['rid'];
      this.rideService.findRideById(this.rideId)
        .subscribe((ride) => {
          this.ride = ride;
          this.departureTime = this.ride.departure_time;
          this._driver = this.ride._driver;
          this.seatCount = this.ride.seat_count;
          this.blockedCount = this.ride.blocked_seats;
          this.vehicleNo = this.ride.vehicle_no;
        });
      this.rideService.getAllRides(100)
        .subscribe((rides: Ride[]) => {
          this.rides = rides;
          console.log(rides);
        });
    });
  }

  updateRide(departureTime, _driver, vehicleNo, seatCount, blockedCount) {
    const ride = new Ride(this.rideId, departureTime, _driver);
    ride.seat_count = seatCount;
    ride.blocked_seats = blockedCount;
    ride._driver = 'driver_id';
    ride.delay = 0;
    ride.origin = '';
    ride.status = '';
    ride.destination = '';
    ride.vehicle_no = vehicleNo;
    this.rideService.updateRide(this.rideId, ride)
      .subscribe((ride1) => {
        if (ride1) {
          this.router.navigate(['/user', this.userId, 'admin', 'schedules']);
        }
      });
  }

  deleteRide() {
    this.rideService.deleteRide(this.rideId)
      .subscribe((rides) => {
        this.rides = rides;
        this.router.navigate(['/user', this.userId, 'admin', 'schedules']);
      });
  }

}
