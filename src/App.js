import Items from "./Items";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <div className="other-items">
        <Items />
      </div>
    </div>
  );
}

export default App;
