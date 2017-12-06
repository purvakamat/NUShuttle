var mongoose = require('mongoose');
var RideStaticsSchema = mongoose.Schema ({
  origin: String,
  destination: String,
  blocked_seats: Number,
}, {collection: 'ride_statics'});
module.exports = RideStaticsSchema;
