var RideSchema = require('./ride.schema.server');
var mongoose = require('mongoose');
var RideModel = mongoose.model('RideModel', RideSchema);

RideModel.createRide = createRide;
RideModel.getRideWithID = getRideWithID;
RideModel.updateRide = updateRide;
RideModel.getAllRides = getAllRides;
RideModel.addToQueue = addToQueue;
RideModel.updateRideStatus = updateRideStatus;


module.exports = RideModel;

function createRide(ride) {
  return RideModel.create(ride);
}

function getRideWithID(rideID) {
  return RideModel.findOne({_id: rideID});
}

function updateRide(ride) {
  return RideModel.updateOne(ride);
}

function getAllRides(count) {
  var current_time = new Date();
  var rides = RideModel.find({departure_time: {$gte : current_time}});
  if(rides.length <= count)
    return rides;
  return rides.slice(0,count);
}

function addToQueue(rideID, queueSlot) {
  return RideModel.update({_id: rideID}, {$push: {queue: queueSlot}});
}

function updateRideStatus(rideID, status, delay) {
  return RideModel.update({_id: rideID}, {status: status, delay: delay});
}



