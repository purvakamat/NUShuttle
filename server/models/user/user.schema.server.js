var mongoose = require('mongoose');
var UserSchema = mongoose.Schema ({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  emailId: String,
  role: String,
  dropoff_location: String,
  latitude: Number,
  longitude: Number,
  ride: {type: mongoose.Schema.Types.ObjectId, ref: 'ride'}
}, {collection: 'user'});
module.exports = UserSchema;
