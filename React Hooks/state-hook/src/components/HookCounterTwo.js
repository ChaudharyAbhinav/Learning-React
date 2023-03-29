import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const IncByFive = () => {
    for (let index = 0; index < 5; index++) {
      setCount((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      count : {count}
      <button
        onClick={() => {
          setCount(initialCount);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCount((prevState) => prevState + 1);
        }}
      >
        IncrementCounter
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        DecreaseCounter
      </button>
      <button onClick={IncByFive}>Inc by 5</button>
    </div>
  );
}

export default HookCounterTwo;
