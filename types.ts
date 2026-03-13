
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'chips' | 'granola';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: number;
  quote: string;
  author: string;
  product: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
