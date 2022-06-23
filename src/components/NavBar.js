import { NavLink } from "react-router-dom";
import CartSymbol from "../images/shopping_cart.png"

let activeStyle = {
  color: "white",
  textDecoration: "underline"
}

let idleStyle = {
  color: "white",
  textDecoration: "none"
}

const NavBar = () => {
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

      <button className="shopping-cart">
          <img src={CartSymbol} alt=""/>
      </button>
    </div>
  )
}

export {NavBar}
