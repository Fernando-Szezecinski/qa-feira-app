import React from 'react';
import { Product } from '../data/products';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  isLoading: boolean;
}

/**
 * Componente de lista de produtos
 * Exibe grid de produtos ou estados de loading/vazio
 */
const ProductList: React.FC<ProductListProps> = ({ products, isLoading }) => {
  if (isLoading) {
    return (
      <div className="loading-state" data-testid="loading-state">
        <div className="spinner"></div>
        <p>Carregando produtos...</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="empty-state" data-testid="empty-state">
        <p>Nenhum produto encontrado</p>
        <p className="empty-subtitle">Tente ajustar os filtros de busca</p>
      </div>
    );
  }

  return (
    <div className="product-list" data-testid="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
