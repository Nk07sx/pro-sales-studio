import { TrendingUp, DollarSign, Users, Star, Quote, Briefcase } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const proofs = [
  {
    name: "João Silva",
    role: "Designer Freelancer",
    revenue: "R$ 18.750",
    period: "no primeiro mês",
    rating: 5,
    testimonial: "Criei 3 SaaS para clientes sem programar nada. Antes eu recusava esses projetos, agora é minha principal fonte de renda.",
    projects: "3 SaaS entregues"
  },
  {
    name: "Maria Santos",
    role: "Agência Digital",
    revenue: "R$ 24.320",
    period: "em 2 meses",
    rating: 5,
    testimonial: "Economizei milhares em copywriters. Agora gero todas as copies da minha agência em minutos e meus clientes adoram.",
    projects: "47 copies criadas"
  },
  {
    name: "Carlos Mendes",
    role: "Advogado Empreendedor",
    revenue: "R$ 36.800",
    period: "em 90 dias",
    rating: 5,
    testimonial: "Lancei um SaaS de contratos jurídicos usando a InfinityIA. Já tenho 74 assinantes pagando mensalmente.",
    projects: "74 clientes recorrentes"
  },
  {
    name: "Ana Costa",
    role: "Criadora de Conteúdo",
    revenue: "R$ 21.400",
    period: "no primeiro mês",
    rating: 5,
    testimonial: "Vendo infoprodutos e a InfinityIA gera todas as páginas de venda. Minha conversão aumentou 340%.",
    projects: "8 páginas criadas"
  },
  {
    name: "Pedro Oliveira",
    role: "Consultor de Negócios",
    revenue: "R$ 32.500",
    period: "em 60 dias",
    rating: 5,
    testimonial: "Criei um SaaS para meus clientes de consultoria. Agora cobro uma mensalidade extra de R$ 497 por cliente.",
    projects: "15 clientes recorrentes"
  },
  {
    name: "Juliana Rocha",
    role: "E-commerce Owner",
    revenue: "R$ 28.900",
    period: "em 45 dias",
    rating: 5,
    testimonial: "Uso para criar descrições de produtos e contratos com fornecedores. Economizo 20h por semana e vendo 2x mais.",
    projects: "156 descrições geradas"
  }
];

export const SocialProof = () => {
  return (
    <section className="py-8 md:py-12 px-4 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-10 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Resultados <span className="text-primary">Reais</span> de Quem Está Usando
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mais de 2.847 pessoas já estão faturando com a InfinityIA
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {proofs.map((proof, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start gap-2 mb-4">
                      <Quote className="h-8 w-8 text-primary/30 shrink-0" />
                      <div className="flex gap-1">
                        {[...Array(proof.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-foreground/90 leading-relaxed mb-6 flex-grow italic">
                      "{proof.testimonial}"
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 group-hover:bg-primary/10 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-primary" />
                            <span className="text-sm text-muted-foreground">Faturamento</span>
                          </div>
                          <TrendingUp className="h-4 w-4 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-primary mb-1">{proof.revenue}</div>
                        <p className="text-xs text-muted-foreground">{proof.period}</p>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Users className="h-4 w-4 text-primary" />
                            <h3 className="font-semibold text-sm">{proof.name}</h3>
                          </div>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Briefcase className="h-3 w-3" />
                            {proof.role}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-medium text-primary">{proof.projects}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-primary/50 hover:bg-primary/10" />
          <CarouselNext className="hidden md:flex -right-12 border-primary/50 hover:bg-primary/10" />
        </Carousel>
        
          <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <TrendingUp className="h-4 w-4 text-primary" />
            <p className="text-sm text-foreground font-medium">
              +R$ 847 mil em faturamento gerado pelos nossos usuários
            </p>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            * Resultados individuais podem variar conforme dedicação e aplicação
          </p>
        </div>
      </div>
    </section>
  );
};
