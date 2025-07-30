import React, { useEffect, useState } from "react";

const UseStateHook = () => {
  const [details, setDetails] = useState({ counter: 0, name: "" });
  const increaseCounter = () => {
    setDetails({ ...details, counter: details.counter + 1 });
  };

  //   useEffect(() => {
  //     document.title = `${details.name} have ${details.counter} messages`;
  //   });

  useEffect(() => {
    document.title = `${details.name} have ${details.counter} messages`;
  }, [details]);

  return (
    <div style={{ margin: "20px 20%" }}>
      <input
        type="text"
        onChange={(e) => {
          setDetails({ ...details, name: e.target.value });
        }}
      />
      <h2>
        {details.name} has click: {details.counter}
      </h2>
      <button className="App-button" onClick={increaseCounter}>
        Increase
      </button>
    </div>
  );
};

export default UseStateHook;
