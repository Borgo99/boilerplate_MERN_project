"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = __importDefault(require("../src/components/layout/Button"));
function NotFound() {
    return (
    //@ts-ignore
    <div errorPage="notfound">
      <h2>404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Button_1.default href="/">Return Home</Button_1.default>
    </div>);
}
exports.default = NotFound;
