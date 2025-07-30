import { useEffect, useState } from "react";

const UseCustomHooks = (url) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResponse(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return response;
};

export default UseCustomHooks;
