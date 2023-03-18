import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>UseState Basic</h2>;
      <br />
      <h4>You have clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        Increase Me
      </button>
    </>
  );
};

export default UseStateBasics;
