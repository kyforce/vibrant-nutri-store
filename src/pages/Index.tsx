
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Benefits from '@/components/home/Benefits';
import Newsletter from '@/components/home/Newsletter';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        
        {/* Séparateur avec citation */}
        <motion.section 
          className="py-20 px-4 bg-white text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-display font-medium text-gray-800 leading-relaxed">
              "Que ton aliment soit ta seule médecine."
              <footer className="mt-4 text-lg text-gray-500">— Hippocrate</footer>
            </blockquote>
          </div>
        </motion.section>
        
        <Benefits />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
