import { useState } from "react";
import { data } from "../../data";

function UseStateArray() {
  const [people, setPeople] = useState(data);
  const ClearAllItem = () => {
    setPeople([]);
  };
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      <h2>UseState Array Example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button type="button" onClick={ClearAllItem} className="btn">
        Clear Items
      </button>
    </div>
  );
}
export default UseStateArray;
