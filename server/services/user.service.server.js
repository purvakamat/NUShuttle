
module.exports = function(app) {

  var userModel = require('../models/user/user.model.server');
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var bcrypt = require('bcrypt-nodejs');
  var auth = authorized;

  app.post("/api/user", auth, createUser);
  app.post("/api/login", passport.authenticate('local'), login);
  app.post("/api/logout", logout);
  app.post("/api/register", register);
  app.get("/api/loggedin", loggedin);
  app.get("/api/user", findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.get("/api/drivers", getAllDrivers);

  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);


  function authorized (req, res, next) {
    if (!req.isAuthenticated()) {
      res.send(401);
    } else {
      next();
    }
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function localStrategy(username, password, done) {
    userModel
      .findUserByUsername(username)
      .then(
        function(user) {
          // if the user exists, compare passwords with bcrypt.compareSync
          if(user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function register (req, res) {
    var user = req.body;
    delete user._id;
    user.password = bcrypt.hashSync(user.password);
    userModel.createUser(user).then(
        function(user){
          if(user){
            req.login(user, function(err) {
              if(err) {
                res.status(400).send(err);
              } else {
                res.json(user);
              }
            });
          }
        }
      );
  }

  function createUser(req, res) {
    var user = req.body;
    delete user._id;
    userModel.createUser(user).then(function (user) {
      res.json(user);
    });
  }

  function findUser(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];
    var user = null;
    if(username != undefined && password != undefined)
      userModel.findUserByCredentials(username, password).then(function (user) {
        if(user)
          res.json(user);
        else
          res.status(404).send("No user");
      });
    else if(username != undefined)
      userModel.findUserByUsername(username).then(function (user) {
        if(user)
          res.json(user);
        else
          res.status(404).send("No user");
      });
  }

  function findUserById(req, res) {
    var userId = req.params['userId'];
    userModel.findUserById(userId).then(function (user) {
      if(user)
        res.json(user);
      else
        res.status(404).send("No user");
    });
  }

  function updateUser(req, res) {
    var userId = req.params['userId'];
    var userNew = req.body;

    userModel.updateUser(userId, userNew).then(function (response) {
      if(response.n >0 || response.nModified > 0)
        res.json("User updated");
      else
        res.status(404).send("User was not updated");
    });
  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];

    userModel.deleteUser(userId).then(function (response) {
      if(response.result.n > 0 && response.result.ok > 0)
        res.json("User deleted");
      else
        res.status(404).send("User cannot be deleted");
    });
  }

  function getAllDrivers(req, res) {
    userModel.getAllUsersWithRole("DRIVER").then(function (drivers) {
      res.json(drivers);
    });
  }
}
