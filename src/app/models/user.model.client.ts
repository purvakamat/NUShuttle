export class User {
  _id: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  emailId: String;
  type: String;
  pickUp: String;
  dropOff: String;
  constructor(_id: String, username: String, password: String, emailId: String, type: String) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.emailId = emailId;
    this.type = type;
  }
}
