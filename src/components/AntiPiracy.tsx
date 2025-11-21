import { ShieldAlert, Lock, CheckCircle2 } from "lucide-react";

export const AntiPiracy = () => {
  return (
    <section className="py-8 md:py-12 px-4 border-t border-border/50">
      <div className="container max-w-3xl mx-auto">
        <div className="bg-card border border-destructive/20 rounded-xl p-6 md:p-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
              <ShieldAlert className="h-7 w-7 md:h-8 md:w-8 text-destructive" />
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Pirataria é <span className="text-destructive">Crime</span>
            </h2>
            
            <p className="text-sm md:text-base text-muted-foreground mb-5 max-w-xl">
              Produto protegido contra pirataria. Somos a única plataforma oficial autorizada.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="flex flex-col items-center gap-2 p-3 bg-secondary/30 rounded-lg">
                <Lock className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-sm">Protegido</h3>
              </div>
              
              <div className="flex flex-col items-center gap-2 p-3 bg-secondary/30 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-sm">Autenticado</h3>
              </div>
              
              <div className="flex flex-col items-center gap-2 p-3 bg-secondary/30 rounded-lg">
                <ShieldAlert className="h-6 w-6 text-destructive" />
                <h3 className="font-semibold text-sm">Crime Federal</h3>
              </div>
            </div>
            
            <div className="mt-5 p-3 bg-destructive/5 border border-destructive/20 rounded-lg">
              <p className="text-xs md:text-sm text-muted-foreground">
                ⚠️ Adquira apenas através do site oficial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
