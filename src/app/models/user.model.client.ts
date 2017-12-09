export class User {
  _id: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  emailId: String;
  role: String;
  _ride: String;
  constructor(_id: String, username: String, password: String, emailId: String, role: String) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.emailId = emailId;
    this.role = role;
  }
}
