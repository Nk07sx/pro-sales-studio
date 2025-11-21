import { Play } from "lucide-react";
import { useState } from "react";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Veja Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground">
            Em apenas 3 minutos, descubra como transformar seu negócio
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-video bg-muted group cursor-pointer"
             onClick={() => setIsPlaying(true)}>
          {!isPlaying ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="bg-background/90 backdrop-blur-sm p-8 rounded-full shadow-glow group-hover:scale-110 transition-transform">
                  <Play className="h-16 w-16 text-primary" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/80 to-transparent">
                <p className="text-xl font-semibold">Assista agora e descubra o poder da plataforma</p>
              </div>
            </>
          ) : (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Video de demonstração"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">10x</div>
            <p className="text-muted-foreground">Mais produtividade</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">-70%</div>
            <p className="text-muted-foreground">Redução de custos</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">5 min</div>
            <p className="text-muted-foreground">Para implementar</p>
          </div>
        </div>
      </div>
    </section>
  );
};
