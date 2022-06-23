import { useState } from "react";

const SelectedItem = (props) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }

  const decreaseQuantity = () => {
    if((quantity - 1) === 0) {
      props.remove(props.name);
    } else {
      setQuantity(quantity - 1);
    } 
  }

  return(
    <div className="SelectedItem">
      <img src={props.img} alt = "" />
      <p>{props.name}</p>
      <div>
        <button onClick={decreaseQuantity}>-</button>
        {quantity}
        <button onClick={increaseQuantity}>+</button>
      </div>
      <p>{props.amount}</p>
    </div>
  )
}

export{ SelectedItem }
