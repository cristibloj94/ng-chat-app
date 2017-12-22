var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var exports = module.exports = {};

exports.roomSchema = new Schema({
    roomName: { type : String, required : true, unique: true }
});

exports.messagesSchema = new Schema({
    author: String,
    body:   String,
    roomName: String
});

exports.usersSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

exports.blogSchema = new Schema({
    author: String,
    body:   String
});

exports.Blog = mongoose.model('Blog',exports.blogSchema);
exports.Rooms = mongoose.model('Rooms',exports.roomSchema);
exports.Messages = mongoose.model('Messages',exports.messagesSchema);
exports.Users = mongoose.model('Users', exports.usersSchema);
