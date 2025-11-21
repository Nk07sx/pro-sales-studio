import { Code2, Megaphone, FileText, Rocket, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const audiences = [
  {
    icon: Code2,
    title: "Quer criar SaaS sem programar",
    description: "Transforme suas ideias em aplicativos funcionais sem escrever uma linha de código"
  },
  {
    icon: Megaphone,
    title: "Quer vender sem saber copy",
    description: "Gere textos persuasivos e profissionais para qualquer produto ou serviço"
  },
  {
    icon: FileText,
    title: "Quer fechar contratos profissionais",
    description: "Crie contratos completos e juridicamente sólidos em minutos"
  },
  {
    icon: Rocket,
    title: "Iniciantes que querem começar rápido",
    description: "Comece seu negócio digital hoje mesmo, sem conhecimento técnico prévio"
  },
  {
    icon: Users,
    title: "Freelancers, agências e empreendedores",
    description: "Escale seus serviços e entregue mais projetos com menos tempo"
  }
];

export const TargetAudience = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Público Alvo</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Para Quem É a InfinityIA
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seja qual for seu objetivo, a InfinityIA foi feita para você
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-xl hover:border-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-[2px] bg-gradient-to-br from-primary/40 via-accent/40 to-primary/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                
                <CardContent className="relative p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {audience.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
