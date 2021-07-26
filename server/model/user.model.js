const mongoose = require('mongoose');

var User = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    phone : String,
    email: String
})
var Users = mongoose.model('User',User,'users');
module.exports = Users;
