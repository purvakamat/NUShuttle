
module.exports = function (app) {
  app.post("/api/ride", createRide);
  app.get("/api/rides/:count", getAllRides);
  app.get("/api/ride/:rideId", findRideById);
  app.get("/api/rides/driver/:driverId", getRidesForDriver);
  app.put("/api/ride/:rideId/status", updateRideStatus);
  app.put("/api/ride/:rid", updateRide);
  app.delete("/api/ride/:rideId", deleteRide);

  var rideModel = require("../models/ride/ride.model.server");

  function createRide(req, res) {
    var ride = req.body;
    console.log('createRide server: ' + req.body);
    delete ride._id;
    rideModel.createRide(ride).then(function (ride) {
      res.json(ride);
    }, function(error){
    });
  }

  function getAllRides(req, res) {
    var count = req.params['count'];
    rideModel.getAllRides(count).then(function (rides) {
      if(rides.length <= count)
        res.json(rides);
      res.json(rides.slice(0,count));
    });
  }

  function findRideById(req, res) {
    var rideId = req.params['rideId'];
    rideModel.findRideById(rideId).then(function (ride) {
      if(ride)
        res.json(ride);
      else
        res.status(404).send("No ride with given id.");
    });
  }

  function updateRide(req, res) {
    var rideId = req.params['rid'];
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
    var driverId = req.params['driverId'];

    rideModel.getRidesForDriver(driverId).then(function (rides) {
      res.json(rides);
    });
  }
};
