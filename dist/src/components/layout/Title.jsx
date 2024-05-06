"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Text_1 = __importDefault(require("./Text"));
var Title_module_scss_1 = __importDefault(require("../../styles/Title.module.scss"));
var Title = function (props) {
    return (<Text_1.default type="h1" className={Title_module_scss_1.default.title} {...props}>
      {props.children}
    </Text_1.default>);
};
exports.default = Title;
