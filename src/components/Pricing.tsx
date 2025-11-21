import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "97",
    description: "Para começar e testar o poder da plataforma",
    features: [
      "Até 1.000 usuários mensais",
      "5 GB de armazenamento",
      "Suporte por email",
      "Relatórios básicos",
      "Integrações essenciais"
    ],
    cta: "Começar Grátis",
    popular: false
  },
  {
    name: "Professional",
    price: "297",
    description: "Para empresas em crescimento acelerado",
    features: [
      "Até 10.000 usuários mensais",
      "50 GB de armazenamento",
      "Suporte prioritário 24/7",
      "Análises avançadas e IA",
      "Todas as integrações",
      "Automações ilimitadas",
      "API completa",
      "Treinamento personalizado"
    ],
    cta: "Começar Agora",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Solução sob medida para grandes operações",
    features: [
      "Usuários ilimitados",
      "Armazenamento ilimitado",
      "Gerente de conta dedicado",
      "SLA garantido 99.9%",
      "Integrações customizadas",
      "Onboarding completo",
      "Consultoria estratégica",
      "Segurança enterprise"
    ],
    cta: "Falar com Vendas",
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Planos Transparentes
            <span className="block text-primary mt-2">Sem Letras Miúdas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            14 dias de teste grátis. Cancele quando quiser. Sem pegadinhas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl border-2 transition-all hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-primary shadow-glow bg-gradient-card' 
                  : 'border-border bg-card hover:shadow-elegant'
              }`}
            >
              {plan.popular && (
                <div className="inline-block px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-4">
                  Mais Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold">
                  {plan.price === "Custom" ? "" : "R$ "}
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-muted-foreground">/mês</span>
                )}
              </div>
              
              <Button 
                size="lg" 
                className={`w-full mb-8 ${plan.popular ? 'shadow-glow' : ''}`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
              
              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Todas as transações são seguras e criptografadas
          </p>
          <div className="flex justify-center gap-6 flex-wrap opacity-60">
            <span>💳 Cartão de Crédito</span>
            <span>🏦 Boleto</span>
            <span>💰 PIX</span>
            <span>🔒 SSL Seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
};
