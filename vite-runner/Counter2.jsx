import React from "./core/React";

let showBar = false;
function Counter2() {
  const foo = (
    <div>
      foo
      <div>child1</div>
      <div>child2</div>
    </div>
  );
  //   function Foo() {
  //     return (
  //       <div>
  //         foo
  //         <div>child</div>
  //       </div>
  //     );
  //   }
  const bar = <p>bar</p>;

  function handleShowBar() {
    showBar = !showBar;
    React.update();
  }

  return (
    <div>
      Counter
      <button onClick={handleShowBar}>show bar</button>
      <div>{showBar ? bar : foo}</div>
    </div>
  );
}

export default Counter2;
