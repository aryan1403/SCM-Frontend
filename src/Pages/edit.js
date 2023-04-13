import React, { useState } from 'react';
import { updateItem } from '../helpers/db';
import { v4 as uuidv4 } from 'uuid';
import './addItem.css';

export default function EditItem(props) {
  const [itemId, setitemId] = useState('');
  const [itemName, setItemName] = useState('');
  const [Ldescription, setLDescription] = useState('');
  const [Sdescription, setSDescription] = useState('');
  const [category, setCategory] = useState('');
  const [supplier, setSupplier] = useState('');
  const [price, setPrice] = useState('');
  const [unitOfMeasure, setUnitOfMeasure] = useState('');
  const [quantity, setQuantity] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      _id: uuidv4().toString(),
      title: itemName,
      sdesc: Sdescription,
      ldesc: Ldescription,
      price: price,
      quantity: quantity,
      supplier: supplier,
      cateogery: category,
    };
    updateItem(data)
    alert("Updated Item Successfully");
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
      <h1>Edit Item</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item-name">Item ID:</label>
        <input type="text" id="item-id" name="item-id" value={itemId} onChange={(e) => setitemId(e.target.value)} required />

        <label htmlFor="item-name">Item Name:</label>
        <input type="text" id="item-name" name="item-name" value={itemName} onChange={(e) => setItemName(e.target.value)} required />

        <label htmlFor="Ldescription">LDescription:</label>
        <input type="text" id="Ldescription" name="Ldescription" value={Ldescription} onChange={(e) => setLDescription(e.target.value)} required />
        <label htmlFor="Sdescription">SDescription:</label>
        <input type="text" id="Sdescription" name="Sdescription" value={Sdescription} onChange={(e) => setSDescription(e.target.value)} required />

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

        <button type="submit">Save</button>
        <button onClick={() => {}}>Cancel</button>
      </form>
    </div>
  );
}
