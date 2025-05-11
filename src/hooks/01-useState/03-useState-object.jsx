import { useState } from "react";

function UseStateObject() {
  const [person, setPerson] = useState({
    name: "vynas",
    age: 25,
    hobby: "read books",
  });
  const displayPerson = () => {
    // setPerson({
    //   name: "dev",
    //   age: 26,
    //   hobby: "travel",
    // });
    setPerson({ ...person, name: "dev" });
  };
  return (
    <>
      <h2>UseState Object Example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys To: {person.hobby}</h3>
      <button type="button" className="btn" onClick={displayPerson}>
        Show Dev
      </button>
    </>
  );
}
export default UseStateObject;
