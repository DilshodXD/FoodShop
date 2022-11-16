import Items from "./Items";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import "./style.css";

function App() {
  // const getData = (data) => {
  // }
  function getData(data){
    console.log(data);
  }
  return (
    <div className="App">
      <Navbar onSubmit={getData} />
      <Menu />
      <div className="other-items">
        <Items name="sadasdas111"/>
      </div>
    </div>
  );
}

export default App;
