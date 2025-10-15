import CartContainer from "./CartContainer";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";

export default function GroceriesAppContainer({ data }) {
  return (
    <div>
      <NavBar />
      <ProductsContainer products={data} />
      <CartContainer />
    </div>
  );
}
