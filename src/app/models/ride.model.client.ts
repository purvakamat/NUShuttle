import {User} from './user.model.client';
import {QueueSlot} from './queueslot.model.client';

export class Ride {
  _id: String;
  departure_time: Date;
  _driver: String;
  seat_count: Number;
  blocked_seats: Number;
  status: String;
  delay: Number;
  origin: String;
  destination: String;
  constructor(_id: String, departure_time: Date, _driver: String) {
    this._id = _id;
    this.departure_time = departure_time;
    this._driver = _driver;
  }
}
