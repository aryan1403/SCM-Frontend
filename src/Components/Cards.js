import { Link } from "react-router-dom";
import './Cards.css';

export default function Cards(props) {
  return (
    <div className="card">
    <img className="card-img" src={props.img} alt={props.title} />
    <div className="card-img-overlay">
        <h3 className="card-title">{props.title}</h3>
        <br/>
        <h4 className="card-text">{props.content}</h4>
        <br/>
        <h3 className="card-subtext">{props.subcontent}</h3>
        <Link to={props.uri} onClick={props.click} id='cardbtn' className="btn btn-primary">{props.btn}</Link>
    </div>
    </div>
  );
}
