// v1
// const dom = document.createElement("div");
// dom.id = "app";
// document.querySelector("#root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = "app";
// dom.append(textNode);

import ReactDOM from "./core/ReactDOM.js";
import App from "./App.js";

console.log(App);

ReactDOM.createRoot(document.getElementById("root")).render(App);
