import './App.css';
import Cards from './Components/Cards';
import cardBg from './res/cardbg.jpg';

function App() {
  const cardsData = [
    {
      // img: "https://i0.wp.com/blog.service.works/wp-content/uploads/2021/03/Survey-Form-2.png?fit=1280%2C720&ssl=1",
      img: cardBg,
      title: "Add Item to Inventory",
      content: "Add Item into the Inventory",
      subcontent: "xyz",
      uri: "/add",
      btn: "Add Item",
      click: () => {

      }
    },
    {
      // img: "https://mybillbook.in/blog/wp-content/uploads/2021/02/inventory-valuation.png",
      img: 'https://www.fabmood.com/wp-content/uploads/2022/01/brown-aesthetic-wallpaper-2.jpg',
      title: "Manage Tools",
      content: "Manage Inventory Items",
      subcontent: "Add, update, delete Items",
      uri: "/manageInventory",
      btn: "Manage Inventory",
      click: () => {

      }
    },
    {
      // img: "https://mybillbook.in/blog/wp-content/uploads/2021/02/inventory-valuation.png",
      img: 'https://i.pinimg.com/originals/b1/ab/0a/b1ab0ac992812d3d3213f3cb217a23eb.png',
      title: "Admin",
      content: "Admin Console",
      subcontent: "Add Admins, Remove Admins and much more",
      uri: "/adminconsole",
      btn: "Console",
      click: () => {
      }
    },
  ];
  return (
    <div className="App">
      <div className='DisplayCards'>
        {cardsData.map(data => (<Cards className='Cards' img={data.img} title={data.title} content={data.content} subcontent={data.subcontent} uri={data.uri} btn={data.btn}></Cards>))}
      </div>
    </div>
  );
}

export default App;
