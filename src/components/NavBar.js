import { NavLink } from "react-router-dom";
import CartSymbol from "../images/shopping_cart.png";

let activeStyle = {
  color: "white",
  textDecoration: "underline"
}

let idleStyle = {
  color: "white",
  textDecoration: "none"
}

const NavBar = (props) => {
  return(
    <div className="NavBar">
      <h1>Super Hardcore Shop</h1>

      <nav>
        <NavLink 
          to="/"
          style={({ isActive }) =>
          isActive ? activeStyle : idleStyle
          }
        >Home</NavLink>
        <NavLink 
          to="/shop"
          style={({ isActive }) =>
          isActive ? activeStyle : idleStyle
          }
        >Shop</NavLink>
      </nav>

      <div className="shopping-cart-link-container">
        <NavLink
          to="/shopping-cart"
          style={({ isActive }) =>
          isActive ? activeStyle : idleStyle
          }
        >
          <div className="shopping-cart-link">
          Cart
          <img src={CartSymbol} alt=""/>
          
          {props.itemAmount !== 0 ? <div className="cart-amount">{props.itemAmount}</div> : ""}

          </div>
        </NavLink>
      </div>
    </div>
  )
}

export {NavBar}
