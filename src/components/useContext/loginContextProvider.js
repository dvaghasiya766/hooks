import React, { createContext } from "react";

export const LoginContext = createContext(); // Default value: false
const LoginContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};
export default LoginContextProvider;
