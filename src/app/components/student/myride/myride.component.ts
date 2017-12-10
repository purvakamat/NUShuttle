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
  showRideDetails: Boolean;
  ride: Ride;
  driver: User;

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
  }

  ngOnInit() {
    if(!isUndefined(this.sharedService.user) && !isUndefined(this.sharedService.user._queue)){
      this.showRideDetails = true;
      this.queueService.findQueueSlotById(this.sharedService.user._queue)
        .subscribe((slot:QueueSlot) => {
          this.sharedService.selectedRide = slot._ride;
          this.rideService.findRideById(this.sharedService.selectedRide).subscribe((ride : Ride) => {
            this.ride = ride;
            this.fetchDriverForRide(this.ride);
          });
      });
    }

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
  }

  private fetchDriverForRide(ride){
    this.userService.findUserById(ride._driver)
      .subscribe((driver) => {
        this.driver = driver;
      });
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
    var slot = new QueueSlot(this.sharedService.user._id, this.sharedService.selectedRide, this.dropOff);
    this.queueService.createQueueSlot(slot).subscribe((slot:QueueSlot) => {
      this.sharedService.user._queue = slot._id;
      this.userService.updateUser(this.sharedService.user._id, this.sharedService.user)
        .subscribe((res) => {
          this.router.navigate(['/rides']);
        });
    });
  }
}
