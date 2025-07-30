import React, { useEffect, useState } from "react";

// useEffect without any dependancies
// useEffect with an empty array
// useEffect with variable

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Run useEffect", count);
    return () => {
      // clean-up function
      console.log("Clean up", count);
    };
  }, [count]);
  return (
    <>
      <h3>Count {count}</h3>
      <button className="App-button" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
};

export default UseEffectHook;
