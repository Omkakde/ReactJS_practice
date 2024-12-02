import React, { Component } from 'react'
import Child from './Childs';
export default class Parent extends Component {

    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }
    clickHandler= () => {
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
      <Child ref={this.inputRef}/>
      <button onClick={this.clickHandler}>Focus</button>      
      </div>
    )
  }
}
