import './App.css';
import Cards from './Components/Cards';

function App() {
  const cardsData = [
    {
      img: "https://i0.wp.com/blog.service.works/wp-content/uploads/2021/03/Survey-Form-2.png?fit=1280%2C720&ssl=1",
      content: "Add Item into the Inventory",
      uri: "/addItemInventory",
      click: () => {

      }
    },
    {
      img: "https://mybillbook.in/blog/wp-content/uploads/2021/02/inventory-valuation.png",
      content: "Manage Inventory Items",
      uri: "/manageInventory",
      click: () => {

      }
    },
    {
      img: "https://mybillbook.in/blog/wp-content/uploads/2021/02/inventory-valuation.png",
      content: "Move to the Admin Console",
      uri: "/adminconsole",
      click: () => {
      }
    },
  ];
  return (
    <div className="App">
      <div className='DisplayCards'>
        <Cards className='Cards' img={cardsData[0].img} title="Add Item to Inventory" content={cardsData[0].content} uri={cardsData[0].uri} btn="Add Item" click={cardsData[0].click}></Cards>
        <Cards className='Cards' img={cardsData[1].img} title="Manage Inventory" content={cardsData[1].content} uri={cardsData[1].uri} btn="Manage Inventory" click={cardsData[1].click}></Cards>
        <Cards className='Cards' img={cardsData[2].img} title="Admin Console" content={cardsData[2].content} uri={cardsData[2].uri} btn="Console" click={cardsData[2].click}></Cards>
      </div>
    </div>
  );
}

export default App;
