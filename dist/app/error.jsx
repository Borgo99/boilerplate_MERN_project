"use client"; // Error components must be Client Components
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Button_1 = __importDefault(require("../src/components/layout/Button"));
function Error(_a) {
    var error = _a.error, reset = _a.reset;
    (0, react_1.useEffect)(function () {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);
    return (
    //@ts-ignore
    <div errorPage="notfound">
      <h2>Something went wrong!</h2>
      <Button_1.default onClick={
        // Attempt to recover by trying to re-render the segment
        function () { return reset(); }}>
        Try again
      </Button_1.default>
    </div>);
}
exports.default = Error;
