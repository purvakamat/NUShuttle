var QueueSlotSchema = require('./queue_slot.schema.server');
var mongoose = require('mongoose');
var QueueSlotModel = mongoose.model('QueueSlotModel', QueueSlotSchema);

QueueSlotModel.createQueueSlot = createQueueSlot;
QueueSlotModel.deleteQueueSlot = deleteQueueSlot;
QueueSlotModel.updateQueueSlot = updateQueueSlot;
QueueSlotModel.getQSlotWithID = getQSlotWithID;
QueueSlotModel.getQueueSlotsForRide = getQueueSlotsForRide;

module.exports = QueueSlotModel;

function createQueueSlot(queueSlot) {
  return QueueSlotModel.create(queueSlot);
}

function deleteQueueSlot(slotID) {
  return QueueSlotModel.deleteOne({_id: slotID});
}

function updateQueueSlot(slotID, queueSlot) {
  return QueueSlotModel.updateOne({_id: slotID}, queueSlot);
}

function getQSlotWithID(slotID) {
  return QueueSlotModel.find({_id: slotID});
}

function getQueueSlotsForRide(rideId){
  return QueueSlotModel.find({_ride: rideId});
}




