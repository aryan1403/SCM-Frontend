import React, { useState } from 'react';
import './addItem.css';

export default function UpdateItem(props) {
 /* const [itemName, setItemName] = useState(props.item.itemName);
  const [Ldescription, setLDescription] = useState(props.item.Ldescription);
  const [Sdescription, setSDescription] = useState(props.item.Sdescription);
  const [category, setCategory] = useState(props.item.category);
  const [supplier, setSupplier] = useState(props.item.supplier);
  const [price, setPrice] = useState(props.item.price);
  const [unitOfMeasure, setUnitOfMeasure] = useState(props.item.unitOfMeasure);
  const [quantity, setQuantity] = useState(props.item.quantity); */

  const handleSubmit = (e) => {
    e.preventDefault();
   /* const editedItem = {
      id: props.item.id,
      itemName: itemName,
      Ldescription: Ldescription,
      Sdescription: Sdescription,
      category: category,
      supplier: supplier,
      price: price,
      unitOfMeasure: UnitOfMeasure,
      quantity: quantity
    }; */
    props.handleUpdateItem(editedItem);
  }

  return (
    <div className="update-item-container">
      <h1 className="update-item-header">Update Item</h1>
      <form className="update-item-form" onSubmit={handleSubmit}>
        <div className="update-item-field">
          <label htmlFor="item-name">Item Name:</label>
          <input type="text" id="item-name" name="item-name" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
        </div>

        <div className="update-item-field">
          <label htmlFor="Ldescription">LDescription:</label>
          <input type="text" id="Ldescription" name="Ldescription" value={Ldescription} onChange={(e) => setLDescription(e.target.value)} required />
        </div>

        <div className="update-item-field">
          <label htmlFor="Sdescription">SDescription:</label>
          <input type="text" id="Sdescription" name="Sdescription" value={Sdescription} onChange={(e) => setSDescription(e.target.value)} required />
        </div>

        <div className="update-item-field">
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">-- Select a category --</option>
            <option value="primary aluminium">primary aluminium</option>
            <option value="aluminium value added products">aluminium value added products</option>
            <option value="metallurgical alumina">metallurgical alumina</option>
          </select>
        </div>

        <div className="update-item-field">
          <label htmlFor="supplier">Supplier:</label>
          <input type="text" id="supplier" name="supplier" value={supplier} onChange={(e) => setSupplier(e.target.value)} required />
        </div>

        <div className="update-item-field">
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>

        <div className="update-item-field">
          <label htmlFor="unit">Unit of Measure:</label>
          <input type="text" id="unit" name="unit" value={unitOfMeasure} onChange={(e) => setPrice(e.target.value)} required />

          <label htmlFor="quantity">Quantity:</label>
        <input type="text" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />

        <button type="submit">Update</button>
        <button onClick={() => props.handleCancelUpdate()}>Cancel</button>
      </form>
    </div>
  );
}
