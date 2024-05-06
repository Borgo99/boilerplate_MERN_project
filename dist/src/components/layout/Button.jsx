"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_module_scss_1 = __importDefault(require("../../styles/Button.module.scss"));
var link_1 = __importDefault(require("next/link"));
var Button = function (props) {
    if ("href" in props)
        return (<link_1.default href={props.href} {...props} className={"".concat(Button_module_scss_1.default.button, " ").concat(props.className || "")}>
        {props.children}
      </link_1.default>);
    return (
    //@ts-ignore
    <button {...props} className={"".concat(Button_module_scss_1.default.button, " ").concat(props.className || "")}>
      {props.children}
    </button>);
};
exports.default = Button;
