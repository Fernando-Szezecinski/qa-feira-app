import React from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';

/**
 * Página do carrinho de compras
 * Exibe itens, permite editar quantidades e finalizar pedido
 */
const CartPage: React.FC = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page" data-testid="cart-page">
        <h1>Carrinho de Compras</h1>
        <div className="empty-cart" data-testid="empty-cart">
          <p>🛒 Seu carrinho está vazio</p>
          <p className="empty-subtitle">
            Adicione produtos para começar suas compras!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page" data-testid="cart-page">
      <h1>Carrinho de Compras</h1>
      
      <div className="cart-items-list" data-testid="cart-items-list">
        {cartItems.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>

      <CartSummary />
    </div>
  );
};

export default CartPage;
