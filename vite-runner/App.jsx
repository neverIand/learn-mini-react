import React from "./core/React";

// const App = React.createElement(
//   "div",
//   { id: "app" },
//   "app",
//   "-hello",
//   "-world"
// );

function DemoAppFunction() {
  return (
    <div id="testId">
      hello world from <div>mini-react</div>
    </div>
  );
}

// See how jsx is converted by Vite under the hood
console.log(DemoAppFunction);

const App = <div>hello world from mini-react</div>;

export default App;
