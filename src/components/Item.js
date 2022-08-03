import { Link } from "react-router-dom";

const Item = (props) => {
  return(
    <Link 
      to={`/shopping-cart/shop/${props.name}`}
      className="Item">
    <img src={props.img} alt=""/>
    <strong>{props.name}</strong>
    <p>{props.amount}</p>
    </Link>
  )
}

export { Item }
