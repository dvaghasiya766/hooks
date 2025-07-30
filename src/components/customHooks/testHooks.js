import React from "react";
import UseCustomHooks from "./useCustomHooks";

const TestCustomHook = () => {
  const data = UseCustomHooks("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      {data.map((res) => {
        return (
          <h4 key={res.id}>
            {res.id} {res.name}
          </h4>
        );
      })}
    </>
  );
};

export default TestCustomHook;
