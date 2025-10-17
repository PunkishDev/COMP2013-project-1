import QuantityCounter from "./QuantityCounter";

export default function CartCard ({
    productName, 
    image, 
    brand, 
    price, 
    cartQuantity,
    handleAddToQuantity, 
    handleRemoveFromQuantity,
    removeItemFromCart
    }) {
    return <div className="CartCard">
        <div className="CartCardInfo">
            <h2>{productName}</h2>
            <img src={image} alt="" />
            <p>{brand}</p>
            <QuantityCounter 
                productQuantity={cartQuantity}
                handleAddToQuantity={handleAddToQuantity}
                handleRemoveFromQuantity={handleRemoveFromQuantity}
                mode={"Cart"}
            />
        </div>
        <div className="CartListBtns">
            <p>Total Price: ${(cartQuantity.quantity * price.replace("$", "")).toFixed(2)}</p>
            <br />
            <button className="RemoveButton" onClick={() => removeItemFromCart(cartQuantity)}>Remove</button>
        </div>
    </div>
}