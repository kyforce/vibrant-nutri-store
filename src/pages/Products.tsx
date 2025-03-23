
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { products, categories } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Get category from URL
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      filterProducts(categoryParam);
    } else {
      setFilteredProducts(products);
    }
  }, [searchParams]);

  const filterProducts = (category: string | null) => {
    if (!category) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        product => product.category.toLowerCase().replace(/\s+/g, '-') === category
      );
      setFilteredProducts(filtered);
    }
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    
    if (category) {
      setSearchParams({ category: category.toLowerCase().replace(/\s+/g, '-') });
    } else {
      setSearchParams({});
    }
    
    filterProducts(category);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              Nos Produits
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explorez notre gamme complète de compléments alimentaires de haute qualité, conçus pour soutenir votre santé et améliorer votre bien-être.
            </p>
          </motion.div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-medium">Filtrer par catégorie</h2>
              <Button 
                variant="ghost" 
                size="sm"
                className="md:hidden flex items-center"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtres
              </Button>
            </div>
            
            <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant={!selectedCategory ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => handleCategoryChange(null)}
                >
                  Tous
                </Button>
                
                {categories.map((category, index) => (
                  <Button 
                    key={index}
                    variant={selectedCategory === category.toLowerCase().replace(/\s+/g, '-') ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => handleCategoryChange(category.toLowerCase().replace(/\s+/g, '-'))}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">Aucun produit trouvé dans cette catégorie.</p>
              <Button 
                onClick={() => handleCategoryChange(null)}
                variant="link"
                className="mt-4"
              >
                Voir tous les produits
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
