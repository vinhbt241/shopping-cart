import { Outlet } from "react-router-dom";
import { NavBar} from "./components/NavBar";
import "./styles/App.css";

function App(props) {
  return (
    <div className="App">
      <NavBar itemAmount={props.itemAmount}/>
      <Outlet />
    </div>
  );
}

export default App;
