import React, { useState } from 'react';
import './addItem.css';
import { v4 as uuidv4 } from 'uuid';
import { addItem } from '../helpers/db';

function AddItem() {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [supplier, setSupplier] = useState('');
  const [price, setPrice] = useState('');
  const [unitOfMeasure, setUnitOfMeasure] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to add item to inventory goes here

    /* const data = new db.ItemModel({
      _id: "2",
      title: "xyz",
      sdesc: "xyz",
      ldesc: "abc",
      price: 123,
      quantity: 1,
      supplier: "me",
      cateogery: "idk",
    }); */

    const data = {
      _id: uuidv4().toString(),
      title: itemName,
      sdesc: description,
      ldesc: description,
      price: price,
      quantity: quantity,
      supplier: supplier,
      cateogery: category,
    }

    addItem(data).then(res => alert(res));
  }

  return (
    <div className='additem'>
      <h1 className='additemlabel'>Add Item</h1>
      <form class="form" onSubmit={handleSubmit}>
        <label htmlFor="item-name">Item Name:</label>
        <input type="text" id="item-name" name="item-name" value={itemName} onChange={(e) => setItemName(e.target.value)} required />

        <label htmlFor="long description">Long Description:</label>
        <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <label htmlFor="short description">Short Description:</label>
        <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">-- Select a category --</option>
          <option value="primary aluminium">primary aluminium</option>
          <option value="aluminium value added products">aluminium value added products</option>
          <option value="metallurgical alumina">metallurgical alumina</option>
        </select>

        <label htmlFor="supplier">Supplier:</label>
        <input type="text" id="supplier" name="supplier" value={supplier} onChange={(e) => setSupplier(e.target.value)} required />

        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />

        <label htmlFor="unit">Unit of Measure:</label>
        <input type="text" id="unit" name="unit" value={unitOfMeasure} onChange={(e) => setUnitOfMeasure(e.target.value)} required />

        <label htmlFor="quantity">Quantity:</label>
        <input type="text" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;
