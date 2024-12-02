import React from 'react';
import Child from './Child';

function Parent() {
  // Function to handle button click
  const handleClick = () => {
    alert('Button clicked!');
  };

  // Object to pass structured data to the child
  const data = {
    title: 'React Props', // Title for display
    description: 'Props are used to pass data between components.' // Description text
  };

  return (
    <div>
     
      <Child 
        msg="Good morning" // String prop for message
        onClickAction={handleClick} // Function prop for event handling
        data={data} // Object prop for structured data
      />
    </div>
  );
}

export default Parent;
