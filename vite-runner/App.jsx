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

function Counter({ num }) {
  function handleClick() {
    console.log("click");
  }

  return (
    <div>
      count:{num} <button onClick={handleClick}>click</button>
    </div>
  );
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
      <Counter num={10}></Counter>
      {/* <Counter num={20}></Counter> */}
      {/* <CounterContainer></CounterContainer> */}
    </div>
  );
}

export default App;
