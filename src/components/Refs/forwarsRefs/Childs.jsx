import React from 'react'

// reference always 2nd paramenter accept
function Childs(props,ref) {
  return (
    <div>
       <input type='text' ref={ref}></input>
      
    </div>
  )
}

export default Childs
