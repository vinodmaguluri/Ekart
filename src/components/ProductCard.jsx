import { Link } from "react-router-dom";
import "../styles/productCard.css";

export default function ProductCard({ p }) {
  return (
    <Link to={`/product/${p.id}`} className="ek-pcard">
      <div className="ek-pimgwrap">
        <img src={p.image} alt={p.name} loading="lazy" />
      </div>
      <div className="ek-pmeta">
        <div className="ek-pname">{p.name}</div>
        <div className="ek-prating">⭐ {p.rating}</div>
        <div className="ek-pprice">₹{p.price.toLocaleString("en-IN")}</div>
        <div className="ek-ptag">Special Price</div>
      </div>
    </Link>
  );
}
