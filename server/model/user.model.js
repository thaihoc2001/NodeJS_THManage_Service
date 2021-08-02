const mongoose = require('mongoose');

var User = new mongoose.Schema({
    username: String,
    password: String,
    fullname: String,
    phone : String,
    email: String,
    address: String,
    dob: String,
    roll: String
})
var Users = mongoose.model('User',User,'users');
module.exports = Users;
