var RideStaticsSchema = require('./ride_statics.schema.server');
var mongoose = require('mongoose');
var RideStaticsModel = mongoose.model('RideStaticsModel', RideStaticsSchema);

RideStaticsModel.updateStatics = updateStatics;
RideStaticsModel.getRideStatics = getRideStatics;

module.exports = RideStaticsModel;

function updateStatics(statics) {
  return RideStaticsModel.update(statics);
}

function getRideStatics() {
  var statics = RideStaticsModel.find({});
  if(statics.length == 0)
    return RideStaticsModel.create({origin: "", destination: "", blocked_seats: 10})
  else
    return statics[0];
}

