var express = require('express');
var router = express.Router();
var schema = require('../model/schema');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
    schema.Users.find({ "username": req.body.username, "password": req.body.password }).exec(function (err, users) {
        if (err) {
            return console.error(err);
        }

        if (users[0]) {
            res.send(req.body);
        }
        else {
            res.status(500).send('Wrong Username or Password!');
        }
    });
});

router.post('/register', function (req, res, next) {
    var instance = new schema.Users(req.body);

    schema.Users.find({}).sort({ _id: -1 }).skip(10).exec(function (err, users) {
        if (err)
            return console.error(err);
        users.forEach(function (user) {
            schema.Users.findByIdAndRemove(user._id).exec();
        });
    });

    instance.save(function (err, User) {
        result = err ? err : User;
        if (User) {
            res.send(User);
        } else {
            res.status(500).send('Username already in Use!');
        }

        return result;
    });
});

module.exports = router;