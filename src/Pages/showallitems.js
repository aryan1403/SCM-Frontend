import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../Components/ItemCard";
import { getAllItem } from "../helpers/db";

export default function ShowAllItems(props) {
    useEffect(() => {
        getAllItem().then(res => setdata(res));
    }, []);
    const [data, setdata] = useState(null);
    return (
        <>
        <div className='additem'>
        <h1 className='additemlabel'>All Items</h1>
        <form className="form">
        {data ? data.map(d => <ItemCard url={"/" + props.mode + "/" + d._id} mode={props.mode} title={d.title} sdesc={d.sdesc} ldesc={d.ldesc} price={d.price} lastudate={"Yesterday"} ></ItemCard>) : <p>Loading Data from the Backend</p>}
        </form>
        </div>
        </>
    );
}