
module.exports = function (app) {

  app.post("/api/ride/:rideId/queue", createQueueSlot);
  app.get("/api/ride/:rideId/queue", getQueueSlotsForRide);
  app.get("/api/ride/queue/:slotId", findQueueSlotById);
  app.put("/api/ride/queue/:slotId", updateQueueSlot);
  app.delete("/api/ride/queue/:slotId", deleteQueueSlot);

  var queueSlotModel = require("../models/queue_slot/queue_slot.model.server");

  function createQueueSlot(req, res) {
    var queue_slot = req.body;
    delete queue_slot._id;
    queueSlotModel.createQueueSlot(queue_slot).then(function (queueSlot) {
      res.json(queueSlot);
    });
  }

  function getQueueSlotsForRide(req, res) {
    var rideId = req.params['rideId'];

    queueSlotModel.getQueueSlotsForRide(rideId).then(function (queueSlots) {
        res.json(queueSlots);
    });
  }

  function findQueueSlotById(req, res) {
    var slotId = req.params['slotId'];

    queueSlotModel.getQSlotWithID(slotId).then(function (queueSlot) {
      if(queueSlot)
        res.json(queueSlot);
      else
        res.status(404).send("No queue slot with given id.");
    });
  }

  function updateQueueSlot(req, res) {
    var slotId = req.params['slotId'];
    var queueSlotNew = req.body;
    queueSlotModel.updateQueueSlot(slotId, queueSlotNew).then(function (response) {
      if(response.n >0 || response.nModified > 0)
        res.json("Queue slot updated");
      else
        res.status(404).send("Queue slot was not updated");
    });
  }

  function deleteQueueSlot(req, res) {
    var slotId = req.params['slotId'];
    queueSlotModel.deleteQueueSlot(slotId).then(function (response) {
      if(response.deletedCount > 0)
        res.json("Queue slot deleted");
      else
        res.status(404).send("No queue slot with given ID");
    });
  }

};
