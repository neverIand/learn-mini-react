import React from "./core/React.js";

// const textEl = createTextNode("app");
// const App = createElement("div", { id: "app" }, textEl);

const App = React.createElement(
  "div",
  { id: "app" },
  "app",
  "-hello",
  "-world"
);

export default App;
