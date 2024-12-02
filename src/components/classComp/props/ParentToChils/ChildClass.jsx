import React, { Component } from 'react';

class ChildClass extends Component {
  render() {
   
    const { msg, onClickAction, data } = this.props;

    return (
      <div>
       
        <h1>{msg}</h1>
        
       
        <p>{data.title}: {data.description}</p>
        
       
        <button onClick={onClickAction}>Click Me</button>
      </div>
    );
  }
}

export default ChildClass;
