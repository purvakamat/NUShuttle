import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { FormControl} from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import {ActivatedRoute} from '@angular/router';
import {UserService} from "../../../services/user.service.client";
import {User} from "../../../models/user.model.client";

@Component({
  selector: 'app-dropoff',
  templateUrl: 'dropoff.component.html',
  styleUrls: ['dropoff.component.css']
})
export class DropoffComponent implements OnInit {

  latitude: Number;
  longitude: Number;
  searchControl: FormControl;
  zoom: number;
  iconUrl: any;
  userId: String;
  user: User;
  username: String;
  emailId: String;
  firstName: String;
  lastName: String;
  type: String;
  pickup: String;
  dropoff: any;

  @ViewChild('search')
  searchElementRef: ElementRef;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.userService.findUserById(this.userId)
        .subscribe((user: User) => {
          this.user = user;
          this.username = user.username;
          this.emailId = user.emailId;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.type = user.role;
        });
    });
    // this.latitude = 42.3404957;
    // this.longitude = -71.0878975;
    this.iconUrl = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
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
          this.dropoff = place.formatted_address;
          this.zoom = 12;
        });
      });
    });
  }
  updateDropoff() {
    // Remove this during final stages
    if (!this.userId) {
      return;
    }
    const tempUser = new User(this.userId, this.username, this.user.password, this.emailId, this.type);
    this.userService
      .updateUser(this.userId, tempUser)
      .subscribe((user) => {
        this.user = user;
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

}
