import { Component, OnInit } from '@angular/core';
import {Ride} from '../../../models/ride.model.client';
import {NgxCarousel, NgxCarouselStore} from 'ngx-carousel';
import {RideService} from '../../../services/ride.service.client';
import {QueueSlot} from '../../../models/queueslot.model.client';
import {QueueSlotService} from '../../../services/queueslot.service.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {

  carousel_rides: Ride[];
  rides: Ride[];
  queue_slots: any[];
  carouselTile: NgxCarousel;
  currentRide: number;

  constructor(private rideService: RideService,
              private queueService: QueueSlotService,
              private router: Router,
              private sharedService: SharedService) {
    this.carousel_rides = [];
    this.queue_slots = [];
  }

  ngOnInit() {
    this.sharedService.selectedRide = undefined;

    this.carouselTile = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      animation: 'lazy',
      point: {
        visible: false
      },
      load: 1,
      touch: true,
      easing: 'ease',
      loop: false
    }

    this.rideService.getAllRides(10)
      .subscribe((rideList) => {
        this.rides = rideList;

        var count = Math.min(4, rideList.length);
        for (let i = 0; i < count; i++) {
          this.carousel_rides.push(this.rides[i]);
        }

        this.currentRide = 0;
        this.fetchQueue();
      });
  }

  nextRide(data: NgxCarouselStore) {
    this.currentRide = data.currentSlide;
    this.fetchQueue();
  }

  fetchQueue(){
    if(this.carousel_rides.length == 0)
      return;
    var rideId = this.carousel_rides[this.currentRide]._id;
    var seatCount = this.carousel_rides[this.currentRide].seat_count;

    this.queue_slots = [];

    this.queueService.findQueueSlotsByRideId(rideId)
      .subscribe((queueSlots) => {
        var occupied = queueSlots.length;
        for(var i=0; i<seatCount; i++){
          if(i < occupied)
            this.queue_slots.push({'occupied': true});
          else
            this.queue_slots.push({'occupied': false});
        }
      });
  }

  addToQueue(){
    this.sharedService.selectedRide = this.carousel_rides[this.currentRide]._id;
    this.router.navigate(['/myride']);
  }
}
