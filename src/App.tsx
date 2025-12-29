import React, { useState } from 'react';
import { CartProvider, useCart } from './contexts/CartContext';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import './styles/App.css';

type Page = 'products' | 'cart';

/**
 * Componente de navegação com badge de contador
 */
const Navigation: React.FC<{ currentPage: Page; onNavigate: (page: Page) => void }> = ({
  currentPage,
  onNavigate,
}) => {
  const { getCartItemsCount } = useCart();
  const cartCount = getCartItemsCount();

  return (
    <nav className="navigation" data-testid="navigation">
      <div className="nav-container">
        <h1 className="app-title">🍎 Feira de Frutas</h1>
        
        <div className="nav-buttons">
          <button
            id="nav-products"
            data-testid="nav-products"
            className={`nav-button ${currentPage === 'products' ? 'active' : ''}`}
            onClick={() => onNavigate('products')}
          >
            Produtos
          </button>
          
          <button
            id="nav-cart"
            data-testid="nav-cart"
            className={`nav-button ${currentPage === 'cart' ? 'active' : ''}`}
            onClick={() => onNavigate('cart')}
          >
            Carrinho
            {cartCount > 0 && (
              <span className="cart-badge" data-testid="cart-badge">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

/**
 * Componente principal da aplicação
 */
const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('products');

  return (
    <div className="app" data-testid="app">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="main-content">
        {currentPage === 'products' ? <ProductsPage /> : <CartPage />}
      </main>

      <footer className="footer" data-testid="footer">
        <p>© 2025 Feira de Frutas - App para Testes de Automação</p>
      </footer>
    </div>
  );
};

/**
 * App wrapper com providers
 */
function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
