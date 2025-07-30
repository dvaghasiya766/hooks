import React from "react";

import UseStateHook from "./components/useState/state"; // Capitalized import
import UseEffectHook from "./components/useEffect/effect";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <UseStateHook />
      <UseEffectHook />
    </div>
  );
};

export default App;
