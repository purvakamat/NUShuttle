var RideSchema = require('./ride.schema.server');
var mongoose = require('mongoose');
var RideModel = mongoose.model('RideModel', RideSchema);

RideModel.createRide = createRide;
RideModel.findRideById = findRideById;
RideModel.updateRide = updateRide;
RideModel.getAllRides = getAllRides;
RideModel.addToQueue = addToQueue;
RideModel.updateRideStatus = updateRideStatus;
RideModel.deleteRide = deleteRide;
RideModel.getRidesForDriver = getRidesForDriver;

module.exports = RideModel;

function createRide(ride) {
  return RideModel.create(ride);
}

function findRideById(rideID) {
  return RideModel.findOne({_id: rideID});
}

function updateRide(ride) {
  return RideModel.updateOne(ride);
}

function getAllRides() {
  var current_time = new Date();
  return RideModel.find({departure_time: {$gte : current_time}});
}

function addToQueue(rideID, queueSlot) {
  return RideModel.update({_id: rideID}, {$push: {queue: queueSlot}});
}

function updateRideStatus(rideID, status, delay) {
  return RideModel.update({_id: rideID}, {status: status, delay: delay});
}

function deleteRide(rideId) {
  return RideModel.deleteOne({_id: rideId});
}

function getRidesForDriver(driverId) {
  return RideModel.find({_driver: driverId});
}



