var mongoose = require('mongoose');
var UserSchema = mongoose.Schema ({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  emailId: String,
  type: String,
  pickUp: String,
  dropOff: String,
}, {collection: 'user'});
module.exports = UserSchema;
