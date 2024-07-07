import React from "./core/React";

let showBar = false;
function Counter3() {
  const bar = <p>bar</p>;

  function handleShowBar() {
    showBar = !showBar;
    React.update();
  }

  return (
    <div>
      Counter
      <div>{showBar && bar}</div>
      <button onClick={handleShowBar}>show bar</button>
      {/* <div>{showBar && bar}</div> */}
    </div>
  );
}

export default Counter3;
