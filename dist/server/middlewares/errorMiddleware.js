"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiResponses_1 = require("../../common-ts/apiResponses");
// send error to client
var sendError = function (res, errResponse) {
    res.status(errResponse.statusCode).json(errResponse);
};
exports.default = (function (err, req, res, next) {
    switch (err.name) {
        // MONGODB ERRORS
        case "ValidationError": // handle validation error
            var message = err.message.split(": ").pop();
            return sendError(res, new apiResponses_1.ErrorResponse(message, 400));
        case "CastError": // handle duplicate key error
            return sendError(res, new apiResponses_1.ErrorResponse("".concat(err.message), 400));
        case "MongoServerError": // handle duplicate key error
            var value = void 0;
            if (err.keyValue) {
                value = Object.keys(err.keyValue)[0];
                return sendError(res, new apiResponses_1.ErrorResponse("Invalid ".concat(value, ". ").concat(err.stack), 400));
            }
            else {
                return sendError(res, new apiResponses_1.ErrorResponse("".concat(err.message), 400));
            }
        case "MongooseServerSelectionError": // handle unable to connect to mongo
            return sendError(res, new apiResponses_1.ErrorResponse("Internet is not working properly", 400));
        // JWT ERROR
        case "JsonWebTokenError": // handle duplicate jwt malformed
            return sendError(res, new apiResponses_1.ErrorResponse(err.message, 401));
        // UNEXPECTED ERROR
        default: // handle unknown errors
            if (!err.statusCode)
                return console.log("\nUnhandled error ".concat(err.name, "\n").concat(err.stack || err, "\n"));
            break;
    }
    // if err arrives here it means is our AppError
    if (process.env.NODE_ENV === "production") {
        return res.status(err.statusCode).json({
            status: "error",
            message: err.msg,
        });
    }
    res.status(err.statusCode).json({
        status: "error",
        message: err.msg,
        err: err,
    });
});
