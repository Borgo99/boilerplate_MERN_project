"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var apiRouter_1 = require("./routes/apiRouter");
exports.router = express_1.default.Router();
exports.router.use("/api", apiRouter_1.apiRouter);
