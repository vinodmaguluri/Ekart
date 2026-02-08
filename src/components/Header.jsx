import React, { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/header.css";

export default function Header() {
  const { totals } = useCart();
  const [q, setQ] = useState("");
  const nav = useNavigate();
  const loc = useLocation();

  const placeholder = useMemo(() => {
    if (loc.pathname.startsWith("/category")) return "Search within category...";
    return "Search for products, brands and more";
  }, [loc.pathname]);

  const onSubmit = (e) => {
    e.preventDefault();
    nav(`/?q=${encodeURIComponent(q)}`);
  };

  return (
    <header className="ek-header">
      <div className="ek-header-inner">
        <Link className="ek-logo" to="/">EKART</Link>

        <form className="ek-search" onSubmit={onSubmit}>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={placeholder} />
          <button type="submit">Search</button>
        </form>

        <nav className="ek-nav">
          <Link to="/cart" className="ek-cart-link" aria-label="Cart">
            🛒 Cart <span className="ek-badge">{totals.items}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
