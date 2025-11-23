import { Shield, Zap, Lock, Sparkles } from "lucide-react";

export const Guarantee = () => {
  return (
    <section className="py-8 md:py-10 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-3">
            Garantia de 7 Dias
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experimente sem riscos. Se não ficar satisfeito, devolvemos 100% do seu investimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
          <div className="text-center">
            <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Sem Risco</h3>
            <p className="text-sm text-muted-foreground">100% seguro e garantido</p>
          </div>
          
          <div className="text-center">
            <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Uso Imediato</h3>
            <p className="text-sm text-muted-foreground">Acesso instantâneo após o pagamento</p>
          </div>
          
          <div className="text-center">
            <Sparkles className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Zero Conhecimento Técnico</h3>
            <p className="text-sm text-muted-foreground">Não precisa saber nada de código</p>
          </div>
        </div>
      </div>
    </section>
  );
};
