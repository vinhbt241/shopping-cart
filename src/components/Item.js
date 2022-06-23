import { Link } from "react-router-dom";

const Item = (props) => {
  return(
    <div className="Item">
      <Link 
        to={`/shop/${props.name}`}
        style={{
          textDecoration: "none",
          color: "black"
      }}>
      <img src={props.img} alt=""/>
      <strong>{props.name}</strong>
      <p>{props.amount}</p>
      </Link>
    </div>
  )
}

export { Item }
