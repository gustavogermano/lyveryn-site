import { Monitor, Utensils, MessageCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/common/AnimatedReveal";

const highlights = [
  {
    icon: Monitor,
    title: "Sites Institucionais",
    description: "Sua marca com presença profissional e moderna.",
  },
  {
    icon: Utensils,
    title: "Cardápios Digitais",
    description: "Praticidade para o cliente e mais vendas para o seu negócio.",
  },
  {
    icon: MessageCircle,
    title: "Integração com WhatsApp",
    description: "Pedidos diretos, rápidos e sem complicação.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="bg-white py-24">
      <Container className="grid gap-16 lg:grid-cols-2 lg:items-start">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Sobre a Lyveryn"
            title="Sites e cardápios digitais para"
            highlight="negócios reais."
            description="A Lyveryn é uma empresa de tecnologia especializada no desenvolvimento de sites institucionais e cardápios digitais, com foco em performance, simplicidade e experiência do usuário."
          />
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-secondary/60 sm:text-base">
            Acreditamos que um bom site não é apenas uma vitrine, mas uma
            ferramenta de crescimento. Por isso, criamos soluções que unem
            design, funcionalidade e estratégia, ajudando empresas a se
            destacarem no digital.
          </p>

          <div className="mt-8 flex items-center gap-4 rounded-2xl bg-primary/10 p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-secondary">
              <ArrowRight size={18} />
            </span>
            <p className="text-sm font-medium text-secondary">
              Do seu primeiro site ao seu próximo{" "}
              <span className="font-bold">pedido</span>, a Lyveryn está com
              você.
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid gap-6">
          {highlights.map((item, index) => (
            <AnimatedReveal key={item.title} delay={index * 0.1} direction="right">
              <div className="flex items-start gap-5 rounded-2xl border border-secondary/5 p-6 transition-colors hover:border-primary/40 hover:bg-primary/5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <item.icon size={22} />
                </span>
                <div>
                  <h3 className="font-semibold text-secondary">{item.title}</h3>
                  <p className="mt-1 text-sm text-secondary/60">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
