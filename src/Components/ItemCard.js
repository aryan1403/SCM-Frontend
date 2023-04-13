import { Link } from "react-router-dom";
import "./Cards.css";

export default function ItemCard(props) {
  return (
    <div class="card text-center">
      <div class="card-header">{props.title}</div>
      <div class="card-body">
        <h5 class="card-title">{props.sdesc}</h5>
        <p class="card-text">
          {props.ldesc}
          {props.price}
        </p>
        <Link to={props.url} class="btn btn-primary">
          {props.mode || "Checkout"}
        </Link>
      </div>
      <div class="card-footer text-body-secondary">Last Updated : {props.lastudate}</div>
    </div>
  );
}
