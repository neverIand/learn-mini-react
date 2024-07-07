import Counter3 from "./Counter3";
import React from "./core/React";
// import Counter from "./Counter";
// import Counter2 from "./Counter2";
import "./style.css";

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

// let count = 10;
// let props = { id: "testId2" };
// function Counter({ num }) {
//   function handleClick() {
//     console.log("click");
//     count++;
//     props = {};
//     React.update();
//   }

//   return (
//     <div {...props}>
//       count:{count} <button onClick={handleClick}>click</button>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      hello world from mini-react
      {/* <Counter2></Counter2> */}
      <Counter3></Counter3>
    </div>
  );
}

export default App;
