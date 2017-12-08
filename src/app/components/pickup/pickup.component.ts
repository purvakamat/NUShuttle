import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { FormControl} from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service.client';
import {User} from '../../models/user.model.client';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})

export class PickupComponent implements OnInit {

  searchControl: FormControl;
  iconUrl: any;
  zoom: number;
  userId: String;
  latitude: Number = 42.340495;
  longitude: Number =  -71.0878;
  pickup: String = '360 Huntington Avenue, Boston, MA, United States';
  @ViewChild('search')
  searchElementRef: ElementRef;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
    });
    this.iconUrl = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';

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
          this.zoom = 12;
        });
      });
    });
  }
  updatePickup() {
    // Remove this during final stages
    if (!this.userId) {
      return;
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


}
