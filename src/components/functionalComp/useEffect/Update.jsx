import React, { useState,useEffect } from 'react'

export default function Update() {
    const [ count ,setCount] = useState(0);
    
    useEffect(() =>  {
        document.title= `You Clicked  ${count} `;
    })
  return (
    <div>
       <button onClick={()=> setCount(count+1)}>click {count}</button>
      
    </div>
  )
}
