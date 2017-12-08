import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment.prod';
import 'rxjs/Rx';
import {Ride} from '../models/ride.model.client';

@Injectable()

export class RideService {
  constructor(private http: Http) {}
  baseUrl = environment.baseUrl;

  findRideById(rideId: String) {
    const url = this.baseUrl + '/api/ride/' + rideId;
    console.log(url);
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  createRide(user: Ride) {
    const url = this.baseUrl + '/api/ride/';
    return this.http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }
}
