"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
require("../src/styles/globals.scss");
exports.metadata = {
    title: "MERN",
    description: "Project_description",
    // viewport: "width=device-width, initial-scale=1",
};
function RootLayout(_a) {
    var 
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children = _a.children;
    return (<html lang="it">
      <body>{children}</body>
    </html>);
}
exports.default = RootLayout;
