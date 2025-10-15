import QuantityCounter from "./QuantityCounter";

export default function Product({ img, productName, brand, price }) {
  return (
    <div className="ProductCard">
      <h2>{productName}</h2>
      <img src={img} alt="" />
      <p>{brand}</p>
      <QuantityCounter quantity={1} />
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
