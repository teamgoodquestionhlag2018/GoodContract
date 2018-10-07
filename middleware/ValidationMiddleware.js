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

    try {
        var user = userService.ValidateUser(token);
        req.user = user;
        next();
    }
    catch (error) {
        res.status(error.code).send(error);
    }
}

module.exports = validationMiddleware;