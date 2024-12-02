import React, { useState } from 'react';

function Child({ items, onAdd, onEdit, onRemove }) {
  const [newItem, setNewItem] = useState('');
  const [editItem, setEditItem] = useState({ id: null, name: '' });

  const handleAdd = () => {
    if (newItem) {
      onAdd(newItem);
      setNewItem('');
    }
  };

  const handleEditSave = () => {
    onEdit(editItem.id, editItem.name);
    setEditItem({ id: null, name: '' });
  };

  return (
    <div>
      {/* Add Item */}
      <input
        type="text"
        placeholder="Add item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      {/* List Items */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editItem.id === item.id ? (
              <>
                <input
                  type="text"
                  value={editItem.name}
                  onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
                />
                <button onClick={handleEditSave}>Save</button>
                <button onClick={() => setEditItem({ id: null, name: '' })}>Cancel</button>
              </>
            ) : (
              <>
                {item.name}
                <button onClick={() => setEditItem({ id: item.id, name: item.name })}>
                  Edit
                </button>
                <button onClick={() => onRemove(item.id)}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Child;
