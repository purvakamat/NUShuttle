var mongoose = require('mongoose');
var uri;

if(process.env.NODE_ENV == "prod")
  uri = process.env.MONGODB_URI;
else
  uri = 'mongodb://localhost:27017/nushuttle';

var db = mongoose.connect(uri,{useMongoClient : true});
module.exports = db;
