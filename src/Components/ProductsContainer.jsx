import Product from "./ProductCard"

export default function ProductsContainer({
    products, 
    productQuantity,
    handleAddToQuantity,
    handleRemoveFromQuantity,
    handleAddToCart
    }) {
    return <div className="ProductsContainer">
        {
            products.map((product) => (
                <Product 
                    key={product.id} 
                    {...product} 
                    productQuantity={productQuantity.find((prod) => prod.id === product.id)}
                    handleAddToQuantity={handleAddToQuantity}
                    handleRemoveFromQuantity={handleRemoveFromQuantity}
                    handleAddToCart={handleAddToCart}
                />
            ))
        }
    </div>
}