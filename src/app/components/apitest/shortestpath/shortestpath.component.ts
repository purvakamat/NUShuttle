import {Component, OnInit, NgZone, ElementRef, ViewChild} from '@angular/core';
import {MapsAPILoader, AgmMap} from '@agm/core';
import {} from '@types/googlemaps';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {QueueSlotService} from '../../../services/queueslot.service.client';
import {QueueSlot} from '../../../models/queueslot.model.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-shortestpath',
  templateUrl: 'shortestpath.component.html',
  styleUrls: ['shortestpath.component.css']
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
  rideId: String;
  queueSlots: QueueSlot[];

  @ViewChild('search')
  searchElementRef: ElementRef;

  @ViewChild(AgmMap) agmMap;

  map: any;

  constructor(private mapsAPILoader: MapsAPILoader,
              private queueslotService: QueueSlotService,
              private ngZone: NgZone,
              private route: ActivatedRoute) {
    this.latitude = 42.3404957;
    this.longitude = -71.0878975;
    this.iconUrl = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
    this.shuttleOrigin = 'Snell Library, Huntington Avenue, Boston, MA';
    this.shuttleDestination = 'Snell Library, Huntington Avenue, Boston, MA';
    this.waypoints = [];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rideId = params['rid'];
      this.queueslotService
          .findQueueSlotsByRideId(this.rideId)
          .subscribe((queueSlots: QueueSlot[]) => {
            this.queueSlots = queueSlots;
            for (let index = 0; index < this.queueSlots.length; index++) {
              const temp = this.queueSlots[index].dropoff_location;
              this.addDropLocation(temp);
            }
          });
    });
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

  addDropLocation(dropOffLocation: String) {
    if (dropOffLocation) {
      this.waypoints.push({
        location: dropOffLocation,
        stopover: true
      });
    }
  }

  checkIn(queueSlotId: String, queueSlot: QueueSlot)  {
    const studentId = queueSlot._student;
    const studentName = queueSlot.student_name;
    const dropOffLocation = queueSlot.dropoff_location;
    const rideId = queueSlot._ride;
    const newQueueSlot = new QueueSlot(studentId, studentName, rideId , dropOffLocation);
    newQueueSlot.checked_in = true;
    newQueueSlot.notified = queueSlot.notified;
    newQueueSlot.ready = queueSlot.ready;
    this.queueslotService
      .updateQueueSlot(queueSlotId, newQueueSlot)
      .subscribe((queueSlotUpdated) => {
        this.waypoints = [];
        this.queueslotService
          .findQueueSlotsByRideId(this.rideId)
          .subscribe((queueSlots: QueueSlot[]) => {
            this.queueSlots = queueSlots;
            for (let index = 0; index < this.queueSlots.length; index++) {
              const temp = this.queueSlots[index].dropoff_location;
              this.addDropLocation(temp);
            }
          });
      });
  }

  private noShow(queueSlotId: String, queueSlot: QueueSlot) {
    const studentId = queueSlot._student;
    const studentName = queueSlot.student_name;
    const dropOffLocation = queueSlot.dropoff_location;
    const rideId = queueSlot._ride;
    const newQueueSlot = new QueueSlot(studentId, studentName, rideId , dropOffLocation);
    newQueueSlot.checked_in = queueSlot.checked_in;
    newQueueSlot.notified = true;
    newQueueSlot.ready = queueSlot.ready;
    this.queueslotService
      .updateQueueSlot(queueSlotId, newQueueSlot)
      .subscribe((queueSlotUpdated) => {
        this.waypoints = [];
        this.queueslotService
          .findQueueSlotsByRideId(this.rideId)
          .subscribe((queueSlots: QueueSlot[]) => {
            this.queueSlots = queueSlots;
            for (let index = 0; index < this.queueSlots.length; index++) {
              if (this.queueSlots[index].notified) {
                continue;
              }
              const temp = this.queueSlots[index].dropoff_location;
              this.addDropLocation(temp);
            }
          });
      });
  }

  private findOptimumRoute() {
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(this.map);

    directionsService.route({
      origin: this.shuttleOrigin,
      destination: this.shuttleDestination,
      waypoints: this.waypoints,
      optimizeWaypoints: true,
      travelMode : google.maps.TravelMode.DRIVING
    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}
