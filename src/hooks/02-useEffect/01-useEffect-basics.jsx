import { useEffect, useState } from "react";

export const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("Hello");
  };
  sayHello();

  useEffect(() => {
    console.log("hello from useEffect");
  }, []);

  return (
    <div>
      <h1>Value: {value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </div>
  );
};
