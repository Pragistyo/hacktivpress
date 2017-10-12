var mongoose = require('mongoose');
var Schema = mongoose.Schema


console.log('======= masuk models user');


var userSchema = mongoose.Schema({
  username: {
              type: String,
              required: true,
              unique: true
  },
  password: String,
  email: {
              type: String,
              required: true,
              unique: true
  }
},
{ timestamps: true});

var User = mongoose.model('Book', userSchema);

module.exports = User
