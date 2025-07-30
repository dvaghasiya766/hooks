import React, { useRef } from "react";

const UseRefHook = () => {
  const inpuEle = useRef();
  const handleClick = () => {
    console.log(inpuEle);
    inpuEle.current.style.width = "500px";
    inpuEle.current.focus();
  };
  return (
    <div style={{ margin: "20px 20%" }}>
      <input type="text" ref={inpuEle} />
      <button className="App-button" onClick={handleClick}>
        Click Here
      </button>
    </div>
  );
};

export default UseRefHook;
