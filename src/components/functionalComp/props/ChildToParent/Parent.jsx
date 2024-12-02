import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState({ name: '', age: '' });
  const [items, setItems] = useState([]);

  const receiveMessage = (msg) => {
    setMessage(msg);  // Set message state
  };

  const receiveUser = (userData) => {
    setUser(userData);  // Set user object state
  };

  const receiveItems = (itemList) => {
    setItems(itemList);  // Set array state
  };

  return (
    <div>
      <h1>Data from Child</h1>
      <p>Message: {message}</p>
      <p>User Info: {user.name}, {user.age}</p>
      <p>Items: {items.join(', ')}</p>

      <Child
        sendMessage={receiveMessage}
        sendUser={receiveUser}
        sendItems={receiveItems}
      />
    </div>
  );
}

export default Parent;
