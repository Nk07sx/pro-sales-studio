import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso saber programar?",
    answer: "Não! A InfinityIA foi criada justamente para quem não sabe programar. Você só responde algumas perguntas e a IA faz todo o trabalho técnico por você."
  },
  {
    question: "Funciona pra qualquer nicho?",
    answer: "Sim! A ferramenta é versátil e funciona para qualquer tipo de negócio ou nicho. Seja você coach, consultor, agência ou infoprodutor, a InfinityIA se adapta às suas necessidades."
  },
  {
    question: "Posso criar quantos SaaS quiser?",
    answer: "Depende do seu plano. No Starter você tem limite de prompts mensais. No Pro e Vitalício você tem geração ilimitada e pode criar quantos SaaS precisar."
  },
  {
    question: "Tem suporte?",
    answer: "Sim! Todos os planos incluem suporte. O plano Starter tem suporte por email, enquanto Pro e Vitalício contam com suporte prioritário."
  },
  {
    question: "Como funciona o treinamento?",
    answer: "Cada plano inclui treinamento específico. O Starter vem com mini treinamento básico, enquanto planos superiores têm acesso a treinamentos mais completos e avançados."
  }
];

export const FAQ = () => {
  return (
    <section className="py-8 md:py-12 px-4 bg-muted/20">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-center mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-10">
          Tire suas dúvidas sobre a InfinityIA
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
