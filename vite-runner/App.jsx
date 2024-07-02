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

function Counter() {
  return <div>count</div>;
}

function CounterContainer() {
  return <Counter></Counter>;
}

// const App = (
//   <div>
//     hello world from mini-react
//     <Counter></Counter>
//     <CounterContainer></CounterContainer>
//   </div>
// );

function App() {
  return (
    <div>
      hello world from mini-react
      <Counter></Counter>
      {/* <CounterContainer></CounterContainer> */}
    </div>
  );
}

export default App;
