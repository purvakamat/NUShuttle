import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import { DatePipe } from '@angular/common';
import {RideService} from '../../../services/ride.service.client';
import {Ride} from '../../../models/ride.model.client';
import {QueueSlotService} from "../../../services/queueslot.service.client";
import {QueueSlot} from "../../../models/queueslot.model.client";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(private userService: UserService,
              private rideService: RideService,
              private route: ActivatedRoute,
              private router: Router) { }

  userId: String;
  rideId: String;
  ride: Ride;
  rideTime: Date;
  user: User;
  rides = [
    {'_id': '123', 'time': Date.now() - 100000},
    {'_id': '234', 'time': Date.now() - 200000},
    {'_id': '345', 'time': Date.now() - 300000},
    {'_id': '456', 'time': Date.now() - 400000}
  ]
  ngOnInit() {
    this.route.params.subscribe(params =>  {
      this.userId = params['uid'];
      this.userService.findUserById(this.userId)
        .subscribe((user: User) => {
          this.user = user;
        });
    });
  }
  findRideById(_id: String) {
      this.rideService.findRideById(_id)
        .subscribe((ride: Ride) => {
          this.ride = ride;
        });
  }

  createRide() {
    const newRide = new Ride('', new Date(), this.user);
    const newStudent = new User('', 'nisarg', '123', 'abc',
      'STUDENT', '360 Huntington Avenue, Boston, MA, United States', '360 Huntington Avenue, Boston, MA, United States');
    const newQueueSlot = new QueueSlot('', newStudent, this.rideId);
    const arr = [];
    arr.push(newQueueSlot);
    newRide.queue = arr;
    this.rideService.createRide(newRide).subscribe((ride: Ride) => {
      this.ride = ride;
    });
  }

}
