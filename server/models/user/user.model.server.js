var UserSchema = require('./user.schema.server');
var mongoose = require('mongoose');
var UserModel = mongoose.model('UserModel', UserSchema);

UserModel.createUser = createUser;
UserModel.findAllUsers = findAllUsers;
UserModel.findUserById = findUserById;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUsername = findUserByUsername;
UserModel.deleteUser = deleteUser;
UserModel.updateUser = updateUser;
UserModel.getAllUsersWithRole = getAllUsersWithRole;

module.exports = UserModel;

function createUser(user) {
  return UserModel.create(user);
}

function deleteUser(userId) {
  return UserModel.remove({_id: userId});
}

function findAllUsers() {
  UserModel.find(function(err, doc) {
  });
}

function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username, password: password});
}

function findUserById(userId) {
  return UserModel.findById(userId);
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function updateUser(userId, user) {
  return UserModel.update({_id: userId}, user);
}

function getAllUsersWithRole(role) {
  return UserModel.find({role:role});
}
