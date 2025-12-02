import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { redirectWithParams } from "@/lib/url-utils";

export const CTA = () => {
  return (
    <section className="py-10 md:py-16 px-4 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6 animate-pulse">
          <Sparkles className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight">
          Comece Agora e Gere Seu <span className="text-primary">Primeiro SaaS</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Não perca mais tempo. Transforme suas ideias em realidade em minutos.
        </p>
        <Button 
          size="lg" 
          className="text-xl px-12 py-8 h-auto shadow-glow hover:scale-105 transition-transform"
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Começar Agora
        </Button>
      </div>
    </section>
  );
};
