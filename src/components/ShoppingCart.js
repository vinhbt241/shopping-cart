import { SelectedItem } from "./SelectedItem";

const ShoppingCart = (props) => {
  return(
    <div className="ShoppingCart">
      {props.selectedItems.map(item => {
        return <SelectedItem 
          key={item.name} 
          img={item.image} 
          name={item.name} 
          amount={item.amount} 
          remove={props.remove}
        />
      })}

      <button className="checkout">Checkout</button>
    </div>
  )
}

export {ShoppingCart}
