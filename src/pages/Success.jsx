import { Link } from "react-router-dom";
import "../styles/success.css";

export default function Success() {
  return (
    <main className="ek-page">
      <div className="ek-success">
        <div className="ek-check">✅</div>
        <h1>Order Placed Successfully</h1>
        <p>Your order is confirmed. Thank you for shopping with EKART!</p>
        <Link className="ek-linkbtn" to="/">Back to Home</Link>
      </div>
    </main>
  );
}
