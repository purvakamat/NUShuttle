import { Component, OnInit } from '@angular/core';
import {Ride} from '../../../../models/ride.model.client';
import {RideService} from '../../../../services/ride.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from '../../../../services/home.service.client';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
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
              private homeService: HomeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.homeService.findAllRides()
        .subscribe((rides: Ride[]) => {
          this.rides = rides;
          console.log(rides);
        });
    });
  }

  fetchRides() {
    return this.rides;
  }
}
