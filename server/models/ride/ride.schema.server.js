var mongoose = require('mongoose');
var RideSchema = mongoose.Schema ({
  departure_time: {type: Date, default: Date.now},
  driver: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  seat_count: Number,
  blocked_seats: Number,
  status: String,
  delay: {type: Number, default: 0},
  origin: String,
  destination: String,
  queue: [{type: mongoose.Schema.Types.ObjectId, ref: 'queue_slot'}]
}, {collection: 'ride'});
module.exports = RideSchema;
