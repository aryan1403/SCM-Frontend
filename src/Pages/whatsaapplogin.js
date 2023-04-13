import { useState } from "react";
import { sendcode, sendmsg } from "../helpers/db";

export default function WhatsAppLogin() {
  const [number, setnumber] = useState('');
  const [code, setcode] = useState('');
  const [isdis, setisdis] = useState(true);
  const [btntxt, setbtntxt] = useState("Send Code");
  const [verifycode, setverifycode] = useState("");
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(number.length < 10) {
      alert("Enter a valid Phone number")
    } else {
      console.log(number);
      if(isdis) {
        var c = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
        sendcode(c, number);
        alert('Code Sent Successfully to ' + number);

        setisdis(false);
        setverifycode(code);
        setbtntxt("Verify Code")
      } else {
        if(code === verifycode) {
          alert('Logged in Successfully');
          sendmsg(number, "Logged in Succesfully")
        } else {
          alert('Invalid Code');
        }
      }
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
        <div className="additem">
        <h1 className="additemlabel">WhatsApp Login</h1>
        <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item-name">Enter your number:</label>
          <input type="text" value={number} name="item-name" onChange={(e) => setnumber(e.target.value)} required />
        </div>
        <div hidden={isdis}>
          <label htmlFor="item-name">Enter your code:</label>
          <input type="text" value={code} name="item-name" onChange={(e) => setcode(e.target.value)} required />
        </div>
          <button style={{"width": "max-content"}} type="submit">{btntxt}</button>
        </form>
        </div>
        </>
    );
}