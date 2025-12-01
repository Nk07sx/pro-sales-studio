import { Building2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import manicure1 from "@/assets/manicure-1.png";
import manicure2 from "@/assets/manicure-2.png";
import manicure3 from "@/assets/manicure-3.png";
import manicure4 from "@/assets/manicure-4.png";
import manicure5 from "@/assets/manicure-5.png";
import manicure6 from "@/assets/manicure-6.png";
import barber1 from "@/assets/barber-1.png";
import barber2 from "@/assets/barber-2.png";
import barber3 from "@/assets/barber-3.png";
import barber4 from "@/assets/barber-4.png";
import crm1 from "@/assets/crm-1.png";
import crm2 from "@/assets/crm-2.png";
import crm3 from "@/assets/crm-3.png";
import crm4 from "@/assets/crm-4.png";
import crm5 from "@/assets/crm-5.png";

const projects = [
  {
    name: "Sistema de Agendamento para Salão de Beleza",
    company: "Salão Julia Soares",
    description: "Plataforma completa com agendamento online, gestão de serviços, controle de profissionais e área de contato",
    images: [
      manicure1,
      manicure2,
      manicure3,
      manicure4,
      manicure5,
      manicure6,
    ],
    videoId: "kkldT895UG4",
    price: "R$ 1.497",
  },
  {
    name: "Sistema de Agendamento para Barbearia",
    company: "New Barber",
    description: "Plataforma completa de agendamento online com gestão de serviços, profissionais e pagamentos",
    images: [
      barber1,
      barber2,
      barber3,
      barber4,
    ],
    videoId: "3qESTj_Rr4w",
    price: "R$ 1.800",
  },
  {
    name: "Sistema de Gestão para Escritório de Advocacia",
    company: "BM Firma Advocacia",
    description: "Plataforma completa de gestão com controle de processos, clientes, financeiro e análises",
    images: [
      crm1,
      crm2,
      crm3,
      crm4,
      crm5,
    ],
    videoId: "-vb7_bE_pvE",
    price: "R$ 2.200",
  },
];

export const ProjectExamples = () => {
  return (
    <section className="py-8 md:py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-10 font-poppins">
          SaaS Vendidos Para <span className="text-primary">Grandes Empresas</span>
        </h2>
        
        <div className="space-y-6 md:space-y-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary transition-all hover:shadow-glow"
            >
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-2 font-poppins">{project.name}</h3>
                  <p className="text-primary text-sm md:text-base font-semibold mb-2 md:mb-2">{project.company}</p>
                  <p className="text-base md:text-lg text-muted-foreground">{project.description}</p>
                </div>
              </div>
              
              {/* Carousel de Imagens */}
              <div className="mb-6 md:mb-8 px-0 md:px-12">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${project.name} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1.5 rounded-lg shadow-lg text-sm">
                            <span className="font-medium">Vendido por </span>
                            <span className="font-bold">{project.price}</span>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 md:left-0" />
                  <CarouselNext className="right-2 md:right-0" />
                </Carousel>
              </div>
              
              {/* Vídeo */}
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${project.videoId}`}
                  title={`Demonstração ${project.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
