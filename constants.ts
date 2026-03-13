
import { Product, Review } from './types';

export const COLORS = {
  primary: '#FF7518', // Abeni Orange
  secondary: '#2E7D32', // Vibrant Forest Green
};

export const PRODUCTS: Product[] = [
  {
    id: 'pc-650',
    name: 'Ripe Plantain Chips (650ml)',
    description: 'Our signature ripe plantain chips in a convenient 650ml container. Thin, sweet, and perfectly golden.',
    price: 6500,
    image: 'https://i.ibb.co/fGM1PTgb/5882108439914286419-120.jpg',
    category: 'chips'
  },
  {
    id: 'pc-1000',
    name: 'Ripe Plantain Chips Jar (1000ml)',
    description: 'The ultimate snack experience. Our premium 1L jar filled with hand-picked ripe plantain chips. Stays fresh and crunchy.',
    price: 8000,
    image: 'https://i.ibb.co/fGM1PTgb/5882108439914286419-120.jpg',
    category: 'chips'
  }
];

export const REVIEWS: Review[] = [
  { id: 1, quote: "The 1000ml jar is perfect. I love the clear packaging, you can see how golden and fresh the chips are!", author: "Chizaram", product: "Plantain Chips" },
  { id: 2, quote: "Best ripe plantain chips in Enugu. The sweetness is just right.", author: "Jane", product: "Plantain Chips" },
  { id: 3, quote: "Love the packaging! The yellow lid is iconic and the chips stay crunchy for weeks.", author: "Goodhope", product: "Plantain Chips" },
  { id: 4, quote: "Premium quality through and through. Worth every naira.", author: "Jeff", product: "Plantain Chips" },
  { id: 5, quote: "My kids finish the 650ml jar in one sitting. It's that good!", author: "Peter", product: "Plantain Chips" },
  { id: 6, quote: "Authentic taste. No artificial aftertaste. Just pure plantain goodness.", author: "Mezie", product: "Plantain Chips" }
];

export const CONTACT_INFO = {
  phone: '+234 813 538 1409',
  location: 'Trans-Ekulu, Enugu, Nigeria',
  whatsappNumber: '2348135381409'
};
