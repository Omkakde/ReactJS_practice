import React from "react";
import Calculator from "./Calculator";

// The Subtract component receives the "subtract" method and other props
function Subtract({ a, b, result, handleInputChange, subtract }) {
  return (
    <div>
      <h2>Subtraction</h2>
      <div>
        <input
          type="number"
          name="a"
          value={a}
          onChange={handleInputChange}
          placeholder="Enter first number"
        />
        <input
          type="number"
          name="b"
          value={b}
          onChange={handleInputChange}
          placeholder="Enter second number"
        />
      </div>
      <div>
        <button onClick={subtract}>Subtract</button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator(Subtract, ["subtract"]);
