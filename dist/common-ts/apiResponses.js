"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = exports.ServerResponse = exports.ErrorResponse = void 0;
var ApiResponse = /** @class */ (function () {
    function ApiResponse(status, message, statusCode) {
        this.status = status;
        this.message = message;
        this.statusCode = statusCode;
    }
    return ApiResponse;
}());
exports.ApiResponse = ApiResponse;
var ErrorResponse = /** @class */ (function (_super) {
    __extends(ErrorResponse, _super);
    function ErrorResponse(message, statusCode, err) {
        if (statusCode === void 0) { statusCode = 400; }
        var _this = _super.call(this, "error", message, statusCode) || this;
        _this.err = err;
        return _this;
    }
    ErrorResponse.prototype.redirectTo = function (url) {
        this.redirect = url;
        return this;
    };
    return ErrorResponse;
}(ApiResponse));
exports.ErrorResponse = ErrorResponse;
var ServerResponse = /** @class */ (function (_super) {
    __extends(ServerResponse, _super);
    function ServerResponse(message, statusCode) {
        if (statusCode === void 0) { statusCode = 200; }
        return _super.call(this, "success", message, statusCode) || this;
    }
    ServerResponse.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    return ServerResponse;
}(ApiResponse));
exports.ServerResponse = ServerResponse;
