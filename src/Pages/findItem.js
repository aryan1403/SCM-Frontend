import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { findItemById } from '../helpers/db';
import './addItem.css';

export default function FindItem(props) {
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

    findItemById(itemId).then(res => {
        alert(res.msg)
        if(res.status === 200) {
            res = res.data;
            setItemName(res.title || '');
            setSDescription(res.sdesc || '');
            setLDescription(res.ldesc || '');
            setPrice(res.price || '');
            setQuantity(res.quantity || '');
            setSupplier(res.supplier || '');
            setCategory(res.category || '');
        } else {
            setItemName('');
            setSDescription('');
            setLDescription('');
            setPrice('');
            setQuantity('');
            setSupplier('');
            setCategory('');
        }
        

        
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
      <h1 className='additemlabel'>Find Item</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="item-name">Item ID:</label>
        <input type="text" id="item-id" name="item-id" value={itemId} onChange={(e) => setitemId(e.target.value)} required />

        <label htmlFor="item-name">Item Name:</label>
        <input disabled={true} type="text" id="item-name" name="item-name" value={itemName} onChange={(e) => setItemName(e.target.value)} required />

        <label htmlFor="Ldescription">LDescription:</label>
        <input disabled={true} type="text" id="Ldescription" name="Ldescription" value={Ldescription} onChange={(e) => setLDescription(e.target.value)} required />
        <label htmlFor="Sdescription">SDescription:</label>
        <input disabled={true} type="text" id="Sdescription" name="Sdescription" value={Sdescription} onChange={(e) => setSDescription(e.target.value)} required />

        <label htmlFor="category">Category:</label>
        <select disabled={true} id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">-- Select a category --</option>
          <option value="primary aluminium">primary aluminium</option>
          <option value="aluminium value added products">aluminium value added products</option>
          <option value="metallurgical alumina">metallurgical alumina</option>
        </select>

        <label htmlFor="supplier">Supplier:</label>
        <input disabled={true} type="text" id="supplier" name="supplier" value={supplier} onChange={(e) => setSupplier(e.target.value)} required />

        <label htmlFor="price">Price:</label>
        <input disabled={true} type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />

        <label htmlFor="unit">Unit of Measure:</label>
        <input disabled={true} type="text" id="unit" name="unit" value={unitOfMeasure} onChange={(e) => setUnitOfMeasure(e.target.value)} required />

        <label htmlFor="quantity">Quantity:</label>
        <input disabled={true} type="text" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />

        <button type="submit">Find</button>
        <Link to="/showallItems"><button className='cancelbtn' type="submit">Cancel</button></Link>
      </form>
    </div>
  );
}
