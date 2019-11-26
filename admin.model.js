
var mongoose = require("mongoose");

const Schema = mongoose.Schema;
console.log("login model is here")

const loginsc = new Schema({
    loginname: String,
    loginpassword : String
})

module.exports = mongoose.model('login_details',loginsc)