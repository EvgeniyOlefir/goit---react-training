import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(54);

  const handleDecrement = () => setCount(count - 1);
  const handleIncrement = () => setCount(count + 1);

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
