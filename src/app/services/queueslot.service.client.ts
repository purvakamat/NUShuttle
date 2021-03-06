import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import 'rxjs/Rx';
import {QueueSlot} from "../models/queueslot.model.client";

@Injectable()
export class QueueSlotService {

  baseURLRide: string;
  baseURLQueue: string;

  constructor(private http: Http) {
    this.baseURLRide = environment.baseUrl + '/api/rideQueue';
    this.baseURLQueue = environment.baseUrl + '/api/queue';
  }

  createQueueSlot(queueSlot: QueueSlot){
    const url = this.baseURLQueue;
    return this.http.post(url, queueSlot)
      .map((response: Response) => {
        return response.json();
      });
  }

  findQueueSlotsByRideId(rideId: String) {
    const url = this.baseURLRide + '/' + rideId + '/queue';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findQueueSlotById(slotId: String) {
    const url = this.baseURLQueue + '/' + slotId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteQueueSlot(slotId: String) {
    const url = this.baseURLQueue + '/' + slotId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateQueueSlot(queueSlotId: String, queueSlot: QueueSlot) {
    const url = this.baseURLQueue + '/' +  queueSlotId;
    return this.http.put(url, queueSlot)
      .map((response: Response) =>  {
        return response.json();
      });
  }
}
