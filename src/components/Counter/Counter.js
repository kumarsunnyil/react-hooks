import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> Counter </h1>
      <hr />
      <h6> UseState</h6>
      <hr />
      <div>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <span> {count}</span>
        <Button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
