import React from 'react';
import { useCart } from '../contexts/CartContext';

/**
 * Componente de resumo do carrinho
 * Exibe total e botão de finalizar pedido
 */
const CartSummary: React.FC = () => {
  const { getCartTotal, clearCart } = useCart();
  const [showModal, setShowModal] = React.useState(false);

  const total = getCartTotal();

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    clearCart();
    setShowModal(false);
    alert('Pedido confirmado! Obrigado pela compra! 🎉');
  };

  return (
    <>
      <div className="cart-summary" data-testid="cart-summary">
        <div className="summary-row">
          <span className="summary-label">Total:</span>
          <span className="summary-value" data-testid="cart-total">
            R$ {total.toFixed(2)}
          </span>
        </div>
        
        <button
          id="checkout-button"
          data-testid="checkout-button"
          className="checkout-button"
          onClick={handleCheckout}
        >
          Finalizar Pedido
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay" data-testid="checkout-modal">
          <div className="modal-content">
            <h2>Confirmar Pedido</h2>
            <p>Deseja finalizar o pedido no valor de R$ {total.toFixed(2)}?</p>
            
            <div className="modal-actions">
              <button
                className="modal-button confirm-button"
                data-testid="confirm-checkout-button"
                onClick={handleConfirm}
              >
                Confirmar
              </button>
              <button
                className="modal-button cancel-button"
                data-testid="cancel-checkout-button"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartSummary;
