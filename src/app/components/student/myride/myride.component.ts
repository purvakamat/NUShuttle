import {Component, OnInit, ElementRef, ViewChild, NgZone} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MapsAPILoader} from "@agm/core";
import {} from '@types/googlemaps';
import {Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service";
import {QueueSlotService} from "../../../services/queueslot.service.client";
import {QueueSlot} from "../../../models/queueslot.model.client";
import {UserService} from "../../../services/user.service.client";
import {isUndefined} from "util";
import {RideService} from "../../../services/ride.service.client";
import {Ride} from "../../../models/ride.model.client";
import {User} from "../../../models/user.model.client";

@Component({
  selector: 'app-myride',
  templateUrl: './myride.component.html',
  styleUrls: ['./myride.component.css']
})

export class MyrideComponent implements OnInit {

  latitude: Number;
  longitude: Number;
  searchControl: FormControl;
  zoom: number;
  iconUrl: any;
  dropOff: String;
  queueSlot: QueueSlot;
  showRideDetails: boolean;
  ride: Ride;
  noRides: boolean;

  // for binding
  departure_time: Date = new Date();
  vehicle_no: String = "";
  driver_name: String = "";
  pick_up: String = "";

  @ViewChild('search')
  searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              private router: Router,
              private sharedService: SharedService,
              private queueService: QueueSlotService,
              private userService: UserService,
              private rideService: RideService) {
    this.latitude = 42.3404957;
    this.longitude = -71.0878975;
    this.iconUrl = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
    this.showRideDetails = false;
    this.noRides = true;
  }

  ngOnInit() {

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.dropOff = place.formatted_address;
          this.zoom = 12;
        });
      });
    });

    // to show a blank UI when no ride is selected
    if((this.sharedService.user != undefined && this.sharedService.user._queue != undefined)
        && this.sharedService.selectedRide != undefined){
      this.noRides = false;
    }
    else {
      // checks if ride is already selected and fetches details for display
      if (!isUndefined(this.sharedService.user)
        && !isUndefined(this.sharedService.user._queue)) {

        this.showRideDetails = true;

        this.queueService.findQueueSlotById(this.sharedService.user._queue)
          .subscribe((slot: QueueSlot) => {
            this.queueSlot = slot;
            this.sharedService.selectedRide = slot._ride;

            this.rideService.findRideById(this.sharedService.selectedRide).subscribe((ride: Ride) => {
              this.ride = ride;
              this.departure_time = ride.departure_time;
              this.vehicle_no = ride.vehicle_no;
              this.pick_up = ride.origin;
              this.driver_name = ride.driver_name;
            });
          });
      }
    }
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }

  private locationConfirmed(){
    const stud_name = this.sharedService.user.firstName + " " + this.sharedService.user.lastName;
    var slot = new QueueSlot(this.sharedService.user._id, stud_name, this.sharedService.selectedRide, this.dropOff);
    this.queueService.createQueueSlot(slot).subscribe((slot:QueueSlot) => {
      this.queueSlot = slot;
      this.sharedService.user._queue = slot._id;
      this.showRideDetails = true;
      this.userService.updateUser(this.sharedService.user._id, this.sharedService.user)
        .subscribe((res) => {
        });
    });
  }

  dropOffQueue(){
    this.queueService.deleteQueueSlot(this.queueSlot._id).subscribe((res) => {
      this.sharedService.user._queue = '';
      this.showRideDetails = false;
      this.userService.updateUser(this.sharedService.user._id, this.sharedService.user)
        .subscribe((res) => {
          this.router.navigate(['/rides']);
        });
    });
  }
}
