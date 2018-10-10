var userService = require('../services/UserServices');

var validationMiddleware = function(req, res, next) {
    var token = req.headers.token;

    if (token === null
        || token === undefined) {
        throw {
            code: 401,
            message: "Token cannot be null"
        };
    }

    var user = userService.ValidateUser(token);
    req.user = user;
    next();
}

module.exports = validationMiddleware;