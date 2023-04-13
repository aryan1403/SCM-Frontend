import { useState } from "react";
import { sendcode, sendmsg } from "../helpers/db";

export default function WhatsAppLogin() {
    const [number, setnumber] = useState('');
    const [code, setcode] = useState('');
    const [isdis, setisdis] = useState(true);


    var c = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    

  const handleSubmit = (e) => {
    e.preventDefault();
    var c1 = c;
    if(isdis) {
        sendcode(c, number);
        alert('Code Sent Successfully to ' + number);

        setisdis(false);
        console.log(c, code);
    } else {
        alert('Logged in Successfully');
        sendmsg(number, "Logged in Succesfully")
    }


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
            <h1>WhatsApp Login</h1>
            <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item-name">Enter your number:</label>
        <input type="text" id="item-id" name="item-id" value={number} onChange={(e) => setnumber(e.target.value)} required />
    

        <label htmlFor="item-name">Enter your code:</label>
        <input disabled={isdis} type="text" id="item-id" name="item-id" value={code} onChange={(e) => setcode(e.target.value)} required />
    
        <button type="submit">Validate</button>
      </form>
    </div>
        </>
    );
}