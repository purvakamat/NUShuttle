export class User {
  _id: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  emailId: String;
  role: String;
  dropoff_location: String;
  latitude: Number;
  longitude: Number;
  constructor(_id: String, username: String, password: String, emailId: String, role: String, dropoff_location: String) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.emailId = emailId;
    this.role = role;
    this.dropoff_location = dropoff_location;
  }
}
