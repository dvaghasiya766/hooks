import React from "react";
import MainComponent from "./mainComponent";
import LoginContextProvider from "./loginContextProvider";

function UseContextHook() {
  return (
    <LoginContextProvider>
      <MainComponent />
    </LoginContextProvider>
  );
}

export default UseContextHook;
