import {User} from './user.model.client';

export class QueueSlot {
  _id: String;
  student: User;
  checked_in: Boolean;
  ready: Boolean;
  notified: Boolean;
  _ride: String;
  constructor(_id: String, student: User, _ride: String) {
    this._id = _id;
    this.student = student;
    this._ride = _ride;
  }
}
