import React from "react";
import Calculator from "./Calculator";

// The Add component receives the "add" method and other props
function Add({ a, b, result, handleInputChange, add }) {
  return (
    <div>
      <h2>Addition</h2>
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
        <button onClick={add}>Add</button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator(Add, ["add"]);
