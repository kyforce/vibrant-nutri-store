
import { Product } from './types';

export const products: Product[] = [
  {
    id: "trimtone-enhancer",
    name: "Trimtone Enhancer",
    description: "Supplément de gestion du poids qui peut aider à accélérer le métabolisme et contrôler les niveaux de sucre dans le sang.",
    price: 22000,
    image: "/lovable-uploads/77c4c104-a7e9-45ba-8f2a-9566b856cbd8.png",
    category: "Gestion de poids",
    color: "blue",
    benefits: [
      "Peut aider à augmenter la combustion des graisses",
      "Peut aider à maintenir les niveaux de sucre",
      "Soutien à la gestion du poids"
    ],
    featured: true
  },
  {
    id: "resveratrol",
    name: "Resveratrol",
    description: "Antioxydant puissant qui favorise la longévité et soutient la santé cardiovasculaire.",
    price: 23000,
    image: "/lovable-uploads/5df8120e-d773-4909-92bb-c5ef048b3a26.png",
    category: "Antioxydants",
    color: "red",
    benefits: [
      "Super antioxydant",
      "Favorise l'anti-âge et la longévité",
      "Soutient la santé cardiovasculaire"
    ],
    featured: true
  },
  {
    id: "colon-detox",
    name: "Colon Detox",
    description: "Formule détoxifiante avec probiotiques pour soutenir la digestion et favoriser une meilleure absorption des nutriments.",
    price: 21000,
    image: "/lovable-uploads/70fac2c0-9078-4a2a-bc12-22d24e65cd91.png",
    category: "Détox",
    color: "green",
    benefits: [
      "Aide à une meilleure absorption des nutriments",
      "Laxatif naturel à base de plantes",
      "Formule avec probiotiques"
    ]
  },
  {
    id: "andro-t",
    name: "Andro-T",
    description: "Booster naturel de testostérone qui aide à augmenter la libido et à améliorer l'énergie et la vitalité.",
    price: 24000,
    image: "/lovable-uploads/8e4e4891-b417-42b7-b584-5c8fe52bca60.png",
    category: "Santé Masculine",
    color: "black",
    benefits: [
      "Aide à stimuler la libido et à supercharger la stamina",
      "Aide à augmenter l'énergie et la vitalité",
      "Booster naturel de testostérone"
    ],
    featured: true
  },
  {
    id: "liver-care",
    name: "Liver Care",
    description: "Supplément pour soutenir la fonction hépatique et renforcer les défenses antioxydantes du foie.",
    price: 19000,
    image: "/lovable-uploads/07564336-8949-4a15-badf-73ec975cfe9f.png",
    category: "Détox",
    color: "orange",
    benefits: [
      "Soutient le processus de détoxification",
      "Aide à renforcer la défense antioxydante",
      "Soutient la santé globale"
    ]
  },
  {
    id: "muscle-bone-care",
    name: "Muscle-Bone Care",
    description: "Formule avec calcium, magnésium et zinc pour soutenir la fonction musculaire et nerveuse et des os solides.",
    price: 18000,
    image: "/lovable-uploads/54a52565-c62f-4bf4-aaf5-3f977c116805.png",
    category: "Santé Osseuse",
    color: "brown",
    benefits: [
      "Soutient la fonction nerveuse et musculaire",
      "Soutient des os et des dents solides",
      "Calcium, magnésium et zinc"
    ]
  },
  {
    id: "hair-skin-nails",
    name: "Hair, Skin + Nails",
    description: "Formule avec 22 ingrédients clés pour favoriser une peau saine, des cheveux plus épais et des ongles plus forts.",
    price: 22000,
    image: "/lovable-uploads/e95561f9-bdcc-4f0b-9796-2660731865f0.png",
    category: "Beauté",
    color: "pink",
    benefits: [
      "Soutient une peau plus saine",
      "Favorise des cheveux plus épais",
      "Soutient des ongles plus forts"
    ],
    featured: true
  },
  {
    id: "super-omega-3",
    name: "Super Omega-3",
    description: "Supplément d'oméga-3 pour soutenir la santé cardiaque et cérébrale et promouvoir la santé circulatoire.",
    price: 25000,
    image: "/lovable-uploads/547b3945-0e45-44cc-ba35-ed6f465fd70c.png",
    category: "Santé Cardiaque",
    color: "red",
    benefits: [
      "Favorise la santé cardiaque et cérébrale",
      "Soutient la santé circulatoire",
      "Favorise le bien-être général"
    ]
  },
  {
    id: "super-focus",
    name: "Super Focus",
    description: "Formule pour soutenir la concentration, la mémoire et favoriser une humeur positive avec des nootropiques.",
    price: 28000,
    image: "/lovable-uploads/d16b4213-f43e-45d2-bf76-16f181164c70.png",
    category: "Santé Cognitive",
    color: "purple",
    benefits: [
      "Soutient la concentration et la mémoire",
      "Favorise une humeur positive",
      "Peut aider à augmenter la concentration"
    ],
    featured: true
  }
];

export const formatPrice = (price: number): string => {
  return `${(price / 1000).toLocaleString()} FCFA`;
};

export const categories = Array.from(new Set(products.map(product => product.category)));
