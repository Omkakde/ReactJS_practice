import React from 'react'

export default function Child({title}) {
 if(title==="ErrorData"){
    throw new Error('is not Coding Language')
 }
  return (
    <div>
    <h3>{title}</h3>
      
    </div>
  )
}
