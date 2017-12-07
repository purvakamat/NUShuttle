var QueueSlotSchema = require('./queue_slot.schema.server');
var mongoose = require('mongoose');
var QueueSlotModel = mongoose.model('QueueSlotModel', QueueSlotSchema);

QueueSlotModel.createQueueSlot = createQueueSlot;
QueueSlotModel.deleteQueueSlot = deleteQueueSlot;
QueueSlotModel.checkInUser = checkInUser;
QueueSlotModel.userReady = userReady;
QueueSlotModel.getQSlotWithID = getQSlotWithID;

module.exports = QueueSlotModel;

function createQueueSlot(queueSlot) {
  return QueueSlotModel.create(queueSlot);
}

function deleteQueueSlot(slotID) {
  return QueueSlotModel.deleteOne({_id: slotID});
}

function checkInUser(slotID) {
  return QueueSlotModel.update({_id: slotID}, {checked_in: true});
}

function userReady(slotID) {
  return QueueSlotModel.update({_id: slotID}, {ready: true});
}

function getQSlotWithID(slotID) {
  return QueueSlotModel.find({_id: slotID});
}




