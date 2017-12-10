import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Ride} from '../../../models/ride.model.client';
import {RideService} from "../../../services/ride.service.client";

@Component({
  selector: 'app-schedule-panel',
  templateUrl: './schedule-panel.component.html',
  styleUrls: ['./schedule-panel.component.css']
})
export class SchedulePanelComponent implements OnInit {
  userId: String;
  rides: Ride[];
  departureTime: Date;
  _driver: String;
  vehicleNo: String;
  seatCount: Number;
  blockedCount: Number;
  ride: Ride;

  constructor(private rideService: RideService,
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
    });
  }

  fetchRides() {
    return this.rides;
  }

  createRide(departureTime, _driver, vehicleNo, seatCount, blockedCount) {
    const ride = new Ride('', departureTime, _driver, " ");
    ride.seat_count = seatCount;
    ride.blocked_seats = blockedCount;
    ride._driver = 'driver_id';
    ride.delay = 0;
    ride.origin = '';
    ride.status = '';
    ride.destination = '';
    ride.vehicle_no = vehicleNo;
    this.rideService.createRide(ride)
      .subscribe((ride1) => {
        if (ride1) {
          this.router.navigate(['/user', this.userId, 'admin', 'schedules']);
        }
      });
  }
}
