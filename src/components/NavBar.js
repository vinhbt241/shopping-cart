import { NavLink } from "react-router-dom";

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
      <h1>Lovely Shop</h1>

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
    </div>
  )
}

export {NavBar}
