import React from 'react'
import { useReducer } from 'react'

let intialState=0;

const reducer =(state, action)=>{
    switch(action){
        case 'increment':
            return state+1;

        case 'decrement':
            return state-1;

        case 'multiply':
            return state*(2);

        case 'reset':
            return intialState;
        default:
            return state;
    }
}

export default function Counter() {
    const [count ,  setCount ] = useReducer(reducer,intialState);
  return (

    <div>


    <h2>Count : {count}</h2>

    <button onClick={() => setCount("increment")}>Increment</button>
    <button onClick={() => setCount("decrement")}>Decrement</button>

    <button onClick={() => setCount("multiply")}>Multiply by 2</button>

    <button onClick={() => setCount("reset")}>Reset</button>
    </div>
  )
}
