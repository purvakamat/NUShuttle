import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { FormControl} from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})

export class PickupComponent implements OnInit {

  // pickupAddress: any;
  // locations = [];
  // lat: Number;
  // lng: Number;
  latitude: number;
  longitude: number;
  searchControl: FormControl;
  iconUrl: any;
  zoom: number;
  @ViewChild('search')
  searchElementRef: ElementRef;
  constructor(
    // private http: Http,
    //           private locationService: LocationService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) { }

  ngOnInit() {
    this.latitude = 42.3404957;
    this.longitude = -71.0878975;
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


  // searchLocation() {
  //   this.locations = [];
  //   this.locationService
  //     .searchLocation(this.pickupAddress)
  //     .subscribe((data: any) => {
  //       const val = data._body;
  //       const mapsOutput = JSON.parse(val);
  //       const results = mapsOutput['results'];
  //       for (let i = 0; i < results.length; i++) {
  //         const lat = results[i].geometry.location.lat;
  //         const lon = results[i].geometry.location.lng;
  //         const name = results[i].formatted_address;
  //         const _id = results[i].place_id;
  //         const temp = {};
  //         temp['latitude'] = lat;
  //         temp['longitude'] = lon;
  //         temp['name'] = name;
  //         temp['_id'] = _id;
  //         this.locations.push(temp);
  //       }
  //       console.log(this.locations);
  //     });
  //
  // }
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }

  // showLocation(_id: String) {
  //   for (let i = 0; i < this.locations.length; i++) {
  //     if (this.locations[i]._id === _id) {
  //       this.lat = this.locations[i].latitude;
  //       this.lng = this.locations[i].longitude;
  //     }
  //   }
  // }
}
