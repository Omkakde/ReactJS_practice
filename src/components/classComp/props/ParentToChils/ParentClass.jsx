import React, { Component } from 'react';

import ChildClass from './ChildClass';


class ParentClass extends Component {
  
  handleClick = () => {
    alert('Button clicked!');
  };

  
  data = {
    title: 'React Props',
    description: 'Props are used to pass data between components.' 
  };

  render() {
    return (
      <div>
        
        <ChildClass
          msg="Good morning" // String prop for message
          onClickAction={this.handleClick} // Function prop for event handling
          data={this.data} // Object prop for structured data
        />
      </div>
    );
  }
}

export default ParentClass;
