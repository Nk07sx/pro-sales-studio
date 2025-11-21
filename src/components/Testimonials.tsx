import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "CEO, TechStart",
    image: "https://i.pravatar.cc/150?img=1",
    content: "Aumentamos nossa produtividade em 250% no primeiro mês. A plataforma é simplesmente incrível e o suporte é excepcional!",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Diretor de Marketing, GrowthCo",
    image: "https://i.pravatar.cc/150?img=3",
    content: "ROI positivo em menos de 2 semanas. Melhor investimento que fizemos este ano. Recomendo para qualquer empresa que quer crescer.",
    rating: 5
  },
  {
    name: "Ana Paula",
    role: "Fundadora, Digital Hub",
    image: "https://i.pravatar.cc/150?img=5",
    content: "Ferramentas poderosas com interface intuitiva. Conseguimos implementar em poucos dias e os resultados foram imediatos.",
    rating: 5
  },
  {
    name: "Carlos Mendes",
    role: "CTO, InnovaTech",
    image: "https://i.pravatar.cc/150?img=7",
    content: "A automação inteligente economizou mais de 30 horas por semana da nossa equipe. Agora focamos no que realmente importa.",
    rating: 5
  },
  {
    name: "Beatriz Costa",
    role: "Gerente de Projetos, FastScale",
    image: "https://i.pravatar.cc/150?img=9",
    content: "Integração perfeita com todas as nossas ferramentas. A equipe de suporte é extremamente competente e sempre disponível.",
    rating: 5
  },
  {
    name: "Ricardo Lima",
    role: "Diretor Comercial, SalesBoost",
    image: "https://i.pravatar.cc/150?img=8",
    content: "Triplicamos nossas conversões em 60 dias. Os dashboards são claros e as análises nos dão insights valiosos diariamente.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Mais de 5.000 Empresas
            <span className="block text-primary mt-2">Confiam em Nossa Solução</span>
          </h2>
          <div className="flex justify-center items-center gap-2 text-xl">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span className="text-muted-foreground">(2.847 avaliações)</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">5.000+</div>
            <p className="text-muted-foreground">Empresas ativas</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground">Satisfação</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">Suporte</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">300%</div>
            <p className="text-muted-foreground">ROI médio</p>
          </div>
        </div>
      </div>
    </section>
  );
};
