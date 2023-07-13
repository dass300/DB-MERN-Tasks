import React from "react";


export default function Counter({ count, onIncrement, onDecrement }) {
  return (
    <div>
      
      <h1>{count} </h1>
      <button onClick={onIncrement}>Increment </button>
      <button onClick={onDecrement}>Decrement </button>
    </div>
  );
}
