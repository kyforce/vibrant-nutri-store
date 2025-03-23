
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Leaf, Sparkles, Heart, Award, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: "Ingrédients naturels",
    description: "Nos produits sont fabriqués avec des ingrédients naturels de la plus haute qualité pour préserver votre santé."
  },
  {
    icon: Shield,
    title: "Qualité garantie",
    description: "Chaque produit est testé rigoureusement pour garantir l'efficacité et la sécurité que vous méritez."
  },
  {
    icon: Sparkles,
    title: "Formules avancées",
    description: "Nos formules sont développées par des experts pour offrir des résultats optimaux et durables."
  },
  {
    icon: Heart,
    title: "Bien-être global",
    description: "Nous nous engageons à soutenir tous les aspects de votre santé pour un bien-être complet."
  },
  {
    icon: Award,
    title: "Standards élevés",
    description: "Nos produits respectent les normes internationales en matière de qualité et de sécurité."
  },
  {
    icon: CheckCircle,
    title: "Satisfaction client",
    description: "Votre satisfaction est notre priorité, c'est pourquoi nous nous efforçons de dépasser vos attentes."
  }
];

const Benefits = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Pourquoi choisir <span className="text-wellness-blue">VitaWell</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Découvrez ce qui distingue nos compléments alimentaires et notre engagement envers votre santé et votre bien-être.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-wellness-blue/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-wellness-blue" />
              </div>
              <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
