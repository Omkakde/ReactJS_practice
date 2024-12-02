import React, { useContext } from 'react'
import {userTitle, userContext } from './Main'

export default function CompB() {
    const user = useContext(userTitle);
    const context = useContext(userContext);
  return (
    <div>
    <h1> type of :{user}, where are you from : {context} </h1>
      
    </div>
  )
}
