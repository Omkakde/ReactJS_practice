import React, { Component } from 'react';

class Child extends Component {
  sendToParent = () => {
    const message = 'Hello from the child!';
    // Calling the sendMessage function passed from parent
    this.props.sendMessage(message);
  };

  render() {
    return (
      <div>
        <button onClick={this.sendToParent}>Send Message to Parent</button>
      </div>
    );
  }
}

export default Child;
