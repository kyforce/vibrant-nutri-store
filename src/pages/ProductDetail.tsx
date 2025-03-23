
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { formatPrice, products } from '@/lib/data';
import AddToCartButton from '@/components/ui/AddToCartButton';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(products.find(p => p.id === id));
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Simulate product loading
    setLoading(true);
    setTimeout(() => {
      const foundProduct = products.find(p => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  // Suggestions de produits similaires
  const similarProducts = products
    .filter(p => p.id !== id && p.category === product?.category)
    .slice(0, 3);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-wellness-blue border-t-transparent rounded-full animate-spin"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 pt-24 pb-16 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-medium mb-4">Produit non trouvé</h1>
          <p className="text-slate-600 mb-6">Désolé, le produit que vous recherchez n'existe pas.</p>
          <Button asChild>
            <Link to="/products">Voir tous les produits</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              size="sm" 
              className="mb-4"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="flex justify-center items-center bg-white rounded-xl p-8 shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-60 h-60">
                <div className={`absolute top-0 left-0 right-0 h-1 ${colorClasses[product.color]}`} />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-medium mb-4">{formatPrice(product.price)}</p>
              <p className="text-slate-600 mb-6">{product.description}</p>
              
              <div className="mb-8">
                <h3 className="font-medium mb-3">Bienfaits :</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-wellness-blue shrink-0 mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center rounded-md border">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="rounded-r-none"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <div className="w-12 text-center py-2">{quantity}</div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="rounded-l-none"
                    onClick={() => handleQuantityChange(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                
                <div className="flex-1">
                  <AddToCartButton product={product} quantity={quantity} fullWidth />
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Produits similaires */}
          {similarProducts.length > 0 && (
            <motion.div 
              className="mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-display font-semibold mb-8">Produits similaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarProducts.map((prod, index) => (
                  <ProductCard 
                    key={prod.id} 
                    product={prod}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// ProductCard pour cette page
const ProductCard = ({ product, index }: { product: any, index: number }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-sm product-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="p-4">
          <div className="aspect-square flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-24 h-auto object-contain"
            />
          </div>
          <div className="text-center mt-2">
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-slate-600 mt-1">{formatPrice(product.price)}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductDetail;
