import { Link } from "react-router-dom";

const NavBar = () => {
  return(
    <div className="NavBar">
      <h1>Lovely Shop</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>
    </div>
  )
}

export {NavBar}
