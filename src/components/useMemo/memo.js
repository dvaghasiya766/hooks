import React, { useState, useMemo } from "react";

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const expensiveFunction = (num) => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
      result += num;
    }
    return result;
  };

  const memoCalculation = useMemo(() => {
    return expensiveFunction(number);
  }, [number]);

  //   const calculation = expensiveFunction(number);
  const cssStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div style={cssStyle}>
      <input
        onChange={(e) => setNumber(e.target.valueAsNumber)}
        type="number"
        value={number}
      />
      Calculation: {memoCalculation}
      <button
        onClick={() => {
          setDark(!dark);
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default UseMemoHook;
