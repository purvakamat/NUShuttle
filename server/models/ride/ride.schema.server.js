var mongoose = require('mongoose');
var RideSchema = mongoose.Schema ({
  departure_time: {type: Date, default: Date.now},
  _driver: String,
  vehicle_no: String,
  seat_count: {type: Number, default: 0},
  blocked_seats: {type: Number, default: 0},
  status: String,
  delay: {type: Number, default: 0},
  origin: String,
  destination: String
}, {collection: 'ride'});
module.exports = RideSchema;
