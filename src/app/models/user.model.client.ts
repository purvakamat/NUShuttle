export class User {
  _id: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  emailId: String;
  type: String;
  pickup: String;
  dropoff: String;
  latitude: Number;
  longitude: Number;
  constructor(_id: String, username: String, password: String, emailId: String, type: String, pickup: String,
              dropoff: String) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.emailId = emailId;
    this.type = type;
    this.pickup = pickup;
    this.dropoff = dropoff;
  }
}
