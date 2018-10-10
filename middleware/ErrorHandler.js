var errors = require('../errors/Errors');

var errorHandler = function (error, req, res, next) {
    if (error.code === undefined
        || error.code === null) {
            console.log("Unhandled error: " + JSON.stringify(error))

            error = new errors.InternalServerError("Internal Server Error");
    }

    res.status(error.code).send(error);
}

module.exports = errorHandler;