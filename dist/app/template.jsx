"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Footer from "../src/components/Footer";
// import Headbar from "../src/components/Headbar";
var Home_module_scss_1 = __importDefault(require("../src/styles/Home.module.scss"));
function Template(_a) {
    var children = _a.children;
    return (<main className={Home_module_scss_1.default.main}>
      {/* <Headbar /> */}
      {children}
      {/* <Footer /> */}
    </main>);
}
exports.default = Template;
