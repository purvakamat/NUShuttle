import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment.prod';
import 'rxjs/Rx';

@Injectable()

export class QueueSlotService {
  constructor(private http: Http) {}
  baseUrl = environment.baseUrl;
}
