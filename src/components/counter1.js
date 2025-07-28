import React, { useEffect } from "react";

function Counter1({ count }) {
  useEffect(() => {
    console.log("Functional Component Updated");

    return () => {
      console.log("Functional Component Unmounted");
    };
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter1;
