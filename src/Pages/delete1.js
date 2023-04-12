import React, { useState } from 'react';

function Inventory() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', quantity: 10 },
    { id: 2, name: 'Item 2', quantity: 5 },
    { id: 3, name: 'Item 3', quantity: 20 },
  ]);

  // Function to delete an item from the inventory
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Inventory</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} ({item.quantity}){' '}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;
