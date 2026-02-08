import { Link, useSearchParams } from "react-router-dom";
import "../styles/home.css";
import { categories } from "../data/categories";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const hero = "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1800&q=60";

export default function Home() {
  const [params] = useSearchParams();
  const q = (params.get("q") || "").trim().toLowerCase();

  const results = q
    ? products.filter((p) =>
        (p.name + " " + p.description).toLowerCase().includes(q)
      )
    : [];

  return (
    <main className="ek-home">
      <section className="ek-hero">
        <img src={hero} alt="EKART banner" />
        <div className="ek-hero-overlay">
          <div className="ek-hero-title">Big Savings on EKART</div>
          <div className="ek-hero-sub">Browse categories and shop like Ekart</div>
        </div>
      </section>

      {q ? (
        <section className="ek-section">
          <div className="ek-section-head">
            <h2>Search results for “{q}”</h2>
            <Link to="/" className="ek-link">Clear</Link>
          </div>
          <div className="ek-grid">
            {results.map((p) => <ProductCard key={p.id} p={p} />)}
            {results.length === 0 && <div className="ek-empty">No matching products found.</div>}
          </div>
        </section>
      ) : (
        <>
          <section className="ek-section">
            <div className="ek-section-head">
              <h2>Shop by Category</h2>
            </div>
            <div className="ek-catgrid">
              {categories.map((c) => (
                <Link key={c.key} to={`/category/${c.key}`} className="ek-catcard">
                  <img src={c.image} alt={c.name} loading="lazy" />
                  <div className="ek-catname">{c.name}</div>
                </Link>
              ))}
            </div>
          </section>

          <section className="ek-section">
            <div className="ek-section-head">
              <h2>Top Deals</h2>
            </div>
            <div className="ek-grid">
              {products.slice(0, 6).map((p) => <ProductCard key={p.id} p={p} />)}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
