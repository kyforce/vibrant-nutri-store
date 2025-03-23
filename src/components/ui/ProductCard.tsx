
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/data';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  product: Product;
  index: number;
  featured?: boolean;
}

const colorClasses = {
  blue: 'bg-wellness-blue',
  red: 'bg-wellness-red',
  green: 'bg-wellness-green',
  black: 'bg-wellness-black',
  orange: 'bg-wellness-orange',
  brown: 'bg-wellness-brown',
  pink: 'bg-wellness-pink',
  purple: 'bg-wellness-purple',
};

const ProductCard: React.FC<ProductCardProps> = ({ product, index, featured }) => {
  return (
    <motion.div 
      className={`group bg-white rounded-xl overflow-hidden shadow-sm product-card ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden pt-8 px-6 pb-4">
          <div className={`absolute top-0 left-0 right-0 h-1 ${colorClasses[product.color]}`} />
          
          <div className="flex justify-center">
            <div className="relative w-40 h-40 transition-transform duration-300 group-hover:scale-105">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium text-gray-900 truncate">{product.name}</h3>
            <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
            <p className="mt-2 text-lg font-semibold">{formatPrice(product.price)}</p>
          </div>
        </div>
      </Link>
      
      <div className="px-6 pb-6">
        <AddToCartButton product={product} />
      </div>
    </motion.div>
  );
};

export default ProductCard;
