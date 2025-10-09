import Product from "./ProductCard"

export default function ProductsContainer({products}) {
    return <div className="ProductsContainer">
        {
            products.map((product) => (
                <Product key={product['id']}
                    productName={product['productName']}
                    brand={product['brand']}
                    price={product['price']}
                    img={product['image']}/>
            ))
        }
    </div>
}