import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import { User } from '../models/user.model.client';

// injecting service into module
@Injectable()

export class HomeService {
  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  findAllRides() {
    const url = this.baseUrl + '/api/user/';  // to be changed
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
