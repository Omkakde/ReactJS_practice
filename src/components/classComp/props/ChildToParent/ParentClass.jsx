import React, { Component } from 'react';
import Child from './Child';  // Importing the child component

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      message: '',  // State to store the message from the child
    };
  }

  // Function to receive the message from the child
  receiveMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <div>
        <h1>Message from Child: {this.state.message}</h1>
        {/* Passing the receiveMessage function to the child */}
        <Child sendMessage={this.receiveMessage} />
      </div>
    );
  }
}

export default Parent;
