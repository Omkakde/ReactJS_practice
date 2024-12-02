import React, { Component } from 'react';

export class SetState extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }


  changes = () => {
    this.setState({
      count: this.state.count + 1
    });
  };


   decrement=()=>{
    this.setState({
        count: this.state.count - 1
      });
   }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
     
        <button onClick={this.changes}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default SetState;
