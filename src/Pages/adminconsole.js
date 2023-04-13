import Cards from "../Components/Cards";
import './adminconsole.css';
export default function AdminConsole(props) {
    return (
        <>
        <div className="aconsole">
        <h1>Admin Console</h1>
        <div className="DisplayCards">
        <Cards className='Cards' img={''} title="Add new Admin to Inventory" content={'Add Admin User'} uri={'/addadmin'} btn="Add Admin" click={() => {}}></Cards>
        <Cards className='Cards' img={''} title="Remove Admin from Inventory" content={'Remove Admin User'} uri={'/removeadmin'} btn="Remove Admin" click={() => {}}></Cards>
        </div>
        </div>
        </>
    );
}