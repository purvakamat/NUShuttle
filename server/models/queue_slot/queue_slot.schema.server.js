var mongoose = require('mongoose');
var QueueSlotSchema = mongoose.Schema ({
  _student: String,
  checked_in: {type: Boolean, default: false},
  ready: {type: Boolean, default: false},
  notified: {type: Boolean, default: false},
  dropoff_location: String,
  _ride: String
}, {collection: 'queue_slot'});
module.exports = QueueSlotSchema;
