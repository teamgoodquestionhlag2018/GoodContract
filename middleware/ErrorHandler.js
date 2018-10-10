var errorHandler = function (error, req, res, next) {
    if (error.code === undefined
        || error.code === null) {
            console.log("Unhandled error: " + JSON.stringify(error))
            res.status(500).send();
    }

    res.status(error.code).send(error);
}

module.exports = errorHandler;