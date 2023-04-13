import './manageInventory.css';
import Cards from '../Components/Cards';
export default function ManageInventory(props) {
    const cardsData = [
        {
          img: "https://i.pinimg.com/originals/b1/ab/0a/b1ab0ac992812d3d3213f3cb217a23eb.png",
          title: "Add Items",
          content: "Edit Items in the Inventory",
          btn: "Edit",
          uri: "/add"
        },
        {
          img: "https://i.pinimg.com/originals/b1/ab/0a/b1ab0ac992812d3d3213f3cb217a23eb.png",
          title: "Edit Items",
          content: "Edit Items in the Inventory",
          btn: "Edit",
          uri: "/showallItems/edit"
        },
        {
          img: "https://i.pinimg.com/originals/b1/ab/0a/b1ab0ac992812d3d3213f3cb217a23eb.png",
          title: "Find Items",
          content: "Find Items in the Inventory",
          btn: "Find",
          uri: "/showallItems"
        },
        {
          img: "https://i.pinimg.com/originals/b1/ab/0a/b1ab0ac992812d3d3213f3cb217a23eb.png",
          title: "Delete Item",
          content: "Delete Items from the Inventory",
          btn: "Delete",
          uri: "/showallItems/delete"
        },
      ];
    return (
        <>
        <div className="Manage">
        <h1 className='ManageLabel'>Manage Inventory</h1>
          <div className='DisplayCards'>
            {cardsData.map(data => (<Cards className='Cards' img={data.img} title={data.title} content={data.content} uri={data.uri} btn={data.btn}></Cards>))}
          </div>
        </div>
        </>
    );
}
