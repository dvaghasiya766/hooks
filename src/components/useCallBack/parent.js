import React, { useState, useCallback } from "react";
import Child from "./child";

export default function Parent() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState([]);

  const incrementCounter1 = () => {
    setCounter1(counter1 + 1);
  };

  const fun = useCallback(() => {
    setCounter2([...counter2, counter2.length + 1]);
    console.log(counter2);
  }, [counter2]);

  return (
    <div>
      <Child counter2={counter2} fun={fun} />
      <button onClick={incrementCounter1}>Increment {counter1}</button>
    </div>
  );
}
