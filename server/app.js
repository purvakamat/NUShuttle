module.exports = function (app) {
  require("./services/user.service.server")(app);
  require("./services/queue_slot.service.server")(app);
  require("./services/ride.service.server")(app);
  require("./services/ride_statics.service.server")(app);
  require("./models/model");
};
