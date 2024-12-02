import React, { Component } from 'react'

export default class State extends Component {

    constructor(){
        super()
        this.state={
            msg:'Good Morning'
        }
    }

    ChangeMsg(){
        this.setState({msg:'Good Night'})
    }

  render() {
    return (
      <div>
         <h1>{this.state.msg}</h1>
         <button onClick={()=> ChangeMsg()}>Night Time</button>
        
      </div>
    )
  }
}
