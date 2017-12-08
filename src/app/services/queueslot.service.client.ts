import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment.prod';
import 'rxjs/Rx';

@Injectable()

export class QueueSlotService {
  constructor(private http: Http) {}
  baseUrl = environment.baseUrl;

  findQueueSlotByRideId(rideId: String) {
    // console.log(this.baseUrl);
    const url = this.baseUrl + '/api/ride/' + rideId + '/queue';
    // console.log(url);
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
