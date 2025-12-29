import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem } from '../data/products';

// Interface do contexto
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantidade?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantidade: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
}

// Criação do contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Chave para localStorage
const CART_STORAGE_KEY = 'qa-feira-cart';

// Provider do contexto
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Carrega carrinho do localStorage ao inicializar
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(parsedCart);
      } catch (error) {
        console.error('Erro ao carregar carrinho do localStorage:', error);
      }
    }
  }, []);

  // Salva carrinho no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  /**
   * Adiciona um produto ao carrinho
   * Se o produto já existir, incrementa a quantidade
   */
  const addToCart = (product: Product, quantidade: number = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);

      if (existingItem) {
        // Produto já existe, atualiza quantidade
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      } else {
        // Novo produto, adiciona ao carrinho
        return [...prevItems, { product, quantidade }];
      }
    });
  };

  /**
   * Remove um produto do carrinho
   */
  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  /**
   * Atualiza a quantidade de um produto no carrinho
   * Se quantidade for 0 ou negativa, remove o produto
   */
  const updateQuantity = (productId: string, quantidade: number) => {
    if (quantidade <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantidade } : item
      )
    );
  };

  /**
   * Limpa todo o carrinho
   */
  const clearCart = () => {
    setCartItems([]);
  };

  /**
   * Calcula o valor total do carrinho
   * Função pura e determinística
   */
  const getCartTotal = (): number => {
    return cartItems.reduce((total, item) => {
      return total + item.product.preco * item.quantidade;
    }, 0);
  };

  /**
   * Retorna o número total de itens no carrinho
   */
  const getCartItemsCount = (): number => {
    return cartItems.reduce((count, item) => count + item.quantidade, 0);
  };

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Hook personalizado para usar o contexto
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};
