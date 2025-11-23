import { Button } from "@/components/ui/button";

export const NewHero = () => {
  return (
    <section className="relative min-h-[30vh] flex items-center justify-center pt-24 md:pt-28 pb-6 md:pb-8">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-poppins font-bold leading-[1.1] sm:leading-tight">
            <span className="block">Crie SaaS, Copies</span>
            <span className="block">e Contratos</span>
            <span className="block text-primary mt-1 sm:mt-2">
              em Minutos
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Só responda algumas perguntas. O resto a InfinityIA faz por você.
          </p>
        </div>
      </div>
    </section>
  );
};
