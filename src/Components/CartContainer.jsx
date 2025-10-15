import ProductCard from "./ProductCard";

export default function CartContainer({ items = [] }) {
  return (
    <div className="CartContainer">
      {items.length === 0 ? (
        <p>No Items in Cart</p>
      ) : (
        () => {
          items.map((item) => {
            <ProductCard key={id} {...item} />;
          });
        }
      )}
    </div>
  );
}
