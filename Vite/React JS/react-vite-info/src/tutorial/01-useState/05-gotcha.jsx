import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };
  return (
    <>
      <h2>useState "gotcha"</h2>
      <h1>{count}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Increase me
      </button>
    </>
  );
};

export default UseStateGotcha;
