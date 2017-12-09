import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import 'rxjs/Rx';
import {Ride} from '../models/ride.model.client';

@Injectable()
export class RideService {

  baseURL: string;
  baseURLRides: string;

  constructor(private http: Http) {
    this.baseURL = environment.baseUrl + '/api/ride';
    this.baseURLRides = environment.baseUrl + '/api/rides';
  }

  createRide(user: Ride) {
    const url = this.baseURL;
    return this.http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  findRideById(rideId: String) {
    const url = this.baseURL + '/' + rideId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  getAllRides(count) {
    return this.http.get(this.baseURLRides + '/' + count).map((response: Response) => {
      return response.json();
    });
  }

  updateRide(rideId, ride) {
    const url = this.baseURL + '/' + rideId;
    console.log(url);
    return this.http.put(url, ride)
      .map((response: Response) => {
        return response.json();
      });
  }
}
