import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  return (
    <>
      {/* {if(someCondition){"won't work"}} */}
      <h2>short circuit overview</h2>
      <h4>Falsy OR : {text || "Hello World"}</h4>
      <h4>Falsy AND : {text && "Hello World"}</h4>
      <h4>Truthy OR : {name || "Hello World"}</h4>
      <h4>Truthy AND : {name && "Hello World"}</h4>
    </>
  );
};
export default ShortCircuitOverview;
