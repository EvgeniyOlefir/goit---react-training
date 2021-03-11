import Counter from "../components/Counter/Counter";
import { useState } from "react";

const CountersPage = () => {
  const [counters, setCounters] = useState([]);

  const nandleAddCounter = () => {
    setCounters((prevState) => [
      ...prevState,
      {
        id: Date.now(),
      },
    ]);
  };

  const handleDelete = (id) => {
    setCounters((prevState) => prevState.filter((counter) => counter.id !== id));
  };

  return (
    <div className="counters">
      <h1>Counters</h1>
      <button onClick={nandleAddCounter}>Add a counter</button>
      {counters.map(({ id }) => (
        <Counter key={id} onDelete={() => handleDelete(id)} />
      ))}
    </div>
  );
};

Counter.defaultProps = {
  value: 0,
};

export default CountersPage;
