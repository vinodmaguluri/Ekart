import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/productDetails.css";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const { addToCart } = useCart();

  const product = useMemo(() => products.find((p) => p.id === Number(id)), [id]);

  if (!product) {
    return <main className="ek-page"><div className="ek-empty">Product not found.</div></main>;
  }

  const onAdd = () => {
    addToCart(product);
    nav("/cart");
  };

  return (
    <main className="ek-page">
      <div className="ek-pdp">
        <div className="ek-pdp-left">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="ek-pdp-right">
          <h1 className="ek-pdp-title">{product.name}</h1>
          <div className="ek-pdp-rating">⭐ {product.rating} rating</div>
          <div className="ek-pdp-price">₹{product.price.toLocaleString("en-IN")}</div>
          <div className="ek-pdp-desc">{product.description}</div>

          <div className="ek-pdp-actions">
            <button className="ek-btn ek-btn-primary" onClick={onAdd}>ADD TO CART</button>
            <button className="ek-btn" onClick={() => nav(-1)}>Back</button>
          </div>

          <div className="ek-pdp-bullets">
            <div>✅ 7-Day Replacement</div>
            <div>✅ Cash on Delivery available (demo)</div>
            <div>✅ Free Delivery (demo)</div>
          </div>
        </div>
      </div>
    </main>
  );
}
