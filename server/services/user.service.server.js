
module.exports = function(app) {

  app.get('/api/user', findUsers);
  app.get('/api/user/:uid', findUserById);
  app.post('/api/user', createUser);
  app.put('/api/user/:uid', updateUser);
  app.delete('/api/user/:uid', deleteUser);
  app.get('/api/drivers', getAllDrivers);

  var userModel = require('../models/user/user.model.server');

  function createUser(request, response) {
    var newUser = request.body;
    delete newUser._id;
    console.log(newUser);
    userModel
      .createUser(newUser)
      .then(function(user) {
        response.json(user);
      }, function(error) {
        console.log(error);
      });
  }

  function deleteUser(request, response) {
    var userId = request.params['uid'];
    userModel
      .deleteUser(userId)
      .then(function(status) {
        response.send(status);
      });
  }

  function updateUser(request, response) {
    var userId = request.params['uid'];
    var user = request.body;
    userModel
      .updateUser(userId, user)
      .then(function(status) {
        response.send(status);
      });
  }

  function findUsers(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];
    if(username && password) {
      var promise = userModel
        .findUserByCredentials(username, password);
      promise
        .then(function(user) {
          res.json(user);
        });
      return;
    } else if(username) {
      userModel
        .findUserByUsername(username)
        .then(function(user) {
          res.json(user);
        });
      return;
    }
  }

  function findUserById(req, res) {
    var userId = req.params['uid'];
    userModel
      .findUserById(userId)
      .then(function(user) {
        res.json(user);
      });
  }

  function getAllDrivers(req, res) {
    userModel.getAllDrivers().then(function (drivers) {
      res.json(drivers);
    });
  }
}
