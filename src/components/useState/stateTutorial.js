import React, { useState } from "react";

function StateTutorial() {
  const [inputValue, setInputValue] = useState("Initial Value");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <p>{inputValue}</p>
    </div>
  );
}

export default StateTutorial;
