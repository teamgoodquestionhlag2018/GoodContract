class BaseError {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
}

class BadRequestError extends BaseError {
    constructor(message) {
        super(400, message);
    }
}

class UnauthorizedError extends BaseError {
    constructor(message) {
        super(401, message);
    }
}

class ForbiddenError extends BaseError {
    constructor(message) {
        super(403, message);
    }
}

class NotFoundError extends BaseError {
    constructor(message) {
        super(404, message);
    }
}

class InternalServerError extends BaseError {
    constructor(message) {
        super(500, message);
    }
}

module.exports.BaseError = BaseError;
module.exports.ForbiddenError = ForbiddenError;
module.exports.BadRequestError = BadRequestError;
module.exports.InternalServerError = InternalServerError;
module.exports.NotFoundError = NotFoundError;
module.exports.UnauthorizedError = UnauthorizedError;