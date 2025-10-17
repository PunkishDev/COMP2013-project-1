import QuantityCounter from "./QuantityCounter";

export default function Product({ 
  image, 
  productName,
  brand, 
  price, 
  productQuantity,
  handleAddToQuantity,
  handleRemoveFromQuantity,
  handleAddToCart
  }) {
  return (
    <div className="ProductCard">
      <h2>{productName}</h2>
      <img src={image} alt="" />
      <p>{brand}</p>
      <QuantityCounter 
        productQuantity={productQuantity}
        handleAddToQuantity={handleAddToQuantity}
        handleRemoveFromQuantity={handleRemoveFromQuantity}
        mode={"Product"}
      />
      <p>{price}</p>
      <button onClick={() => handleAddToCart(productQuantity)}>Add to Cart</button>
    </div>
  );
}
