// App.js
import React, { useState, useEffect } from 'react';
import UserList from './UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetching data (simulating an API call)
  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' }
      ]);
      setIsLoading(false);
    }, 2000); // Simulating a 2-second delay
  }, []);

  return (
    <div>
      <h1>Higher-Order Component Example</h1>
      <UserList isLoading={isLoading} users={users} />
    </div>
  );
};

export default App;
