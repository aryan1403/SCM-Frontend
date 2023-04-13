import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div className='additem'>
      <h1 className='additemlabel'>Delete Item</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="item-name">Item ID:</label>
        <input type="text" id="item-id" name="item-id" value={itemId} onChange={(e) => setitemId(e.target.value)} required />

        <button className='cancelbtn' type="submit">Delete</button>
        <Link to="/showallItems"><button className='cancelbtn' type="submit">Cancel</button></Link>
      </form>
    </div>
  );
}
