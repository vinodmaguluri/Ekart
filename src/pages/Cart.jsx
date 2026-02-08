import { Link, useNavigate } from "react-router-dom";
import "../styles/cart.css";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, decreaseQty, addToCart, removeFromCart, totals } = useCart();
  const nav = useNavigate();

  return (
    <main className="ek-page">
      <div className="ek-page-head">
        <h2>My Cart</h2>
        <div className="ek-muted">{totals.items} items</div>
      </div>

      {cartItems.length === 0 ? (
        <div className="ek-empty">
          Your cart is empty. <Link className="ek-link" to="/">Continue shopping</Link>
        </div>
      ) : (
        <div className="ek-cart-layout">
          <div className="ek-cart-list">
            {cartItems.map((i) => (
              <div key={i.id} className="ek-cart-item">
                <img src={i.image} alt={i.name} />
                <div className="ek-cart-info">
                  <div className="ek-cart-name">{i.name}</div>
                  <div className="ek-cart-desc">{i.description}</div>
                  <div className="ek-cart-price">₹{i.price.toLocaleString("en-IN")}</div>

                  <div className="ek-cart-actions">
                    <div className="ek-qty">
                      <button onClick={() => decreaseQty(i.id)}>-</button>
                      <span>{i.qty}</span>
                      <button onClick={() => addToCart(i)}>+</button>
                    </div>
                    <button className="ek-remove" onClick={() => removeFromCart(i.id)}>REMOVE</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="ek-cart-summary">
            <div className="ek-sum-title">PRICE DETAILS</div>
            <div className="ek-sum-row">
              <span>Subtotal</span>
              <span>₹{totals.subtotal.toLocaleString("en-IN")}</span>
            </div>
            <div className="ek-sum-row">
              <span>Delivery</span>
              <span className="ek-green">FREE</span>
            </div>
            <div className="ek-sum-total">
              <span>Total</span>
              <span>₹{totals.subtotal.toLocaleString("en-IN")}</span>
            </div>

            <button className="ek-btn ek-btn-primary ek-full" onClick={() => nav("/payment")}>
              PLACE ORDER
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}
