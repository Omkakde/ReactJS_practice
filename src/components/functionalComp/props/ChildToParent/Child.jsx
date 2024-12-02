import React from 'react';

function Child({ sendMessage, sendUser, sendItems }) {
  const handleClick = () => {
    // Sending message (string)
    sendMessage('Hello from Child!');

    // Sending user info (object)
    const user = { name: 'John Doe', age: 30 };
    sendUser(user);

    // Sending item list (array)
    const itemList = ['Item 1', 'Item 2', 'Item 3'];
    sendItems(itemList);
  };

  return <button onClick={handleClick}>Send Data to Parent</button>;
}

export default Child;
