import CartCard from "./CartCard";

export default function CartContainer({
    cart,
    handleAddToQuantity,
    handleRemoveFromQuantity,
    removeItemFromCart,
    clearCart,
    }) {
    let totalPrice = 0.0;

    return <div className="CartContainer">
        <p>Cart Items: {cart.length}</p>
        {   
            cart.length > 0 ? 
            cart.map((item) => (
                <CartCard 
                    key={item.id} 
                    {...item} 
                    cartQuantity={item}
                    handleAddToQuantity={handleAddToQuantity}
                    handleRemoveFromQuantity={handleRemoveFromQuantity}
                    removeItemFromCart={removeItemFromCart}
                />)) : <p>Cart is Empty</p> 
        }
        <button className="RemoveButton" onClick={() => clearCart()}>Clear Cart</button>
        {
            cart.forEach(item => {
                totalPrice += (item.quantity * parseFloat(item.price.replace("$", "")))
            })
        }
        <button id="BuyButton">Buy Cart Total:${totalPrice.toFixed(2)}</button>
    </div>
}