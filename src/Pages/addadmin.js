import { useState } from "react";

export default function AddAdmin() {
    const [AdminId, setitemId] = useState('');
  const [AdminName, setItemName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Added Admin User Successfully')



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
        <>
            <h1>Add Admin</h1>
            <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item-name">Admin ID:</label>
        <input type="text" id="item-id" name="item-id" value={AdminId} onChange={(e) => setitemId(e.target.value)} required />

        <label htmlFor="item-name">Admin Mail:</label>
        <input  type="text" id="item-name" name="item-name" value={AdminName} onChange={(e) => setItemName(e.target.value)} required />

    
        <button type="submit">Add Admin</button>
      </form>
    </div>
        </>
    );
}