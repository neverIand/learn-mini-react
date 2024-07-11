import React from "./core/React";
import "./style.css";

function Foo() {
  console.log("foo rerun");
  const [count, setCount] = React.useState(10);
  const [str, setStr] = React.useState("hi");

  function handleClick() {
    setCount((c) => c + 1);
    // setStr((s) => s + " foo");
    // setStr("bar");
    // setStr(() => "bar");
  }

  // useEffect: called when React finished rendering DOM, before browser finished drawing
  React.useEffect(() => {
    console.log("init");

    // cleanup function will be invoked before calling (next) useEffect
    // when deps array is empty, cleanup will not be called
    return () => {
      console.log("cleanup 0");
    };
  }, []);

  React.useEffect(() => {
    console.log("useEffect1 call, update", count);

    return () => {
      console.log("cleanup 1");
    };
  }, [count /* 1 */]);

  React.useEffect(() => {
    console.log("useEffect2 call, update", count);

    return () => {
      console.log("cleanup 2");
    };
  }, [count]);

  // TODO
  // React.useEffect(() => {
  //   console.log("No deps");
  //   return () => {
  //     console.log("cleanup 3");
  //   };
  // });

  return (
    <div>
      <h1>Foo</h1>
      count: {count}
      <br />
      str: {str}
      <br />
      <button onClick={handleClick}>click</button>
    </div>
  );
}

let countBar = 1;
function Bar() {
  console.log("bar rerun");
  const update = React.update();

  function handleClick() {
    countBar++;
    update();
  }

  return (
    <div>
      <h1>Bar</h1>
      {countBar}
      <button onClick={handleClick}>click</button>
    </div>
  );
}

let countRoot = 1;
function App2() {
  console.log("App rerun");
  const update = React.update();

  function handleClick() {
    countRoot++;
    update();
  }

  return (
    <div>
      {/* App count: {countRoot} */}
      {/* <button onClick={handleClick}>click</button> */}
      <Foo></Foo>
      {/* <Bar></Bar> */}
    </div>
  );
}

export default App2;
