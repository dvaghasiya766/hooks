import React, { useReducer } from "react";

const ACTION = { INCREASE: "increase", DECREASE: "decrease" };

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREASE:
      return { count: state.count + 1 };
    case ACTION.DECREASE:
      return { count: state.count - 1 };

    default:
      return state;
  }
};
const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   const [count, setCount] = useState(0);

  function increaseCount() {
    dispatch({ type: ACTION.INCREASE });
  }

  function decreaseCount() {
    dispatch({ type: ACTION.DECREASE });
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <button onClick={decreaseCount}>Decrease</button>
      <h1>{state.count}</h1>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
};

export default UseReducerHook;
