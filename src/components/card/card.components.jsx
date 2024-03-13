import './card.style.css';
const Card =({monster})=>{
     const {name,id,email}=monster;
        return(
            <div className="card-container" key={id}>
            <img alt={`monster ${name}`}src={`https://robohash.org/${id}?set=set2&size=180x180`}></img>
            <h2><em>{name}</em></h2>
            <p><u>{email}</u></p>
        </div>
        );}
export default Card;