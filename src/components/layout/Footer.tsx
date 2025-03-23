
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-display font-semibold">
                Vita<span className="text-wellness-blue">Well</span>
              </span>
            </Link>
            <p className="text-slate-600 text-sm">
              Chez VitaWell, nous nous engageons à vous offrir des compléments alimentaires de haute qualité pour soutenir votre bien-être quotidien.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-500 hover:text-wellness-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-500 hover:text-wellness-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-500 hover:text-wellness-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@vitawell.tg" className="text-slate-500 hover:text-wellness-blue transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="font-semibold text-base mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-600 hover:text-wellness-blue text-sm transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-600 hover:text-wellness-blue text-sm transition-colors">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-wellness-blue text-sm transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-wellness-blue text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Catégories */}
          <div>
            <h3 className="font-semibold text-base mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=gestion-de-poids" className="text-slate-600 hover:text-wellness-blue text-sm transition-colors">
                  Gestion de poids
                </Link>
              </li>
              <li>
                <Link to="/products?category=antioxydants" className="text-slate-600 hover:text-wellness-blue text-sm transition-colors">
                  Antioxydants
                </Link>
              </li>
              <li>
                <Link to="/products?category=detox" className="text-slate-600 hover:text-wellness-blue text-sm transition-colors">
                  Détox
                </Link>
              </li>
              <li>
                <Link to="/products?category=beaute" className="text-slate-600 hover:text-wellness-blue text-sm transition-colors">
                  Beauté
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-600 hover:text-wellness-blue text-sm transition-colors">
                  Voir tout
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>VitaWell, Lomé, Togo</li>
              <li>Email: contact@vitawell.tg</li>
              <li>Tél: +228 00 00 00 00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} VitaWell. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
