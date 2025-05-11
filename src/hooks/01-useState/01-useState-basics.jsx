import { useState } from "react";

function UseStateBasics() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>UseState Error Example</h1>
      <h2>{count}</h2>
      <button type="button" onClick={handleClick} className="btn">
        increase
      </button>
    </div>
  );
}
export default UseStateBasics;
