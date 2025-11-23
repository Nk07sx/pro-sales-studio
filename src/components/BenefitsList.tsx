import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import infinityCopyImg from "@/assets/benefit-infinity-copy.jpg";
import infinityCraftImg from "@/assets/benefit-infinity-craft.jpg";
import contratoIaImg from "@/assets/benefit-contrato-ia.jpg";
import dashboardImg from "@/assets/dashboard-admin.png";
import templatesImg from "@/assets/templates-example.png";

const benefits = [
  {
    title: "InfinityCopy",
    description: "Gerador de conteúdo ilimitado para marketing, vendas e comunicação do seu negócio",
    image: infinityCopyImg,
  },
  {
    title: "InfinityCraft",
    description: "Plataforma completa para criar e personalizar suas próprias soluções de IA",
    image: infinityCraftImg,
  },
  {
    title: "ContratoIA",
    description: "Sistema inteligente para geração, análise e gestão automatizada de contratos",
    image: contratoIaImg,
  },
  {
    title: "Dashboard Administrativo",
    description: "Painel completo com métricas, relatórios e controle total sobre suas operações",
    image: dashboardImg,
  },
  {
    title: "Templates Modeláveis",
    description: "Diversos modelos de sites e sistemas prontos para personalizar conforme sua necessidade",
    image: templatesImg,
  },
];

export const BenefitsList = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="py-8 md:py-10 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8">
          Tudo Que Você Vai Ter <span className="text-primary">Acesso</span>
        </h2>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6">
            {benefits.map((benefit, index) => {
              return (
                <div 
                  key={index}
                  className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
                >
                  <div className="group bg-card border border-border rounded-xl overflow-hidden h-full shadow-lg hover:shadow-glow hover:border-primary/50 hover:scale-105 transition-all duration-300">
                    {/* Image container */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                      <img 
                        src={benefit.image} 
                        alt={benefit.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    </div>
                    
                    {/* Text content */}
                    <div className="p-6 flex flex-col items-center text-center gap-3">
                      <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-6">
          Deslize para ver mais →
        </p>
      </div>
    </section>
  );
};
