import { useEffect, useState } from "react";

export const UseEffectMultiple = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("hello from first useEffect");
  }, [value]);

  useEffect(() => {
    console.log("hello from second useEffect");
  }, [secondValue]);

  return (
    <div>
      <h1>Value: {value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
      <h1>Second Value: {secondValue}</h1>
      <button
        type="button"
        className="btn"
        onClick={() => setSecondValue(secondValue + 1)}
      >
        Increase
      </button>
    </div>
  );
};
