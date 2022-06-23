import { Link } from "react-router-dom"

const Home = () => {
  return(
    <div className="Home">
      <h1>Welcome to our shop!</h1>
      <h2>We sell Glasses and Hats from Revachol</h2>
      <Link 
        to="/shop"
        style={{
          backgroundColor: "black",
          color: "white",
          textDecoration: "none",
          padding: "1.5rem",
          borderRadius: "5px"
        }}
      >Go shopping now</Link>
    </div>
  )
}

export {Home}
