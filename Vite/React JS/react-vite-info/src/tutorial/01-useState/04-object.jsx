import { useState } from "react";
import { data } from "../../data";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Sankhar",
    age: 0,
    hobby: "Destroying",
  });
  //   const [name, setName] = useState("Sankhar");
  //   const [age, setAge] = useState(0);
  //   const [hobby, setHobby] = useState("Destroying");

  const displayPerson = () => {
    // setName("Shivaya");
    // setAge(0);
    // setHobby("Watching");
    setPerson({
      name: "Shivaya",
      age: 0,
      hobby: Watching,
    });
    // setPerson({ ...person, hobby: "Watching" });
  };
  const { name, age, hobby } = person;
  return (
    <>
      <h1>Use State Object</h1>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Does : {hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        Change
      </button>
    </>
  );
};

export default UseStateObject;
