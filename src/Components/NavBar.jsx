export default function NavBar({ username = "username" , cart }) {

  return (
    <div className="NavBar">
        <p className="NavUser">Hello, {username}</p>
        <h1 className="NavTitle">Groceries</h1>
        <img src={cart.length > 0 ? "src/assets/cart-full.png": "src/assets/cart-empty.png"} alt="" className="NavCart"/>
    </div>
  );
}
