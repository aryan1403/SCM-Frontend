import React, { useState } from 'react';
import './addItem.css';
export default function Delete(props) {
  
  const [itemID, setItemID] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
     <div className='additem'>
      <h1 className='additemlabel'>Delete Item</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="item-ID">Item ID:</label>
        <input type="text" name="item-ID" value={itemID} onChange={(e) => setItemID(e.target.value)} required />


        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}

export default Inventory;
