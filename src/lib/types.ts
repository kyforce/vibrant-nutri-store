
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  color: 'blue' | 'red' | 'green' | 'black' | 'orange' | 'brown' | 'pink' | 'purple';
  benefits: string[];
  ingredients?: string[];
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
