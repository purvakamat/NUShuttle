import {User} from './user.model.client';
import {QueueSlot} from './queueslot.model.client';

export class Ride {
  _id: String;
  departure_time: Date;
  driver: User;
  seat_count: Number;
  blocked_seats: Number;
  status: String;
  delay: Number;
  origin: String;
  destination: String;
  queue: QueueSlot[];
  constructor(_id: String, departure_time: Date, driver: User) {
    this._id = _id;
    this.departure_time = departure_time;
    this.driver = driver;
  }
}
