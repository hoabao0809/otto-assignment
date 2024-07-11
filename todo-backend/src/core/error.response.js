const httpStatusCode = require('../utils/httpStatusCode.js')


class ErrorResponse extends Error {
    constructor(message, status, errors = null) {
        super(message)
        this.status = status
        if (errors) {
            this.errors = errors;
        }
    }
}

class ForbiddenError extends ErrorResponse {
    constructor(message = httpStatusCode.ReasonPhrases.FORBIDDEN, status = httpStatusCode.StatusCodes.FORBIDDEN) {
        super(message, status)
    }
}

class BadRequestError extends ErrorResponse {
    constructor(message = httpStatusCode.ReasonPhrases.BAD_REQUEST, status = httpStatusCode.StatusCodes.BAD_REQUEST) {
        super(message, status)
    }
}

class InternalServerError extends ErrorResponse {
    constructor(message = httpStatusCode.ReasonPhrases.INTERNAL_SERVER_ERROR, status = httpStatusCode.StatusCodes.INTERNAL_SERVER_ERROR) {
        super(message, status)
    }
}

class ConflictError extends ErrorResponse {
    constructor(message = httpStatusCode.ReasonPhrases.CONFLICT, status = httpStatusCode.StatusCodes.CONFLICT) {
        super(message, status)
    }
}

class AuthenticationError extends ErrorResponse {
    constructor(message = httpStatusCode.ReasonPhrases.UNAUTHORIZED, status = httpStatusCode.StatusCodes.UNAUTHORIZED) {
        super(message, status)
    }
}

class NotFoundError extends ErrorResponse {
    constructor(message = httpStatusCode.ReasonPhrases.NOT_FOUND, status = httpStatusCode.StatusCodes.NOT_FOUND) {
        super(message, status)
    }
}

class InvalidInputException extends ErrorResponse {
    constructor(message = httpStatusCode.ReasonPhrases.BAD_REQUEST, errors = null, status = httpStatusCode.StatusCodes.BAD_REQUEST) {
        super(message, status, errors);
    }
}

module.exports = {
    BadRequestError,
    ForbiddenError,
    InternalServerError,
    ConflictError,
    AuthenticationError,
    NotFoundError,
    InvalidInputException
}