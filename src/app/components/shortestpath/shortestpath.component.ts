import {Component, OnInit, NgZone, ElementRef, ViewChild} from '@angular/core';
import {MapsAPILoader, AgmMap} from '@agm/core';
import {} from '@types/googlemaps';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-shortestpath',
  templateUrl: './shortestpath.component.html',
  styleUrls: ['./shortestpath.component.css']
})
export class ShortestpathComponent implements OnInit {

  latitude: number;
  longitude: number;
  zoom: number;
  iconUrl: any;
  waypoints: any[];
  currentLocation: string;
  shuttleOrigin: string;
  shuttleDestination: string;
  searchControl: FormControl;

  @ViewChild('search')
  searchElementRef: ElementRef;

  @ViewChild(AgmMap) agmMap;

  map: any;

  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
    this.latitude = 42.3404957;
    this.longitude = -71.0878975;
    this.iconUrl = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
    this.shuttleOrigin = 'Snell Library, Huntington Avenue, Boston, MA';
    this.shuttleDestination = 'Snell Library, Huntington Avenue, Boston, MA';
    this.waypoints = [];
  }

  ngOnInit() {
    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {

      // configure location search box
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

          this.currentLocation = place.formatted_address;
          console.log(this.currentLocation);
        });
      });
    });

    this.agmMap.mapReady.subscribe(m => {
      this.map = m;
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

  private addDropLocation(){
    if(this.currentLocation != undefined){
      this.waypoints.push({
        location: this.currentLocation,
        stopover: true
      });
      console.log(this.waypoints);
    }
  }

  private findOptimumRoute(){

    console.log("map loaded");
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(this.map);
    console.log(directionsDisplay);

    directionsService.route({
      origin: this.shuttleOrigin,
      destination: this.shuttleDestination,
      waypoints: this.waypoints,
      optimizeWaypoints: true,
      travelMode : google.maps.TravelMode.DRIVING
    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        console.log(directionsDisplay);
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}
