import React from 'react'
import { useState,useEffect, useRef } from 'react'


export default function Focus() {
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
      <input ref={inputRef} />
    </div>
  )
}
