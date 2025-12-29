# 🍎 Feira de Frutas - QA App

Aplicação web simples de compras em uma feira de frutas, desenvolvida especificamente para **treino de automação de testes com Playwright**.

## 📋 Sobre o Projeto

Este é um projeto 100% frontend construído com React + Vite + TypeScript, projetado para ser previsível, bem instrumentado e ideal para testes automatizados E2E.

### ✨ Características

- ✅ **Duas páginas simples**: Produtos e Carrinho
- ✅ **Sem backend**: Dados mockados localmente
- ✅ **Persistência**: Carrinho salvo no localStorage
- ✅ **Responsivo**: Funciona em mobile e desktop
- ✅ **Português (pt-BR)**: Toda interface em português
- ✅ **Test-friendly**: Todos elementos com `data-testid` e IDs estáveis
- ✅ **Comportamento determinístico**: Sem aleatoriedade
- ✅ **Componentes isolados**: Fácil de testar

## 🚀 Tecnologias

- **React 18**
- **TypeScript**
- **Vite**
- **Context API** (gerenciamento de estado)
- **CSS puro** (responsivo)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🎯 Funcionalidades

### Página de Produtos

- 🔍 Busca por nome
- 🏷️ Filtro por categoria (fruta, legume, orgânico)
- 📊 Ordenação por nome ou preço
- ⏳ Estado de loading simulado
- 🚫 Estado "sem resultados"
- ➕ Adicionar produtos ao carrinho
- ✓ Feedback visual ao adicionar

### Página de Carrinho

- 📝 Lista de itens adicionados
- ➕➖ Alterar quantidade
- 🗑️ Remover itens
- 💰 Cálculo de subtotal e total
- 🛒 Estado "carrinho vazio"
- ✅ Finalizar pedido (modal de confirmação)
- 💾 Persistência no localStorage

## 🧪 IDs e Data-TestIds para Automação

Todos os elementos interativos possuem identificadores estáveis:

### Navegação
- `nav-products` - Botão de navegação para produtos
- `nav-cart` - Botão de navegação para carrinho
- `cart-badge` - Badge com contador de itens

### Página de Produtos
- `search-input` - Campo de busca
- `category-filter` - Select de categoria
- `sort-select` - Select de ordenação
- `results-count` - Contador de resultados
- `product-card` - Card de produto
- `product-name` - Nome do produto
- `product-price` - Preço do produto
- `product-category` - Categoria do produto
- `product-stock` - Estoque disponível
- `add-to-cart-button` - Botão adicionar ao carrinho
- `add-feedback` - Feedback de item adicionado
- `loading-state` - Estado de carregamento
- `empty-state` - Estado sem resultados

### Página de Carrinho
- `cart-page` - Container da página
- `empty-cart` - Estado carrinho vazio
- `cart-items-list` - Lista de itens
- `cart-item` - Item do carrinho
- `cart-item-name` - Nome do produto no carrinho
- `cart-item-price` - Preço do produto
- `cart-item-subtotal` - Subtotal do item
- `quantity-input` - Input de quantidade
- `increase-quantity-button` - Botão aumentar quantidade
- `decrease-quantity-button` - Botão diminuir quantidade
- `remove-item-button` - Botão remover item
- `cart-total` - Valor total do carrinho
- `checkout-button` - Botão finalizar pedido
- `checkout-modal` - Modal de confirmação
- `confirm-checkout-button` - Botão confirmar pedido
- `cancel-checkout-button` - Botão cancelar pedido

## 📁 Estrutura do Projeto

```
qa-feira-app/
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── SearchBar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductList.tsx
│   │   ├── CartItem.tsx
│   │   └── CartSummary.tsx
│   ├── contexts/            # Context API
│   │   └── CartContext.tsx
│   ├── data/                # Dados mockados
│   │   └── products.ts
│   ├── pages/               # Páginas principais
│   │   ├── ProductsPage.tsx
│   │   └── CartPage.tsx
│   ├── styles/              # Estilos CSS
│   │   └── App.css
│   ├── App.tsx              # Componente raiz
│   └── main.tsx             # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🧩 Componentes

### CartContext
Gerencia todo o estado do carrinho:
- `addToCart(product, quantidade)` - Adiciona produto
- `removeFromCart(productId)` - Remove produto
- `updateQuantity(productId, quantidade)` - Atualiza quantidade
- `clearCart()` - Limpa carrinho
- `getCartTotal()` - Retorna total (função pura)
- `getCartItemsCount()` - Retorna quantidade de itens

### Funções Puras e Determinísticas

Todas as funções de cálculo são puras e determinísticas:
- Sem efeitos colaterais
- Mesma entrada = mesma saída
- Previsíveis para testes

## 🎨 Responsividade

- **Desktop**: Grid de 3-4 colunas
- **Tablet**: Grid de 2 colunas
- **Mobile**: Grid de 1 coluna
- Navegação adaptável
- Cards e formulários responsivos

## 🚀 Deploy na Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer deploy
vercel

# Deploy para produção
vercel --prod
```

Ou conecte o repositório diretamente no painel da Vercel.

## 📝 Exemplo de Teste com Playwright

```typescript
import { test, expect } from '@playwright/test';

test('adicionar produto ao carrinho', async ({ page }) => {
  await page.goto('http://localhost:5173');
  
  // Clicar no primeiro produto
  await page.getByTestId('add-to-cart-button').first().click();
  
  // Verificar badge do carrinho
  await expect(page.getByTestId('cart-badge')).toHaveText('1');
  
  // Navegar para o carrinho
  await page.getByTestId('nav-cart').click();
  
  // Verificar item no carrinho
  await expect(page.getByTestId('cart-item')).toBeVisible();
});

test('buscar produto', async ({ page }) => {
  await page.goto('http://localhost:5173');
  
  // Buscar por "maçã"
  await page.getByTestId('search-input').fill('maçã');
  
  // Verificar resultados
  await expect(page.getByTestId('product-card')).toHaveCount(1);
});
```

## 📄 Licença

Este projeto é open source e está disponível para fins educacionais.

## 🤝 Contribuindo

Sinta-se à vontade para abrir issues ou enviar PRs com melhorias!

---

**Desenvolvido para treino de automação de testes** 🧪🚀
