
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fermer le menu mobile lors du changement de page
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="relative z-10 flex items-center"
        >
          <span className="text-2xl font-display font-semibold">
            Vita<span className="text-wellness-blue">Well</span>
          </span>
        </Link>

        {/* Menu de navigation pour desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-wellness-blue ${
              location.pathname === '/' ? 'text-wellness-blue' : 'text-foreground'
            }`}
          >
            Accueil
          </Link>
          <Link 
            to="/products" 
            className={`text-sm font-medium transition-colors hover:text-wellness-blue ${
              location.pathname.includes('/products') ? 'text-wellness-blue' : 'text-foreground'
            }`}
          >
            Produits
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors hover:text-wellness-blue ${
              location.pathname === '/about' ? 'text-wellness-blue' : 'text-foreground'
            }`}
          >
            À propos
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm font-medium transition-colors hover:text-wellness-blue ${
              location.pathname === '/contact' ? 'text-wellness-blue' : 'text-foreground'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Actions pour desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-wellness-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
        </div>

        {/* Bouton menu mobile */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 md:hidden animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors hover:text-wellness-blue ${
                  location.pathname === '/' ? 'text-wellness-blue' : 'text-foreground'
                }`}
              >
                Accueil
              </Link>
              <Link 
                to="/products" 
                className={`text-sm font-medium transition-colors hover:text-wellness-blue ${
                  location.pathname.includes('/products') ? 'text-wellness-blue' : 'text-foreground'
                }`}
              >
                Produits
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium transition-colors hover:text-wellness-blue ${
                  location.pathname === '/about' ? 'text-wellness-blue' : 'text-foreground'
                }`}
              >
                À propos
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm font-medium transition-colors hover:text-wellness-blue ${
                  location.pathname === '/contact' ? 'text-wellness-blue' : 'text-foreground'
                }`}
              >
                Contact
              </Link>
              <div className="flex items-center space-x-4 pt-2">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Link to="/cart">
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-wellness-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      0
                    </span>
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
