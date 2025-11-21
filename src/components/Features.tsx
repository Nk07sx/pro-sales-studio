import { Zap, Shield, TrendingUp, Users, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Automação Inteligente",
    description: "Automatize tarefas repetitivas e economize até 20 horas por semana com nossa IA avançada"
  },
  {
    icon: TrendingUp,
    title: "Análises em Tempo Real",
    description: "Dashboards completos com métricas que realmente importam para seu negócio crescer"
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Criptografia de ponta e conformidade com LGPD para proteger seus dados"
  },
  {
    icon: Users,
    title: "Colaboração em Equipe",
    description: "Trabalhe em conjunto com toda sua equipe de forma integrada e eficiente"
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Equipe de especialistas disponível sempre que você precisar, em português"
  },
  {
    icon: Award,
    title: "Resultados Garantidos",
    description: "Mais de 5.000 empresas já aumentaram seus resultados em média 300%"
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tudo que Você Precisa em
            <span className="block text-primary mt-2">Uma Única Plataforma</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Funcionalidades poderosas que se adaptam ao seu negócio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-gradient-card border border-border hover:shadow-elegant transition-all hover:-translate-y-1 group"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
