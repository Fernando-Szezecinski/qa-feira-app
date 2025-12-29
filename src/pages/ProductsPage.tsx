import React, { useState, useEffect } from 'react';
import { products as allProducts, CategoryFilter, SortOption } from '../data/products';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';

/**
 * Página de pesquisa e listagem de produtos
 * Inclui busca, filtros por categoria e ordenação
 */
const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('todos');
  const [sortOption, setSortOption] = useState<SortOption>('nome');
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Simula loading ao carregar a página
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Aplica filtros e ordenação sempre que os critérios mudarem
  useEffect(() => {
    let result = [...allProducts];

    // Filtro por busca
    if (searchTerm) {
      result = result.filter((product) =>
        product.nome.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por categoria
    if (categoryFilter !== 'todos') {
      result = result.filter((product) => product.categoria === categoryFilter);
    }

    // Ordenação
    if (sortOption === 'nome') {
      result.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (sortOption === 'preco') {
      result.sort((a, b) => a.preco - b.preco);
    }

    setFilteredProducts(result);
  }, [searchTerm, categoryFilter, sortOption]);

  return (
    <div className="products-page" data-testid="products-page">
      <div className="filters-section" data-testid="filters-section">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <div className="filter-controls">
          <div className="filter-group">
            <label htmlFor="category-filter">Categoria:</label>
            <select
              id="category-filter"
              data-testid="category-filter"
              className="filter-select"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value as CategoryFilter)}
            >
              <option value="todos">Todas</option>
              <option value="fruta">Frutas</option>
              <option value="legume">Legumes</option>
              <option value="organico">Orgânicos</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="sort-select">Ordenar por:</label>
            <select
              id="sort-select"
              data-testid="sort-select"
              className="filter-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as SortOption)}
            >
              <option value="nome">Nome</option>
              <option value="preco">Preço</option>
            </select>
          </div>
        </div>

        <div className="results-count" data-testid="results-count">
          {!isLoading && `${filteredProducts.length} produto(s) encontrado(s)`}
        </div>
      </div>

      <ProductList products={filteredProducts} isLoading={isLoading} />
    </div>
  );
};

export default ProductsPage;
