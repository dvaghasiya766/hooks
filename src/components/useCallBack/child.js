import React from "react";

function Child({ counter2, fun }) {
  console.log("Child Rendered");
  return (
    <div>
      <h1>Child</h1>
      <button onClick={fun}>Click me</button>
    </div>
  );
}

export default React.memo(Child);
