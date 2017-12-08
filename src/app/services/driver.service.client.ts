import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()

export class DriverService {
  constructor(private http: Http) { }
  baseUrl = environment.baseUrl;

  findRidesByUser(userId: String) {
    const url = this.baseUrl + '/api/rides/driver/' + userId;
    console.log(url);
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
