import React from 'react'
import useCounter from './useCounter';

export default function Counter2() {
    const{count,Decrement,reset}=useCounter();
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
