import React from 'react';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

/**
 * Componente de card do produto
 * Exibe informações do produto e botão para adicionar ao carrinho
 */
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [showFeedback, setShowFeedback] = React.useState(false);

  const handleAddToCart = () => {
    addToCart(product, 1);
    
    // Feedback visual
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 1000);
  };

  return (
    <div
      className="product-card"
      data-testid="product-card"
      data-product-id={product.id}
    >
      <img
        src={product.imagem}
        alt={product.nome}
        className="product-image"
        data-testid="product-image"
      />
      
      <div className="product-info">
        <h3
          className="product-name"
          data-testid="product-name"
        >
          {product.nome}
        </h3>
        
        <span
          className={`product-category category-${product.categoria}`}
          data-testid="product-category"
        >
          {product.categoria}
        </span>
        
        <p
          className="product-price"
          data-testid="product-price"
        >
          R$ {product.preco.toFixed(2)} / {product.unidade}
        </p>
        
        <p
          className="product-stock"
          data-testid="product-stock"
        >
          Estoque: {product.estoque} {product.unidade === 'kg' ? 'kg' : 'un'}
        </p>
        
        <button
          id={`add-to-cart-${product.id}`}
          data-testid="add-to-cart-button"
          className="add-to-cart-button"
          onClick={handleAddToCart}
        >
          Adicionar ao Carrinho
        </button>

        {showFeedback && (
          <div className="add-feedback" data-testid="add-feedback">
            ✓ Adicionado!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
