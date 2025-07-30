import React, { useEffect, useState } from "react";

const UseCustomHooks = (url) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResponse(data)); //    .catch(setResponse([{ id: "404", name: "Not Found" }]));
  }, []);

  return response;
};

export default UseCustomHooks;
