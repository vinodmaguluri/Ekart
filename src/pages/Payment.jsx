import { useNavigate } from "react-router-dom";
import "../styles/payment.css";
import { useCart } from "../context/CartContext";

export default function Payment() {
  const nav = useNavigate();
  const { totals, clearCart } = useCart();

  const onPay = (e) => {
    e.preventDefault();
    clearCart();
    nav("/success");
  };

  return (
    <main className="ek-page">
      <div className="ek-page-head">
        <h2>Payment Gateway</h2>
        <div className="ek-muted">Total: ₹{totals.subtotal.toLocaleString("en-IN")}</div>
      </div>

      <form className="ek-paybox" onSubmit={onPay}>
        <label>Card Number</label>
        <input required placeholder="XXXX XXXX XXXX XXXX" />
        <div className="ek-payrow">
          <div>
            <label>Expiry</label>
            <input required placeholder="MM/YY" />
          </div>
          <div>
            <label>CVV</label>
            <input required placeholder="***" />
          </div>
        </div>

        <button className="ek-btn ek-btn-primary ek-full" type="submit">
          PAY SECURELY
        </button>

        <div className="ek-note">Demo payment screen (no real transaction).</div>
      </form>
    </main>
  );
}
