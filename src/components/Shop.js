import { getItems } from "../data";
import { Item } from "./Item";

const Shop = () => {
  const items = getItems();

  return(
    <div className="Shop">
      {items.map(item => {
        return <Item key={item.name} img={item.image} name={item.name} amount={item.amount}/>
      })}
    </div>
  )
}

export {Shop}
