import { useRef, useState } from "react";

const modules = [
  {
    number: "01",
    title: "Fundamentos da IA",
    description: "Aprenda os conceitos básicos e como começar com Inteligência Artificial",
    image: "" // Espaço para imagem da capa
  },
  {
    number: "02",
    title: "Prompts Avançados",
    description: "Domine a arte de criar prompts eficazes e obtenha resultados incríveis",
    image: "" // Espaço para imagem da capa
  },
  {
    number: "03",
    title: "Automação com IA",
    description: "Automatize tarefas repetitivas e ganhe tempo no seu dia a dia",
    image: "" // Espaço para imagem da capa
  },
  {
    number: "04",
    title: "IA para Negócios",
    description: "Aplique IA para escalar seu negócio e aumentar resultados",
    image: "" // Espaço para imagem da capa
  },
  {
    number: "05",
    title: "Ferramentas IA",
    description: "Conheça as melhores ferramentas do mercado e como usá-las",
    image: "" // Espaço para imagem da capa
  },
  {
    number: "06",
    title: "Criação de Conteúdo",
    description: "Crie conteúdo de alta qualidade com ajuda da IA",
    image: "" // Espaço para imagem da capa
  },
  {
    number: "07",
    title: "IA Generativa",
    description: "Explore o poder da IA para gerar imagens, vídeos e mais",
    image: "" // Espaço para imagem da capa
  },
  {
    number: "08",
    title: "Casos Práticos",
    description: "Projetos reais para aplicar todo seu conhecimento",
    image: "" // Espaço para imagem da capa
  }
];

export const TrainingModules = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          O Que Você Vai Aprender
        </h2>
        <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
          Um treinamento completo e estruturado para dominar IA
        </p>
      </div>
      
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`flex gap-6 py-8 px-4 ${!isDragging ? 'animate-scroll-left' : ''}`}>
            {[...modules, ...modules].map((module, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[320px] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-[320px] h-[480px] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  {module.image ? (
                    <img src={module.image} alt={module.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center p-6">
                      <div className="text-7xl font-bold text-primary/30 mb-2">#{module.number}</div>
                      <div className="text-lg font-semibold text-muted-foreground">{module.title}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
