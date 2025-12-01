import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { redirectWithParams } from "@/lib/url-utils";

const plans = [
  {
    name: "Starter",
    price: "R$ 57",
    oldPrice: "R$ 97",
    period: "/mês",
    description: "Perfeito para começar",
    checkoutUrl: "https://go.perfectpay.com.br/PPU38CQ43IF",
    features: [
      "InfinitCopy",
      "InfinitCraft básico",
      "Contrato básico",
      "Mini treinamento",
      "Templates modeláveis",
      "IA desenvolvedora de Saas/site"
    ],
    cta: "Começar Agora",
    highlighted: false,
    badgeText: "",
    discount: "",
    isWhite: true
  },
  {
    name: "Pro",
    price: "R$ 247",
    oldPrice: "R$ 497",
    period: "/semestre",
    description: "Mais completo",
    checkoutUrl: "https://go.perfectpay.com.br/PPU38CQ43IR",
    features: [
      "Tudo do Starter",
      "Geração ilimitada",
      "Prompt avançado",
      "Copy avançada",
      "Contrato profissional",
      "Modelos premium",
      "Atualizações mensais",
      "IA desenvolvedora de Saas/site"
    ],
    cta: "Começar Agora",
    highlighted: true,
    badgeText: "Mais Popular",
    discount: "40% OFF",
    isWhite: false
  },
  {
    name: "Vitalício",
    price: "R$ 497",
    oldPrice: "R$ 997",
    period: "",
    description: "Acesso para sempre",
    checkoutUrl: "https://go.perfectpay.com.br/PPU38CQ43J2",
    features: [
      "Tudo do Pro",
      "Acesso vitalício",
      "Call de Mentoria",
      "Atualizações perpétuas",
      "Prioridade de novos módulos",
      "IA desenvolvedora de Saas/site"
    ],
    cta: "Acessar Para Sempre",
    highlighted: true,
    badgeText: "Mais Vendido",
    discount: "67% OFF",
    isWhite: false
  }
];

export const NewPricing = () => {
  return (
    <section id="pricing" className="py-8 md:py-12 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-4">
            Escolha Seu Plano
          </h2>
          <p className="text-lg text-muted-foreground">
            Selecione o plano ideal para o seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.highlighted ? 'border-primary shadow-glow scale-105' : ''} ${plan.isWhite ? 'bg-white dark:bg-white text-black' : ''}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  {plan.badgeText}
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className={`text-2xl font-poppins ${plan.isWhite ? 'text-black' : ''}`}>{plan.name}</CardTitle>
                <CardDescription className={plan.isWhite ? 'text-gray-600' : ''}>{plan.description}</CardDescription>
                <div className="mt-4">
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <span className={`text-lg line-through ${plan.isWhite ? 'text-gray-500' : 'text-muted-foreground'}`}>{plan.oldPrice}</span>
                    {plan.discount && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                        {plan.discount}
                      </span>
                    )}
                  </div>
                  <div>
                    <span className={`text-4xl font-bold ${plan.isWhite ? 'text-black' : 'text-primary'}`}>{plan.price}</span>
                    <span className={plan.isWhite ? 'text-gray-600' : 'text-muted-foreground'}>{plan.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <Check className={`h-5 w-5 flex-shrink-0 ${plan.isWhite ? 'text-black' : 'text-primary'}`} />
                      <span className={`text-sm ${plan.isWhite ? 'text-black' : ''}`}>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full mt-6" 
                  variant="default"
                  size="lg"
                  onClick={() => redirectWithParams(plan.checkoutUrl)}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
