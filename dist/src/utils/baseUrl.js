"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseUrl = void 0;
exports.baseUrl = process.env.NODE_ENV !== "production"
    ? "http://127.0.0.1:".concat(process.env.PORT)
    : "";
