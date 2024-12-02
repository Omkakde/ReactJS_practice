import React from 'react'
import Toggle from './Toggle'


export default function Main() {
  return (
    <div>
      <Toggle
        render={({isOn, toggle})=>{
            <div>
                <h2> Light is {isOn ? "OFF" : "ON"}</h2>
                <button onClick={toggle}>Turn  {isOn ? "OFF" : "ON"}</button>
            </div>
        }}
      />
    </div>
  )
}
