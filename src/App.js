import React from "react";

import UseStateHook from "./components/useState/state"; // Capitalized import
import UseEffectHook from "./components/useEffect/effect";
import UseContextHook from "./components/useContext/context";
import UseRefHook from "./components/useRef/ref";
import UseReducerHook from "./components/useReducer/reducer";
import UseLayoutEffectHook from "./components/useLayoutEffect/layoutEffect";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <UseStateHook />
      <UseEffectHook />
      <UseContextHook />
      <UseRefHook />
      <UseReducerHook />
      <UseLayoutEffectHook />
    </div>
  );
};

export default App;
