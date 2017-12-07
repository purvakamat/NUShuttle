var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/nushuttle';

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds159493.mlab.com:59493/heroku_09wt5rd1'; // use yours
}

var db = mongoose.connect(connectionString, {useMongoClient: true});

module.exports = db;
