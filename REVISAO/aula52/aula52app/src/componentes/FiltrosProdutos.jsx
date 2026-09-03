import { useState, useEffect } from "react";

export default function FiltrosProdutos({ onFiltro, categories = [] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    if (typeof onFiltro === "function") {
      onFiltro({ search, category, sort });
    }
  }, [search, category, sort, onFiltro]);

  const categoriasUnicas = Array.from(new Set(categories));

  return (
    <div className="controls filtros-produtos">
      <input
        id="searchInput"
        data-testid="search-input"
        type="text"
        placeholder="🔎 Buscar produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        id="categorySelect"
        data-testid="category-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">Todas as categorias</option>
        {categoriasUnicas.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        id="sortSelect"
        data-testid="sort-select"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="default">Ordenar</option>
        <option value="price-asc">Menor preço</option>
        <option value="price-desc">Maior preço</option>
        <option value="title">Nome A-Z</option>
      </select>
    </div>
  );
}
