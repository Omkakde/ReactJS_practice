import React from 'react'
import CompC from './../../useContext/CompC';



export const userContext = React.createContext();
// use to send data to other component without relationship
//by using useContext hook
export const userTitle = React.createContext();

function Main() {
   
  return (
    <div>
    <userTitle value={"tutorial of useContext"}>
    <userContext.Provider value={"hallo i m from main functional"}>
        <CompC/>
    </userContext.Provider>
    </userTitle>
    </div>
  )
}
export default Main;
