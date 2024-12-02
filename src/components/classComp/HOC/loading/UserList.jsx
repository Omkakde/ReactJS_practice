// UserList.js
import React, { useState, useEffect } from 'react';
import withLoading from './WithLoading';

// The component that will use the HOC
const UserList = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

// Wrapping the UserList component with the withLoading HOC
export default withLoading(UserList);
