import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  const onIncrement = () => {

    count < 10 ? setCount(count + 1) : null

  };

  const onDecrement = () => {
    count > 0 ? setCount(count - 1): null
  };

  return <div className="App">
  <h1>Counter App</h1>
  <Counter count = {count} onIncrement={onIncrement} onDecrement={onDecrement}  />
  </div>;
}

export default App;
