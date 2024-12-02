import React from "react";
import Calculator from "./Calculator";


function Multiply({ a, b, result, handleInputChange, multiply }) {
  return (
    <div>
      <h2>Multiplication</h2>
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
        <button onClick={multiply}>Multiply</button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator(Multiply, ["multiply"]);
