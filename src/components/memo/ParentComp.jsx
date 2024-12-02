import React, { Component } from 'react'
import Memo from './Memo';

export class ParentComp extends Component {
//memo is a higher-order component (HOC) used to optimize performance by preventing
// unnecessary re-renders of functional components. It works by memoizing the component's
// rendered output and only re-rendering it if its props change.
   constructor(){
    super()

    this.state={
        name:"Om Kakde"
    }
   }
   
   componentDidMount(){
    setInterval(() => {
        this.setState={
            name:"Om Kakde"
        }      // it update name in 3ms but same name again
    }, 3000);
   }
  render() {

    console.log("parent compoenent");

    return (
      <div>
        <Memo name={this.state.name}/>     
      </div>
    )
  }
}

export default ParentComp
