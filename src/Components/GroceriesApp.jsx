import {useState} from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import NavBar from "./NavBar";

export default function GroceriesApp({data}) {
    const [productQuantity, setProductQuantity] = useState(data.map((prod) => {
        return {
            id: prod.id,
            ...prod,
            quantity: 0,
        }
    }));

    //New state for the cart which starts as an empty array
    const [cart, setCart] = useState([]);

    //Quantity Change Functions
    const handleAddToQuantity = (productId, mode) => {
        if (mode === "Product") {
            const newProductQuantity = productQuantity.map((prod) => {
                return prod.id === productId ? {...prod, quantity: prod.quantity + 1} : prod;
            });
            setProductQuantity(newProductQuantity);
            return;
        }else if (mode === "Cart") {
            const newCart = cart.map((prod) => {
                return prod.id === productId ? {...prod, quantity: prod.quantity + 1} : prod;
            })
            setCart(newCart);
            return;
        }else {
            alert("Invalid Mode Type: " + mode);
            return;
        }
    };

    const handleRemoveFromQuantity = (productId, mode) => {
        if (mode === "Product") {
            const newProductQuantity = productQuantity.map((prod) => {
                return (prod.id === productId && prod.quantity > 0) ? {...prod, quantity: prod.quantity - 1} : prod;
            })
            setProductQuantity(newProductQuantity);
            return;
        }else if (mode === "Cart") {
            let deleteItem = false;
            const newCart = cart.map((prod) => {
                if (prod.id === productId) {
                    if(prod.quantity > 1) {
                        return {...prod, quantity: prod.quantity - 1};
                    }else {
                        deleteItem = true;
                    }
                }else {
                    return prod;
                }
            });
            setCart(newCart);

            if(deleteItem) {
                removeItemFromCart(cart.find((prod) => prod.id === productId))
            }

            return;
        }else {
            alert("Invalid Mode Type: " + mode);
            return;
        }
    }
    //---------------------------------------

    //Adding a product to the cart
    const handleAddToCart = (productToAdd) => {
        const currentProduct = data.find((prod) => prod.id === productToAdd.id);
        const productInCart = cart.find((prod) => prod.id === productToAdd.id);
        
        //Ensuring there is a non-zero quantity
        if (productToAdd.quantity === 0) {
            alert("Please add quantity before adding to cart");
            return;
        }

        if(!productInCart) {
            setCart((prevCart) => {
                return [
                    ...prevCart, 
                    {
                        ...currentProduct, 
                        quantity: productToAdd.quantity
                    }];
            })
        }
        else {
            alert("Item already exists in cart!");
        }
    }

    //Removing an item from the cart
    const removeItemFromCart = (product) => {
        //Got stuck on this one because I forgot how to remove an object from a JS array
        //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
        // ^ Source for where I got the idea from
        const newCart = cart.filter((prod) => {
            return prod !== product;
        })
        setCart(newCart);
        return;
    }

    const clearCart = () => {
        setCart([]);
    }


    return (<div className="GroceriesApp-Container">
        <NavBar cart={cart} />
        <ProductsContainer 
            products={data} 
            productQuantity={productQuantity} 
            handleAddToQuantity={handleAddToQuantity}
            handleRemoveFromQuantity={handleRemoveFromQuantity}
            handleAddToCart={handleAddToCart}
        />
        <CartContainer 
            cart={cart} 
            handleAddToQuantity={handleAddToQuantity}
            handleRemoveFromQuantity={handleRemoveFromQuantity}
            removeItemFromCart={removeItemFromCart}
            clearCart={clearCart}
        />
    </div>);
}