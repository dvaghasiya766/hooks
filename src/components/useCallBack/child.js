import React from "react";

function Child({ counter2, fun }) {
  console.log("Child Rendered");
  return (
    <div>
      <h1>Child Component</h1>
      <h2>Counter2: {counter2.length}</h2>
      <button onClick={fun}>Click me</button>
    </div>
  );
}

export default React.memo(Child);
