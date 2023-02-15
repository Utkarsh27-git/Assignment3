import React, { useState } from 'react';
import '../App.css';


function Counterapp() {
  const [count, setCount] = useState(0);
  let colour = "";

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


  if (count >= 0 && count <= 4) {
    colour = "green";
  } else if (count >= 5 && count <= 9) {
    colour = "blue";
  } else if (count === 10) {
    colour = "red";
}

return (
  <div className="center">
    <h1 style={{ color: colour }}>{count}</h1>
    <button className="increment" onClick={handleIncrement}>increment</button>
    <button className="decrement" onClick={handleDecrement}>decrement</button>
  </div>
);
}

export default Counterapp;