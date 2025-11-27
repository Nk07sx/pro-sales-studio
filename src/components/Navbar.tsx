import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container max-w-7xl mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-poppins font-bold text-foreground">
            InfinityIA
          </h2>
          <Button 
            onClick={scrollToPricing}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 md:px-8 rounded-full"
          >
            Assinar Agora
          </Button>
        </div>
      </div>
    </nav>
  );
};
