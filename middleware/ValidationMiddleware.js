var userService = require('../services/UserServices');
var errors = require('../errors/Errors');

var validationMiddleware = function(req, res, next) {
    var token = req.headers.token;

    if (token === null
        || token === undefined) {
        throw new errors.UnauthorizedError("Token cannot be null");
    }

    var user = userService.ValidateUser(token);
    req.user = user;
    next();
}

module.exports = validationMiddleware;