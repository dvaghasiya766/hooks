import React, { useState, useMemo } from "react";

function Memo() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementCounter1 = () => {
    setCounter1(counter1 + 1);
  };

  const incrementCounter2 = () => {
    setCounter2(counter2 + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <div>
      <button onClick={incrementCounter1}>Increment {counter1}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={incrementCounter2}>Increment {counter2}</button>
    </div>
  );
}

export default Memo;
