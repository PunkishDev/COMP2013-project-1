export default function QuantityCounter({ 
  productQuantity,
  handleAddToQuantity,
  handleRemoveFromQuantity,
  mode
  }) {
  return (
    <div className="ProductQuantityDiv">
      <button className="QuantityBtn" onClick={() => handleRemoveFromQuantity(productQuantity.id, mode)}>-</button>
      <p>{productQuantity.quantity}</p>
      <button className="QuantityBtn" onClick={() => handleAddToQuantity(productQuantity.id, mode)}>+</button>
    </div>
  );
}
