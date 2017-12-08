
module.exports = function (app) {
  app.post("/api/ride", createRide);
  app.get("/api/rides/:count", getAllRides);
  app.get("/api/ride/:rideId", findRideById);
  app.get("/api/rides/driver", getRidesForDriver);
  app.put("/api/ride/:rideId/queue", addToQueue);
  app.put("/api/ride/:rideId/status", updateRideStatus);
  app.put("/api/ride/:rideId", updateRide);
  app.delete("/api/ride/:rideId", deleteRide);

  var rideModel = require("../models/ride/ride.model.server");

  function createRide(req, res) {
    var ride = req.body;
    delete ride._id;
    rideModel.createRide(ride).then(function (ride) {
      res.json(ride);
    });
  }

  function getAllRides(req, res) {
    var count = req.params['count'];
    rideModel.getAllRides(count).then(function (rides) {
      res.json(rides);
    });
  }

  function findRideById(req, res) {
    var rideId = req.params['rideId'];
    rideModel.getRideWithID(rideId).then(function (ride) {
      if(ride)
        res.json(ride);
      else
        res.status(404).send("No ride with given id.");
    });
  }

  function updateRide(req, res) {
    var rideId = req.params['rideId'];
    var rideNew = req.body;
    rideModel.updateRide(rideId, rideNew).then(function (response) {
      if(response.n >0 || response.nModified > 0)
        res.json("Ride updated");
      else
        res.status(404).send("Ride was not updated");
    });
  }

  function deleteRide(req, res) {
    var rideId = req.params['rideId'];
    rideModel.deleteRide(rideId).then(function (response) {
      if(response.deletedCount > 0)
        res.json("Ride deleted");
      else
        res.status(404).send("No ride with given ID");
    });
  }

  function addToQueue(req, res) {
    var rideId = req.params['rideId'];
    var queue_slot = req.body;

    rideModel.getRideWithID(rideId).then(function (ride) {
      if(ride){
        if(ride.queue.length < (ride.seat_count - ride.blocked_seats)){
          rideModel.addToQueue(rideId, queue_slot).then(function (response) {
            if(response.n >0 || response.nModified > 0)
              res.json("User added to queue");
            else
              res.status(404).send("User cannot be added to queue");
          });
        }
        else
          res.status(404).send("Queue is full");
      }
      else
        res.status(404).send("No ride with given id.");
    });
  }

  function updateRideStatus(req, res) {
    var rideId = req.params['rideId'];
    var obj = req.body;
    rideModel.updateRideStatus(rideId, obj['status'], obj['delay']).then(function (response) {
      if(response.n >0 || response.nModified > 0)
        res.json("Ride status updated");
      else
        res.status(404).send("Ride status cannot be updated");
    });
  }

  function getRidesForDriver(req, res) {
    var driver = req.body;

    rideModel.getRidesForDriver(driver).then(function (rides) {
      if(rides)
        res.json(rides);
      else
        res.status(404).send("Rides for driver cannot be found.");
    });
  }
};
