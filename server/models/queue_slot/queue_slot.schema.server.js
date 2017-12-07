var mongoose = require('mongoose');
var QueueSlotSchema = mongoose.Schema ({
  student: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  checked_in: {type: Boolean, default: false},
  ready: {type: Boolean, default: false},
  notified: {type: Boolean, default: false},
  ride_id: String
}, {collection: 'queue_slot'});
module.exports = QueueSlotSchema;
