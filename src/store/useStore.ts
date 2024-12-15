import { create } from 'zustand';
import { Message, User, Product } from '../types';
import { mockProducts } from '../data/mockProducts';

interface Store {
  messages: Message[];
  user: User | null;
  products: Product[];
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  setUser: (user: User | null) => void;
  clearChat: () => void;
  searchProducts: (query: string) => Product[];
}

export const useStore = create<Store>((set, get) => ({
  messages: [],
  user: null,
  products: mockProducts,
  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...message,
          id: Math.random().toString(36).substring(7),
          timestamp: new Date(),
        },
      ],
    })),
  setUser: (user) => set({ user }),
  clearChat: () => set({ messages: [] }),
  searchProducts: (query) => {
    const products = get().products;
    const lowercaseQuery = query.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery) ||
        product.category.toLowerCase().includes(lowercaseQuery)
    );
  },
}));