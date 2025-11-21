import { Play } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const NewVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-8 md:py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-glow aspect-video bg-card border border-border group cursor-pointer"
             onClick={() => setIsPlaying(true)}>
          {!isPlaying ? (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="bg-background/90 backdrop-blur-sm p-8 rounded-full shadow-glow group-hover:scale-110 transition-transform">
                <Play className="h-16 w-16 text-primary" fill="currentColor" />
              </div>
            </div>
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
        
        <div className="flex justify-center mt-8">
          <Button size="lg" className="text-lg px-8 py-6 h-auto">
            Começar Agora
          </Button>
        </div>
      </div>
    </section>
  );
};
