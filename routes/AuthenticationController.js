var userService = require('../services/UserServices');

var express = require('express');
var router = express.Router();

router.post('/register', function (req, res, next) {
  var id = userService.Register(req.body);

  res.send(JSON.stringify(id));
});

router.post('/login', function (req, res, next) {
  var token = userService.Login(req.body.id);

  res.setHeader("access-token", token);
  res.send();
});

module.exports = router;
