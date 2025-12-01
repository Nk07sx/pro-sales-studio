import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import infinityiaLogo from "@/assets/infinityia-logo.png";

export const NewHero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Badge Usuários Online */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/30 bg-primary/10 animate-pulse shadow-glow">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Usuários online</span>
            <span className="text-primary font-bold">2.263</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-poppins font-bold leading-[1.1] sm:leading-tight">
            <span className="block text-primary">Transforme ideias em</span>
            <span className="block text-primary mt-1 sm:mt-2">
              SaaS inteligentes
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Conheça a InfinityIA e crie negócios digitais completos com o poder da IA.
          </p>

          <div className="mt-6 px-4">
            <img 
              src={infinityiaLogo} 
              alt="InfinityIA Logo" 
              className="mx-auto max-w-md w-full mb-6 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.5)] border-2 border-primary/30"
            />
            <Button 
              onClick={scrollToPricing}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full"
            >
              Assinar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
