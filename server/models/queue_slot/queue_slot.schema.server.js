var mongoose = require('mongoose');
var QueueSlotSchema = mongoose.Schema ({
  student: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  checked_in: Boolean,
  ready: Boolean,
  notified: Boolean,
  ride_id: String
}, {collection: 'queue_slot'});
module.exports = QueueSlotSchema;
