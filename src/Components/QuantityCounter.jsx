import { useState } from "react";

export default function QuantityCounter({ quantity = 0 }) {
  const [quant, setQuantity] = useState(quantity);
  return (
    <div className="ProductQuantityDiv">
      <button
        onClick={() =>
          quant > quantity ? setQuantity(quant - 1) : setQuantity(quantity)
        }
      >
        -
      </button>
      <p>{quant}</p>
      <button onClick={() => setQuantity(quant + 1)}>+</button>
    </div>
  );
}
