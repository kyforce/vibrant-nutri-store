
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer votre adresse e-mail.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simuler l'envoi
    setTimeout(() => {
      toast({
        title: "Inscription réussie",
        description: "Vous êtes maintenant inscrit à notre newsletter.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-wellness-blue text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
              <Mail className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
              Restez informé
            </h2>
            <p className="text-blue-50 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités, promotions exclusives et conseils de bien-être.
            </p>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Input
              type="email"
              placeholder="Votre adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-blue-100 focus-visible:ring-white"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-white text-wellness-blue hover:bg-white/90"
            >
              {isSubmitting ? (
                "Inscription..."
              ) : (
                <>
                  S'inscrire <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </motion.form>
          
          <motion.p 
            className="text-blue-100 text-sm text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Nous respectons votre vie privée. Vous pouvez vous désinscrire à tout moment.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
