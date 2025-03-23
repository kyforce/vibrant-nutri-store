
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Check } from 'lucide-react';
import { Product } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  fullWidth?: boolean;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ 
  product, 
  quantity = 1,
  fullWidth = false
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    setIsAdding(true);

    // Simuler l'ajout au panier
    setTimeout(() => {
      toast({
        title: "Produit ajouté",
        description: `${product.name} a été ajouté à votre panier.`,
      });
      setIsAdding(false);
    }, 600);
  };

  return (
    <Button 
      onClick={handleAddToCart}
      disabled={isAdding}
      className={`relative overflow-hidden transition-all ${fullWidth ? 'w-full' : ''}`}
      variant="default"
    >
      {isAdding ? (
        <span className="flex items-center">
          <Check className="h-4 w-4 mr-2" />
          Ajouté
        </span>
      ) : (
        <span className="flex items-center">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Ajouter au panier
        </span>
      )}
    </Button>
  );
};

export default AddToCartButton;
