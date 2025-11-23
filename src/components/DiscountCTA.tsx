import { Zap, Tag, Clock } from "lucide-react";
import { Button } from "./ui/button";

export const DiscountCTA = () => {
  const handleCopyCode = () => {
    navigator.clipboard.writeText("20OFF");
  };

  return (
    <section className="py-6 md:py-8 px-4 bg-primary/5">
      <div className="container max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl md:rounded-2xl p-6 md:p-10 shadow-xl text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-white/5 rounded-full -mr-16 md:-mr-24 -mt-16 md:-mt-24" />
          <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full -ml-12 md:-ml-16 -mb-12 md:-mb-16" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
              <Zap className="h-6 w-6 md:h-8 md:w-8" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Oferta Especial</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-3 md:mb-4">
              20% OFF no Plano Vitalício
            </h2>
            
            <p className="text-base md:text-lg text-center mb-6 md:mb-8 text-primary-foreground/90 px-2">
              Garanta acesso vitalício com desconto exclusivo
            </p>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 mb-6 md:mb-8 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
                <div className="flex items-center gap-3">
                  <Tag className="h-5 w-5 md:h-6 md:w-6" />
                  <div>
                    <p className="text-xs md:text-sm text-primary-foreground/80">Código do Cupom</p>
                    <p className="text-xl md:text-2xl font-bold tracking-wider">20OFF</p>
                  </div>
                </div>
                <Button 
                  onClick={handleCopyCode}
                  variant="secondary"
                  className="whitespace-nowrap text-sm md:text-base w-full sm:w-auto"
                  size="sm"
                >
                  Copiar Código
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-primary-foreground/90 mb-4 md:mb-6">
              <Clock className="h-4 w-4 md:h-5 md:w-5" />
              <p className="text-xs md:text-sm">Oferta por tempo limitado</p>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto font-bold w-full sm:w-auto"
              >
                Garantir Meu Desconto Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
