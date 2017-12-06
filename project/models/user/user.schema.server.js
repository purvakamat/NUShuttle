var mongoose = require('mongoose');
var UserSchema = mongoose.Schema ({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  emailId: String,
  type: String,
  pickup: String,
  dropoff: String,
  latitude: Number,
  longitude: Number,
}, {collection: 'user'});
module.exports = UserSchema;
