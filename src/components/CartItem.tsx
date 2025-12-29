import React from 'react';
import { CartItem as CartItemType } from '../data/products';
import { useCart } from '../contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

/**
 * Componente de item do carrinho
 * Permite alterar quantidade e remover item
 */
const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantidade } = item;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(product.id, newQuantity);
    }
  };

  const subtotal = product.preco * quantidade;

  return (
    <div
      className="cart-item"
      data-testid="cart-item"
      data-product-id={product.id}
    >
      <img
        src={product.imagem}
        alt={product.nome}
        className="cart-item-image"
        data-testid="cart-item-image"
      />
      
      <div className="cart-item-details">
        <h4 className="cart-item-name" data-testid="cart-item-name">
          {product.nome}
        </h4>
        <p className="cart-item-price" data-testid="cart-item-price">
          R$ {product.preco.toFixed(2)} / {product.unidade}
        </p>
      </div>
      
      <div className="cart-item-quantity">
        <button
          className="quantity-button"
          data-testid="decrease-quantity-button"
          onClick={() => handleQuantityChange(quantidade - 1)}
          aria-label="Diminuir quantidade"
        >
          -
        </button>
        
        <input
          type="number"
          className="quantity-input"
          data-testid="quantity-input"
          value={quantidade}
          onChange={(e) => handleQuantityChange(Number(e.target.value))}
          min="1"
        />
        
        <button
          className="quantity-button"
          data-testid="increase-quantity-button"
          onClick={() => handleQuantityChange(quantidade + 1)}
          aria-label="Aumentar quantidade"
        >
          +
        </button>
      </div>
      
      <div className="cart-item-subtotal">
        <p className="subtotal-label">Subtotal:</p>
        <p className="subtotal-value" data-testid="cart-item-subtotal">
          R$ {subtotal.toFixed(2)}
        </p>
      </div>
      
      <button
        className="remove-item-button"
        data-testid="remove-item-button"
        onClick={() => removeFromCart(product.id)}
        aria-label="Remover item"
      >
        🗑️
      </button>
    </div>
  );
};

export default CartItem;
