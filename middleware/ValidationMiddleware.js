var userService = require('../services/UserServices');

var validationMiddleware = function(req, res, next) {
    var token = req.headers.token;

    if (token == null) {
        let error = {
            code: 401,
            message: "Token cannot be null"
        };

        res.status(error.code).send(error);
    }

    var user;

    try {
        user = userService.ValidateUser(token);
    }
    catch (error) {
        res.status(error.code).send(error);
    }

    req.user = user;
    next();
}

module.exports = validationMiddleware;