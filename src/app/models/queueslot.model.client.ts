import {User} from './user.model.client';

export class QueueSlot {
  _id: String;
  student: User;
  checked_in: Boolean;
  ready: Boolean;
  notified: Boolean;
  ride_id: String;
  constructor(_id: String, student: User, ride_id: String) {
    this._id = _id;
    this.student = student;
    this.ride_id = ride_id;
  }
}
