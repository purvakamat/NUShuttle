import {User} from './user.model.client';

export class QueueSlot {
  _id: String;
  _student: String;
  checked_in: Boolean;
  ready: Boolean;
  notified: Boolean;
  _ride: String;
  dropoff_location: String;
  constructor( student: String, ride: String, location: String) {
    this._student = student;
    this._ride = ride;
    this.dropoff_location = location;
  }
}
