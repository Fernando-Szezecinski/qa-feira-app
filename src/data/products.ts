// Tipos de dados da aplicação

export interface Product {
  id: string;
  nome: string;
  categoria: 'fruta' | 'legume' | 'organico';
  preco: number;
  estoque: number;
  imagem: string;
  unidade: 'kg' | 'unidade';
}

export interface CartItem {
  product: Product;
  quantidade: number;
}

export type SortOption = 'nome' | 'preco';
export type CategoryFilter = 'todos' | 'fruta' | 'legume' | 'organico';

// Dados dos produtos (mock)
export const products: Product[] = [
  {
    id: 'prod-001',
    nome: 'Maçã',
    categoria: 'fruta',
    preco: 5.99,
    estoque: 50,
    imagem: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400',
    unidade: 'kg'
  },
  {
    id: 'prod-002',
    nome: 'Banana',
    categoria: 'fruta',
    preco: 3.99,
    estoque: 100,
    imagem: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400',
    unidade: 'kg'
  },
  {
    id: 'prod-003',
    nome: 'Laranja',
    categoria: 'fruta',
    preco: 4.50,
    estoque: 75,
    imagem: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400',
    unidade: 'kg'
  },
  {
    id: 'prod-004',
    nome: 'Tomate',
    categoria: 'legume',
    preco: 6.99,
    estoque: 40,
    imagem: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400',
    unidade: 'kg'
  },
  {
    id: 'prod-005',
    nome: 'Cenoura',
    categoria: 'legume',
    preco: 3.50,
    estoque: 60,
    imagem: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400',
    unidade: 'kg'
  },
  {
    id: 'prod-006',
    nome: 'Alface Orgânica',
    categoria: 'organico',
    preco: 4.99,
    estoque: 30,
    imagem: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400',
    unidade: 'unidade'
  },
  {
    id: 'prod-007',
    nome: 'Morango',
    categoria: 'fruta',
    preco: 12.99,
    estoque: 25,
    imagem: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400',
    unidade: 'kg'
  },
  {
    id: 'prod-008',
    nome: 'Abacate',
    categoria: 'fruta',
    preco: 8.99,
    estoque: 35,
    imagem: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400',
    unidade: 'kg'
  },
  {
    id: 'prod-009',
    nome: 'Batata',
    categoria: 'legume',
    preco: 4.99,
    estoque: 80,
    imagem: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400',
    unidade: 'kg'
  },
  {
    id: 'prod-010',
    nome: 'Brócolis Orgânico',
    categoria: 'organico',
    preco: 7.99,
    estoque: 20,
    imagem: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400',
    unidade: 'kg'
  },
  {
    id: 'prod-011',
    nome: 'Manga',
    categoria: 'fruta',
    preco: 6.50,
    estoque: 45,
    imagem: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400',
    unidade: 'kg'
  },
  {
    id: 'prod-012',
    nome: 'Cebola',
    categoria: 'legume',
    preco: 3.99,
    estoque: 70,
    imagem: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400',
    unidade: 'kg'
  },
  {
    id: 'prod-013',
    nome: 'Uva',
    categoria: 'fruta',
    preco: 9.99,
    estoque: 30,
    imagem: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400',
    unidade: 'kg'
  },
  {
    id: 'prod-014',
    nome: 'Pimentão',
    categoria: 'legume',
    preco: 7.50,
    estoque: 40,
    imagem: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400',
    unidade: 'kg'
  },
  {
    id: 'prod-015',
    nome: 'Rúcula Orgânica',
    categoria: 'organico',
    preco: 5.99,
    estoque: 25,
    imagem: 'https://images.unsplash.com/photo-1622205313162-be1d5712a43f?w=400',
    unidade: 'unidade'
  }
];
