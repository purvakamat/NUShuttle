var mongoose = require('mongoose');
var RideSchema = mongoose.Schema ({
  departure_time: {type: Date, default: Date.now},
  _driver: String,
  vehicle_no: String,
  seat_count: Number,
  blocked_seats: Number,
  status: String,
  delay: {type: Number, default: 0},
  origin: String,
  destination: String
}, {collection: 'ride'});
module.exports = RideSchema;
