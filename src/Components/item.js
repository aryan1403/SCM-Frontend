export default function Item(props) {
    return (
        <>
        <div class="card" style={{"width": "18rem;"}}>
        <div class="card-body">
            <h5 class="card-title">{props.itemName}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{props.sdesc}</h6>
            <p class="card-text">{props.ldesc}</p>
            <a href="/" class="btn btn-primary">Edit</a>
        </div>
        </div>
        </>
    );
}