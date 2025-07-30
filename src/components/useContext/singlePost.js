import React, { useContext } from "react";
import { LoginContext } from "./loginContextProvider";

const SinglePost = () => {
const { isLoggedIn } = useContext(LoginContext);
  console.log(isLoggedIn);

  return (
    <div>
      <h3>Single Post</h3>
    </div>
  );
};

export default SinglePost;
