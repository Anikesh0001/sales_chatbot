export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
}

export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  sender: 'user' | 'bot';
  products?: Product[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  isAuthenticated: boolean;
}