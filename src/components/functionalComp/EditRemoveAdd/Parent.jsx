import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  // Add Item
  const addItem = (name) => {
    setItems([...items, { id: Date.now(), name }]);
  };

  // Edit Item
  const editItem = (id, newName) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <Child
        items={items}
        onAdd={addItem}
        onEdit={editItem}
        onRemove={removeItem}
      />
    </div>
  );
}

export default Parent;
