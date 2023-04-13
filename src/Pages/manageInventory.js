import './manageInventory.css';
import Cards from '../Components/Cards';
export default function ManageInventory(props) {
    const cardsData = [
        {
          img: "",
          content: "Edit Items in the Inventory",
          uri: "/edit"
        },
        {
          img: "",
          content: "Update Items in the Inventory",
          uri: "/update"
        },
        {
          img: "",
          content: "Delete Items from the Inventory",
          uri: "/delete"
        },
      ];
    return (
        <><h1>Manage Inventory</h1><div className="Manage">
            
            <div className='DisplayCards'>
                <Cards className='Cards' img={cardsData[0].img} title=" Edit Items" content={cardsData[0].content} uri={cardsData[0].uri} btn="Edit Item"></Cards>
                <Cards className='Cards' img={cardsData[1].img} title="Update Items" content={cardsData[1].content} uri={cardsData[1].uri} btn="Update Item"></Cards>
                <Cards className='Cards' img={cardsData[2].img} title="Delete Items" content={cardsData[2].content} uri={cardsData[2].uri} btn="Delete Item"></Cards>
            </div>
        </div></>
    );
}
