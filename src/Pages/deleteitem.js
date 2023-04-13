import React, { useState } from 'react';
import { findItemById } from '../helpers/db';
import './addItem.css';

export default function DeleteItem(props) {
  const [itemId, setitemId] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    findItemById(itemId).then(res => {
        alert(res.msg)
    })


    /* const editedItem = {
      id: props.item.id,
      itemName: itemName,
      Ldescription: Ldescription,
      Sdescription: Sdescription,

      category: category,
      supplier: supplier,
      price: price,
      unitOfMeasure: unitOfMeasure,
      quantity: quantity
    }; */
    //props.handleEditItem(editedItem);
  }


  return (
    <div>
      <h1>Find Item</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item-name">Item ID:</label>
        <input type="text" id="item-id" name="item-id" value={itemId} onChange={(e) => setitemId(e.target.value)} required />

        <button type="submit">Delete</button>
      </form>
    </div>
  );
}
