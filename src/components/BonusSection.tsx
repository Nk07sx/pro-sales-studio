import { Gift, Sparkles, Zap, Crown, FileText, Rocket, Brain, Star } from "lucide-react";

const bonuses = [
  {
    title: "Templates de SaaS Prontos",
    description: "Templates completos e profissionais prontos para adaptar para empresas e começar a vender hoje mesmo",
    value: "R$ 997",
    icon: Rocket,
    color: "from-violet-500 to-purple-600"
  },
  {
    title: "Dashboard de Projetos e Lucros",
    description: "Sistema completo para acompanhar todos os seus projetos, clientes e lucros em tempo real",
    value: "R$ 697",
    icon: Brain,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Treinamento Acelerador",
    description: "Aulas gravadas ensinando desde a construção do seu site até o primeiro fechamento de projeto",
    value: "R$ 897",
    icon: Sparkles,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Suporte Prioritário",
    description: "Acesso vitalício ao suporte prioritário com atendimento rápido e exclusivo",
    value: "R$ 497",
    icon: Crown,
    color: "from-amber-500 to-yellow-600"
  },
];

export const BonusSection = () => {
  return (
    <section className="py-10 md:py-16 px-4 relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Efeitos de fundo animados */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <Gift className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Ganhe R$ 3.088 em Bônus</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Bônus <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Exclusivos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mais de <span className="text-primary font-bold">R$ 3.000</span> em conteúdos e ferramentas que você recebe <span className="text-primary font-bold">GRÁTIS</span> hoje
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  perspective: "1000px"
                }}
              >
                {/* Card com efeito 3D */}
                <div className="relative h-full transition-all duration-500 preserve-3d group-hover:rotate-y-6 group-hover:scale-105">
                  {/* Badge de valor */}
                  <div className="absolute -top-3 -right-3 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-75 animate-pulse" />
                      <div className="relative px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-full">
                        <Star className="h-4 w-4 text-white absolute -top-1 -left-1 animate-spin" style={{ animationDuration: "3s" }} />
                        <p className="text-white font-bold text-sm whitespace-nowrap">{bonus.value}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card principal */}
                  <div className="relative h-full bg-card/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-6 overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                    {/* Gradiente animado de fundo */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${bonus.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Brilho rotativo */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    
                    {/* Conteúdo */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Ícone com animação */}
                      <div className="mb-4">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${bonus.color} p-0.5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                          <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                            <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>

                      {/* Título */}
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {bonus.title}
                      </h3>

                      {/* Descrição */}
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                        {bonus.description}
                      </p>

                      {/* Indicador visual */}
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2 text-xs text-primary font-medium">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          <span>Incluído no seu plano</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA adicional */}
        <div className="mt-10 md:mt-12 text-center animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="inline-block p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-2xl">
            <p className="text-2xl font-bold mb-2">
              Valor Total: <span className="line-through text-muted-foreground">R$ 3.088</span>
            </p>
            <p className="text-3xl font-bold text-primary mb-1">
              Seu Investimento: A partir de R$ 87
            </p>
            <p className="text-sm text-muted-foreground">
              Todos os bônus liberados imediatamente após a compra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
