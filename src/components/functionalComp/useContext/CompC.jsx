import React from 'react'
import {userTitle, userContext } from './Main'
import UserContext from './../../Context/contextForClass/Context';

//this is old way to get data from other compoenent
export default function CompC() {
  return (
    <div>
    
      
      <userTitle.Consumer>
        {
            user => {
                return(
                    <userContext.Consumer>
                       {
                        context =>{
                            return(
                                <h1> type of :{user}, where are you from : {context} </h1>
                            )
                        }
                       }
                    </userContext.Consumer>
                )

            }
        }
      </userTitle.Consumer>
    </div>
  )
}
