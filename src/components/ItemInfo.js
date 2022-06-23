import { useParams } from "react-router-dom";
import { getItem } from "../data";

const ItemInfo = () => {
  let params = useParams();
  let item = getItem(params.name);

  return (
    <div className="ItemInfo">
      <img src={item.image} alt=""/>
      <div className="info-container">
        <h2>{item.name}</h2>
        <h3>Category</h3>
        <p>{item.category}</p>
        <h3>Price</h3>
        <p>{item.amount}</p>
        <h3>Description</h3>
        <p>{item.description}</p>

        <button className="add-item">Add To Cart</button>
      </div>
    </div>
  )
}

export { ItemInfo }
