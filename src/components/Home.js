import { Link } from "react-router-dom"

const Home = () => {
  return(
    <div className="Home">
      <div className="message">
        <h1>Welcome to our shop!</h1>
        <h2>We sell glasses and hats from Revachol</h2>
        <Link 
          to="/shopping-cart/shop"
          style={{textDecoration: "none"}}>
          <div className="link-to-shop">Go shopping now</div>
        </Link>
      </div>
    </div>
  )
}

export {Home}
