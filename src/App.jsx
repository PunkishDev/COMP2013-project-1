import "./App.css";
import GroceriesApp from "./Components/GroceriesApp";
import products from "./data/products";

function App() {
  return (<>
    <GroceriesApp data={products}/>
  </>);
}

export default App;
