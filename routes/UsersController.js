var userService = require("../services/UserServices");

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(userService.GetUsers());
});

router.post('/', function (req, res, next) {
  var user = req.body;
  
  userService.AddUser(user);
  res.send(user);
});

router.get('/:id', function (req, res, next) {
  res.send(userService.GetUserById(req.params.id));
});

module.exports = router;
