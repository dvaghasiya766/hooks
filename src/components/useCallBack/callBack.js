import React, { useState, useCallback } from "react";
import PrintTable from "./printTable";

const UseCallBackHook = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const calculateTable = useCallback(() => {
    return [number * 1, number * 2, number * 3, number * 4, number * 5];
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
      <PrintTable calculateTable={calculateTable} />
      <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  );
};

export default UseCallBackHook;
