import { useState } from "react";

const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    count += 1;
  };
  return (
    <>
      <h2>useState error example</h2>
      <br />
      <h1>{count}</h1>
      <button type="button" onClick={handleClick} className="btn">
        Increase
      </button>
      <h5>In this the dom does not re-render</h5>
    </>
  );
};

export default ErrorExample;
