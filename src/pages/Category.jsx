import { useParams } from "react-router-dom";
import "../styles/category.css";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Category() {
  const { categoryName } = useParams();
  const filtered = products.filter((p) => p.category === categoryName);

  const pretty = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <main className="ek-page">
      <div className="ek-page-head">
        <h2>{pretty}</h2>
        <div className="ek-muted">{filtered.length} items</div>
      </div>

      <div className="ek-grid">
        {filtered.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </main>
  );
}
