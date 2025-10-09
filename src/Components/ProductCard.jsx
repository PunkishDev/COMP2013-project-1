import {useState} from "react";

export default function Product({img, productName, brand, price}) {
    const [quantity, setQuantity] = useState(0);

    return <div className="ProductCard">
        <h2>{productName}</h2>
        <img src={img} alt=""/>
        <p>{brand}</p>
        <div className="ProductQuantityDiv">
            <button onClick={() => quantity > 0 ? setQuantity(quantity - 1): setQuantity(0)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <p>{price}</p>
        <button>Add to Cart</button>
    </div>
}