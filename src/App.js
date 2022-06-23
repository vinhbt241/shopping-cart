import { Outlet } from "react-router-dom";
import { NavBar} from "./components/NavBar";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
