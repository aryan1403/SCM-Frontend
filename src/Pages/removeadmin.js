import { useState } from "react";

export default function RemoveAdmin() {
    const [AdminId, setitemId] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Removed Admin User Successfully')



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
            <h1>Remove Admin</h1>
            <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item-name">Admin ID:</label>
        <input type="text" id="item-id" name="item-id" value={AdminId} onChange={(e) => setitemId(e.target.value)} required />
    
        <button type="submit">Remove Admin</button>
      </form>
    </div>
        </>
    );
}