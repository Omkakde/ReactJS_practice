import React from 'react';

function Child(props) {
  // Destructure props to access individual values
  const { msg, onClickAction, data } = props;

  return (
    <div>
      {/* Display the message passed from the parent */}
      <h1>{msg}</h1>
      
      {/* Display (title and description) */}
      <p>{data.title}: {data.description}</p>
      
      {/* Button to call the parent function */}
      <button onClick={onClickAction}>Click Me</button>
    </div>
  );
}

export default Child;
