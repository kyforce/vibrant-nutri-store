
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-white -z-10" />
      
      {/* Cercles décoratifs */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-slate-100 -z-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-slate-100 -z-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-slate-100 -z-10" />
      
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-tight mb-6">
            <span className="block">Naturellement </span>
            <span className="text-wellness-blue">en meilleure santé</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            Découvrez nos compléments alimentaires naturels et de haute qualité, conçus pour soutenir votre bien-être et améliorer votre qualité de vie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="text-base rounded-full px-8">
              <Link to="/products">
                Découvrir les produits <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base rounded-full px-8">
              <Link to="/about">
                En savoir plus
              </Link>
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative h-[500px] w-[500px]">
            {/* Image principale */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <img 
                src="/lovable-uploads/e95561f9-bdcc-4f0b-9796-2660731865f0.png" 
                alt="Supplément VitaWell" 
                className="w-48 h-auto"
              />
            </motion.div>
            
            {/* Images secondaires animées */}
            <motion.div 
              className="absolute top-[20%] left-[15%] z-10"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
            >
              <img 
                src="/lovable-uploads/77c4c104-a7e9-45ba-8f2a-9566b856cbd8.png" 
                alt="Supplément VitaWell" 
                className="w-32 h-auto"
              />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-[20%] right-[15%] z-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
            >
              <img 
                src="/lovable-uploads/5df8120e-d773-4909-92bb-c5ef048b3a26.png" 
                alt="Supplément VitaWell" 
                className="w-32 h-auto"
              />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-[10%] left-[25%] z-10"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1.5 }}
            >
              <img 
                src="/lovable-uploads/70fac2c0-9078-4a2a-bc12-22d24e65cd91.png" 
                alt="Supplément VitaWell" 
                className="w-28 h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Décoration en bas de la section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent -z-10" />
    </section>
  );
};

export default Hero;
