import './App.css';
import Cards from './Components/Cards';
import NavBar from './Components/NavBar';

function App() {
  const cardsData = [
    {
      img: "https://i0.wp.com/blog.service.works/wp-content/uploads/2021/03/Survey-Form-2.png?fit=1280%2C720&ssl=1",
      content: "Add Item into the Inventory",
      uri: "/addItemInventory"
    },
    {
      img: "https://mybillbook.in/blog/wp-content/uploads/2021/02/inventory-valuation.png",
      content: "Manage Inventory Items",
      uri: "/manageInventory"
    },
    {
      img: "https://mybillbook.in/blog/wp-content/uploads/2021/02/inventory-valuation.png",
      content: "Move to the Admin Console",
      uri: "/adminconsole"
    },
  ];
  return (
    <div className="App">
      <NavBar/>
      <div className='DisplayCards'>
        <Cards className='Cards' img={cardsData[0].img} title="Add Item to Inventory" content={cardsData[0].content} uri={cardsData[0].uri} btn="Add Item"></Cards>
        <Cards className='Cards' img={cardsData[1].img} title="Manage Inventory" content={cardsData[1].content} uri={cardsData[1].uri} btn="Manage Inventory"></Cards>
        <Cards className='Cards' img={cardsData[2].img} title="Admin Console" content={cardsData[2].content} uri={cardsData[2].uri} btn="Console"></Cards>
      </div>
    </div>
  );
}

export default App;
