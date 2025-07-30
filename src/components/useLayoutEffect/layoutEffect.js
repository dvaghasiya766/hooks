import React, { useEffect, useState, useLayoutEffect, useRef } from "react";

const UseLayoutEffectHook = () => {
  const [toggle, setToggle] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    if (textRef.current != null) {
      const dimention = textRef.current.getBoundingClientRect();
      textRef.current.style.paddingTop = `${dimention.height}px`;
      console.log(dimention);
    }
  }, [toggle]);

  useLayoutEffect(() => {
    if (textRef.current != null) {
      const dimention = textRef.current.getBoundingClientRect();
      textRef.current.style.paddingTop = `${dimention.height}px`;
      console.log(dimention);
    }
  }, [toggle]);

  return (
    <>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>

      {toggle && <h4 ref={textRef}>Code display</h4>}
    </>
  );
};

export default UseLayoutEffectHook;
