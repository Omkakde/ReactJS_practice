import React from 'react'
import { useState, useCallback } from 'react'
import Child from './Child'

// useCallback is a React hook that memorizes a function, so it's not recreated on every render. 
// It's useful to avoid unnecessary re-renders when passing functions to child components.

export default function Parent() {
    const [ count, setCount] = useState(0);

    const handleClick = useCallback(()=>{
        console.log("clicked button")

    },[])
  return (
    <div>
        <>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount((prev)=> prev+1)}>Increment</button>
            <Child  onButtonClick={handleClick}/>
        </>
      
    </div>
  )
}
