import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  icon: React.ReactNode;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
  discount?: string;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    icon: <Sparkles className="w-6 h-6" />,
    price: "R$ 87",
    period: "/mês",
    description: "Perfeito para começar",
    features: [
      "InfinitCopy",
      "InfinitCraft básico",
      "Contrato básico",
      "Mini treinamento",
      "Templates modeláveis"
    ],
    color: "blue",
    discount: "40% OFF"
  },
  {
    name: "Pro",
    icon: <Zap className="w-6 h-6" />,
    price: "R$ 247",
    period: "/semestre",
    description: "Mais completo",
    features: [
      "Tudo do Starter",
      "Geração ilimitada",
      "Prompt avançado",
      "Copy avançada",
      "Contrato profissional",
      "Modelos premium",
      "Atualizações mensais"
    ],
    popular: true,
    color: "amber",
    discount: "50% OFF"
  },
  {
    name: "Vitalício",
    icon: <Crown className="w-6 h-6" />,
    price: "R$ 497",
    period: "",
    description: "Acesso para sempre",
    features: [
      "Tudo do Pro",
      "Acesso vitalício",
      "Call de Mentoria",
      "Atualizações perpétuas",
      "Prioridade novos módulos",
      "IA desenvolvedora Saas"
    ],
    color: "purple",
    discount: "67% OFF"
  }
];

export const NewPricing = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <div className="font-handwritten text-xl text-primary rotate-[-1deg]">
            Planos Simples
          </div>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold font-handwritten rotate-[-1deg]">
              Transforme Suas Ideias em SaaS
              <div className="absolute -right-12 top-0 text-amber-500 rotate-12">
                ✨
              </div>
              <div className="absolute -left-8 bottom-0 text-primary -rotate-12">
                ⭐️
              </div>
            </h2>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-44 h-3 bg-primary/20 rotate-[-1deg] rounded-full blur-sm" />
          </div>
          <p className="font-handwritten text-xl text-muted-foreground rotate-[-1deg]">
            Crie, gerencie e escale em minutos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={cn(
                "relative group",
                "transition-all duration-300",
                index === 0 && "rotate-[-1deg]",
                index === 1 && "rotate-[1deg]",
                index === 2 && "rotate-[-2deg]"
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-background",
                  "border-2 border-foreground",
                  "rounded-lg shadow-[4px_4px_0px_0px] shadow-foreground",
                  "transition-all duration-300",
                  "group-hover:shadow-[8px_8px_0px_0px]",
                  "group-hover:translate-x-[-4px]",
                  "group-hover:translate-y-[-4px]"
                )}
              />

              <div className="relative p-6">
                {tier.popular && (
                  <div className="absolute -top-2 -right-2 bg-amber-400 text-black font-handwritten px-3 py-1 rounded-full rotate-12 text-sm border-2 border-foreground">
                    Popular!
                  </div>
                )}

                {tier.discount && (
                  <div className="absolute -top-2 -left-2 bg-green-500 text-white font-handwritten px-3 py-1 rounded-full -rotate-12 text-sm border-2 border-foreground">
                    {tier.discount}
                  </div>
                )}

                <div className="mb-6">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full mb-4",
                      "flex items-center justify-center",
                      "border-2 border-foreground",
                      "bg-primary/10 text-primary"
                    )}
                  >
                    {tier.icon}
                  </div>
                  <h3 className="font-handwritten text-2xl mb-2">
                    {tier.name}
                  </h3>
                  <p className="font-handwritten text-muted-foreground">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-6 font-handwritten">
                  <span className="text-4xl font-bold">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground">
                    {tier.period}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full border-2 border-foreground flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-handwritten text-lg">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className={cn(
                    "w-full h-12 font-handwritten text-lg relative",
                    "border-2 border-foreground",
                    "transition-all duration-300",
                    "shadow-[4px_4px_0px_0px] shadow-foreground",
                    "hover:shadow-[6px_6px_0px_0px]",
                    "hover:translate-x-[-2px] hover:translate-y-[-2px]",
                    tier.popular
                      ? "bg-amber-400 text-black hover:bg-amber-300"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  Começar Agora
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-20 text-4xl rotate-12 opacity-20">
            ✎
          </div>
          <div className="absolute bottom-40 right-20 text-4xl -rotate-12 opacity-20">
            ✏️
          </div>
        </div>
      </div>
    </section>
  );
};
